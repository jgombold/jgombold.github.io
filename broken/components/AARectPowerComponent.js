class AARectPowerComponent extends Geometry{
  constructor(aARectPower) {
    super();
    
    //If we received a parameter, use that rectangle
    if (aARectPower)
      this.Geometry = aARectPower;
    //Otherwise, create a new rectangle
    else
      this.Geometry = new AARectPower();
  }
}