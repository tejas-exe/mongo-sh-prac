const express = require('express');
const router = express.Router();
const {
  getQuestions,
  getQuestionById,
  verifyAnswer
} = require('../controllers/practiceController');

router.get('/questions', getQuestions);
router.get('/questions/:id', getQuestionById);
router.post('/verify', verifyAnswer);

module.exports = router;
