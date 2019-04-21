class CircleScene extends Scene{
  constructor(){
    super("Circle Scene");
  }
  start(){
    this.camera = new Camera(20, "azure");// Add a camera game object
    this.camera.transform.position = new Vector2(1 / 2, 1 / 2); //Set its position
    this.hierarchy.push(this.camera);

    WallPrefab(this);

    var circleGO = new GameObject("Circle");
    circleGO.transform.position = new Vector2(4, 4);
    circleGO.transform.rotation = 0;
    var circleGeometry = new Circle(4);
    circleGO.components.push(new GeometryComponent(circleGeometry));
    var wallRenderer = new GeometryRendererComponent("black", circleGeometry);
    circleGO.components.push(wallRenderer);
    circleGO.renderer = wallRenderer;
    circleGO.components.push(new Collider(circleGeometry));
    //wall.components.push(new RotatorBehavior());
    this.hierarchy.push(circleGO);

    BallPrefab(this, new Vector2(0,0));

    NextPrefab(this);
  }
}