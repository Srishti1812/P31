class Drops{
    constructor(x, y){
        var options = {
            isStatic : false,
            restitution:0.3,
            friction:0.5
        }
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS)
        fill("blue");
        ellipse(pos.x, pos.y, 5);
    }

    update(){
        if(this.body.position.y> height){
            Matter.Body.setPosition(this.body, {x: random(0,400), y: random(0,400)})
        }
    }
}
