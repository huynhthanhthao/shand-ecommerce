const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const connectionDatabase = require("./connectDatabase.js");
const app = express();
const port = 3001;

// Import router
const eventRouter = require("./routes/event-router.js");
const authRouter = require("./routes/auth-router.js");
const cartRouter = require("./routes/cart-router.js");
const productRouter = require("./routes/product-router.js");
const orderRouter = require("./routes/order-router");
const reportRouter = require("./routes/report-router");
const accountRouter = require("./routes/account-router");
const categoryRouter = require("./routes/category-router");
const addressRouter = require("./routes/address-receive-router");
const transactionRouter = require("./routes/transaction-router");
const checkImageRouter = require("./routes/check-image-router");

// Connect database
connectionDatabase();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());

app.use("/auth", authRouter);

app.use("/cart", cartRouter);
app.use("/product", productRouter);
app.use("/order", orderRouter);
app.use("/report", reportRouter);
app.use("/account", accountRouter);
app.use("/category", categoryRouter);
app.use("/event", eventRouter);
app.use("/address-receive", addressRouter);
app.use("/transaction", transactionRouter);
app.use("/check-image", checkImageRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
