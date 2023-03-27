const http = require('http')

const host = 'localhost'

const port = 3000

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(`{"message": "This is a JSON response"}`);
    };

const app = http.createServer(requestListener)

app.listen(port, host, () => {
    console.log(`App listening on http://${host}:${port}`)
})