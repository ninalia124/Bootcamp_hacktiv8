function reverseString(inputString) {
    return inputString.split('').reduce((reversed, char) => char + reversed, '');
}

// Contoh pemanggilan fungsi
const originalString = 'Hello, World!';
const reversedString = reverseString(originalString);
console.log('Original String:', originalString);
console.log('Reversed String:', reversedString);