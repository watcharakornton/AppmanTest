const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');

const app = express();

app.set('views', __dirname);
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('index.ejs', {
        input: "",
        output: ""
    });
});


app.post('/go', (req, res) => {
    let input = req.body.input;
    let type = typeof input;   
    let output = input.replace(/[a-zA-Z]/g, "");
    console.log(`input: ${input} ,type input is ${type}`);
    console.log(`output: ${output}`)
    res.render('index.ejs', {
        output: output,
        input: input
    })
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
