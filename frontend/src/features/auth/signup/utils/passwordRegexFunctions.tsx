export function hasUpperCase(password: string): boolean {
  return /[A-Z]/.test(password);
}
export function hasNumber(password: string): boolean {
  return /[0-9]/.test(password);
}
export function hasSpecialCharacter(password: string): boolean {
  return /[!@#$%^&_*]/.test(password);
}