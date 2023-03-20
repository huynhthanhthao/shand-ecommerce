const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const connectionDatabase = require("./connectDatabase.js");
const app = express();
const port = 3001;

// Import router
const adminRouter = require("./routes/admin-router.js");
const authRouter = require("./routes/auth-router.js");
const cartRouter = require("./routes/cart-router.js");
const productRouter = require("./routes/product-router.js");
const orderRouter = require("./routes/order-router");

// Connect database
connectionDatabase();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());

app.use("/admin", adminRouter);
app.use("/auth", authRouter);

app.use("/cart", cartRouter);
app.use("/product", productRouter);
app.use("/order", orderRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
