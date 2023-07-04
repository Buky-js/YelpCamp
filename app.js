const express = require('express');
const path = require('path');
const {connect} = require('mongoose');

const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res)=> {
    res.render('home');
})
app.listen(PORT, ()=> {
    console.log('Serving on port 3000');
})