const express = require('express');
const mongoose  = require('mongoose');
const dotenv = require('dotenv');
const pathMiddleware = require('./middlewares/pathMiddleware');
const dataRoutes = require('./routes/dataRoutes')
const cors = require('cors');

const app = express();
dotenv.config()

const PORT = process.env.PORT || 4000

app.use(cors
    ({
        origin : "https://dv-frontend.vercel.app",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
    })
)

app.use(express.json())
app.use(express.static('public'));
app.use(pathMiddleware)

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.use('/api',dataRoutes)

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Connected to db & listening on port 4000`);
        })
    })
    .catch((err) => {
        console.log(error)
    })