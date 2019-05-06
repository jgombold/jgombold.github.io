class MainPlayer extends Behavior{
  constructor(){
    super();
    this.speed = 10 ;
    this.score = 0;
  }
  start(){

  }
  update(gameObject){
    if(keys["a"] || keys["ArrowLeft"])
    {
      gameObject.transform.position.x -= this.speed * Time.deltaTime;
    }
    if(keys[","] || keys["ArrowUp"])
    {
      gameObject.transform.position.y += this.speed * Time.deltaTime;
    }
    if(keys["o"] || keys["ArrowDown"])
    {
      gameObject.transform.position.y -= this.speed * Time.deltaTime;
    }
    if(keys["e"]|| keys["ArrowRight"])
    {
      gameObject.transform.position.x += this.speed * Time.deltaTime;
    }

  }
  OnKeyDown(gameObject, key){
    if(key == " ")
    {
      SceneManager.currentScene.instantiate(Prefabs.getPrefabByName("Bullet"), gameObject.transform.position.copy());
    }

  }
}