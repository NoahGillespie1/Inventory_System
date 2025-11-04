// server.js
import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "PASSWORD",
  database: "inventory_db"
});

// Add inventory
app.post("/api/inventory", (req, res) => {
  const { prod_name, quantity } = req.body;
  db.query(
    "INSERT INTO inventory (prod_name, quantity) VALUES (?, ?) ON DUPLICATE KEY UPDATE quantity = ?",
    [prod_name, quantity, quantity],
    (err) => {
      if (err) return res.status(500).send(err);
      res.sendStatus(200);
    }
  );
});

// Update inventory
app.put("/api/inventory", (req, res) => {
  const { prod_name, quantity } = req.body;
  db.query(
    "UPDATE inventory SET quantity = ? WHERE prod_name = ?",
    [quantity, prod_name],
    (err) => {
      if (err) return res.status(500).send(err);
      res.sendStatus(200);
    }
  );
});

app.listen(3000, () => console.log("✅ Server running on http://localhost:3000"));