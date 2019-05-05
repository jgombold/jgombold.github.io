class TitleScene extends Scene{
  constructor(){
    super("Title Scene");    
  }
  start(){
    this.hierarchy = [];

    this.camera = new Camera(20, "lightgreen");// Add a camera game object
    this.camera.transform.position = new Vector2(1 / 2, 1 / 2); //Set its position


    //Push all our game objects into the scene
    this.hierarchy.push(this.camera);

    var guiText = new GameObject("GUI Text");
    var textComponent = new GUITextComponent("Physics Test Game.", "black", "30px Arial");
    textComponent.justify = "left";
    guiText.components.push(textComponent);
    guiText.rendererGUI = textComponent;
    guiText.transform.position = new Vector2(100, 100);
    var textBehavior = new TextBehavior();
    guiText.components.push(textBehavior);

    this.hierarchy.push(guiText);

    guiText = new GameObject("GUI Text 2");
    textComponent = new GUITextComponent("Push space to start and move between scenes.", "gray", "30px Arial");
    textComponent.justify = "left";
    guiText.components.push(textComponent);
    guiText.rendererGUI = textComponent;
    guiText.transform.position = new Vector2(100, 150);
    this.hierarchy.push(guiText);

    NextPrefab(this);
  }
  
}