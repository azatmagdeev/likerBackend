export class Mem {
    constructor(id, imgUrl) {
        this.id = id;
        this.imgUrl = imgUrl;
        this.score = 0;
    }
    like() {
        this.score++;
    }

    dislike() {
        this.score--;
    }
}

export class Liker {
    constructor() {
        this.items = [];
        this.nextId = 1;
    }

    addNewMem(imgUrl) {
       const item = new Mem(this.nextId++, imgUrl);
        this.items.push(item)
    }

}
