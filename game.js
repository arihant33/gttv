class Game {
constructor(){


}
getstate(){
    var gsref=database.ref("gamestate");
    gsref.on("value",function(data){
        gs=data.val();
        console.log(gs)
    })
}
updatestate(state){
    database.ref('/').update({
      gamestate:state  
    })
}
start(){
    if(gs==0){
    formobj= new Form();
    formobj.display();
    playerobj=new Player();
    playerobj.getcount();}

}

play(){
    textSize(20);
    text("game start",120,100);
    Player.getplayerinfo();
    formobj.hide();
    if(allplayers!=undefined){
var dposition=130;
for(var i in allplayers)
{
    console.log(i);
    if(i=="player"+pc){


        fill("white");

    }
    else{
        fill ("black");

 
    }
    dposition=dposition+30
;
textSize(20);
text(allplayers[i].name+": ");

}//end of for

    }//end of if allplayers


}


}
 