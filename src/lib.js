export class Mem {
    constructor(id, image, score) {
        this.id = id;
        this.image = image;
        this.score = score;
    }
}

export class Liker {
    constructor() {
        this.items = [];
    }

    addNewMem(item) {
        this.items.push(item)
    }
}
