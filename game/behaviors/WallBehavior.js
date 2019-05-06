class WallBehavior extends Behavior{
    constructor(){
      super();
    }
    start(){
  
    }
    update(gameObject){
    }
    onCollision(collider, gameObject, otherCollider, otherGameObject) {
      if(otherGameObject.name == "Ball")
      {
        SceneManager.currentScene.instantiate(Prefabs.getPrefabByName("ParticleSystem"), otherGameObject.transform.position)
        SceneManager.currentScene.destroy(otherGameObject);
        SceneManager.currentScene.getGameObjectByName("GameController").getComponent(GameControllerBehavior).score++;
      }
    }
  }