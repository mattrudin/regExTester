import { isValidHex, isValidEmail } from './main';

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
    });
    test('@578E9A to be false', () => {
        expect(isValidHex('@578E9A')).toBeFalsy();
    });
    test('#578e9a to be true', () => {
        expect(isValidHex('#578e9a')).toBeTruthy();
    });
    test('#578E9 to be false', () => {
        expect(isValidHex('#578E9')).toBeFalsy();
    });
})

describe('Test suite for email verification',() => {
    test('abc@abc.com to be true', () => {
        expect(isValidEmail('abc@abc.com')).toBeTruthy();
    })
})