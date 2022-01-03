const express = require('express')

const app = express();

app.get("/todos", (req, res) => {
    res.json({
        "todos": [{
                "title": "Todo Title",
                "description": "Todo Description",
                "hasDone": false,
            },
            {
                "title": "Todo Title",
                "description": "Todo Description",
                "hasDone": false
            }
        ]
    });
});

app.listen(8080);