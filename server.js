const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { Socket } = require("socket.io");
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const {v4} = require('uuid');

app.set('view engine', 'ejs')
app.use(express.static('public'))





const randomId = v4() ;
console.log('This is a random Id', randomId)


app.get('/', (req, res) => {
    res.redirect('/'+ randomId)
    
})




app.get('/:room', (req, res) => {
    res.render ('room', {roomId: req.params.room})
})



 io.on('connection', socket => {
    socket.on('join-room', (roomId , userId) => {
        console.log(roomId, userId)
   })
 })

server.listen(3000, ()=> {

   

    console.log('server running on port 3000')
})