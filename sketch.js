const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies


var engine, world, object, ground, side1, side2, roof

function setup(){
  createCanvas(800, 400)

  engine = Engine.create()
  world = engine.world

  box_1 = new Make_me_a_box_puny_machine(200, 300, 50, 50)

  box_2 = new Make_me_a_box_puny_machine(240, 100, 50, 50)

  box_3 = new Make_me_a_box_puny_machine(100, 50, 50, 60)

  box_4 = new Make_me_a_box_puny_machine(200, 300, 50, 50)

  box_5 = new Make_me_a_box_puny_machine(40, 270, 80, 50)

  box_6 = new Make_me_a_box_puny_machine(270, 200, 50, 50)

  box_7 = new Make_me_a_box_puny_machine(50, 400, 50, 50)

  box_8 = new Make_me_a_box_puny_machine(420, 200, 50, 50)

  box_9 = new Make_me_a_box_puny_machine(200, 400, 50, 50)

  ground = new Make_me_some_ground_puny_machine(400, 390, 800, 20)

}



function draw(){
  background(0)    
  Engine.update(engine)

  box_1.display()
  box_2.display()
  box_3.display()
  box_4.display()
  box_5.display()
  box_6.display()
  box_7.display()
  box_8.display()
  box_9.display()
  
  ground.display()

 // object.position.x = 200
 // object.position.y = 200

 
}      
