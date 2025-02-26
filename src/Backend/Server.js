const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MySQL (Replace with Bluehost credentials)
const db = mysql.createConnection({
  host: process.env.DB_HOST,     // Bluehost database host
  user: process.env.DB_USER,     // MySQL username
  password: process.env.DB_PASS, // MySQL password
  database: process.env.DB_NAME, // Your database name
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to MySQL database!");
});

// Sample API Route - Fetch all users
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
});

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
