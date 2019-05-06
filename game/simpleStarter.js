
//The behavior script for our main character
//var Time = {}                                     //Stores information about time that is available to our game
var msBetweenFrames = 1000 / 60;                //Time in milliseconds between frames
Time.deltaTime = msBetweenFrames / 1000;        //Time in seconds between frames.

//Setup the canvas variables
var canvas = document.getElementById("canv");
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

var width = canvas.width;
var height = canvas.height;

var uScore = 0;
var dScore = 0;
var lScore = 0;
var rScore = 0;

var globalCtx = canvas.getContext("2d");


var allScenes = [];

class SceneManager {
  static currentScene = {};
  static getSceneByName(name) {
    for (let i = 0; i < allScenes.length; i++) {
      if (allScenes[i].name == name)
        return allScenes[i];
    }
    return null;
  }
  static loadScene(scene) {
    SceneManager.currentScene = scene;
    console.log("Changing scene to " + scene.name);

    scene.hierarchy = [];
    updateListeners = [];
    scene.start(); //Start the main scene
    updateListeners.push(scene); //Have the scene listen to events

    //Tell the debugger about us if we are in debugging mode
    if (typeof app != "undefined") {
      app.loadScenes();
      app.changeSceneEvent(scene);
    }
  }
}



//Code to start the game
function main() {
  titleScene = new TitleScene();
  rectangleScene = new RectangleScene();
  endScene = new EndScene();

  titleScene.next = rectangleScene;
  rectangleScene.next = endScene;
  endScene.next = titleScene;

  allScenes.push(titleScene);
   allScenes.push(rectangleScene);
  allScenes.push(endScene);

  //Setup our prefabs
  var ball = new GameObject("Ball");
  var ballGeometry = new Circle(.5);
  ball.components.push(new GeometryComponent(ballGeometry));
  var renderer = new GeometryRendererComponent("red", ballGeometry);
  ball.components.push(renderer);
  ball.renderer = renderer;
  ball.components.push(new BallBehavior(this.hierarchy));
  ball.components.push(new Collider(ballGeometry));
  Prefabs.addPrefab(ball);

  var ball = new GameObject("Ball2");
  var ballGeometry = new Circle(.5);
  ball.components.push(new GeometryComponent(ballGeometry));
  var renderer = new GeometryRendererComponent("gray", ballGeometry);
  ball.components.push(renderer);
  ball.renderer = renderer;
  ball.components.push(new BallBehavior(this.hierarchy));
  ball.components.push(new Collider(ballGeometry));
  Prefabs.addPrefab(ball);

  ball = new GameObject("Bullet");
  ballGeometry = new Circle(.1);
  ball.components.push(new GeometryComponent(ballGeometry));
  renderer = new GeometryRendererComponent("yellow", ballGeometry);
  ball.components.push(renderer);
  ball.renderer = renderer;
  ball.components.push(new BulletBehavior(this.hierarchy));
  ball.components.push(new Collider(ballGeometry));
  Prefabs.addPrefab(ball);

  ball = new GameObject("BadBullet");
  ballGeometry = new Circle(.1);
  ball.components.push(new GeometryComponent(ballGeometry));
  renderer = new GeometryRendererComponent("azure", ballGeometry);
  ball.components.push(renderer);
  ball.renderer = renderer;
  ball.components.push(new BadBulletBehavior(this.hierarchy));
  ball.components.push(new Collider(ballGeometry));
  Prefabs.addPrefab(ball);

  var ball = new GameObject("Baddie");
  var ballGeometry = new Circle(.5);
  ball.components.push(new GeometryComponent(ballGeometry));
  renderer = new GeometryRendererComponent("red", ballGeometry);
  ball.components.push(renderer);
  ball.renderer = renderer;
  ball.components.push(new BaddieBehavior(this.hierarchy));
  ball.components.push(new Collider(ballGeometry));
  Prefabs.addPrefab(ball);

  var wall = new GameObject("MainPlayer");
  wall.transform.position = new Vector2(0, -4);
  wall.transform.rotation = 0;
  var wallGeometry = new AxisAlignedRectangle(1, 1);
  wall.components.push(new GeometryComponent(wallGeometry));
  var wallRenderer = new GeometryRendererComponent("white", wallGeometry);
  wall.components.push(wallRenderer);
  wall.renderer = wallRenderer;
  wall.components.push(new Collider(wallGeometry));
  wall.components.push(new MainPlayer());
  Prefabs.addPrefab(wall);

  var wall = new GameObject("Spice");
  wall.transform.position = new Vector2(-4,-4);
  var wallGeometry = new AxisAlignedRectangle(2, 2);
  wall.components.push(new GeometryComponent(wallGeometry));
  var wallRenderer = new GeometryRendererComponent("green", wallGeometry);
  wall.components.push(wallRenderer);
  wall.renderer = wallRenderer;
  wall.components.push(new Collider(wallGeometry));
  Prefabs.addPrefab(wall);

  var particleSystem = new GameObject("ParticleSystem");
  var particleSystemComponent = new ParticleSystemComponent();
  particleSystem.components.push(particleSystemComponent);
  Prefabs.addPrefab(particleSystem);


  SceneManager.loadScene(titleScene);

  setInterval(timer, msBetweenFrames);  //Start the main timer to be called 30 times a second (every 33.3ms)


}
