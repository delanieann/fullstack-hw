// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

const express = require("express");

const app = express();
const port = process.env.PORT || 5001;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/html" });
  res.send("Index page");
});

app.get("/form", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/html" });
  res.write('<form action="/submit" method="post">');
  res.write('<label for="username">Username: </label>');
  res.write('<input type="text" name="username" id="username"><br>');
  res.write('<label for="email">Email: </label>');
  res.write('<input type="email" name="email" id="email"><br>');
  res.write('<input type="submit">');
  res.write("</form>");
  res.end();
});

app.post("/submit", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/html" });
  res.write(`${req.body.username} - ${req.body.email}`);
  console.log(`${req.body.username} - ${req.body.email}`);
  res.end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
