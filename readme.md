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
* How to respond to a request and end the connection
* How to parse json or urlencoded data sent from the client
* What GET/POST/PATCH/DELETE are
* Promises (.then, .catch) and how to use them and return them from a function
* Callbacks
* Model/View/Controller and how to pass data between them
* static routes
* What an endpoint is
* How to traverse the docs for Node, Express, npm packages
* How to use postman to test your routes

