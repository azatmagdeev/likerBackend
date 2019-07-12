import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {Liker, Mem} from "./lib";

const server = express();
server.use(cors());
server.use(bodyParser.json());

const liker = new Liker();
liker.addNewMem('img/img10.jpg');
liker.addNewMem('img/img20.jpg');
liker.addNewMem('img/img30.jpg');
liker.addNewMem('img/img40.jpg');
liker.addNewMem('img/img50.jpg');
liker.addNewMem('https://yandex.ru/images/search?p=5&text=%D0%B0%D0%BB%D0%BA%D0%BE+%D0%BC%D0%B5%D0%BC&pos=171&rpt=simage&img_url=https%3A%2F%2Fi.mycdn.me%2Fimage%3Fid%3D868289189306%26t%3D35%26plc%3DWEB%26tkn%3D*mVldlMN47rjMs5Pyhm5E2k1u9Hc&from=tabbar');
liker.addNewMem('https://yandex.ru/images/search?p=4&text=%D0%B0%D0%BB%D0%BA%D0%BE+%D0%BC%D0%B5%D0%BC&pos=134&rpt=simage&img_url=https%3A%2F%2Fcdn.fishki.net%2Fupload%2Fpost%2F2017%2F01%2F19%2F2195273%2Fgallery%2F35.jpg&from=tabbar');

console.log(liker);

server.get('/mems', (req, res) => {
    return res.send(liker.items);
});


server.post('/mems/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = liker.items.findIndex(o => o.id === id);
    liker.items[index].like();
    res.send()
});

server.del('/mems/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = liker.items.findIndex(o => o.id === id);
    liker.items[index].dislike()    ;
    res.send()
});

const port = process.env.PORT || 7777;

// > 1000
server.listen(port, () => {

    console.log('server started');
    // console.log(server);
});
