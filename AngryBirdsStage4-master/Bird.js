class Bird extends BaseClass {
  constructor(x,y,){
    super(x,y,50,50,options);
    var options={
      density:10000000000000000000000000000000
    }
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
 
      //slingshot.fly();
    super.display();
  
  }}
