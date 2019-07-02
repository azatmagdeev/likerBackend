export class Mem {
    constructor(id, image, score) {
        this.id = id;
        this.image = image;
        this.score = score;
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
    }

    getAll() {
        return this.items
    }

    addNewMem(item) {
        this.items.push(item)
    }

}
