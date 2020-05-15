// ゲームの状態を管理するファイル
class GameController {
    board = null
    ownPieces = null
    oppPieces = null

    constructor () {
        // 将棋盤を作る
        this.board = new Board()

        // 将棋駒を作る
        this.ownPieces = new PieceSet(1)
        this.oppPieces = new PieceSet(2)
    }
    
    view () {
        console.log('aaa')

        var canvas = document.getElementById('shogi');
        var context = canvas.getContext('2d');
        
        //左から20上から40の位置に、幅50高さ100の四角形を描く
        context.fillRect(20,40,50,100);

        //色を指定する
        context.strokeStyle = 'rgb(00,00,255)'; //枠線の色は青
        context.fillStyle = 'rgb(255,00,00)'; //塗りつぶしの色は赤

        //左から200上から80の位置に、幅100高さ50の四角の枠線を描く
        context.strokeRect(200,80,100,50);

        //左から150上から75の位置に、半径60の半円を反時計回り（左回り）で描く
        context.arc(150,75,60,Math.PI*1,Math.PI*2,true);
        context.fill();
    }
}

const gameController = new GameController()
console.log('gameController')
gameController.view()
// console.log(gameController.board)