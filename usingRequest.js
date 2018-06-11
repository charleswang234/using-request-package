var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
        .on('error', function(err){

        })

        .on('response', function(response) {
          // console.log(response);
          console.log('Downloading image...');
          console.log(response.statusMessage);
          console.log(response.headers['content-type'])
        })
        .on('end', function() {
          console.log('Download complete.');
        })
        .pipe(fs.createWriteStream('./future.jpg'))

        ;

