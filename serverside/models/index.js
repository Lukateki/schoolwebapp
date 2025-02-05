import sequelize from '../database/database.js';
import Department from './department.js';
import Course from './course.js';
import Student from './student.js';

// Define associations
Department.hasMany(Course, { foreignKey: 'department_id' });
Course.belongsTo(Department, { foreignKey: 'department_id' });

Department.hasMany(Student, { foreignKey: 'department_id' });
Student.belongsTo(Department, { foreignKey: 'department_id' });

Student.belongsToMany(Course, { through: 'student_courses', foreignKey: 'student_id', otherKey: 'course_id' });
  Course.belongsToMany(Student, { through: 'student_courses', foreignKey: 'course_id', otherKey: 'student_id' });

export { sequelize, Department, Course, Student };
