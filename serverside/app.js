// Description: This file is used to test the connection to the database and to insert sample data.
import sequelize from './database/database.js';
import { Department } from './models/index.js';


(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Sync models with database
    await sequelize.sync({ force: true }); // Warning: This will reset the database!
    console.log('Database synchronized.');

    // Add sample data
    await Department.create({ name: 'Music', address: 'Fake Street 1\nCity, State, ZIP' });
    console.log('Sample data inserted.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
})();
