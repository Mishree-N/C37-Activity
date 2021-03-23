class Game {

    constructor (){


    }

    getState(){

        var gameStateRef;

        //refer to gameState in DB
        gameStateRef = database.ref("/gameState");
        
        // listen to gameState changes in DB
        gameStateRef.on ("value", 
            function(data){
            gameState = data.val ();
            console.log ("GAME STATE : "+ gameState);
        }
        );

    }

    update(state){

        //update the gameState
        var gameStateRef=database.ref("/").update ({"gameState":state});
        

    }

    start(){

        if (gameState==0){

            //create player
            player=new Player();
            //get the player count
            var playerCount = player.getPlayerCount();
            //create form and display it
            form=new Form();
            form.display();
        }
    }

    play(){

        //hide the form
        form.hide();
        //display game start message
        textSize(30);
        text("Game Start", 120,100);

        //get player information
        Player.getPlayerInfo();

        //if all the players is not equal to undefined,
        if (allPlayers != undefined) {

            //create display position variable as 130
            var display_position = 130;

            //loop through all the players to display them
            for (var plr in allPlayers){

                //if the current player is showing
               if (plr=="player" + player.index){
                //make the text red
                fill ("red");
               } else{
                   //otherwise keep it black
                   fill("black");
               }
                //increment it by 20 to space out by 20
                display_position+=20;
                //show text for whichever player is playing (show name and distance for that player)
                textSize (15) ;
                text (allPlayers[plr].name+": " + allPlayers[plr].distance, 120, display_position);
            }
            
        }

        //if up arrow key is pressed and player index is NOT(!) equal to null
        if (keyIsDown(UP_ARROW) && player.index!=null){

            //increment by 20
            player.distance=player.distance+20;
            //update the name & distance
            player.update();

        }

    }

}