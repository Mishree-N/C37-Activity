class Form{

    constructor(){

        this.input=createInput("Name");
        this.button=createButton("Play");
        this.greeting = createElement ("h3");
        this.title = createElement ("h2");

    }

    display(){


        //make title say Car Racing Game
        this.title.html ("Car Racing Game");
        //position the title
        this.title.position (130,0);

        //position the input
        this.input.position (130,160);

        //position the button
        this.button.position (250,200);

        //when Play button is pressed,
        this.button.mousePressed ( ()=> {

            //stop displaying the Name input
            this.input.hide ();
            //stop displaying the Play button
            this.button.hide ();

            //make the Name from input equal to the player.name
            player.name=this.input.value();
            //increment playerCount because new player has just logged on and pressed "Play"
            playerCount=playerCount+1;
            //make player index equal to playerCount
            player.index=playerCount;
            //update player's name & distance using input value
            player.update();
            //update # of players 
            player.updatePlayerCount(playerCount);

            //make greeting variable say "Welcome name of player (using input value)"
            this.greeting.html("Welcome " + player.name);
            //position the greeting
            this.greeting.position(130,160);
        });


        
    }

    hide(){

        //hide everything
        this.input.hide();
        this.button.hide();
        this.greeting.hide();

    }


}