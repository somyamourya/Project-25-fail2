class Paper{
    constructor(x,y,r) {
    
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    
    this.x=x;
    this.y=y;
    this.r=r
    this.body=Bodies.circle(this.x, this.y ,this.r/2,options);
    this.image=loadImage("paper.png");
    this.width=70;
    this.height=70;
    World.add(world,this.body);
    }
    
    display() 
    {
        var PaperObject=this.body.position;
        push();
        translate(PaperObject.x,PaperObject.y);
        imageMode(CENTER);
        stroke("violet");
        strokeWeight(1);
        fill("purple");
        image(this.image,0,0,this.width,this.height);
        pop();

    }
    

    };

 

