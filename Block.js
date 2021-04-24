class Block {                                           
  constructor(x, y) {                                           
    var options = {                                           
                                           
      restitution: 0.4,                                 
      friction: 0.1,                   
      isStatic: false
                                           
    }                                           
    this.body = Bodies.rectangle(x, y, 70, 70, options);                             
    this.width = 70;                                           
    this.height = 70;                                           
    this.visibility = 255;                              
    World.add(world, this.body);                             
  }                                           
                                           
                                           
  display() {                                           
    var angle = this.body.angle;                             
    var pos = this.body.position;                             
                                           
    if (this.body.speed < 10) {                             
      push();                                           
      strokeWeight(7);                                 
      stroke("green");                                 
      translate(pos.x, pos.y);                                           
      rotate(angle);                                           
      rectMode(CENTER);                                           
      fill("white");                                           
      rect(0, 0, this.width, this.height);                                           
      pop();                                           
    }                                           
    else {                                           
      // push();                                           
      // World.remove(world, this.body);                                           
      // this.visibility = this.visibility - 1;                                           
      // tint(255, this.visibility);                                           
      // pop();                                           
    }                                           
                                           
  }                                           
}                                           