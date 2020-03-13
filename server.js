const express = require('express');
const app = express();
const port = 5000;

const mongo = require('mongodb').MongoClient;
const assert = require('assert');
const monguUrl = 'mongodb://localhost:27017/'; //mongo server port

app.listen(port, ()=> console.log(`Server started on port ${port}`));
app.use(express.json({limit: '1mb'})); // the server can acsses a json files, give options to the json that comming in upto 1mb

const getDate = () => {
   var today = new Date();
   return `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${String(today.getFullYear())}`;
};

app.get('', (req, res)=> {
    res.send(
        `you are in port 5000 ${getDate()}`
    );
});

app.post('/sendMessage', (req, res) => {
    const data = {
        Name: req.body.Name,
        Email: req.body.Email,
        Phone: req.body.Phone,
        Message: req.body.Message
    };
    
    mongo.connect(monguUrl, (err, db)=> {
        assert.equal(null, err);
        db.db('cvdb').collection('cvdb').insertOne(data, (err, res) => {
            assert.equal(null, err);
            console.log('message insert to data base');
            db.close();
        });
    });
    res.send('Success');
});