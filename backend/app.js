const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const connectionDatabase = require("./connectDatabase.js");
const app = express();
const port = 3001;

// Import router
const adminRouter = require("./routes/admin-router.js");
const studentRouter = require("./routes/student-router.js");
const shopRouter = require("./routes/shop-router.js");
const authRouter = require("./routes/auth-router.js");

// Connect database
connectionDatabase();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());

app.use("/admin", adminRouter);

app.use("/auth", authRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
