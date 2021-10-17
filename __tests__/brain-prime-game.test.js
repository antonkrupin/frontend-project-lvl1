import isPrime from "../src/games/brain-prime-game";

test('brain-prime-test', () => {
    expect(isPrime(1)).toEqual(false);
});