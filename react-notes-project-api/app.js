const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const { MONGODB } = require('./config');
const userRoutes = require('./routes/user');
const noteRoutes = require('./routes/note');
const auth = require('./middleware/auth');

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../react-notes-project/build')));

app.use('/api/notes', auth, noteRoutes);
app.use('/api/users', userRoutes);

app.use((req, res, next) => {
    const err = new Error('not found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({ error: { message: err.message } });
});

app.get('/', function (req, res) {  
    res.sendFile(path.join(__dirname, '../react-notes-project/build', 'index.html'));
});

mongoose.connect(MONGODB, { useNewUrlParser: true })
    .then(() => {
        console.log('connected to mongodb');
        return app.listen(process.env.PORT || 3300);
    })
    .then(() => console.log('server running at 3300'))
    .catch(err => console.log(err.message));
