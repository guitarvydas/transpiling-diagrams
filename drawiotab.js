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
console.log(1);
    var ohm = require ('ohm-js');
console.log(2);
    var ohmParser = ohm.grammar (xmlGrammar);
console.log(3);
    var text = readFromStdin ();
console.log(4);
console.log(text.length);
    var result = ohmParser.match (text);
console.log(5);
    if (result.succeeded ()) {
console.log(6);
	console.log ("Ohm matching succeeded");
	var semantics = ohmParser.createSemantics ();
    } else {
console.log(7);
	console.log ("Ohm matching failed");
    }
console.log(8);
}

main ();

