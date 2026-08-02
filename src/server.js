const express = require('express');
const healthRouter = require('./routes/health');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/health', healthRouter);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`RAD API server running on port ${PORT}`);
  });
}

module.exports = app;