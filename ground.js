
class Make_me_some_ground_puny_machine {

    constructor(x, y, width, height){

        var options = {
            
            restitution: 0,
            isStatic: true   
        
       }

        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x, y, width, height, options)
        World.add(world, this.body)
        
    }

    display(){

        var pos = this.body.position
        //var rotation = this.body.rotation
        //var angle = this.body.angle
        //translate(pos.x, pos.y)
        //rotate(angle)
        rectMode(CENTER)
        fill(0, 255, 0)
        rect(pos.x, pos.y, this.width, this.height)

    }

}
