class TextBehavior2 extends Behavior{
    constructor(){
      super();
      this.frames  = 0;
    }
    start(){
  
    }
    update(gameObject){
      this.frames++;
      let guiText = gameObject.getComponent(GUITextComponent);
      //guiText.text = "Score: " +  SceneManager.currentScene.getGameObjectByName("Ball").getComponent(BallBehavior).score;
      guiText.text = "Red Score: " +  rScore;;
  
    }
  }