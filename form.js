class Form {
constructor() {
this.title=createElement("h2");
this.input= createInput("name");
this.button=createButton("game");
this.greeting=createElement("h1");
this.reset=createButton("reset");
}

display(){
this.title.html("car racing game");
this.title.position(200,50);
this.input.position(200,100);
this.button.mousePressed(()=>{
    playerobj.name =this.input.value();

    console.log(playerobj.name);

pc=pc+1;

playerobj.updatecount(pc);
playerobj.updatename();
this.greeting.html("hello "+playerobj.name);
this.greeting.position(200,250);
this.input.hide();
this.button.hide();

})
;
this.button.position(350,300);
this.reset.mousePressed(()=>{
playerobj.updatecount(0);
gameobj.updatestate(0);

})
this.reset.position(350,10);


}
hide(){
    this.input.hide()
    this.button.hide();
    this.greeting.hide();
    this.title.hide();
}


}
