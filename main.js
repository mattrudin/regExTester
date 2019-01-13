export const isValidHex = text => /^#([A-F0-9]{6})|([A-F0-9]{3})/ig.test(text);
