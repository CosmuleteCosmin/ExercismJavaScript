export class GradeSchool {
  private school: {[key: number]: string[]} ={};
  
  roster():{[key:number]: string[]} {
    return JSON.parse(JSON.stringify(this.school));
  }

  add(name:string, grade:number) {
    for(const key in this.school){
      const i = this.school[key].indexOf(name)
      if(i !== -1){
        this.school[key].splice(i, 1);
        break;
      }
    }
    
    if (!this.school[grade]) {
      this.school[grade] = [];
    }
    this.school[grade].push(name);
    this.school[grade].sort();
  }

  grade(value:number) {
    return this.school[value]? JSON.parse(JSON.stringify(this.school[value])) : [];
  }
}
