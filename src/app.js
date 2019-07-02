import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {Liker, Mem} from "./lib";

const server = express();
server.use(cors());
server.use(bodyParser.json());

const liker = new Liker();
liker.addNewMem(new Mem(1, 'img/img10.jpg',0));
liker.addNewMem(new Mem(2, 'img/img20.jpg',0));
liker.addNewMem(new Mem(3, 'img/img30.jpg',0));
liker.addNewMem(new Mem(4, 'img/img40.jpg',0));
liker.addNewMem(new Mem(5, 'img/img50.jpg',0));

console.log(liker);

server.get('/liker', (req, res) => {
    return res.send(liker.getAll());
});

server.post('/liker', (req,res)=>{
    liker.items = req.body;
    return res.send(liker.items.sort(
        (a,b)=>{b.score-a.score}));
});

const port = process.env.PORT || 7777;

// > 1000
server.listen(port, () => {

    console.log('server started');
    // console.log(server);
});
