
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const userRoute = require("./routes/user")

dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(()=>console.log("DBConnection Successful!"))
.catch((err) => {
    console.log(err);
});

app.use("/api/user", userRoute);



/*app.get("/api/", () => {
    console.log("One more check")
})*/

app.listen(process.env.PORT || 3300, function () {
        console.log('Server is running!');
    })


/*app.get('/', (req, res) => {
    res.sendFile('/Users/Михаил/Desktop/IT/JS' + '/Cart.html')
})*/

