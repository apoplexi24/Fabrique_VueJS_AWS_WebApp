const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const passport = require('passport');

// Initialize app
const app = express();

// Form data Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));

// json body middleware
app.use(bodyParser.json());

// cors middleware
app.use(cors());

// Setting up static dir
app.use(express.static(path.join(__dirname, 'public')));

//Use passport middleware
app.use(passport.initialize());
//Bring in the strategy
require('./config/passport')(passport);


// Bringing in the Database Config
const db = require('./config/keys').mongoURI;
mongoose.connect(db, {
    useNewUrlParser: true
}).then(() => {
    console.log(`DB Connected successfully ${db}`)
}).catch(err => {
    console.log(`Unable to connect database ${err}`)
});

/*
app.get('/', (req, res) => {
    return res.send("<h1>Hello World</h1>");
});
*/

// Bring in the Users route
const users = require('./routes/api/users');
app.use('/api/users', users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})

