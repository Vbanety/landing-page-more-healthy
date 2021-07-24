var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('files'));

app.use('/static', express.static('public'));
app.use('/static', express.static('public/assets'));


const port = 8080;

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})