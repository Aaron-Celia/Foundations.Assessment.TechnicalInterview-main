# Technical Interview

## Unit 02 Assessment

Refer back to Canvas for instructions on how to submit your code, as well as the rubric.

## Getting Started

1. Clone this repo.
2. Navigate your terminal to your local repo folder.
3. In your terminal, run `npm install`.
4. In your terminal, run `npm test`.
5. Edit `script.js` until you are passing all test cases!
6. _(Optional)_ You can change `describe(...)` to `describe.only(...)` in `script_test.js` if you'd like to only run the tests for the problem you're working on.
7. Type `Control+C` in your terminal to close the Mocha process once you are done testing.

## Problems

**Note:** A function should return the string `"error"` if the arguments it receives are not the correct types.

### Problem 1: Exclaim

Given a string, `exclaim(string)` will return the same string with `!` appended to the end.

```js
exclaim("Hello"); // >>> "Hello!"
exclaim("Goodbye"); // >>> "Goodbye!"
exclaim(""); // >>> "!"
exclaim(5); // >>> "error"
```

### Problem 2: Trapezoid

Given the bases and height of a trapezoied, `getAreaOfTrapezoid(a: number, b: number, h: number)` will return the area of that trapezoid.

```js
getAreaOfTrapezoid(1, 2, 3); // >>> 4.5
getAreaOfTrapezoid(2, 2, 3); // >>> 6
getAreaOfTrapezoid(10, 89, 38); // >>> 1881
getAreaOfTrapezoid("a", "b", "h"); // >>> "error"
```

### Problem 3: TLDR

Given a string, `isStringTooLong(string)` will return whether that string is too long. A string is too long if it has 26 or more characters.

```js
isStringTooLong("kitten"); // >>> false
isStringTooLong("cat"); // >>> false
isStringTooLong("Sphinx of black quartz, judge my vow."); // >>> true
isStringTooLong(27); // >>> "error"
```

### Problem 4: cApS

Given a string, `alternateCaps(string)` will return a new string in which every other letter is capitalized. The first letter should be lowercase.

```js
alternateCaps("fullstackisamazing"); // >>> "fUlLsTaCkIsaMaZiNg"
alternateCaps("Poestaysposthaste"); // >>> "pOeStAySpOsThAsTe"
alternateCaps(1337); // >>> "error"
```

### Problem 5: esrever

`reverse(array)` will return an array with elements that are the same as the given array, except in reversed order. Do not use the built-in `reverse` method.

```js
reverse([1, 2, 3]); // >>> [3, 2, 1]
reverse(["a", "b", "c", "d"]); // >>> ["d", "c", "b", "a"]
```

### Problem 6: Most Vowels

Given a string, `getMostVowels(string)` returns the word that has the most vowels. The [string `split` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) will come in handy. If none of the words have vowels, then the empty string is returned.

```js
getMostVowels("I am a keeper with some real rhythms"); // >>> "keeper"
getMostVowels("try my gym"); // >>> ""
getMostVowels(10245); // >>> "error"
```

### Problem 7: Multiplication Table

`createMultiplicationTable(rows: number, cols: number)` outputs an array that represents a multiplication with the given dimensions.

```js
const zeroByZero = createMultiplicationTable(0, 0);
// zeroByZero === []

const oneByFour = createMultiplicationTable(1, 4);
// oneByFour === [[1,2,3,4]]

const threeByFive = createMultiplicationTable(3, 5);
// threeByFive === [[1,2,3,4,5], [2,4,6,8,10], [3,6,9,12,15]]

const twoByTwo = createMultiplicationTable(2, 2);
// twoByTwo === [[1,2], [2,4]]
```
