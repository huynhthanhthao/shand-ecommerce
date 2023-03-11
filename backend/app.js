const express = require("express");
const connectionDatabase = require("./connectDatabase.js");
const app = express();
const port = 3001;

connectionDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
