const express = require('express');
const app = express();
app.listen(3300, function() {
    console.log('listening on 3300')
})
app.get('/', (req, res) => {
    res.sendFile('/Users/Михаил/Desktop/IT/JS' + '/Home.html')
})