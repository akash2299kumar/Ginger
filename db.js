// Import required modules
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');



// Create MySQL connection
const db = mysql.createConnection({
    host: 'sql6.freesqldatabase.com',
    user: 'sql6683020',
    password: '2uGdXsXqqY',
    database: 'sql6683020'
  });

  // Connect to MySQL
db.connect(err => {
    if (err) {
      throw err;
    }
    console.log('Connected to MySQL database');
  });
  
  // Initialize Express app
  const app = express();
  app.use(express.json());
  app.use(cors());
  // Signup API
  app.post('/signup', (req, res) => {
    const { username, password, email } = req.body;
    const sql = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
    db.query(sql, [username, password, email], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error signing up');
        return;
      }
      res.status(200).send('Signed up successfully');
    });
  });
  // Login API
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(sql, [username, password], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error logging in');
        return;
      }
      if (result.length === 0) {
        res.status(401).send('Invalid username or password');
      } else {
        res.status(200).send('Login successful');
      }
    });
  });
  
  // Get user details API
  app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, userId, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error getting user details');
        return;
      }
      if (result.length === 0) {
        res.status(404).send('User not found');
      } else {
        res.status(200).json(result[0]);
      }
    });
  });
  
  // Edit user details API
  app.put('/user/:id', (req, res) => {
    const userId = req.params.id;
    const { username, password, email } = req.body;
    const sql = 'UPDATE users SET username = ?, password = ?, email = ? WHERE id = ?';
    db.query(sql, [username, password, email, userId], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error updating user details');
        return;
      }
      res.status(200).send('User details updated successfully');
    });
  });
  
  // Start the server
  // const PORT = process.env.PORT || 3000;
  // app.listen(PORT, () => {
  //   console.log(`Server is running on port ${PORT}`);
  // });

  app.listen(8081, () => {
    
    console.log("listening");
    

    
    })
  

  