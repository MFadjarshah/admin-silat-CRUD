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
app.get("/", (req, res) => {
  const sql = "SELECT * FROM silat";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//POST method
app.post("/create", (req, res) => {
  const sql =
    "INSERT INTO silat (`firstName`, `lastName`, `age`, `address`) VALUES (?, ?, ?, ?)";
  const values = [
    req.body.firstName,
    req.body.lastName,
    req.body.age,
    req.body.address,
  ];
  db.query(sql, values, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("Listening...");
});
