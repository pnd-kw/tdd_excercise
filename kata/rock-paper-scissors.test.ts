// The 3 laws of TDD:
//  1. You are not allowed to write any production code unless it is to make a failing unit test pass.
//  2. You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.
//  3. You are not allowed to write any more production code than is sufficient to pass the one failing unit test.
// Red -> Green -> Reflect -> Refactor
// Fake it Green Bar Pattern 

import { Move, Outcome, createRockPaperScissors } from "./rock-paper-scissors";

describe('rock-paper-scissors', () => {
    describe('play', () => {
        describe('paper beats rock', () => {
            test('given player move paper and opponent move rock should return player wins ', () => {
                // Arrange
                const playerMove = Move.Paper;
                const opponentMove = Move.Rock;
                const expected = Outcome.PlayerWins;

                const sut = createRockPaperScissors();

                // Act
                const actual = sut.play(playerMove, opponentMove);
        
                // Assert
                expect(actual).toBe(expected);
            })

            test('given player move rock and opponent move paper should return player loses ', () => {
                // Arrange
                const playerMove = Move.Rock;
                const opponentMove = Move.Paper;
                const expected = Outcome.PlayerLoses;

                const sut = createRockPaperScissors();

                // Act
                const actual = sut.play(playerMove, opponentMove);
        
                // Assert
                expect(actual).toBe(expected);
            })
        })

        describe('scissors beat paper', () => {
            test('given player move scissor and opponent move paper should return player wins ', () => {
                // Arrange
                const playerMove = Move.Scissors;
                const opponentMove = Move.Paper;
                const expected = Outcome.PlayerWins;

                const sut = createRockPaperScissors();

                // Act
                const actual = sut.play(playerMove, opponentMove);
        
                // Assert
                expect(actual).toBe(expected);
            })

            test('given player move paper and opponent move scissors should return player loses ', () => {
                // Arrange
                const playerMove = Move.Paper;
                const opponentMove = Move.Scissors;
                const expected = Outcome.PlayerLoses;

                const sut = createRockPaperScissors();

                // Act
                const actual = sut.play(playerMove, opponentMove);
        
                // Assert
                expect(actual).toBe(expected);
            })
        })

        describe('rock beats scissors', () => {
            test('given player move rock and opponent move scissors should return player wins ', () => {
                // Arrange
                const playerMove = Move.Rock;
                const opponentMove = Move.Scissors;
                const expected = Outcome.PlayerWins;

                const sut = createRockPaperScissors();

                // Act
                const actual = sut.play(playerMove, opponentMove);
        
                // Assert
                expect(actual).toBe(expected);
            })

            test('given player move scissor and opponent move rock should return player loses ', () => {
                // Arrange
                const playerMove = Move.Scissors;
                const opponentMove = Move.Rock;
                const expected = Outcome.PlayerLoses;

                const sut = createRockPaperScissors();

                // Act
                const actual = sut.play(playerMove, opponentMove);
        
                // Assert
                expect(actual).toBe(expected);
            })
        })
        
        describe('tie', () => {
            test('given player move scissors and opponent move scissors should return tie', () => {
                // Arrange
                const playerMove = Move.Scissors;
                const opponentMove = Move.Scissors;
                const expected = Outcome.Tie;

                const sut = createRockPaperScissors();

                // Act
                const actual = sut.play(playerMove, opponentMove);
        
                // Assert
                expect(actual).toBe(expected);
            })

            test('given player move rock and opponent move rock should return tie', () => {
                // Arrange
                const playerMove = Move.Rock;
                const opponentMove = Move.Rock;
                const expected = Outcome.Tie;

                const sut = createRockPaperScissors();

                // Act
                const actual = sut.play(playerMove, opponentMove);
        
                // Assert
                expect(actual).toBe(expected);
            })

            test('given player move paper and opponent move paper should return tie', () => {
                // Arrange
                const playerMove = Move.Paper;
                const opponentMove = Move.Paper;
                const expected = Outcome.Tie;

                const sut = createRockPaperScissors();

                // Act
                const actual = sut.play(playerMove, opponentMove);
        
                // Assert
                expect(actual).toBe(expected);
            })
        })
    })
})