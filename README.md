Hello future Sams and other interested users. Clone this repo to get a quick Node.js API thats connected to a MongoDB database up an running.

## Before you run

1. Open terminal and cd into the root folder. Copy this command `touch config/default.json`
2. Copy the following code into the JSON file and add your mongo URI `{"mongoURI": [INSERT MONGO URI CONNECTION STRING]}`. Add all your global variables in here and access them using the config npm package.
3. run `npm i` in the root folder download all the node dependecies.

## To run

- `npm run server`
- add any new scripts in `package.json`. GLHF!!

## Test your server on postman

- make a get request to `http://localhost:5000/api`. You should see a response if everything is working!

## Notes about important NPM packages

- It uses `express` to make a server
- It uses `mongoose` to connect to MongoDB
- It uses `express-validator` to make sure all fields in a request is given
- It uses `config` to support global variables
- It uses `nodemon` to constantly check for changes and recompiling

## Notes about where things are

- entry point is `server.js`
- connection logic to MongoDB is in `db.js`
- sample code for requests can be found in the `routes` folder
