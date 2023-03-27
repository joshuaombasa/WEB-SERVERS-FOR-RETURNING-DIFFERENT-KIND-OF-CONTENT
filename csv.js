const http = require('http')

const host = 'localhost'

const port = 3000

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment;filename=ombasa.csv");
    res.writeHead(200);
    res.end(`id,name,email\n1,Sammy Shark,shark@ocean.com`);
    };

const app = http.createServer(requestListener)

app.listen(port, host, () => {
    console.log(`App listening on http://${host}:${port}`)
})