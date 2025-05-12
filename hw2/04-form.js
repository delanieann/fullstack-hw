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
  res.write('<label for="name">Name: </label>');
  res.write('<input type="text" name="name" id="name"><br>');
  res.write('<label for="email">Email: </label>');
  res.write('<input type="email" name="email" id="email"><br>');
  res.write('<label for="comments">Comments: </label>');
  res.write('<input type="text" name="comments" id="comments"><br>');
  
  res.write('<label for="newsletter">Newsletter: </label><br>');
  res.write('<input type="radio" name="newsletter" id="yes" value="yes">');
  res.write('<label for="yes">Yes, sign me up for the newsletter."</label><br />');
  res.write('<input type="radio" name="newsletter" id="no" value="no">');
  res.write('<label for="no">No, thank you.</label><br />');
  res.write('<input type="submit">');
  res.write("</form>");
  res.end();
});

app.post("/submit", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/html" });
  res.write(`Name: ${req.body.name} <br />`);
  res.write(`Email: ${req.body.email} <br />`);
  res.write(`Comments: ${req.body.comments ? req.body.comments : "n/a" }<br />`);
  if (req.body.newsletter === 'yes') {
    res.write("Newsletter: Yes, sign me up for the newsletter.")
  } else {
    res.write(`Newsletter: No, thank you.`); 
  }
  res.end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
