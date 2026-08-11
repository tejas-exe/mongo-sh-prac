const SuperCar = require('../models/SuperCar');
const questions = require('../data/questions');

// Helper function to deep compare JSON output arrays
const compareOutputs = (userResult, expectedResult) => {
  if (!Array.isArray(userResult) || !Array.isArray(expectedResult)) {
    return {
      isCorrect: false,
      feedback: 'Result is not an array of document results.'
    };
  }

  if (userResult.length !== expectedResult.length) {
    return {
      isCorrect: false,
      feedback: `Document count mismatch. Expected ${expectedResult.length} documents, but your pipeline returned ${userResult.length} documents.`
    };
  }

  // Normalize JSON for comparison
  const normalize = (obj) => JSON.parse(JSON.stringify(obj));
  const normUser = normalize(userResult);
  const normExpected = normalize(expectedResult);

  const isExactMatch = JSON.stringify(normUser) === JSON.stringify(normExpected);

  if (isExactMatch) {
    return {
      isCorrect: true,
      feedback: '🎉 Perfect! Your aggregation pipeline returned the exact expected results and structure.'
    };
  }

  // Check if first document keys match
  if (normUser.length > 0 && normExpected.length > 0) {
    const userKeys = Object.keys(normUser[0]).sort().join(', ');
    const expectedKeys = Object.keys(normExpected[0]).sort().join(', ');
    if (userKeys !== expectedKeys) {
      return {
        isCorrect: false,
        feedback: `Field schema mismatch in output documents.\nExpected document fields: [${expectedKeys}]\nYour document fields: [${userKeys}]`
      };
    }
  }

  return {
    isCorrect: false,
    feedback: 'Result document count matched, but document content, sort order, or values differ from the expected solution. Check values and sort order.'
  };
};

// @desc    Get list of all practice questions
// @route   GET /api/practice/questions
exports.getQuestions = async (req, res) => {
  try {
    const publicQuestions = questions.map(({ referencePipeline, ...rest }) => rest);
    return res.status(200).json({
      success: true,
      count: publicQuestions.length,
      data: publicQuestions
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch practice questions',
      error: error.message
    });
  }
};

// @desc    Get single practice question by ID
// @route   GET /api/practice/questions/:id
exports.getQuestionById = async (req, res) => {
  try {
    const question = questions.find((q) => q.id === req.params.id);
    if (!question) {
      return res.status(404).json({
        success: false,
        message: `Practice question with ID ${req.params.id} not found.`
      });
    }

    const { referencePipeline, ...publicQuestion } = question;
    return res.status(200).json({
      success: true,
      data: publicQuestion
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch question details',
      error: error.message
    });
  }
};

// @desc    Verify user aggregation pipeline answer against expected output
// @route   POST /api/practice/verify
exports.verifyAnswer = async (req, res) => {
  try {
    let { questionId, userPipeline } = req.body;

    if (!questionId) {
      return res.status(400).json({
        success: false,
        message: 'Please provide questionId in request body.'
      });
    }

    const targetQuestion = questions.find((q) => q.id === questionId);
    if (!targetQuestion) {
      return res.status(404).json({
        success: false,
        message: `Question with ID "${questionId}" not found.`
      });
    }

    // Parse JSON string if user sent stringified pipeline
    if (typeof userPipeline === 'string') {
      try {
        userPipeline = JSON.parse(userPipeline);
      } catch (err) {
        return res.status(400).json({
          success: false,
          message: 'Invalid JSON format in userPipeline.',
          error: err.message
        });
      }
    }

    if (!Array.isArray(userPipeline)) {
      return res.status(400).json({
        success: false,
        message: 'userPipeline must be an array of aggregation stages.'
      });
    }

    // Execute User Pipeline
    const userStartTime = Date.now();
    let userResult;
    try {
      userResult = await SuperCar.aggregate(userPipeline);
    } catch (pipelineErr) {
      return res.status(400).json({
        success: false,
        isCorrect: false,
        feedback: `MongoDB Pipeline Execution Error: ${pipelineErr.message}`,
        error: pipelineErr.message
      });
    }
    const userExecTime = Date.now() - userStartTime;

    // Execute Expected Reference Pipeline
    const refStartTime = Date.now();
    const expectedResult = await SuperCar.aggregate(targetQuestion.referencePipeline);
    const refExecTime = Date.now() - refStartTime;

    // Compare Outputs
    const comparison = compareOutputs(userResult, expectedResult);

    return res.status(200).json({
      success: true,
      questionId: targetQuestion.id,
      questionTitle: targetQuestion.title,
      isCorrect: comparison.isCorrect,
      feedback: comparison.feedback,
      userExecutionTimeMs: userExecTime,
      referenceExecutionTimeMs: refExecTime,
      userResultCount: userResult.length,
      expectedResultCount: expectedResult.length,
      userResult,
      expectedResult,
      solutionPipeline: targetQuestion.referencePipeline
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to verify answer',
      error: error.message
    });
  }
};
