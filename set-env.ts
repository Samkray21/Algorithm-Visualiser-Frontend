import { writeFile } from 'fs';
// Configure Angular `environment.ts` file path
const targetPath = './src/environments/environment.ts';
// Load node modules
const colors = require('colors');

// declare var require: any;
// require('dotenv').config();

  
const secondPath = './src/index.html';

const htmlConfigFile = `<!doctype html>\n <html lang="en">\n <head>\n <meta charset="utf-8">\n  <meta charset="utf-8">\n  <title>AlgoFrontEnd</title>\n  <base href="/">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <link rel="icon" type="image/x-icon" href="favicon.ico">\n  </head>\n <body>\n <app-root></app-root>\n <script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>\n <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>\n <script src="https://maps.googleapis.com/maps/api/js?key=${process.env.API_NAME}&libraries=geometry"></script> \n </body>\n </html> `; 


writeFile(secondPath, htmlConfigFile, function (err) {
    if (err) {
        throw console.error(err);
    } else {
        console.log(colors.magenta(`Angular  file generated correctly at ${secondPath} \n`));
    }
 });
 

