class Player {
    constructor(){
this.name=null;
    }
  getcount (){
      var pcref= database.ref("playercount");
      pcref.on("value",(data)=>{
          pc=data.val();
          console.log(pc)
      })
  }
  updatecount(count){
      database.ref('/').update({
          playercount:count

      })
  }
  updatename(){
      var playerindex="players/player"+pc;
      database.ref(playerindex).set({
          name:this.name
      })
     
  }
  static getplayerinfo(){
   var playerinforef=database.ref("players")
   playerinforef.on("value",(data)=>{
       allplayers=data.val();
       console.log(allplayers);
   })       
}
}