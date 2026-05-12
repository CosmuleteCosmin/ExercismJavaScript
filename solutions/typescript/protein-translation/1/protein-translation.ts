export function translate(sequence: string): string[] {
  let acids: string[] = [];
  
  let codons = [...sequence].reduce((acc, _, i) => {
    if(i % 3 === 0){
      acc.push(sequence.slice(i, i + 3));
    }    
    return acc;
  }, [] as string[]);

  for(let codon of codons){
    switch(codon){
      case "AUG":
        acids.push("Methionine");
        break;
      case "UUU": case "UUC":
        acids.push("Phenylalanine");
        break;
      case "UUA": case "UUG":
        acids.push("Leucine");
        break;
      case "UCU": case "UCC": case "UCA": case "UCG":
        acids.push("Serine");
        break;
      case "UAU": case "UAC":
        acids.push("Tyrosine");
        break;
      case "UGU": case "UGC":
        acids.push("Cysteine");
        break;
      case "UGG":
        acids.push("Tryptophan");
        break;
      case "UAA": case "UAG": case "UGA":
        return acids;
        break;
      default:
        throw new Error("Invalid codon");
    }
  }
  return acids;
}
