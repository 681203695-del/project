const app = require('../server');

app.get("/", (req, res) => {
    res.send("API OK ✅");
});

module.exports = app;
