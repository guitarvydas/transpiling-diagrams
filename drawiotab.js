var xmlGrammar = `
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
`;

// npm install ohm-js
function main () {
    var ohm = require ('ohm-js');
    var ohmParser = ohm.grammar (xmlGrammar);
    var text = readFromStdin ();
    var result = ohmParser.match (text);
    if (result.succeeded ()) {
	console.log ("Ohm matching succeeded");
	var semantics = ohmParser.createSemantics ();
    } else {
	console.log ("Ohm matching failed");
    }
}

main ();

