function BallPrefab(scene, location, color){
  this.scene = scene;
  this.color = color;
  if (this.color == null) {
    this.color = "red";
  }
  var ball = new GameObject("Ball");
  ball.transform.position = location;
  var ballGeometry = new Circle(1);
  // var ballGeometry = new Vector2();
  ball.components.push(new GeometryComponent(ballGeometry));
  let renderer = new GeometryRendererComponent(this.color, ballGeometry);
  ball.components.push(renderer);
  ball.renderer = renderer;
  ball.components.push(new BallBehavior(scene, this.hierarchy));
  ball.components.push(new Collider(ballGeometry));
  scene.hierarchy.push(ball);
}