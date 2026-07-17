const express = require('express');

const app = express()
const port = 6967

app.listen(port, () => {
    console.log(`server running on ${port}`)
}

)