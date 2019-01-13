import { isValidHex } from './main';

describe('Test suite for Hex test function', () => {
    test('#FF4569 to be true', () => {
        expect(isValidHex('#FF4569')).toBeTruthy();
    });
    test('#578E9A to be true', () => {
        expect(isValidHex('#578E9A')).toBeTruthy();
    });
    test('#123 to be true', () => {
        expect(isValidHex('#123')).toBeTruthy();
    });
    test('#GGG to be false', () => {
        expect(isValidHex('#GGG')).toBeFalsy();
    })
})