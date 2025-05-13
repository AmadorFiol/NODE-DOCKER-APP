const express = require("express");
const db = require("./database");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Guardar un mensaje en la base de datos
app.post("/mensaje", (req, res) => {
  const { texto } = req.body;
  db.run("INSERT INTO mensajes (texto) VALUES (?)", [texto], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, texto });
  });
});

// Obtener todos los mensajes
app.get("/mensajes", (req, res) => {
  db.all("SELECT * FROM mensajes", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
