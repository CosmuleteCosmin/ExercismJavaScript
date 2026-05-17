const allergies: string[] = ["eggs",
                          "peanuts",
                          "shellfish",
                          "strawberries",
                          "tomatoes",
                          "chocolate",
                          "pollen",
                          "cats"]

export class Allergies {
  allergies: string[] = [];
  
  constructor(allergenIndex: number) {
    let binary: string[]= [];
    while(allergenIndex > 0){
      binary.push((allergenIndex % 2).toString());
      allergenIndex = Math.floor(allergenIndex / 2);
    }
    
    for(let i = 0; i < 8; i++){
      if(binary[i] === "1")
        this.allergies.push(allergies[i]);
    }
  }

  public list(): string[] {
    return this.allergies;
  }

  public allergicTo(allergen: string): boolean {
    if(this.allergies.includes(allergen)){
      return true;
    }
    return false;
  }
  
}
