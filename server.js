//Install express server    
const express = require('express');
const path = require('path');   

// var cors = require('cors');
const app = express();   


// app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});


// var allowCrossDomain = function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');

//   next();
// }

// app.use(allowCrossDomain);



// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
//   });

//   app.get('/Boruvkas', (req, res) => {
//     request(
//       { url: 'https://cors-anywhere.herokuapp.com/https://msp-visualiser-backend.ew.r.appspot.com/Boruvkas' },
//       (error, response, body) => {
//         if (error || response.statusCode !== 200) {
//           return res.status(500).json({ type: 'error', message: err.message });
//         }
  
//         res.json(JSON.parse(body));
//       }
//     )
//   });


  
  
// Serve only the static files form the dist directory    
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req,res) {  
    res.sendFile(path.join(__dirname+'/dist/index.html'));   
});  




// Start the app by listening on the default Heroku port 
//var port = process.env.PORT || 8080;


app.listen(process.env.PORT || 8080);



  // // Listen on a specific host via the HOST environment variable
  // var host = process.env.HOST || '0.0.0.0';
  // // Listen on a specific port via the PORT environment variable
  // var port = process.env.PORT || 8080;
   
  // var cors_proxy = require('cors-anywhere');
  // cors_proxy.createServer({
  //     originWhitelist: [], // Allow all origins
  //     requireHeader: ['origin', 'x-requested-with'],
  //     removeHeaders: ['cookie', 'cookie2']
  // }).listen(port, host, function() {
  //     console.log('Running CORS Anywhere on ' + host + ':' + port);
  // });
  




// exports.handler = async (event) => {
//     const response = {
//         statusCode: 200,
//         headers: {
//             "Access-Control-Allow-Headers" : "Content-Type",
//             "Access-Control-Allow-Origin": "https://msp-visualiser-backend.ew.r.appspot.com/Boruvkas",
//             "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
//         },
//         body: JSON.stringify('Hello from Lambda!'),
//     };
//     return response;
// };