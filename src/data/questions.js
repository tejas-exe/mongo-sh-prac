const questions = [
  {
    id: 'q1',
    title: 'High-Power German Petrol Cars',
    category: 'Basic Match & Project',
    difficulty: 'Easy',
    question: 'Find all petrol supercars manufactured in "Germany" that have engine power greater than or equal to 500 hp. Return only the brand, model, year, country of manufacture, and horsepower.',
    hint: 'Use `$match` stage for filtering nested fields `basicInfo.countryOfManufacture`, `engine.fuelSystem.fuelType` (or `engine.type`), and `engine.power.value`. Then use `$project` stage.',
    referencePipeline: [
      {
        $match: {
          'basicInfo.countryOfManufacture': 'Germany',
          'engine.type': 'Petrol',
          'engine.power.value': { $gte: 500 }
        }
      },
      {
        $project: {
          _id: 0,
          brand: '$basicInfo.brand',
          model: '$basicInfo.model',
          year: '$basicInfo.year',
          country: '$basicInfo.countryOfManufacture',
          horsepower: '$engine.power.value'
        }
      },
      { $sort: { horsepower: -1 } }
    ]
  },
  {
    id: 'q2',
    title: 'Brand Analytics & Price Metrics',
    category: 'Grouping & Statistics',
    difficulty: 'Medium',
    question: 'Group all supercars by brand (`basicInfo.brand`). Calculate total count of cars, average ex-showroom price, maximum top speed, and average horsepower for each brand. Sort by total car count descending.',
    hint: 'Use `$group` with `_id: "$basicInfo.brand"`, `$sum: 1`, `$avg: "$pricing.exShowroom"`, `$max: "$performance.topSpeed.value"`, `$avg: "$engine.power.value"`. Then `$sort`.',
    referencePipeline: [
      {
        $group: {
          _id: '$basicInfo.brand',
          totalCars: { $sum: 1 },
          avgExShowroomPrice: { $avg: '$pricing.exShowroom' },
          maxTopSpeed: { $max: '$performance.topSpeed.value' },
          avgHorsepower: { $avg: '$engine.power.value' }
        }
      },
      {
        $project: {
          brand: '$_id',
          _id: 0,
          totalCars: 1,
          avgExShowroomPrice: { $round: ['$avgExShowroomPrice', 2] },
          maxTopSpeed: 1,
          avgHorsepower: { $round: ['$avgHorsepower', 2] }
        }
      },
      { $sort: { totalCars: -1, maxTopSpeed: -1 } }
    ]
  },
  {
    id: 'q3',
    title: 'Top 5 Most Popular Features',
    category: 'Array Unwinding',
    difficulty: 'Medium',
    question: 'Unwind the `features` array of all supercars, count how many supercars offer each feature, and return the top 5 most popular features sorted by count descending.',
    hint: 'Use `$unwind: "$features"`, then `$group` by feature name with `$sum: 1`, sort descending, and `$limit: 5`.',
    referencePipeline: [
      { $unwind: '$features' },
      {
        $group: {
          _id: '$features',
          carCount: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          feature: '$_id',
          carCount: 1
        }
      },
      { $sort: { carCount: -1, feature: 1 } },
      { $limit: 5 }
    ]
  },
  {
    id: 'q4',
    title: 'Power-to-Weight Ratio Calculation',
    category: 'Derived Fields & Math',
    difficulty: 'Medium',
    question: 'Calculate the power-to-weight ratio in hp per metric ton for each car: `(engine.power.value / dimensions.curbWeight.value) * 1000`. Project brand, model, curb weight, power, and powerToWeightRatio rounded to 2 decimal places. Sort by powerToWeightRatio descending.',
    hint: 'Use `$addFields` or `$project` with `$multiply`, `$divide`, `$round`.',
    referencePipeline: [
      {
        $project: {
          _id: 0,
          brand: '$basicInfo.brand',
          model: '$basicInfo.model',
          curbWeightKg: '$dimensions.curbWeight.value',
          powerHp: '$engine.power.value',
          powerToWeightRatio: {
            $round: [
              {
                $multiply: [
                  { $divide: ['$engine.power.value', '$dimensions.curbWeight.value'] },
                  1000
                ]
              },
              2
            ]
          }
        }
      },
      { $sort: { powerToWeightRatio: -1 } }
    ]
  },
  {
    id: 'q5',
    title: 'Rating Tier Bucketing',
    category: 'Bucketing & Facets',
    difficulty: 'Hard',
    question: 'Categorize supercars into rating tiers based on `ratings.overall`: "God Tier" (>= 4.8), "High Tier" (4.5 to 4.79), and "Standard Tier" (< 4.5). Count total cars and list car models in each tier.',
    hint: 'Use `$bucket` or `$switch` / `$cond` inside `$group`.',
    referencePipeline: [
      {
        $bucket: {
          groupBy: '$ratings.overall',
          boundaries: [0, 4.5, 4.8, 5.1],
          default: 'Other',
          output: {
            totalCars: { $sum: 1 },
            models: { $push: { $concat: ['$basicInfo.brand', ' ', '$basicInfo.model'] } },
            avgRating: { $avg: '$ratings.overall' }
          }
        }
      },
      {
        $project: {
          _id: 0,
          tierRange: '$_id',
          totalCars: 1,
          models: 1,
          avgRating: { $round: ['$avgRating', 2] }
        }
      },
      { $sort: { tierRange: -1 } }
    ]
  },
  {
    id: 'q6',
    title: 'Service History Cost Breakdown',
    category: 'Array Operations & Nested Aggregation',
    difficulty: 'Hard',
    question: 'Unwind `ownership.serviceHistory`. Calculate the total maintenance cost spent per brand across all recorded service entries. Return brand name, number of service records, total cost in INR, and list of replaced parts.',
    hint: 'Use `$unwind: "$ownership.serviceHistory"`, then group by `$basicInfo.brand` using `$sum` for cost and `$addToSet` / `$push` for replaced parts.',
    referencePipeline: [
      { $unwind: '$ownership.serviceHistory' },
      {
        $group: {
          _id: '$basicInfo.brand',
          serviceCount: { $sum: 1 },
          totalServiceCostINR: { $sum: '$ownership.serviceHistory.cost' },
          replacedPartsList: { $addToSet: '$ownership.serviceHistory.replacedParts' }
        }
      },
      {
        $project: {
          _id: 0,
          brand: '$_id',
          serviceCount: 1,
          totalServiceCostINR: 1,
          replacedParts: {
            $reduce: {
              input: '$replacedPartsList',
              initialValue: [],
              in: { $setUnion: ['$$value', '$$this'] }
            }
          }
        }
      },
      { $sort: { totalServiceCostINR: -1 } }
    ]
  },
  {
    id: 'q7',
    title: 'Multi-Facet Executive Supercar Summary',
    category: 'Multi-Facet Analytics',
    difficulty: 'Expert',
    question: 'Execute a multi-faceted summary in a single query using `$facet`: \n1) `topFastest`: Top 3 cars with highest top speed. \n2) `cheapestPerBodyType`: Average price per body type. \n3) `countryStats`: Car count per country of manufacture.',
    hint: 'Use `$facet` with 3 pipelines: `topFastest`, `cheapestPerBodyType`, `countryStats`.',
    referencePipeline: [
      {
        $facet: {
          topFastest: [
            { $sort: { 'performance.topSpeed.value': -1 } },
            { $limit: 3 },
            {
              $project: {
                _id: 0,
                car: { $concat: ['$basicInfo.brand', ' ', '$basicInfo.model'] },
                topSpeed: '$performance.topSpeed.value'
              }
            }
          ],
          cheapestPerBodyType: [
            {
              $group: {
                _id: '$basicInfo.bodyType',
                avgPriceINR: { $avg: '$pricing.exShowroom' },
                carCount: { $sum: 1 }
              }
            },
            {
              $project: {
                _id: 0,
                bodyType: '$_id',
                avgPriceINR: { $round: ['$avgPriceINR', 0] },
                carCount: 1
              }
            }
          ],
          countryStats: [
            {
              $group: {
                _id: '$basicInfo.countryOfManufacture',
                totalSupercars: { $sum: 1 }
              }
            },
            {
              $project: { _id: 0, country: '$_id', totalSupercars: 1 }
            },
            { $sort: { totalSupercars: -1 } }
          ]
        }
      }
    ]
  },
  {
    id: 'q8',
    title: 'Filtering Variants Above 7,000,000 INR',
    category: 'Array Filtering & Projections',
    difficulty: 'Medium',
    question: 'For each supercar that has variants, filter the `pricing.variants` array to include only variants priced above 7,000,000 INR (70 Lakhs). Exclude cars with no matching variants.',
    hint: 'Use `$project` with `$filter` operator on `pricing.variants` array, then `$match` where the filtered array size is > 0.',
    referencePipeline: [
      {
        $project: {
          _id: 0,
          brand: '$basicInfo.brand',
          model: '$basicInfo.model',
          highEndVariants: {
            $filter: {
              input: '$pricing.variants',
              as: 'variant',
              cond: { $gte: ['$$variant.price', 7000000] }
            }
          }
        }
      },
      {
        $match: {
          $expr: { $gt: [{ $size: '$highEndVariants' }, 0] }
        }
      },
      { $sort: { brand: 1, model: 1 } }
    ]
  },
  {
    id: 'q9',
    title: 'Color Type Distribution by Country',
    category: 'Array Unwinding & Grouping',
    difficulty: 'Hard',
    question: 'Unwind `availableColors`. Group by `countryOfManufacture` and color `type` (Metallic, Solid, Special, Pearl, Matte) to count available color choices per manufacture region.',
    hint: 'Use `$unwind: "$availableColors"`, then group by `{ country: "$basicInfo.countryOfManufacture", colorType: "$availableColors.type" }`.',
    referencePipeline: [
      { $unwind: '$availableColors' },
      {
        $group: {
          _id: {
            country: '$basicInfo.countryOfManufacture',
            type: '$availableColors.type'
          },
          colorOptionCount: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          country: '$_id.country',
          colorType: '$_id.type',
          colorOptionCount: 1
        }
      },
      { $sort: { country: 1, colorOptionCount: -1 } }
    ]
  },
  {
    id: 'q10',
    title: 'Safety Matrix - Airbags vs Drive Assistance',
    category: 'Complex Conditionals',
    difficulty: 'Easy',
    question: 'Find supercars with 6 or more total airbags (`safety.airbags.total` >= 6). Return brand, model, total airbags, and boolean flags for `adaptiveCruiseControl` and `laneKeepAssist`.',
    hint: 'Use `$match` on `safety.airbags.total` >= 6 and project necessary fields.',
    referencePipeline: [
      {
        $match: {
          'safety.airbags.total': { $gte: 6 }
        }
      },
      {
        $project: {
          _id: 0,
          brand: '$basicInfo.brand',
          model: '$basicInfo.model',
          totalAirbags: '$safety.airbags.total',
          adaptiveCruiseControl: '$safety.driverAssistance.adaptiveCruiseControl',
          laneKeepAssist: '$safety.driverAssistance.laneKeepAssist'
        }
      },
      { $sort: { totalAirbags: -1, brand: 1 } }
    ]
  },
  {
    id: 'q11',
    title: 'Sub-3.0 Second Acceleration Supercars',
    category: 'Basic Match & Sort',
    difficulty: 'Easy',
    question: 'Find all supercars that accelerate 0 to 100 km/h in strictly under 3.0 seconds. Return brand, model, 0-100 acceleration value, top speed, and drive type (`engine.drivetrain`). Sort by acceleration ascending (fastest first).',
    hint: 'Use `$match` on `performance.acceleration.zeroToHundred.value` < 3.0, project fields, and sort ascending.',
    referencePipeline: [
      {
        $match: {
          'performance.acceleration.zeroToHundred.value': { $lt: 3.0 }
        }
      },
      {
        $project: {
          _id: 0,
          brand: '$basicInfo.brand',
          model: '$basicInfo.model',
          zeroToHundredSec: '$performance.acceleration.zeroToHundred.value',
          topSpeedKmH: '$performance.topSpeed.value',
          drivetrain: '$engine.drivetrain'
        }
      },
      { $sort: { zeroToHundredSec: 1 } }
    ]
  },
  {
    id: 'q12',
    title: 'Fuel Economy vs Performance Comparison',
    category: 'Derived Fields & Math',
    difficulty: 'Medium',
    question: 'Calculate an efficiency-to-power score for each car: `(fuel.mileage.combined.value * engine.power.value) / 100`. Return brand, model, combined mileage, horsepower, and calculated score rounded to 2 decimals.',
    hint: 'Use `$project` with `$multiply`, `$divide`, and `$round`.',
    referencePipeline: [
      {
        $project: {
          _id: 0,
          brand: '$basicInfo.brand',
          model: '$basicInfo.model',
          combinedMileage: '$fuel.mileage.combined.value',
          horsepower: '$engine.power.value',
          efficiencyScore: {
            $round: [
              {
                $divide: [
                  { $multiply: ['$fuel.mileage.combined.value', '$engine.power.value'] },
                  100
                ]
              },
              2
            ]
          }
        }
      },
      { $sort: { efficiencyScore: -1 } }
    ]
  }
];

module.exports = questions;
