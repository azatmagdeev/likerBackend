import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {Liker} from "./lib";

const server = express();
server.use(cors());
server.use(bodyParser.json());

const liker = new Liker();
liker.addNewMem('img/img10.jpg');
liker.addNewMem('img/img20.jpg');
liker.addNewMem('img/img30.jpg');
liker.addNewMem('img/img40.jpg');
liker.addNewMem('img/img50.jpg');
liker.addNewMem('https://sun1-86.userapi.com/c857736/v857736501/129b0/sSwLFcmEDJk.jpg');
liker.addNewMem('https://vk.com/photo-165882515_457243045');

console.log(liker);

server.get('/mems', (req, res) => {
    return res.send(liker.items);
});

server.post('/mems/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = liker.items.findIndex(o => o.id === id);
    liker.items[index].like();
    res.send(liker.items[index])
});

server.del('/mems/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = liker.items.findIndex(o => o.id === id);
    liker.items[index].dislike();
    res.send(liker.items[index])
});

const port = process.env.PORT || 7777;

// > 1000
server.listen(port, () => {

    console.log('server started');
    // console.log(server);
});
