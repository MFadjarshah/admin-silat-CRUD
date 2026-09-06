const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(express.json());

// Tetapan CORS yang lebih terbuka untuk menyokong GitHub Codespaces
app.use(
  cors({
    origin: "*", // Membenarkan semua domain/origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Mengendalikan preflight request untuk semua route
app.options("*", cors());

// Sambungan ke Database Cloud (Aiven MySQL) menggunakan CA Cert
const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    // Memandangkan ca.pem ada dalam folder backend:
    ca: fs.readFileSync(path.join(__dirname, "ca.pem"))
  },
  waitForConnections: true,
  connectionLimit: 10,
  connectTimeout: 30000
});

// // Uji sambungan ke Aiven
// db.getConnection((err, connection) => {
//   if (err) {
//     console.error("Gagal menyambung ke database Aiven:", err.message);
//   } else {
//     console.log("Berjaya disambungkan ke Aiven MySQL Database!");
//     connection.release();
//   }
// });

// Uji sambungan & cipta jadual secara automatik jika belum ada
db.getConnection((err, connection) => {
  if (err) {
    console.error("Gagal menyambung ke database Aiven:", err.message);
  } else {
    console.log("Berjaya disambungkan ke Aiven MySQL Database!");

    // Skrip cipta jadual tis1
    const createTis1 = `
      CREATE TABLE IF NOT EXISTS tis1 (
        ID INT AUTO_INCREMENT PRIMARY KEY,
        zcNumber VARCHAR(255),
        camp VARCHAR(255),
        location VARCHAR(255),
        serialNumber VARCHAR(255),
        partNumber VARCHAR(255),
        type VARCHAR(255),
        status VARCHAR(255)
      );
    `;

    // Skrip cipta jadual tis2
    const createTis2 = `
      CREATE TABLE IF NOT EXISTS tis2 (
        ID INT AUTO_INCREMENT PRIMARY KEY,
        zcNumber VARCHAR(255),
        camp VARCHAR(255),
        location VARCHAR(255),
        serialNumber VARCHAR(255),
        partNumber VARCHAR(255),
        type VARCHAR(255),
        status VARCHAR(255)
      );
    `;

    connection.query(createTis1, (err) => {
      if (err) console.error("Gagal bina jadual tis1:", err.message);
      else console.log("Jadual 'tis1' sedia digunakan!");
    });

    connection.query(createTis2, (err) => {
      if (err) console.error("Gagal bina jadual tis2:", err.message);
      else console.log("Jadual 'tis2' sedia digunakan!");
    });

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
// POST method untuk simpan data baharu ke jadual tis1 (1KAD)
app.post("/members/new", (req, res) => {
  const sql = `INSERT INTO tis1 (zcNumber, camp, location, serialNumber, partNumber, type, status) 
               VALUES (?, ?, ?, ?, ?, ?, ?)`;
  
  const values = [
    req.body.zcNumber,
    req.body.camp,
    req.body.location,
    req.body.serialNumber,
    req.body.partNumber,
    req.body.type,
    req.body.status
  ];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Ralat SQL INSERT:", err);
      return res.status(500).json({ message: "Gagal menyimpan data", error: err });
    }
    return res.status(200).json({ message: "Data berjaya disimpan!", data });
  });
});
// app.post("/members/new", (req, res) => {
//   const sql =
//     "INSERT INTO silat (`firstName`, `lastName`, `age`, `phone`, `address`) VALUES (?, ?, ?, ?, ?)";
//   const values = [
//     req.body.firstName,
//     req.body.lastName,
//     req.body.age,
//     req.body.phone,
//     req.body.address,
//   ];
//   db.query(sql, values, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });

// // DELETE method
// app.delete("/members/:id", (req, res) => {
//   const sql = "DELETE FROM silat WHERE ID=?";
//   const id = req.params.id;

//   db.query(sql, [id], (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });

// DELETE method khusus untuk tis1 (1KAD)
app.delete("/members/1kad/:id", (req, res) => {
  const sql = "DELETE FROM tis1 WHERE ID = ?";
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
    if (err) {
      console.error("SQL Error semasa padam:", err);
      return res.status(500).json({ message: "Gagal memadam data", error: err });
    }
    return res.json({ message: "Berjaya dipadam dari tis1", data });
  });
});

app.listen(8081, () => {
  console.log("Listening on port 8081...");
});