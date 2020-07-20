# Express Mini Sprint

## Basic Setup

* At the root directory do the following:
  - `npm install`
  - `npm start` or `nodemon`

## Client/Server Communications
  The client will communicate with your server via jQuery's AJAX. For your convenience the jQuery script is in the index.html file already.

## While you are beginning to understand Express focus on understanding the following:

* What the difference is between how this was written in Node and how it is written in Express
* What is in the package.json and how to use scripts and dependencies
* How to spin up a basic server
  * see teddi's youtube video
* What middleware is, where it goes
* What a route handler is and how to write one
  * /quote - the route handler is basically the endpoint
* What params are and how to send them from the client and how to read them on the server (client and server side)
  * params are indicated by a colon at the end of an endpoint - the value that is put into the request gets added to the params object
  * query params are indicated by a ? after a param - get added to a separate query params object, just called query
  * params is another thing that lives on the request object - you can see it by console logging it
* Where to find the data sent in a client request
  * req.body - you can parse the request, and the data is usually in the body object that's stored on the request
* How to respond to a request and end the connection
  * really important to end the connection, bc otherwise there's no response from the server and things will only seem to be spinning on the client side
  * there are a lot of different response methods that you can use to end, but you need to make sure you're responding
* How to parse json or urlencoded data sent from the client
  * use bodyParser module --> important if you want to be able to receive data from a client and then parse it
  * have to use the bodyParser methods as middleware!! you have to call app.use(bodyParser.json()...)
* What GET/POST/PATCH/DELETE are
  * http requests - verbs that the client uses to send a request to a server
  * this is the kind of response I am sending
  * the server looks for the method and the end point and if those are acceptable, then it executes certain code
  * RESTful servers and RESTful routes - these are part of those RESTful patterns - you want to create
* Promises (.then, .catch) and how to use them and return them from a function
  * advanced content in the CRUDdy sprint
* Callbacks
  * this IS the CRUDdy todo sprint
* Model/View/Controller and how to pass data between them
  * covered in another lesson
* static routes
  * a static route means, anytime someone accesses a route, please check my static routes (stored in the folder that is specified in the call of express.static) to see if an html file is stored there...
* What an endpoint is
* How to traverse the docs for Node, Express, npm packages
* How to use postman to test your routes

