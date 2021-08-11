const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/movies', (req, res) => {
    res.send([
        {
            "id": 1,
            "title": "Midnight In Paris",
            "runtime": 96,
            "release_year": 2011,
            "director": "Woody Allen",
        },
        {
            "id": 2,
            "title": "Titanic",
            "runtime": 210,
            "release_year": 1997,
            "director": "James Cameron",
        },
        {
            "id": 3,
            "title": "From Paris With Love",
            "runtime": 94,
            "release_year": 2010,
            "director": "Pierre Morel",
        },
    ])
})

app.post('/movies', (req, res) => {
    console.log(req.body) // Access the body of the request - known as the payload
    res.send({
        "id": 4,
        "title": "Richy Rich",
        "runtime": 96,
        "release_year": 1994,
        "director": "Donald Petrie"
    })
})

app.patch('/movies/4', (req, res) => {
    res.send({"title": "Richie Rich"})
})

app.put('/movies/4', (req, res) => {
    res.send({
        "title": "Home Alone",
        "runtime": 103,
        "release_year": 1990,
        "director": "Chris Columbus"
    })
})

app.listen(port, () => console.log(`listening at http://localhost:${port}`))