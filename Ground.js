class Ground{
    constructor(x,y,width,height,color){
      var ground_options ={
        isStatic : true
      }
      this.body = Bodies.rectangle(x,y,width,height,ground_options);
      this.width = width;
      this.height = height;
      this.color = color;

      World.add(world, this.body);
    }

    display(){
      rectMode(CENTER);
      noStroke();
      var ground_pos = this.body.position;
      fill(this.color);
      rect(ground_pos.x, ground_pos.y, this.width, this.height);
    }
}