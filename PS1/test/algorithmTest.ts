import assert from "assert";
import { AnswerDifficulty, Flashcard, BucketMap } from "../src/flashcards";
import {
  toBucketSets,
  getBucketRange,
  practice,
  update,
  getHint,
  computeProgress,
  isPrime
} from "../src/algorithm";
import { expect } from "chai";

/*
 * Testing strategy for toBucketSets():
 *
 * TODO: Describe your testing strategy for toBucketSets() here.
 */
describe("toBucketSets()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for getBucketRange():
 *
 * TODO: Describe your testing strategy for getBucketRange() here.
 */
describe("getBucketRange()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for practice():
 *
 * TODO: Describe your testing strategy for practice() here.
 */
describe("practice()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for update():
 *
 * TODO: Describe your testing strategy for update() here.
 */
describe("update()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for getHint():
 *
 * TODO: Describe your testing strategy for getHint() here.
 */
describe("getHint()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for computeProgress():
 *
 * TODO: Describe your testing strategy for computeProgress() here.
 */
describe("computeProgress()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

describe('isPrime Function', () => {
  // Test cases for 0 and 1
  it('should return false for 0 and 1', () => {
    expect(isPrime(0)).to.be.false;
    expect(isPrime(1)).to.be.false;
  });

  // Test cases for small prime numbers
  it('should return true for small prime numbers', () => {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    primes.forEach(prime => {
      expect(isPrime(prime)).to.be.true;
    });
  });

  // Test cases for small non-prime numbers
  it('should return false for small non-prime numbers', () => {
    const nonPrimes = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28];
    nonPrimes.forEach(nonPrime => {
      expect(isPrime(nonPrime)).to.be.false;
    });
  });

  // Test cases for larger prime numbers
  it('should correctly identify larger prime numbers', () => {
    const largePrimes = [
      97, 101, 103, 107, 109, 
      10007, 10009, 10037, 
      104729, 104743
    ];
    largePrimes.forEach(prime => {
      expect(isPrime(prime)).to.be.true;
    });
  });

  // Test cases for larger non-prime numbers
  it('should correctly identify larger non-prime numbers', () => {
    const largeNonPrimes = [
      100, 1000, 10000, 
      104730, 104744
    ];
    largeNonPrimes.forEach(nonPrime => {
      expect(isPrime(nonPrime)).to.be.false;
    });
  });

  it('should handle non-integer inputs', () => {
    const nonIntegers = [2.5, 3.14, 7.0, -2.1];
    nonIntegers.forEach(num => {
      expect(isPrime(num)).to.be.false;
    });
  });
});