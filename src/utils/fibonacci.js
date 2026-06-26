/**
 * fibonacci.js
 *
 * Computes Fibonacci numbers using a naive recursive algorithm.
 * Time complexity: O(2^n) — each call branches into two recursive calls
 * with no memoization, causing exponential CPU consumption.
 *
 * This is intentionally inefficient to simulate a CPU-bound performance
 * bottleneck in a production application.
 */

function fibonacci(n) {
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a;
}

module.exports = { fibonacci };
