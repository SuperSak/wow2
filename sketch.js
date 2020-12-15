var database, game, form, player;
var gameState=0;
var playerCount=0;
var allPlayers
var cars, car1,car2,car3,car4;
function setup(){
    database=firebase.database()
    createCanvas(displayWidth-30,displayHeight-100);
    game=new Game()
    game.getState()
    game.start()
}


function draw(){
    //background("white");
    if(gameState===1){
        clear();
        game.play()
    }
    if(playerCount===4){
        game.update(1);
    }
    
}

