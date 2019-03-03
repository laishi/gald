var express = require("express");
var app = express();
app.use(express.static(__dirname + '/cqgald'));

app.get('/dashboard', function(req, res) {
    res.sendFile('/dashboard.html');
});

app.get('/', function(req, res) {
    res.sendFile('/index.html');
});
app.get('/', function(req, res) {
    res.redirect("/login.html");
});


app.listen(8080);

console.log("Running at Port 8080");