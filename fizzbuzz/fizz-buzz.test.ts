import { createFizzBuzz } from "./fizz-buzz";

describe('fizz-buzz', () => {
    describe('fizz', () => {
        test.each([
            { input: 6 },
            { input: 9 },
            { input: 12 },
        ])('$input', ({ input }) => {
            // Arrange
            const expected = "Fizz";
            const sut = createFizzBuzz();

            // Act
            const actual = sut.go(input);

            // Assert
            expect(actual).toBe(expected);
        })
    })

    describe('buzz', () => {
        test.each([
            { input: 10 },
            { input: 10 },
            { input: 25 },
        ])('$input', ({ input }) => {
            // Arrange
            const expected = "Buzz";
            const sut = createFizzBuzz();

            // Act
            const actual = sut.go(input);

            // Assert
            expect(actual).toBe(expected);
        })
    })

    describe('fizzbuzz', () => {
        test.each([
            { input: 15 },
            { input: 30 },
            { input: 45 },
        ])('$input', ({ input }) => {
            // Arrange
            const expected = "FizzBuzz";
            const sut = createFizzBuzz();

            // Act
            const actual = sut.go(input);

            // Assert
            expect(actual).toBe(expected);
        })
    })

    describe('number itself', () => {
        test.each([
            { input: 1, expected: "1" },
            { input: 4, expected: "4" },
            { input: 14, expected: "14" },
            { input: 76, expected: "76" },
            { input: 169, expected: "169" },
            { input: 289, expected: "289" },
        ])('$input', ({ input, expected }) => {
            // Arrange
            const sut = createFizzBuzz();

            // Act
            const actual = sut.go(input);

            // Assert
            expect(actual).toBe(expected);
        })
    })

    describe('fizzwhiz', () => {
        test.each([
            { input: 3 },
        ])('$input', ({ input }) => {
            // Arrange
            const expected = "FizzWhiz";
            const sut = createFizzBuzz();

            // Act
            const actual = sut.go(input);

            // Assert
            expect(actual).toBe(expected);
        })
    })

    describe('buzzwhiz', () => {
        test.each([
            { input: 5 },
        ])('$input', ({ input }) => {
            // Arrange
            const expected = "BuzzWhiz";
            const sut = createFizzBuzz();

            // Act
            const actual = sut.go(input);

            // Assert
            expect(actual).toBe(expected);
        })
    })

    describe('whiz', () => {
        test.each([
            { input: 2 },
            { input: 7 },
            { input: 11 },
        ])('$input', ({ input }) => {
            // Arrange
            const expected = "Whiz";
            const sut = createFizzBuzz();

            // Act
            const actual = sut.go(input);

            // Assert
            expect(actual).toBe(expected);
        })
    })
})