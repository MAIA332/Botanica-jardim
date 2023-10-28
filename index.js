var express = require("express");
const path = require('path');
const templates = "statics/templates/"

var app = express();

app.set('view engine', 'ejs')
app.use(express.static('statics/'));


app.get('/', function(req, res) {
    res.render(path.join(__dirname, templates+'index'));
});

app.listen(3000, function () {
  console.log("App de Exemplo escutando na porta 3000!");
});
