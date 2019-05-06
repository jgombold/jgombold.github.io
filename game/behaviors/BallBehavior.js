class BallBehavior extends Behavior {
  constructor() {
    super("Ball Behavior"); //Component name
    this.speed = 17;//Speed of the character
    this.direction = 1.5;
    this.hits = 0;
    this.upadtrack = 0;
    this.dpadtrack = 0;
    this.lpadtrack = 0;
    this.rpadtrack = 0;

    this.counter = 50;
  }
  update(gameObject) {
    gameObject.transform.position.x += Math.cos(this.direction) * this.speed * Time.deltaTime;
    gameObject.transform.position.y += Math.sin(this.direction) * this.speed * Time.deltaTime;
    this.counter--;
  }
  onCollision(collider, gameObject, otherCollider, otherGameObject) {
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
      var gameColor = gameObject.renderer.color;
      var GObjectColor = otherGameObject.renderer.color;
      console.log(GObjectColor);
      if (name == "uPaddle") {
        this.upadtrack = 1;
        this.dpadtrack = 0;
        this.lpadtrack = 0;
        this.rpadtrack = 0;
        console.log("hit the up paddle");
      }
      if (name == "dPaddle") {
        this.upadtrack = 0;
        this.dpadtrack = 1;
        this.lpadtrack = 0;
        this.rpadtrack = 0;
        console.log("hit the down paddle");
      }
      if (name == "lPaddle") {
        this.upadtrack = 0;
        this.dpadtrack = 0;
        this.lpadtrack = 1;
        this.rpadtrack = 0;
        console.log("hit the left paddle");
      }
      if (name == "rPaddle") {
        this.upadtrack = 0;
        this.dpadtrack = 0;
        this.lpadtrack = 0;
        this.rpadtrack = 1;
        console.log("hit the right paddle");
      }
      if ((name == "Wall" || name == "Wall2" || name == "Wall3" || name == "Wall4") && this.upadtrack == 1) {
        console.log("hit the wall");
        SceneManager.currentScene.instantiate(Prefabs.getPrefabByName("ParticleSystem"), gameObject.transform.position);
        uScore++;
        //SceneManager.currentScene.getGameObjectByName("Ball").getComponent(BallBehavior).score++;
        //SceneManager.currentScene.getGameObjectByName("Ball2").getComponent(BallBehavior).score++;
        SceneManager.currentScene.destroy(gameObject);
      }
      if ((name == "Wall" || name == "Wall2" || name == "Wall3" || name == "Wall4") && this.dpadtrack == 1) {
        console.log("hit the wall");
        SceneManager.currentScene.instantiate(Prefabs.getPrefabByName("ParticleSystem"), gameObject.transform.position);
        dScore++;
        SceneManager.currentScene.destroy(gameObject);
      }
      if ((name == "Wall" || name == "Wall2" || name == "Wall3" || name == "Wall4") && this.lpadtrack == 1) {
        console.log("hit the wall");
        SceneManager.currentScene.instantiate(Prefabs.getPrefabByName("ParticleSystem"), gameObject.transform.position);
        lScore++;
        SceneManager.currentScene.destroy(gameObject);
      }
      if ((name == "Wall" || name == "Wall2" || name == "Wall3" || name == "Wall4") && this.rpadtrack == 1) {
        console.log("hit the wall");
        SceneManager.currentScene.instantiate(Prefabs.getPrefabByName("ParticleSystem"), gameObject.transform.position);
        rScore++;
        SceneManager.currentScene.destroy(gameObject);
      }   
      if (name == "Spice") {
        var randNumm = Math.floor(Math.random() * 4) + 1;
        var randColor = "red";
        if (randNumm == 1) {
          randColor = "green";
        }
        if (randNumm == 2) {
          randColor = "black";          
        }
        if (randNumm == 3) {
          randColor = "orange";          
        }
        if (randNumm == 4) {
          randColor = "magenta";
          
        }
        if (this.counter < 0 && GObjectColor == "green" && gameColor == "red") {
          //this.instantiate(Prefabs.getPrefabByName("Ball"), new Vector2(0, 0));
          SceneManager.currentScene.instantiate(Prefabs.getPrefabByName("Ball2"), new Vector2(0, 0));
          otherGameObject.transform.position.x = (Math.random() * 2 - 1) * 7;
          otherGameObject.transform.position.y = (Math.random() * 2 - 1) * 7;
          otherGameObject.renderer.color = randColor;
          this.counter = 100;
        }
        if (GObjectColor == "black" && (gameColor == "red") || gameColor == "gray") {
          otherGameObject.transform.position.x = (Math.random() * 2 - 1) * 7;
          otherGameObject.transform.position.y = (Math.random() * 2 - 1) * 7;
          otherGameObject.renderer.color = randColor;
          gameObject.renderer.color = "azure";
        }
        if (GObjectColor == "orange" && (gameColor == "red") || gameColor == "gray") {
          otherGameObject.transform.position.x = (Math.random() * 2 - 1) * 7;
          otherGameObject.transform.position.y = (Math.random() * 2 - 1) * 7;
          otherGameObject.renderer.color = randColor;
          this.speed += 5;
        }
        if (GObjectColor == "magenta" && (gameColor == "red") || gameColor == "gray") {
          otherGameObject.transform.position.x = (Math.random() * 2 - 1) * 7;
          otherGameObject.transform.position.y = (Math.random() * 2 - 1) * 7;
          otherGameObject.renderer.color = randColor;
          this.speed -= 5;
        }
        
        //BallPrefab(this.scene, new Vector2(0,0));
        console.log("hit the extra");
        return;
      }

      let newTransform1 = gameObject.transform.copy();
      newTransform1.position.x -= Math.cos(this.direction) * this.speed * Time.deltaTime;
      newTransform1.position.y -= Math.sin(this.direction) * this.speed * Time.deltaTime;
      newTransform1.position.subtract(otherGameObject.transform.position);
      let newTransform2 = otherGameObject.transform.copy();
      newTransform2.position.subtract(otherGameObject.transform.position);




      var tempRotation = newTransform2.rotation;
      newTransform1.position.rotate(-newTransform2.rotation);
      newTransform2.rotation = 0;

      //My axis aligned rectangle is now centered about the origin and is not rotated at all.

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

      var velocityVector = new Vector2(x, y);
      //var tempCheck = normal.dot(velocityVector);
      //if (tempCheck > 0) {
       // return;

      //}
      velocityVector.rotate(-tempRotation);
      var scalar = 2 * velocityVector.dot(normal);
      var reflectionVector = velocityVector.subtract(normal.multiply(scalar));
      this.direction = Math.atan2(reflectionVector.y, reflectionVector.x);

      this.direction += tempRotation;

      gameObject.transform.position.x += Math.cos(this.direction) * this.speed * Time.deltaTime;
      gameObject.transform.position.y += Math.sin(this.direction) * this.speed * Time.deltaTime;




      /*var rectangle = otherCollider.Geometry;

      if (rectangle.width > rectangle.height) {
        y *= -1;
      }
      else {
        x *= -1;
      }*/



      //this.direction = Math.atan2(y, x);

      var rand = Math.random() * 2 - 1
      rand *= .1;
      this.direction += rand;
    }

  }
}