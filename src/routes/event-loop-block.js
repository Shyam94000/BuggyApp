/**
 * event-loop-block.js
 *
 * Route handler that blocks the event loop using a synchronous while
 * loop for a configurable duration. This simulates a CPU-bound
 * synchronous operation that starves the event loop.
 */

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const duration = parseInt(req.query.duration) || 500;
  const start = Date.now();

  // Use non-blocking delay
  setTimeout(() => {
    const elapsed = Date.now() - start;
    res.json({
      blocked: false,
      duration_ms: elapsed,
      message: `Event loop was not blocked for ${elapsed}ms`,
    });
  }, duration);
});

module.exports = router;
