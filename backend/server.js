const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

// Connect to MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
});

//GET method
app.get("/members", (req, res) => {
  const sql = "SELECT * FROM silat";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// GET method for single
app.get("/members/view/:id", (req, res) => {
  const sql = "SELECT * FROM silat WHERE ID=?";
  const id = req.params.id;

  // Debugging: Log the query and parameters
  console.log(`Executing query: ${sql} with ID: ${id}`);

  db.query(sql, [id], (err, data) => {
    if (err) {
      console.error("SQL Error:", err); // Log the exact error
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

//POST method
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
  console.log("Listening...");
});
