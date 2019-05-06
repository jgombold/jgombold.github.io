class GameControllerBehavior extends Behavior {
  constructor() {
    super();
    this.time = 0;
    this.maxTime = 10;
    this.maxDeadTime = 2;
    this.baddiePrefab = Prefabs.getPrefabByName("Baddie");
    this.xRange = 3;
    this.STATE_PLAYING = 0;
    this.STATE_DEAD = 1;
    this.score = 0;
    this.gameState = this.STATE_PLAYING;
    this.counter = 10;
  }
  start() {

  }
  update(gameObject) {
    this.time += Time.deltaTime;
    if (this.gameState == this.STATE_PLAYING) {
      if (this.counter == 10) {
        console.log(gameObject);
        SceneManager.currentScene.instantiate(Prefabs.getPrefabByName("Ball"), new Vector2(0, 0));
        this.counter = 1;
      }
      /*if (gameObject.renderer.color == "azure"){
        SceneManager.currentScene.instantiate(Prefabs.getPrefabByName("Ball"), new Vector2(0, 0));
      }*/
      /*if (this.time > this.maxTime) {
        //SceneManager.currentScene.instantiate(this.baddiePrefab.copy(), new Vector2((Math.random() * 2 - 1) * this.xRange, 0));
        //SceneManager.currentScene.instantiate(Prefabs.getPrefabByName("Ball"), new Vector2(0, 0));
        this.time -= this.maxTime;
      }*/
      //SceneManager.currentScene.instantiate(Prefabs.getPrefabByName("Ball"), new Vector2(0, 0));
    }
    else if(this.gameState == this.STATE_DEAD){
      if(this.time > this.maxDeadTime){
        SceneManager.loadScene(SceneManager.getSceneByName("End Scene"));
      }
    }
  }
  destroyMainCharacter(mainCharacter) {
    SceneManager.currentScene.destroy(mainCharacter);

    let gameObject = new GameObject();
    let particleSystemComponent = new ParticleSystemComponent("white");
     
    gameObject.components.push(particleSystemComponent);
    SceneManager.currentScene.instantiate(gameObject, mainCharacter.transform.position)
    this.gameState = this.STATE_DEAD;
    this.time = 0;
  }
}