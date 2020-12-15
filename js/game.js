class Game{
    constructor(){

    }
    getState(){
        var gameStateRef=database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState=data.val()
        })
    }
    //there is a terrible error on line 14
    update(state){
        database.ref('/').update({
          gameState: state
        });
      }
    
   async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists){
                player.getCount();
            }
          
            form=new Form();
            form.display()
        }
        car1=createSprite(100,200)
        car2=createSprite(300,200)
        car3=createSprite(500,200)
        car4=createSprite(700,200)
        cars=[car1,car2,car3,car4]

    }
    play(){
        form.hide()
        //text("Game Start!",130,200)
        Player.getPlayerInfo();
        if(allPlayers!==undefined){
            /**var displayPosition=90
            displayPosition+=30**/
            //index of the array
            var index=0;
            var x=0
            var y
            // initialize the variable, condition., increament
            for(var plr in allPlayers){
                // add 1 to the index for every loop
                index++
                //increament the x position for every car
                x += 100

                // use database for the y position
                y=displayHeight-allPlayers[plr].distance
                cars[index-1].x=x
                cars[index-1].y=y
                
                if(index===player.index){
                    cars[index-1].shapeColor=rgb(255,55,0)
                }
                
            };
           
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance += 50
            player.update()
        }
        drawSprites();
    }
}