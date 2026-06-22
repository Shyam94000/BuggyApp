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
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

module.exports = { fibonacci };
