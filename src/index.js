const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://week10:ANTcHE3TH8zLLRCj@cluster0-norwu.mongodb.net/week10?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3333);