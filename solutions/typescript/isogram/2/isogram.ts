export function isIsogram(phrase: string): boolean {
  const lettersOnly: string = phrase.toLowerCase().replace(/[- ]/g, "");
  const uniqueLetters = new Set(lettersOnly);
  return uniqueLetters.size === lettersOnly.length;
}
