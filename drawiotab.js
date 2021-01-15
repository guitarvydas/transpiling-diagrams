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
function parseMxGraph (text) {
    var ohm = require ('ohm-js');
    var mxParser = ohm.grammar (grammar);
    var result = mxParser.match (text);
    if (result.succeeded ()) {
	var semantics = mxParser.createSemantics ();
	addToJS (semantics);
	var mxgraph = semantics (result).toJS ();
	return mxgraph;
    } else {
	console.log (mxParser.trace (text).toString ());
	throw "Ohm matching failed";
    }
}

function main () {
    var command = process.argv [2];
    var text = readFromStdin ();
    var mxg = parseMxGraph (text);
    if (command === 'list') {
	var v = listDiagrams (mxg);
	var s = JSON.stringify (v);
	process.stdout.write (s);
    } else if (command === 'getByTab') {
	var tabName = process.argv [3];
	var diagram = getDiagramByTabName (mxg, tabName);
	var content = diagram.content;
	process.stdout.write (content);
    } else {
	console.log (`command ${command} not understood`);
    }
}

main ();

