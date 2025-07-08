const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Course = require('../models/Course');

// Register user
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  await user.save();
  res.send({ message: 'User registered' });
});

// List courses
router.get('/courses', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// Enroll in a course
router.post('/enroll', async (req, res) => {
  const { email, courseId } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    user.enrolledCourses.push(courseId);
    await user.save();
    res.send({ message: 'Course enrolled' });
  } else {
    res.status(404).send({ message: 'User not found' });
  }
});

module.exports = router;
