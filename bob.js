class Bob{
    constructor(x,y){
      var  options= {
          isStatic: false,
          restitution : 1.3,
          friction : 0.5,
          density : 1.2
      }

      this.body = Bodies.circle(x, y, 25,options);   
      this.x=x;
      this.y=y;
      World.add(world,this.body);
    }

    display(){
       var pos = this.body.position;  
       fill("grey");  
       ellipseMode(RADIUS);
       ellipse(pos.x, pos.y, 25,25);
       

    }
}