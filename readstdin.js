var fs = require ('fs');
function readFromStdin () {
    return fs.readFileSync ('/dev/stdin').toString ();
}
