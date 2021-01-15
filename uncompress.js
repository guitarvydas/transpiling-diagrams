// npm install atob
// npm install pako
function decodeMxDiagram (encoded) {
    var atob = require ('atob');
    var pako = require ('pako');
    var data = atob (encoded);
    var inf = pako.inflateRaw (
	Uint8Array.from (data, c=>c.charCodeAt (0)), {to: 'string'})
    var str = decodeURIComponent (inf);
    return str;
}

function main () {
    var text = readFromStdin ();
    var uncompressed = decodeMxDiagram (text);
    console.log (uncompressed);
}

main ();
