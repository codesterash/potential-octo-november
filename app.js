const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Hello World!')
})

console.log('in the node console')

app.listen(PORT, () => {
    console.log('Example node listening at 3000')
})
