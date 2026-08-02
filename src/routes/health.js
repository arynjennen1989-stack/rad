const express = require('express');
const router = express.Router();

/**
 * GET /health
 * Returns service health status.
 * Used by load balancers and container orchestrators for liveness/readiness probes.
 */
router.get('/', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'rad',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

module.exports = router;