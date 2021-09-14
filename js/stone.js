class Stone{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        var stone_option = {
            restitution: 0.5
        }
        this.body = Matter.Bodies.circle(x,y,w,h,stone_option);
        World.add(world,this.body);
    }
    show(){
        push()
        translate(this.body.position.x,this.body.position.y)
        ellipseMode(CENTER);
        ellipse(0,0,this.w,this.h)
        pop()
    }
}
