var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.set('view engine', 'ejs');

//todo setup mongo and players database
//todo set up draggable jquery ui for players
//todo make ui not look horrible
//todo add post functions for once add players, also create checks for if valid name and data

app.get('/', function (req, res) {
    res.render(__dirname + "/index", {
        title: 'Draft'
    });
});


//todo setup sockets for multiple drafters
io.on('connection', function (socket) {
    console.log('a user connected');

    console.log(socket.user + " connected");
});

http.listen(3000, function(){
    console.log('listening on port 3000');
});