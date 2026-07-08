import {fizzBuzzTesting} from "./index";

test('fizzbuzz returns "fizz" for 3', () => {
    expect(fizzBuzzTesting(3, ['fizz', 'buzz', 'io'])).toBe('fizz');
});
test('fizzbuzz returns "buzz" for 5', () => {
    expect(fizzBuzzTesting(5, ['fizz', 'buzz', 'io'])).toBe('buzz');
});
test('fizzbuzz returns "io" for 13', () => {
    expect(fizzBuzzTesting(13, ['fizz', 'buzz', 'io'])).toBe('io');
});

test('fizzbuzz returns "Bong" for 11', () => {
    expect(fizzBuzzTesting(11, ['fizz', 'buzz', 'io'])).toBe('Bong');
});

test('fizzbuzz returns "buzzfizz" for 255', () => {
    expect(fizzBuzzTesting(255, ['fizz', 'buzz', 'io'])).toBe('buzzfizz');
});


test('fizzbuzz returns "ioBizz" for 65', () => {
    expect(fizzBuzzTesting(65, ['fizz', 'Bizz', 'io'])).toBe('ioBizz');
});

test('fizzbuzz returns "FizzTBuzz" for 195', () => {
    expect(fizzBuzzTesting(195, ['Fizz', 'Buzz', 'T'])).toBe('FizzTBuzz');
});
