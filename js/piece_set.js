// 将棋駒のセット

class PieceSet {
    pieces = []

    constructor (player) {
        this.makePieces(player)
    }

    makePieces (player) {
        this.pieces.push(new Gin([3,1], player))
        this.pieces.push(new Kin([4,1], player))
        this.pieces.push(new Ou([5,1], player))
        this.pieces.push(new Kin([6,1], player))
        this.pieces.push(new Gin([7,1], player))
    }
}