function PaddlePrefab(scene){
    var wall = new GameObject("lPaddle");
    wall.transform.position = new Vector2(-8.5, 0);
    var wallGeometry = new AxisAlignedRectangle(1, 5);
    wall.components.push(new GeometryComponent(wallGeometry));
    var wallRenderer = new GeometryRendererComponent("blue", wallGeometry);
    wall.components.push(wallRenderer);
    wall.renderer = wallRenderer;
    wall.components.push(new Collider(wallGeometry));
    wall.components.push(new LpaddleBehavior());
    scene.hierarchy.push(wall);

    var wall = new GameObject("rPaddle");
    wall.transform.position = new Vector2(8.5, 0);
    var wallGeometry = new AxisAlignedRectangle(1, 5);
    wall.components.push(new GeometryComponent(wallGeometry));
    var wallRenderer = new GeometryRendererComponent("red", wallGeometry);
    wall.components.push(wallRenderer);
    wall.renderer = wallRenderer;
    wall.components.push(new Collider(wallGeometry));
    wall.components.push(new RpaddleBehavior());
    scene.hierarchy.push(wall);

    var wall = new GameObject("uPaddle");
    wall.transform.position = new Vector2(0, 8.5);
    var wallGeometry = new AxisAlignedRectangle(5, 1);
    wall.components.push(new GeometryComponent(wallGeometry));
    var wallRenderer = new GeometryRendererComponent("green", wallGeometry);
    wall.components.push(wallRenderer);
    wall.renderer = wallRenderer;
    wall.components.push(new Collider(wallGeometry));
    wall.components.push(new UpaddleBehavior());
    scene.hierarchy.push(wall);

    var wall = new GameObject("dPaddle");
    wall.transform.position = new Vector2(0, -8.5);
    var wallGeometry = new AxisAlignedRectangle(5, 1);
    wall.components.push(new GeometryComponent(wallGeometry));
    var wallRenderer = new GeometryRendererComponent("yellow", wallGeometry);
    wall.components.push(wallRenderer);
    wall.renderer = wallRenderer;
    wall.components.push(new Collider(wallGeometry));
    wall.components.push(new DpaddleBehavior());
    scene.hierarchy.push(wall);  
}