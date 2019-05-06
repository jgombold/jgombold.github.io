class UpaddleBehavior extends Behavior {
  constructor() {
    super("upaddle behave")
    this.speed = 20;
  }
  update(gameObject) {

    var paddleX = gameObject.transform.position.x;
    if (keys["h"]) {
      gameObject.transform.position.x += this.speed * Time.deltaTime; /// speed is in units/s * s
    }
    if (keys["g"]) {
      gameObject.transform.position.x -= this.speed * Time.deltaTime; /// speed is in units/s * s
    }
    if (paddleX > 7.5) {
      gameObject.transform.position.x -= this.speed * Time.deltaTime;
    }
    if (paddleX < -7.5) {
      gameObject.transform.position.x += this.speed * Time.deltaTime;
    } 
    
  }

}