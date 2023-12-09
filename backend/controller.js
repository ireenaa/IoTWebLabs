const db = require('./db');


const getAllCars = (req, res) => {
  const { sortBy, search, sortOrder } = req.query;
  let query = 'SELECT * FROM cars';

  if (sortBy) {
    query += ` ORDER BY ${sortBy}`;

    if (sortOrder && (sortOrder.toUpperCase() === 'ASC' || sortOrder.toUpperCase() === 'DESC')) {
      query += ` ${sortOrder.toUpperCase()}`;
    } else {
      query += ' ASC';
    }
  }

  if (search) {
    query += ` WHERE name LIKE '%${search}%'`;
  }

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error getting cars: ' + err.stack);
      res.status(500).send('Error getting cars from database');
      return;
    }
    res.status(200).json(results);
  });
};



 const getCarById = (req, res) => {
  const carId = req.params.id;
  const query = `SELECT * FROM cars WHERE id = ?`; 
  db.query(query, [carId], (err, results) => {
    if (err) {
      console.error('Error getting car by ID: ' + err.stack);
      res.status(500).send('Error getting car from database');
      return;
    }
    if (results.length === 0) {
      res.status(404).send('Car not found');
      return;
    }
    res.status(200).json(results[0]); 
  });
};
module.exports = {
  getAllCars,
  getCarById,
 }
