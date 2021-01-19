class SlingShot{
    constructor(bodyA1, pointB){
        var options = {
            bodyA: bodyA1,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 200,20);
        image(this.sling2, 170,20);
        

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(5);

             if(pointA.x < 220){

                image(this.sling3, pointA.x-30, pointA.y-6, 15,30);

                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+25, pointB.y);
             } else {

                image(this.sling3, pointA.x+20, pointA.y-6, 15,30);

                line(pointA.x+20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+20, pointA.y, pointB.x+25, pointB.y);
             }
        }

    }
    
}