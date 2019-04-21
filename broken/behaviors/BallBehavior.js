class BallBehavior extends Behavior {
  constructor(scene, hierarchy) {
    super("Ball Behavior"); //Component name
    this.speed = 30;//Speed of the character
    this.direction = 1.5;
    this.hits = 0;
    this.scene = scene;
    this.hierarchy = hierarchy;

    this.counter = 50;
  }
  update(gameObject) {
    gameObject.transform.position.x += Math.cos(this.direction) * this.speed * Time.deltaTime;
    gameObject.transform.position.y += Math.sin(this.direction) * this.speed * Time.deltaTime;
    this.counter--;
  }
  onCollision(collider, gameObject, otherCollider, otherGameObject) {
    //console.log(this.hits++);

    //How to figure out the new direction of the ball?

    var x = Math.cos(this.direction);
    var y = Math.sin(this.direction);

    if (otherCollider.Geometry instanceof Circle) {
      var circleNormal = gameObject.transform.position.copy().subtract(otherGameObject.transform.position);
      circleNormal.normalize();
      var velocityVector = new Vector2(x, y);
      var scalar = 2 * velocityVector.dot(circleNormal);
      var reflectionVector = velocityVector.subtract(circleNormal.multiply(scalar));
      this.direction = Math.atan2(reflectionVector.y, reflectionVector.x);




      //console.log(circleNormal);
    }
    else if (otherCollider.Geometry instanceof AxisAlignedRectangle) {
      var name = otherGameObject.name;
      var GObjectColor = otherGameObject.renderer.color;
      console.log(GObjectColor);
      if (name == "uPaddle") {
        console.log("hit the up paddle");
      }
      if (name == "dPaddle") {
        console.log("hit the down paddle");
      }
      if (name == "lPaddle") {
        console.log("hit the left paddle");
      }
      if (name == "rPaddle") {
        console.log("hit the right paddle");
      }
      if (name == "Wall" || name == "Wall2" || name == "Wall3" || name == "Wall4") {
        console.log("hit the wall");
      }
      if (name == "Spice") {
        if (this.counter < 0 && GObjectColor == "green") {
          BallPrefab(this.scene, new Vector2(0,0));
          this.counter = 1000000;
        }
        
        //BallPrefab(this.scene, new Vector2(0,0));
        console.log("hit the extra");
        return;
      }

      let newTransform1 = gameObject.transform.copy();

      //Backup to previous position

      //Move into the model space of geo2
      //First by translating
      //...
      let newTransform2 = otherGameObject.transform.copy();
      //...

      var tempRotation = newTransform2.rotation;
      //Then by rotation
      //...
      //My axis aligned rectangle is now centered about the origin and is not rotated at all.

      //Figure out which side we collided with
      var newX = newTransform1.position.x / otherCollider.Geometry.width;
      var newY = newTransform1.position.y / otherCollider.Geometry.height;
      var normal = new Vector2(newX, newY);
      if (Math.abs(normal.x) < Math.abs(normal.y)) {
        normal.x = 0;
      }
      else {
        normal.y = 0;
      }
      normal.normalize();

      //Figure out the reflection angle
      var velocityVector = new Vector2(x, y);
      velocityVector.rotate(-tempRotation);
      var scalar = 2 * velocityVector.dot(normal);
      var reflectionVector = velocityVector.subtract(normal.multiply(scalar));
      this.direction = Math.atan2(reflectionVector.y, reflectionVector.x);

      //this.direction has the direction in model space.
      //Rotate it back into world space
      //..
      
      //Move forward in time so we don't double hit a rotating object
      //...

      //Uncomment the following to add some randomness 
      //var rand = Math.random() * 2 - 1
      //rand *= .1;
      //this.direction += rand;
    }

  }
}