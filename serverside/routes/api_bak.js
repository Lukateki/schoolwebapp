import express from 'express';
import { Department, Course, Student } from '../models/index.js';

const router = express.Router();

// Routes for Departments
router.get('/departments', async (req, res) => {
  const departments = await Department.findAll();
  res.json(departments);
});

// Get a specific department by ID
router.get('/departments/:id', async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.id);
    if (department) {
      res.json(department);
    } else {
      res.status(404).json({ message: 'Department not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving department', error: error.message });
  }
});

// Routes for Courses
router.get('/courses', async (req, res) => {
  const courses = await Course.findAll();
  res.json(courses);
});

// Routes for Students
router.get('/students', async (req, res) => {
  const students = await Student.findAll();
  res.json(students);
});

export default router;
