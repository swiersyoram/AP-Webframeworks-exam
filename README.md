# angular/nodjs/express/mongoDB
## What is it all about?
This project is my solution of the test I took for the class Webframeworks at the University of applied siences Artesis Plantijn in Antwerp.
It contains a full integration of the MEAN stack. Which MEANS 😂 (pun intended) that we used angular for the frontend, express for the backend, mongoDB as a database and even a simple JSON server to serve some data. If you're trying to get a grasp of webdevelopment, using the MEAN stack, this project might be of some value to you!

## How to start it?
The project can be started using the NPM scripts that are supplied in the package.json file or by using the following commands.

### this will install all the nodemodules needed for the project to run
npm install

### this wil start up the frontend server on port 4200
ng serve

### this will start the express server and also keeps listening for changes
nodemon Server/server.js

### this will start the json-server to serve some data
json-server ./zwembaddata.json

## NOTE
This is a school exam, this is designed to test the students abilty to use the angular framework, http requests, webserver setup, pushing and fetching data around.
This is a good starting point for education but might not suffice in a realworld application.

# Enjoy!
