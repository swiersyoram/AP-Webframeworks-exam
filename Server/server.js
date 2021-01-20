const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoClient = require('mongodb').MongoClient;
app.use(cors());

//body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false

const port = process.env.PORT ||4000;
let post;


var db;
mongoClient.connect('mongodb://localhost:27017/webframeworks-exam', (err, client) => {
    if (err != null)
    {
        console.log(err.message);
        throw err;
    }
    db = client.db('webframeworks-exam');
    console.log('connected to Mongo');
    //check of er nog geen data aanwezig is
    db.collection("zwembaddata").find().toArray((err, data) => {
        if (data != null)
        {
            console.log("er zijn objecten in de database...")
            console.log(data)
        }
    })

})
app.get('/', function (req, res) {
    res.send('hello world'+JSON.stringify(post))
  })
app.post('/zwembadpost',(req,res) => {
  
  //console.log('Got body:', JSON.stringify(req.body));
  db.collection("zwembaddata").insert(req.body, (err, result) => {
    //Geef de toegevoegde persoon terug als response
    post = result
    res.send(result.ops[0]._id);
})
});

app.get('/database', function (req, res) {
  db.collection("zwembaddata").find().toArray((err, data) => {
    //console.log(data);
    res.json(data);
})
})
app.use(bodyParser.json());
app.listen(port, ()=>console.log(`server is running on port http://localhost:${port}`))