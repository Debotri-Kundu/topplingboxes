class Ground{
    constructor(){
        var options={
            isStatic:true
          }
        this.body=Bodies.rectangle(200,390,400,20,options);
        World.add(myworld,this.body);
    }
    display(){
        var pos=this.body.position
        fill("brown");
        rectMode(CENTER);
        rect(pos.x,pos.y,400,20);
    }
}