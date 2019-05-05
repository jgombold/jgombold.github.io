//The main scene in our game
class RectangleScene extends Scene {
  constructor() {
    super("Bounce Scene"); //The name of our scene
  }
  start() {
    

    var camera2 = new Camera(20, "green");
    camera2.transform.position = new Vector2(1/2,1/2);
    camera2.getComponent(CameraComponent).screenUL = new Vector2(.1, .1);
    camera2.getComponent(CameraComponent).size = new Vector2(.1, .1);
    camera2.target = "miniMap";
    this.hierarchy.push(camera2);

    this.camera = new Camera(20, "azure");// Add a camera game object
    this.camera.transform.position = new Vector2(1 / 2, 1 / 2); //Set its position
    this.hierarchy.push(this.camera);

    WallPrefab(this);

    var wall = new GameObject("Rotating Wall");
    wall.transform.position = new Vector2(4,4);
    wall.transform.rotation = 0;
    var wallGeometry = new AxisAlignedRectangle(4, 4);
    wall.components.push(new GeometryComponent(wallGeometry));
    var wallRenderer = new GeometryRendererComponent("black", wallGeometry);
    wall.components.push(wallRenderer);
    wall.renderer = wallRenderer;
    wall.components.push(new Collider(wallGeometry));
    //wall.components.push(new RotatorBehavior());
    this.hierarchy.push(wall);

   

    //BallPrefab(this, new Vector2(0,0));
    var ball = Prefabs.getPrefabByName("Ball");
    this.instantiate(ball, new Vector2(0,0))

    NextPrefab(this);

  }
}