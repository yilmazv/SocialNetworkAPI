const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtId,
  addThought,
  deleteThought,
  updateReaction,
} = require('../controllers/thought');

router
  .route('/:thoughtsId')
  // .get(getSingleCourse)
  // .put(updateCourse)
  // .delete(deleteCourse);

module.exports = router;