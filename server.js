const express = require('express');
const app = express();
const path = require('path');

aapp.use(express.static(__dirname + '/dist/VerifyIt'));

app.listen(process.env.PORT || 8080);

app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/VerifyIt/index.html'));

});

console.log('Console Listening!');