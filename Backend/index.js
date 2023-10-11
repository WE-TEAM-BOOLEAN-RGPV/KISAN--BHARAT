const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 3000;

app.use(logger);

const whitelist = ['http://localhost:3000'];

const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.static('files'));
app.use('/static', express.static('public'));

// built-in middleware for json 
app.use(express.json());

//serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

app.use('/', require('./routes/_landing'));
app.use('/login', require('./routes/login'));
app.use('/register', require('./routes/register'));
app.use('/farmer', require('./routes/farmer'));
app.use('/fpo', require('./routes/fpo'));
app.use('/vendor', require('./routes/vendor'));
app.use('/home', require('./routes/home'));
app.use('/productmain', require('./routes/productmain'));
app.use('/job', require('./routes/job'));
app.use('/add_prod1', require('./routes/add_prod1'));
app.use('/add_prod2', require('./routes/add_prod2'));
app.use('/buyprod_details', require('./routes/buyprod_details'));
app.use('/rentprod_details', require('./routes/rentprod_details'));
app.use('/fpo_app', require('./routes/fpo_app'));
app.use('/job_list', require('./routes/job_list'));


app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));