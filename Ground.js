class Ground{
constructor(x,y,width,height){
    this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
    World.add(world,this.body);
    this.w = width;
    this.h = height;

}
display(){
    var p = this.body.position;

    fill("red");
    rectMode(CENTER);
    rect(p.x,p.y,this.w,this.h);
}

}

