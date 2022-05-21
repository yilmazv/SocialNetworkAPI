const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtId,
  addThought,
  deleteThought,
  updateReaction,
} = require('../../controllers/courseController.js');

// /api/courses
router.route('/').get(getCourses).post(createCourse);

// /api/courses/:courseId
router
  .route('/:courseId')
  // .get(getSingleCourse)
  // .put(updateCourse)
  // .delete(deleteCourse);

module.exports = router;