export function isPangram(text: string): boolean{
  const lowerText = text.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return alphabet.every(letter => lowerText.includes(letter));
}
