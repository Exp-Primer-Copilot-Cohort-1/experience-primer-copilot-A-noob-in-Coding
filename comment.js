// Create web server

// Import
const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Routes
router.post('/:id', auth, multer, commentCtrl.createComment);
router.get('/:id', auth, commentCtrl.getAllComment);
router.delete('/:id', auth, commentCtrl.deleteComment);

// Export
module.exports = router;