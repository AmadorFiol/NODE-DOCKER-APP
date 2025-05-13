const sqlite3 = require("sqlite3").verbose();

// Conectar a la base de datos (crea el archivo si no existe)
const db = new sqlite3.Database("./data.db", (err) => {
  if (err) {
    console.error("Error al conectar con la base de datos", err);
  } else {
    console.log("Conectado a SQLite");
    db.run(`CREATE TABLE IF NOT EXISTS mensajes (id INTEGER PRIMARY KEY, texto TEXT)`);
  }
});

module.exports = db;