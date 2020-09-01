class Box{

    constructor(x,y,width,height){
        //used to initialize the properties
      
      this.body = Bodies.rectangle(x,y,width,height,{restitution:0.7});
      this.w = width;
      this.ht = height;
      World.add(world,this.body);


      console.log(this.body)
    




    }

    display(){
      var pos = this.body.position;
      var angle = this.body.angle;

      // save the original settings i will push the code. 
      push();
      translate(pos.x,pos.y);
      rotate(angle);


      rectMode(CENTER);
      fill("white");

     rect(0,0,this.w,this.ht);

     //reverts back to original settings
     pop();
    }






}