const SuperCar = require('../models/SuperCar');
const seedCarsData = require('../data/seedCars');

// @desc    Get all cars with search, filter, sort & pagination
// @route   GET /api/cars
exports.getAllCars = async (req, res) => {
  try {
    const {
      brand,
      year,
      bodyType,
      fuelType,
      minPrice,
      maxPrice,
      search,
      sortBy = 'createdAt',
      order = 'desc',
      page = 1,
      limit = 10
    } = req.query;

    const query = {};

    if (brand) {
      query['basicInfo.brand'] = new RegExp(brand, 'i');
    }
    if (year) {
      query['basicInfo.year'] = Number(year);
    }
    if (bodyType) {
      query['basicInfo.bodyType'] = new RegExp(bodyType, 'i');
    }
    if (fuelType) {
      query['engine.type'] = new RegExp(fuelType, 'i');
    }
    if (minPrice || maxPrice) {
      query['pricing.exShowroom'] = {};
      if (minPrice) query['pricing.exShowroom'].$gte = Number(minPrice);
      if (maxPrice) query['pricing.exShowroom'].$lte = Number(maxPrice);
    }
    if (search) {
      query.$or = [
        { 'basicInfo.brand': new RegExp(search, 'i') },
        { 'basicInfo.model': new RegExp(search, 'i') },
        { 'basicInfo.countryOfManufacture': new RegExp(search, 'i') },
        { 'features': new RegExp(search, 'i') },
        { 'metadata.tags': new RegExp(search, 'i') }
      ];
    }

    const sortOptions = {};
    const sortFieldMap = {
      brand: 'basicInfo.brand',
      model: 'basicInfo.model',
      year: 'basicInfo.year',
      price: 'pricing.exShowroom',
      power: 'engine.power.value',
      topSpeed: 'performance.topSpeed.value',
      createdAt: 'createdAt'
    };

    const actualSortField = sortFieldMap[sortBy] || sortBy;
    sortOptions[actualSortField] = order === 'asc' ? 1 : -1;

    const pageNum = parseInt(page, 10) || 1;
    const limitNum = parseInt(limit, 10) || 10;
    const skip = (pageNum - 1) * limitNum;

    const cars = await SuperCar.find(query)
      .sort(sortOptions)
      .skip(skip)
      .limit(limitNum);

    const totalCars = await SuperCar.countDocuments(query);

    return res.status(200).json({
      success: true,
      count: cars.length,
      total: totalCars,
      page: pageNum,
      totalPages: Math.ceil(totalCars / limitNum),
      data: cars
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch supercar records',
      error: error.message
    });
  }
};

// @desc    Get single car by ID
// @route   GET /api/cars/:id
exports.getCarById = async (req, res) => {
  try {
    const car = await SuperCar.findById(req.params.id);
    if (!car) {
      return res.status(404).json({
        success: false,
        message: `Supercar document with ID ${req.params.id} not found`
      });
    }
    return res.status(200).json({
      success: true,
      data: car
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve car record',
      error: error.message
    });
  }
};

// @desc    Create a new car document
// @route   POST /api/cars
exports.createCar = async (req, res) => {
  try {
    const carData = req.body;
    
    // Set metadata timestamp if not present
    if (!carData.metadata) {
      carData.metadata = {};
    }
    const now = new Date().toISOString();
    carData.metadata.createdAt = carData.metadata.createdAt || now;
    carData.metadata.updatedAt = now;

    const newCar = await SuperCar.create(carData);
    return res.status(201).json({
      success: true,
      message: 'Supercar document created successfully!',
      data: newCar
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Failed to create supercar document',
      error: error.message
    });
  }
};

// @desc    Update supercar document by ID
// @route   PUT /api/cars/:id
exports.updateCar = async (req, res) => {
  try {
    const carData = req.body;
    if (!carData.metadata) carData.metadata = {};
    carData.metadata.updatedAt = new Date().toISOString();

    const updatedCar = await SuperCar.findByIdAndUpdate(req.params.id, carData, {
      new: true,
      runValidators: true
    });

    if (!updatedCar) {
      return res.status(404).json({
        success: false,
        message: `Supercar document with ID ${req.params.id} not found`
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Supercar document updated successfully!',
      data: updatedCar
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Failed to update supercar document',
      error: error.message
    });
  }
};

// @desc    Delete supercar document by ID
// @route   DELETE /api/cars/:id
exports.deleteCar = async (req, res) => {
  try {
    const deletedCar = await SuperCar.findByIdAndDelete(req.params.id);
    if (!deletedCar) {
      return res.status(404).json({
        success: false,
        message: `Supercar document with ID ${req.params.id} not found`
      });
    }
    return res.status(200).json({
      success: true,
      message: 'Supercar document deleted successfully!',
      data: { id: req.params.id }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to delete supercar document',
      error: error.message
    });
  }
};

// @desc    Seed sample supercar dataset into MongoDB
// @route   POST /api/cars/seed
exports.seedCars = async (req, res) => {
  try {
    await SuperCar.deleteMany({});
    const createdCars = await SuperCar.insertMany(seedCarsData);
    return res.status(200).json({
      success: true,
      message: `Database successfully seeded with ${createdCars.length} supercar documents!`,
      count: createdCars.length
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to seed database',
      error: error.message
    });
  }
};
