export function hey(message: string): string {
  message = message.trim();
  if (message === "") {
    return "Fine. Be that way!";
  }
  
  if(/[A-Z]/.test(message) && !/[a-z]/.test(message) && /\?$/.test(message))
    return "Calm down, I know what I'm doing!";
  if(/\?$/.test(message))
    return "Sure.";
  if(/[A-Z]/.test(message) && !/[a-z]/.test(message))
    return "Whoa, chill out!";
  
  return "Whatever.";
}
