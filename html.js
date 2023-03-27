const http = require('http')

const host = 'localhost'

const port = 3000

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(`<html><body><h1>This is HTML</h1></body></html>`);
    };

const app = http.createServer(requestListener)

app.listen(port, host, () => {
    console.log(`App listening on http://${host}:${port}`)
})