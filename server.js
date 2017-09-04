const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var helmet = require('helmet');
var path = require('path');


var ClientRoutes = require('./server/routes/clientRoutes');
var OrderRoutes = require('./server/routes/ordersRoutes');
var BatteryModelRoutes = require('./server/routes/batteryModelRoutes');
var BatteryRoutes = require('./server/routes/batteryRoutes');

const app = express();


var cors = require('./server/cors');
app.use(cors.permission)

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// connecting mongo
// mongoose.connect('mongodb://localhost/BMS', {
//   useMongoClient: true,
//    // other options 
// }).then(function(db){
// 	console.log('Connected to database');
// });


mongoose.connect('mongodb://dms:laughnplay@ds125914.mlab.com:25914/bms');

mongoose.connection.on('connected', function () {  
  console.log('connection successful');
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
});

app.use(helmet());
app.use('/client',ClientRoutes);
app.use('/order',OrderRoutes);
app.use('/batteryModel',BatteryModelRoutes);
app.use('/battery',BatteryRoutes);


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});



const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));



// api protection
// save the user email in the system encode this is jwt token
// when user hits a server route let user header token pass through the middleware 
// 


















