// function readFromStdin () {
//     const readable = process.stdin;
    
//     // 'readable' may be triggered multiple times as data is buffered in
//     readable.on('readable', () => {
// 	let chunk;
// 	console.log('Stream is readable (new data received in buffer)');
// 	// Use a loop to make sure we read all currently available data
// 	while (null !== (chunk = readable.read())) {
// 	    console.log(`Read ${chunk.length} bytes of data...`);
// 	}
//     });
    
//     // 'end' will be triggered once when there is no more data available
//     readable.on('end', () => {
// 	console.log('Reached end of stream.');
//     });
// }

function readFromStdin () {
    var instrm = process.stdin;
    instrm.on ('readable', () => {
	let data = instrm.read ();
	if (null === data) {
	    return "";
	} else {
	    return data.toString ();
	};
    });
    instrm.on ('end', () => { return ""; });
}


console.log (readFromStdin ());
