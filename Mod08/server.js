/**
 * Created by Maurice on 10/26/2014.
 */

var connect = require('connect');
var serveStatic = require('serve-static');
var path = require('path');
var app = connect();

app.use(serveStatic(path.join(__dirname, 'wwwroot')));

app.listen(process.env.PORT || 8080, function () {
    console.info('The server is listening at port ' + (process.env.PORT || 8080));
});
