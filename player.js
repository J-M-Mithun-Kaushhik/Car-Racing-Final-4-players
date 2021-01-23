class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.rank = 0;
    }
    getCount(){
        db.ref("playerCount").on("value", function (data){
            pc = data.val();
        })
    }
    updateCount(count){
        db.ref("/").update({
            playerCount: count
        })
    }
    update(){
        var playerIndex = "players/player" + this.index;
        db.ref(playerIndex).set({
            name: this.name, 
            distance: this.distance
        })
    }
    static getPlayerInfo(){
        db.ref("players").on("value", function (data){
            allPlayers = data.val();
        })
    }
    getCarsAtEnd(){
        db.ref("Cars_at_end").on("value",  (data) =>{
            this.rank = data.val();
        })
    }
    updateCarsAtEnd(number){
        db.ref("/").update({
            Cars_at_end: number
        })
    }
}
