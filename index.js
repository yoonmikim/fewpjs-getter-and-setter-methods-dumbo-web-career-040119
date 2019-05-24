// Add your Circle class here
class Circle {
  
  constructor(radius) {
    this.radius = radius;
  }
  
  get diameter() {
    return this.radius * 2;
  }
  
  set diameter(diameter) {
    this.radius = diameter / 2
  }
  
  get circumference(){
    return this.radius * 2 * Math.PI
  }
  
  set circumstance(diameter) {
    this.radius = diameter / 2
  }

  
  get area(){
    return this.radius * this.radius * Math.PI
  }
  
  
}