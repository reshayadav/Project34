class Pendulum{
    constructor(x,y,r){

        var options={
            restitution :1,
            friction :0,
            frictionAir :0.0,
            slop :1,
           inertia : Infinity
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x,y,r,options);
        World.add(world, this.body);
    }

    display(){

        var angle = this.body.angle;
        var pos = this.body.position;
        push ();
        
        translate(pos.x,pos.y);
        rotate (angle);
        fill (160);
        ellipseMode(RADIUS);
        ellipse(0,0,30,30)
        pop ();
    }
}