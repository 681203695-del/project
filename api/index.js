const app = require('../server');

// Root health check for Vercel
app.get('/api/status', (req, res) => {
    res.json({ status: "API is working 🚀" });
});

module.exports = app;
