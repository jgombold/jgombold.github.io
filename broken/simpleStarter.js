
//The behavior script for our main character
var Time = {}                                     //Stores information about time that is available to our game
var msBetweenFrames = 1000 / 70;                //Time in milliseconds between frames
Time.deltaTime = msBetweenFrames / 1000;        //Time in seconds between frames.

//Setup the canvas variables
var canvas = document.getElementById("canv");
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

var width = canvas.width;
var height = canvas.height;


var ctx = canvas.getContext("2d");


var allScenes = [];

class SceneManager{} //SceneManager will only have static functions, so we don't declare anything inside the class definition

SceneManager.loadScene = function(scene){
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

//Code to start the game
function main() {
  titleScene = new TitleScene();
  gravityScene = new GravityScene();
  rectangleScene = new RectangleScene();
  circleScene = new CircleScene();
  endScene = new EndScene();

  titleScene.next = rectangleScene;
  //gravityScene.next = rectangleScene;
  rectangleScene.next = circleScene;
  circleScene.next = endScene;
  endScene.next = titleScene;
  
  allScenes.push(titleScene);
  allScenes.push(gravityScene);
  allScenes.push(rectangleScene); 
  allScenes.push(circleScene);
  allScenes.push(endScene);
  
  SceneManager.loadScene(titleScene);
  
  setInterval(timer, msBetweenFrames);  //Start the main timer to be called 30 times a second (every 33.3ms)


}
