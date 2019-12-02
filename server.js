const express = require('express');
const app = express();
const path = require('path');

aapp.use(express.static(__dirname + '/dist/argon-dashboard-angular'));

app.listen(process.env.PORT || 8080);

app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/argon-dashboard-angular/index.html'));

})

console.log('Console Listening!');