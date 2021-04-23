const express = require("express");
const app = express();
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

app.get("api/movies", (req, res) => {
  const movies = "movies";
  res.status(200).send(movies);
});
