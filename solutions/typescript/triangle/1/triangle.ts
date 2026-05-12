export class Triangle {
  a:number;
  b:number;
  c:number;
  constructor(...sides :number[]) {
    this.a = sides[0];
    this.b = sides[1];
    this.c = sides[2];
  }

  get isTriangle(){
    if(this.a + this.b < this.c || this.b + this.c < this.a || this.a + this.c < this.b)
      return false;
    if(this.a === 0 || this.b === 0 || this.c === 0)
      return false
    return true; 
  }
  
  get isEquilateral() {
    if(this.a === this.b && this.b === this.c && this.isTriangle)
      return true;
    return false;
  }

  get isIsosceles() {
    if((this.a === this.b || this.b === this.c || this.c === this.a) && this.isTriangle)
      return true;
    return false;
  }

  get isScalene() {
    if((this.a !== this.b && this.b !== this.c && this.c !== this.a) && this.isTriangle)
      return true; 
    return  false;
  }
}
