var db, gs = 0;
var game, player, form, pc;
var allPlayers;
var car1, car2, car3, car4, cars

function preload(){
    car1Img = loadImage("car1.png");
    car2Img = loadImage("car2.png");
    car3Img = loadImage("car3.png");
    car4Img = loadImage("car4.png");

    groundImg = loadImage("ground.png");
    trackImg = loadImage("track.jpg");
    }

function setup(){
    createCanvas(displayWidth, displayHeight);
    
    db = firebase.database();
    game = new Game();
    game.getGameState();
    game.start();

}

function draw(){
    if(pc === 4){
    game.updateGameState(1)
    }
    if (gs === 1){
        clear();
        game.play();
    }
    if (gs === 2)
    console.log(player.rank);
}