var grammar = `
MXGraph {

  MXFile = "<" "mxfile" attribute* ">" Diagram+ "<" "/" "mxfile" ">"
  Diagram = "<" "diagram" attribute* ">" contentChar+ "<" "/" "diagram" ">"

  xml = element*
  element = (compositeElement | leafElement)+ ws*
  leafElement = elementBeginEnd
  compositeElement = elementBegin content elementEnd
  elementBeginEnd = "<" id ws* attribute* "/" ">" ws*
  elementBegin = "<" id ws* attribute* ">" ws*
  elementEnd = "<" "/" id ">" ws*
  content = 
      elementHead elementTail*
  elementTail = &"<" element contentChar*
  elementHead = contentChar*
  
  contentChar = ~"<" any
   
  attribute = id "=" string ws*

  id = letter (letter | digit)*
  string = "\\"" stringChar* "\\""
  stringChar =
        escapedChar                                
     |  anyStringChar
  escapedChar = "\\\\" any
  anyStringChar = ~"\\"" any
 
  ws = " " | "\\t" | "\\n"

}
`;

// npm install ohm-js
function main () {
    var ohm = require ('ohm-js');
    var mxParser = ohm.grammar (grammar);
    var text = readFromStdin ();
    var result = mxParser.match (text);
    var command = process.argv [2];
    if (result.succeeded ()) {
	console.log ("Ohm matching succeeded");
	console.log ("command = " + command);
	var semantics = mxParser.createSemantics ();
	addToJS (semantics);
	var js = semantics (result).toJS ();
	js.diagrams.forEach (diagram => {
	    console.log (diagram.attributes.map (a => { 
		if (a.name) {
		    return `${a.name} ${a.data}`;
		}
	    }));
	});
    } else {
	console.log ("Ohm matching failed");
    }
}

main ();

