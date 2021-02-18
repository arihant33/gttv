var formobj,gameobj,playerobj,allplayers;
var pc,gs=0,database;
function setup(){
createCanvas(600,600)
database=firebase.database()
gameobj= new Game();
gameobj.getstate();
gameobj.start();

}


function draw(){
background("red");
if(pc>=2){
    gameobj.updatestate(1);
    gameobj.play();
}
if(gs==1){
gameobj.play();

}
}