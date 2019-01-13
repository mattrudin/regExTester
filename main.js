function isValidHex(text) {
    return /^#([A-F0-9]{6})|([A-F0-9]{3})/ig.test(text)
}

module.exports = isValidHex;