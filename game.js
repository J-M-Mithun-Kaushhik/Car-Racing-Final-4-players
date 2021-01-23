class Game {
    constructor() {

    }
    getGameState(){
        db.ref('gameState').on('value', function (data){
            gs = data.val();
        })
    }
    updateGameState(state){
        db.ref('/').update({
            gameState: state
        })
    }
    start(){
        if (gs === 0){
            form = new Form();
            player = new Player();
            player.getCount();
            form.display();
            
        }
        car1 = createSprite(100,200);
        car1.addImage(car1Img);

        car2 = createSprite(300,200);
        car2.addImage(car2Img);

        car3 = createSprite(500, 200);
        car3.addImage(car3Img);

        car4 = createSprite(700, 200);
        car4.addImage(car4Img)

        cars = [car1, car2, car3, car4];
    }
    play(){
        form.hide();
        Player.getPlayerInfo();       

        if(allPlayers){
            player.getCarsAtEnd();
            background(rgb(198, 135, 103));
            image(trackImg, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
            var index = 0;
            var x = 200;
            var y;
            //console.log(allPlayers);
            for(var plr in allPlayers){
                //console.log(plr);
                index = index + 1;
                x = x + 230;
                y = displayHeight - allPlayers[plr].distance;
                cars[index - 1].x = x;
                //console.log(x);
                cars[index - 1].y = y;
                if (index === player.index){
                    //cars[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth / 2;
                    camera.position.y = cars[index - 1].y;
                    push();
                    textSize(20);
                    fill("red")
                    text(allPlayers[plr].name, x - 30, y + 100);
                    pop();
                }
            }
        }
        if (keyDown(UP_ARROW) && player.index != null){
            player.distance += 10;
            player.update();
        }
        if (player.distance > 4200){
            gs = 2;
            player.rank += 1;
            player.updateCarsAtEnd(player.rank);
            swal({
                title : `Awesome!${"\n"}Rank${"\n"}${player.rank}`,
                text : "You have reached the finish line",
                icon : "success",
                confirmButtonText : "ok"
            })
            /*textSize(50)
            text("Rank" + player.rank, displayWidth/2.5, camera.position.y - 200);*/
        }
        drawSprites();
    }
}