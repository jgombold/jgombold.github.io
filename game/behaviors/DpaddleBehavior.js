class DpaddleBehavior extends Behavior {
  constructor() {
    super("dpaddle behave")
    this.speed = 20;
  }
  update(gameObject) {
    var paddleX = gameObject.transform.position.x;
    if (keys["k"]) {
      gameObject.transform.position.x += this.speed * Time.deltaTime; /// speed is in units/s * s
    }
    if (keys["j"]) {
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