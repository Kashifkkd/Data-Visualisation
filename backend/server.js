const express = require('express');
const mongoose  = require('mongoose');
const dotenv = require('dotenv');
const pathMiddleware = require('./middlewares/pathMiddleware');
const dataRoutes = require('./routes/dataRoutes')

const app = express();
dotenv.config()

app.use(express.json())
app.use(express.static('public'));
app.use(pathMiddleware)

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.use('/api',dataRoutes)

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Connected to db & listening on port 3000`);
        })
    })
    .catch((err) => {
        console.log(error)
    })