class BulletBehavior extends Behavior{
  constructor(){
    super();
    this.speed = 20;
  }
  start(){

  }
  update(gameObject){
    gameObject.transform.position.y += this.speed * Time.deltaTime;
  }
  onCollision(collider, gameObject, otherCollider, otherGameObject) {
    if(otherGameObject.name == "Baddie")
    {
      SceneManager.currentScene.instantiate(Prefabs.getPrefabByName("ParticleSystem"), otherGameObject.transform.position)
      SceneManager.currentScene.destroy(otherGameObject);
      SceneManager.currentScene.getGameObjectByName("GameController").getComponent(GameControllerBehavior).score++;
    }
  }
}