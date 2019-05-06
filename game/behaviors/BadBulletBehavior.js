class BadBulletBehavior extends Behavior{
  constructor(){
    super();
    this.speed = 20;
  }
  start(){

  }
  update(gameObject){
    gameObject.transform.position.y -= this.speed * Time.deltaTime;
  }

  onCollision(collider, gameObject, otherCollider, otherGameObject) {
    if(otherGameObject.name == "MainPlayer")
    {
      SceneManager.currentScene.getGameObjectByName("GameController").getComponent(GameControllerBehavior).destroyMainCharacter(otherGameObject);

    }
  }
}