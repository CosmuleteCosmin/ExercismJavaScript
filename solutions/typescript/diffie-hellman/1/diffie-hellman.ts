export class DiffieHellman {
  p:number;
  g:number;
  constructor(p: number, g: number) {
    if(!this.isPrime(p) || !this.isPrime(g))
      throw new Error("Error");
    this.p = p;
    this.g = g;
  }

  public getPublicKey(privateKey: number): number {
    if(privateKey <= 1 || privateKey >= this.p)
      throw new Error("Error");
    return this.g**privateKey % this.p;
  }

  public getSecret(theirPublicKey: number, myPrivateKey: number): number {
    return theirPublicKey ** myPrivateKey % this.p
  }

  public isPrime(number: number): boolean {
    for(let d = 2; d * d < number; d++){
      if(number % d === 0)
        return false;
    }
    return true;
  }
}
