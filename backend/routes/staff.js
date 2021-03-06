const express = require('express');
const router = express.Router();
const { fetchStudentsPerCourse, fetchMarks, staffProfile, uploadMarks, fetchAcheivement, fetchArrear, fetchCourses } = require('../controllers/staff.js');

router.post('/students', fetchStudentsPerCourse);
router.post('/fetchMarks', fetchMarks);
router.post('/profile', staffProfile);
router.post('/uploadMarks', uploadMarks);
router.post('/achievements', fetchAcheivement);
router.post('/arrear', fetchArrear);
router.post('/courses', fetchCourses);

module.exports = router;