class Base{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        var Base_option = {
            isStatic: true
        }
        this.body = Matter.Bodies.rectangle(x,y,w,h,Base_option);
        World.add(world,this.body);
    }
    show(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER);
        rect(0,0,this.w,this.h)
        pop()
    }
}