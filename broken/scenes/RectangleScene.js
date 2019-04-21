//The main scene in our game
class RectangleScene extends Scene {
  constructor() {
    super("Bounce Scene"); //The name of our scene
  }
  start() {
    this.camera = new Camera(40, "azure");// Add a camera game object
    this.camera.transform.position = new Vector2(1 / 2, 1 / 2); //Set its position
    this.hierarchy.push(this.camera);

    WallPrefab(this);
    PaddlePrefab(this);

    var wall = new GameObject("Spice");
    wall.transform.position = new Vector2(-4,-4);
    var wallGeometry = new AxisAlignedRectangle(2, 2);
    wall.components.push(new GeometryComponent(wallGeometry));
    var wallRenderer = new GeometryRendererComponent("green", wallGeometry);
    wall.components.push(wallRenderer);
    wall.renderer = wallRenderer;
    wall.components.push(new Collider(wallGeometry));
    this.hierarchy.push(wall);
    //console.log(this);





    /*var wall = new GameObject("Rotating Wall");
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
    */

    /*wall = new GameObject("Rotating Wall 2");
    wall.transform.position = new Vector2(-4,4);
    wall.transform.rotation = 0;
    wallGeometry = new AxisAlignedRectangle(6, 6);
    wall.components.push(new GeometryComponent(wallGeometry));
    wallRenderer = new GeometryRendererComponent("blue", wallGeometry);
    wall.components.push(wallRenderer);
    wall.renderer = wallRenderer;
    wall.components.push(new Collider(wallGeometry));
    //wall.components.push(new RotatorBehavior());
    this.hierarchy.push(wall);*/ 
    
    BallPrefab(this, new Vector2(0,0));
    //BallPrefab(this, new Vector2(-2,-2));
    

    NextPrefab(this);

  }
}