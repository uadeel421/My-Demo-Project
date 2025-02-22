const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the signup form
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

// Handle form submission
app.post("/signup", (req, res) => {
    const { name, email, password } = req.body;
    console.log("Signup Data:", { name, email, password });

    res.send(`<h2>Signup Successful!</h2><p>Name: ${name}</p><p>Email: ${email}</p>`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
