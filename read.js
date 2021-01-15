// from https://nodejs.org/en/knowledge/file-system/how-to-read-files-in-nodejs/
fs = require ('fs');
filename = process.argv[2];
fs.readFile (filename, 'utf8', function (err, data) {
    if (err) {
	return console.log (err);
    } else {
	console.log (data);
    }
})

