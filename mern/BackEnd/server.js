
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://mikhail0731:Quartett007@cluster0.ts5vu.mongodb.net/myFirstStore?retryWrites=true&w=majority"
)
.then(()=>console.log("DBConnection Successful!"))
.catch((err) => {
    console.log(err);
});
app.listen(3300, ()=> {
    console.log('Server is running!')
})

/*app.get('/', (req, res) => {
    res.sendFile('/Users/Михаил/Desktop/IT/JS' + '/Cart.html')
})*/
console.log('global3')
