// 将棋駒に関するスクリプト

class Piece {
    constructor(position, player) {
        this.position = position;
        this.player = player;
    }

    get name() {
        return this.name;
    }

    get canEvolution() {
        return this.canEvolution;
    }

    // set player(player) {
    //     this.player = player
    // }

    setPosition (x, y) {
        
    }

    select ()  {

    }

    release () {

    }
}

class Ou extends Piece {
    name = '王将';
    canEvolution = false;
    moveArea = [
        [1,1,1],
        [1,0,1],
        [1,1,1]
    ]
}

class Kin extends Piece {
    name = '金将';
    canEvolution = false;
    moveArea = [
        [1,1,1],
        [1,0,1],
        [0,1,0]
    ]
}

class Gin extends Piece {
    name = '銀将';
    canEvolution = true;
    moveArea = [
        [1,1,1],
        [0,0,0],
        [1,0,1]
    ]
    moveAreaEvo = [
        [1,1,1],
        [1,0,1],
        [0,1,0]
    ]
}