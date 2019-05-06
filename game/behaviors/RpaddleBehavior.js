class RpaddleBehavior extends Behavior {
  constructor() {
    super("rpaddle behave")
    this.speed = 20;
  }
  update(gameObject) {

    var paddleY = gameObject.transform.position.y;
    if (keys["e"]) {
      gameObject.transform.position.y += this.speed * Time.deltaTime; /// speed is in units/s * s
    }
    if (keys["d"]) {
      gameObject.transform.position.y -= this.speed * Time.deltaTime; /// speed is in units/s * s
    }
    if (paddleY > 7.5) {
      gameObject.transform.position.y -= this.speed * Time.deltaTime;
    }
    if (paddleY < -7.5) {
      gameObject.transform.position.y += this.speed * Time.deltaTime;
    } 

  }

}