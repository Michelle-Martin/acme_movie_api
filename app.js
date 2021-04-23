const express = require("express");

const app = express();
const {
  models: { Movie },
} = require("./db");
module.exports = app;
app.get("/", (req, res) => {
  res.send(`
    <html>
    <body> 
    Acme Movie API!
    </body>
    </html> 
    `);
});

app.get("/api/movies", async (req, res) => {
  const movies = await Movie.findAll();
  res.status(200).send(movies);
});
