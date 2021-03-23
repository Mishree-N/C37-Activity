//variables
var gameState=0;
var playerCount=0;
var form, game, player;
var database, dbPosition;
var PLAY=1, START=0;
var allPlayers, TOTALPLAYERCOUNT=2, gameState=0;


function setup(){
    //setup database
    database = firebase.database ();
    //create canvas
    createCanvas(400,400);

    //create game
    game=new Game();
    //get the gameState
    game.getState();
    //start the game and create the form
    game.start();
}

function draw(){

    //when 2 players log into game
    if (playerCount==2){

        //update the gameState to play (play=1)
        game.update(1);

    }

    if (gameState==1){

        //clear everything on the screen
        clear();
        //start the game
        game.play();
    }

    
}


