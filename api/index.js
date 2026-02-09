const app = require('../server');

// Root greeting for Vercel verification
app.get('/', (req, res) => {
    res.send('API is working 🚀');
});

// Root health check for Vercel
app.get('/api/status', (req, res) => {
    res.json({ status: "API is working 🚀" });
});

module.exports = app;
