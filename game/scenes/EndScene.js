class EndScene extends Scene{
  constructor(){
    super("End Scene");    
  }
  start(){
    this.hierarchy = [];

    this.camera = new Camera(20, "azure");// Add a camera game object
    this.camera.transform.position = new Vector2(1 / 2, 1 / 2); //Set its position


    //Push all our game objects into the scene
    this.hierarchy.push(this.camera);

    var guiText = new GameObject("GUI Text");
    var textComponent = new GUITextComponent("Game Over.", "black", "30px Arial");
    textComponent.justify = "left";
    guiText.components.push(textComponent);
    guiText.rendererGUI = textComponent;
    guiText.transform.position = new Vector2(100, 100);

    this.hierarchy.push(guiText);

    /*
    guiText = new GameObject("GUI Text 2");
    textComponent = new GUITextComponent("Click to restart.", "gray", "30px Arial");
    textComponent.justify = "left";
    guiText.components.push(textComponent);
    guiText.rendererGUI = textComponent;
    guiText.transform.position = new Vector2(100, 150);
    this.hierarchy.push(guiText);
    */

    if(uScore > dScore || uScore > lScore || uScore > rScore){
    guiText = new GameObject("GUI Text 2");
    textComponent = new GUITextComponent("Green is the winner", "gray", "30px Arial");
    textComponent.justify = "left";
    guiText.components.push(textComponent);
    guiText.rendererGUI = textComponent;
    guiText.transform.position = new Vector2(100, 150);
    this.hierarchy.push(guiText);

    }
    else if(dScore > uScore || dScore > lScore || dScore > rScore){
    guiText = new GameObject("GUI Text 2");
    textComponent = new GUITextComponent("Yellow is the winner", "gray", "30px Arial");
    textComponent.justify = "left";
    guiText.components.push(textComponent);
    guiText.rendererGUI = textComponent;
    guiText.transform.position = new Vector2(100, 150);
    this.hierarchy.push(guiText);
      
    }
    else if(lScore > dScore || lScore > uScore || lScore > rScore){
      guiText = new GameObject("GUI Text 2");
    textComponent = new GUITextComponent("Blue is the winner", "gray", "30px Arial");
    textComponent.justify = "left";
    guiText.components.push(textComponent);
    guiText.rendererGUI = textComponent;
    guiText.transform.position = new Vector2(100, 150);
    this.hierarchy.push(guiText);
      
    }
    else if(rScore > lScore || rScore > uScore || rScore > dScore){
      guiText = new GameObject("GUI Text 2");
    textComponent = new GUITextComponent("Red is the winner", "gray", "30px Arial");
    textComponent.justify = "left";
    guiText.components.push(textComponent);
    guiText.rendererGUI = textComponent;
    guiText.transform.position = new Vector2(100, 150);
    this.hierarchy.push(guiText);
      
    }
    

    NextPrefab(this);
  }

}