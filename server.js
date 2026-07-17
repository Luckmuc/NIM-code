const express = require('express');

const app = express()
const port = 6967

app.get('/health-test', (req, res) => {
    res.send("Server is healthy")
})


app.listen(port, () => {
    console.log(`server running on ${port}`)
});