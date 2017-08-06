/**
* Created by ISORTEGAH on 07/08/2017
*/
'use strict'

let express = require('express');
let path = require('path');
let serveStatic = require('serve-static');
let app = express();

app.use(serveStatic(path.join(__dirname, 'dist')));
var port = process.env.PORT || 3000;
app.listen(port);
console.log('server started ' + port);