const http = require('http')

const host = 'localhost'

const port = 3000

const requestHandler = (req, res) => {
    res.writeHead(200)
    res.end(`This is Joshua's server`)
}

const app = http.createServer(requestHandler)

app.listen(port, host, () => {
    console.log(`App listening on http://${host}:${port}`)
})