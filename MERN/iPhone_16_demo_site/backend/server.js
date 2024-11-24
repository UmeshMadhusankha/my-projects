const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

function auth(req,res,next) {

    const emailPattern = /^[\w\.-]+@[\w\.-]+\.[a-zA-Z]{2,}$/;
    const creditPattern = /^[0-9]{16}$/;
    const obj = req.body;

    if (!(emailPattern.test(obj.email))) {
        return res.status(400).send(obj.name);
    }

    if (!(creditPattern.test(obj.credit))) {
        return res.status(400).send(obj.name);
    }

    next();
}

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.post('/ordered',auth , (req,res) => {
    console.log(req.body);
    res.redirect('/');
});

app.listen(5000, () => {console.log('server running');});