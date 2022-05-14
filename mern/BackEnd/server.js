
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")



dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(()=>console.log("DBConnection Successful!"))
.catch((err) => {
    console.log(err);
});

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use('/', express.static('static'))


app.listen(process.env.PORT || 3300, function () {
        console.log('Server is running!');
    })




app.get("/api/", () => {
    console.log("One more check")
})

/*app.get('/', (req, res) => {
    res.sendFile('/Users/Михаил/Desktop/IT/JS' + '/Cart.html')
})*/

