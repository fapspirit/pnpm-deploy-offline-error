const express = require('express');
const devalue = require('@nuxt/devalue');

function createServer({ port }) {
    const app = express();

    app.get('/', (req, res) => {
        res.send(devalue(req.headers)).end();
    })

    app.listen(port, () => console.log('listening on port', port));
}

exports.createServer = createServer;
