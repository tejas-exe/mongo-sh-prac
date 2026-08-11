const SuperCar = require('../models/SuperCar');

// @desc    Execute custom MongoDB aggregation pipeline
// @route   POST /api/aggregate/custom
exports.executeCustomAggregation = async (req, res) => {
  try {
    let { pipeline } = req.body;

    if (!pipeline) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid "pipeline" array in request body.'
      });
    }

    // Parse JSON string if user sent stringified JSON
    if (typeof pipeline === 'string') {
      try {
        pipeline = JSON.parse(pipeline);
      } catch (err) {
        return res.status(400).json({
          success: false,
          message: 'Invalid JSON string provided in pipeline parameter.',
          error: err.message
        });
      }
    }

    if (!Array.isArray(pipeline)) {
      return res.status(400).json({
        success: false,
        message: 'Aggregation pipeline must be an array of pipeline stages.'
      });
    }

    const startTime = Date.now();
    const result = await SuperCar.aggregate(pipeline);
    const executionTimeMs = Date.now() - startTime;

    return res.status(200).json({
      success: true,
      executionTimeMs,
      resultCount: result.length,
      pipeline,
      data: result
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Aggregation Pipeline Execution Error',
      error: error.message
    });
  }
};
