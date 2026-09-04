const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());

// Sambungan ke Database Cloud (Aiven MySQL) menggunakan CA Cert
const db = mysql.createPool({
  host: "mysql-20da18f6-admin-silat-db.h.aivencloud.com",
  port: 13172,
  user: "avnadmin",
  password: "AVNS_J8piOcNHNnOwCkdgMPa",
  database: "defaultdb",
  ssl: {
    ca: fs.readFileSync(path.join(__dirname, "ca.pem"))
  },
  waitForConnections: true,
  connectionLimit: 10,
  connectTimeout: 30000
});

// Uji sambungan ke Aiven
db.getConnection((err, connection) => {
  if (err) {
    console.error("Gagal menyambung ke database Aiven:", err.message);
  } else {
    console.log("Berjaya disambungkan ke Aiven MySQL Database!");
    connection.release();
  }
});

// GET method 1kad
app.get("/members/1kad", (req, res) => {
  const sql = "SELECT * FROM tis1";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// GET method 2kad
app.get("/members/2kad", (req, res) => {
  const sql = "SELECT * FROM tis2";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// GET method 3kad
app.get("/members/3kad", (req, res) => {
  const sql = "SELECT * FROM tis3";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// GET method 4kad
app.get("/members/4kad", (req, res) => {
  const sql = "SELECT * FROM tis4";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// GET method 19ramd
app.get("/members/19ramd", (req, res) => {
  const sql = "SELECT * FROM tis19";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// GET method for single
app.get("/members/view/1kad/:id", (req, res) => {
  const sql = "SELECT * FROM tis1 WHERE ID=?";
  const id = req.params.id;

  console.log(`Executing query: ${sql} with ID: ${id}`);

  db.query(sql, [id], (err, data) => {
    if (err) {
      console.error("SQL Error:", err);
      return res
        .status(500)
        .json({ message: "Database query error", error: err });
    }

    if (data.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    return res.json(data[0]);
  });
});

// POST method
app.post("/members/new", (req, res) => {
  const sql =
    "INSERT INTO silat (`firstName`, `lastName`, `age`, `phone`, `address`) VALUES (?, ?, ?, ?, ?)";
  const values = [
    req.body.firstName,
    req.body.lastName,
    req.body.age,
    req.body.phone,
    req.body.address,
  ];
  db.query(sql, values, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// DELETE method
app.delete("/members/:id", (req, res) => {
  const sql = "DELETE FROM silat WHERE ID=?";
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("Listening on port 8081...");
});