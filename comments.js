// Create web server
// Date: 2021-06-29
// Creator: NhatHoang

const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/:id', commentController.getComment);
router.post('/:id', authMiddleware.requireAuth, commentController.postComment);

module.exports = router;