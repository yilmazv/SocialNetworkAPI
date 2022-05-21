const { User } = require('../models');

module.exports = {
  // Get all courses
  getAllThoughts(req, res) {
    User.find()
      .then((User) => res.json(User))
      .catch((err) => res.status(500).json(err));
  },
  // Get a course
  getThoughtId(req, res) {
    User.findOne({ params }, res)
      .select('-__v')
      .then((User) =>
        !course
          ? res.status(404).json({ message: 'No course with that ID' })
          : res.json(course)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a course
  addThought(req, res) {
    User.create(req.body)
      .then((User) => res.json(User))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a course
  deleteThought(req, res) {
    User.findOneAndDelete({ _id: req.params.courseId })
      .then((Thought) =>
        !User
          ? res.status(404).json({ message: 'No course with that ID' })
          : Student.deleteMany({ _id: { $in: course.students } })
      )
      .then(() => res.json({ message: 'Course and students deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a course
  updateReaction(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.courseId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((course) =>
        !course
          ? res.status(404).json({ message: 'No course with this id!' })
          : res.json(course)
      )
      .catch((err) => res.status(500).json(err));
  },
};


module.exports = {
    // Get all courses
    getAllReactions(req, res) {
      Reactions.find()
        .then((Reactions) => res.json(Reactions))
        .catch((err) => res.status(500).json(err));
    },
    // Get a course
    getReaction(req, res) {
        Reactions.findOne({ params }, res)
        .select('-__v')
        .then((User) =>
          !course
            ? res.status(404).json({ message: 'No course with that ID' })
            : res.json(course)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Create a course
    addReaction(req, res) {
        Reactions.create(req.body)
        .then((User) => res.json(User))
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // Delete a course
    deleteReaction(req, res) {
        Reactions.findOneAndDelete({ _id: req.params.courseId })
        .then((User) =>
          !User
            ? res.status(404).json({ message: 'No course with that ID' })
            : Student.deleteMany({ _id: { $in: course.students } })
        )
        .then(() => res.json({ message: 'Course and students deleted!' }))
        .catch((err) => res.status(500).json(err));
    },
    // Update a course
    updateReaction(req, res) {
        Reactions.findOneAndUpdate(
        { _id: req.params.courseId },
        { $set: req.body },
        { runValidators: true, new: true }
      )
        .then((course) =>
          !course
            ? res.status(404).json({ message: 'No course with this id!' })
            : res.json(course)
        )
        .catch((err) => res.status(500).json(err));
    },
  };