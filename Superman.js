class Superman{
    constructor(x, y, width, height) {
        var options = {
           
           
        density : 1,
        frictionair : 1,
            isStatic:true
           
        }
        this.image=loadImage("Superhero-01.png")
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.x=x;
        this.y=y;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        imageMode(CENTER);
        image(this.image,0,0,200,200);
        pop();
      }
}


