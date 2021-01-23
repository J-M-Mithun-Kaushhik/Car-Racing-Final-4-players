class Form {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton("Click to start");
        this.greeting = createElement("h3");
        this.title = createElement("h2");
        this.reset = createButton("reset");
    }

    display(){
        this.title.html("Car Racing Game");
        this.title.position(130,0);
        
        this.reset.position(displayWidth / 2, 30);
        this.reset.mousePressed( () => {
            player.updateCount(0);
            player.updateCarsAtEnd(0);
            game.updateGameState(0);
            db.ref('players').remove()
        })

        this.input.position(130, 160);
        this.button.position(165, 200)

        this.button.mousePressed( () =>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            pc++;
            player.index = pc;
            console.log(player.index);
            player.update();
            player.updateCount(pc);

            this.greeting.html("Welcome " + player.name + "," + "\n Waiting for other players to join...");
            this.greeting.position(50,160);
        })
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
    }
}