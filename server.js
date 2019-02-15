const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const morgan = require('morgan')
const trailData = require('./populateTrails')
const KeystoneTrails = require('./models/trail')
require('./db/db');
require('dotenv').config()


app.use(session({
    secret: 'ride the pow',
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('short'));

const corsOptions = {
    origin: process.env.CORS_URI,
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

const userController = require('./controllers/userController');
const trailController = require('./controllers/trailController');

app.use('/trails', trailController);
app.use('/user', userController);

KeystoneTrails.collection.insertMany(trailData, (err, data) => {
    console.log("added provided vampire data")
    // mongoose.connection.close(connectionString);
});


app.listen(process.env.PORT || 9000, () => {
    console.log('express is listening on port 9000')
});
