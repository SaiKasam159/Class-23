
class Make_me_a_box_puny_machine {

    constructor(x, y, width, height){

        var options = {
            
            restitution: 1,
            friction: 0.3,
            density: 1,
            //setStatic: false   
        
        }

        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x, y, width, height, options)
        World.add(world, this.body)
        
    }

    display(){

        var pos = this.body.position
        //var rotation = this.body.rotation
        var angle = this.body.angle
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill(0, 20, 200)
        rect(pos.x, pos.y, this.width, this.height, pop())
        

    }

}
