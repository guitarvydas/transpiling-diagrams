var grammar = `
XML {
  xml = element*
  element = (compositeElement | leafElement)+ ws*
  leafElement = elementBeginEnd
  compositeElement = elementBegin content elementEnd
  elementBeginEnd = "<" ws* attribute* "/" ">" ws*
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

MXGraph <: XML {
  MXGraph = element
}
`;

// npm install ohm-js
function main () {
    var ohm = require ('ohm-js');
    var ohmParserArray = ohm.grammars (grammar);
    var mxParser = ohmParserArray ['MXGraph'];
    var text = readFromStdin ();
    var result = mxParser.match (text);
    var command = process.argv [2];
    if (result.succeeded ()) {
	console.log ("Ohm matching succeeded");
	console.log ("command = " + command);
	// var semantics = ohmParser.createSemantics ();
	// addListCommand (semantics);
    } else {
	console.log ("Ohm matching failed");
    }
}

main ();

