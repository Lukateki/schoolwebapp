import Sequelize from 'sequelize';

// Create a connection to SQLite3 database
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'studentsinfo.sqlite', // Path to SQLite file
  logging: false, // Disable logging; change to true for debugging
});

export default sequelize;
