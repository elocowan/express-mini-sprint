let express = require('express');
let app = express();
let port = 3000;
let bodyParser = require('body-parser');
let cors = require('cors');

const quotes = [
  'one',
  'two',
  'three',
  'four',
  'five'
];

//Utility Function to return a random integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// IMPORTANT - you have to put every use call in the correct order on the server-side
// here, the flow is like:
// 1. bodyparser functions
// 2. route handling


//our server is delivering our client side content,
// client is being served up by the server - this gets started when the server gets created on line 2
// no cors errors because the client and the server are at the same origin
// no need for live-server
app.use(express.static('client'));

//allow CORS requests
//because of the express.static usage,
//we no longer need this
// app.use(cors());

// parse application/x-www-form-urlencoded
// if the data that comes in --> if you look at req.body, and you see nothing, then ask yourself if you have body parser... if you do have bodyParser, but you're still not seeing the body, then go to npm and look at the bodyParser package
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
// another middleware thing to properly parse data that's gonna get added to the request object in the body property
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.redirect('/quote'); //status defaults to 302(Found)
})

app.get('/quote', (req, res, next) => {
  res.send(quotes[getRandomInt(0, quotes.length -1)]);
})
// app.use(checkAdminStatus) // a non-existent function that would interrupt everything down the chain if the user doesn't have admin status... could also put this checkAdminStatus in a particular request for a specific endpoint, in which case it would only get invoked as a check if the request resolves inside of that conditional
app.post('/quote', (req, res, next) => {
  //incoming request should include a quote key
  quotes.push(req.body.quote) // this step wasn't in the node mini sprint
  res.send(req.body.quote);
})
//catch all route
app.use((req, res, next) => {
  res.status(404).send("That's not a thing I can give you");
})


app.listen(port,() => {
  console.log(`listening on port ${port}`);

})