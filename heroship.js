class heroship extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("mfalconshot.webp");
      
    }
  
    display() {
      
  
      super.display();
  
      if (keyDown("right")){
        ghost.velocityX=3;
      }
      if (keyDown("left")){
        ghost.velocityX=-3;
      }
      
     
      }
    }
  
  