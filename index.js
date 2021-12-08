//write your code here
const animals = ['cheetah', 'dog', 'cat', 'dodobird','bear','dolphin'];
const numbers = [22, 15, 1114, 416, 37, 4]

const shortWords = array => {
    return array.filter(animal => animal.length < 5);
};
console.log(shortWords(animals));

const noVowel = array => {
    const vowels = /[aeiou]/gi;
    return array.map(animal => animal.replace(vowels,'x'));
};
console.log(noVowel(animals));

const longToShort = array => {
    return array.sort((a,b) => b.length - a.length);
};
console.log(longToShort(animals));

const onlyVowelA = array => {
    const regex = /a/i
    return array.filter(animal => regex.test(animal));
};
console.log(onlyVowelA(animals));

const pluralize = array => {
    return array.map(animal => `${animal}s`);
};
console.log(pluralize(animals));

const longerThanSeven = array => {
    const longWords = array.filter(animal => animal.length > 7);
    return longWords.length > 0 ? true : false;
};
console.log(longerThanSeven(animals));

const oddLength = array => {
    return array.filter(animal => animal.length % 2 !== 0);
};
console.log(oddLength(animals));

const allFour = array => {
    const originalArrayLength = array.length;
    const fourLetterWords = array.filter(word => word.length === 4);
    return originalArrayLength === fourLetterWords.length ? true : false;
};
console.log(allFour(animals));

const sum = array => {
    return array.reduce((accum, value) => accum + value);
};
console.log(sum(numbers));

const longWords = array => {
    return array.filter(word => word.length > 3);
};
console.log(longWords(animals));

const uppercase = array => {
    return array.map(word => word[0].toUpperCase() + word.substr(1));
};
console.log(uppercase(animals));

const concatStrings = array => {
    return array.reduce((string, word) => `${string} ${word}`);
};
console.log(concatStrings(animals));
