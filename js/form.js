class Form{
    constructor(){
        this.input=createInput("Name: ")
        this.button=createButton("Start!!")
        this.title = createElement("h2");
        this.greeting=createElement("h3");
    }
    hide(){
        this.title.hide()
        this.button.hide()
        this.input.hide()
        this.greeting.hide()
    }
    display(){
        
        this.title.html("New Car Racing Game Deluxe Free Edition")
        this.title.position(displayWidth/2-50,0);
        
        this.input.position(displayWidth/2-40,displayHeight/2-80)
        
        this.button.position(displayWidth/2+30,displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()

            player.name=this.input.value();

           // playerCount=playerCount+1
            playerCount += 1;
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)

            
            this.greeting.html("Hello "+player.name+", lets race!")
            this.greeting.position(displayWidth/2-70,displayHeight/4)
        })

    }
}