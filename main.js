export const isValidHex = text => /(^#[A-Fa-f0-9]{6}$)|(^#[A-Fa-f0-9]{3}$)/ig.test(text);
export const isValidEmail = email => /^[^@]+@[^@]+\.[a-z]+$/ig.test(email);