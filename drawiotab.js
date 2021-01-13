const xmlGrammar = `
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
    const ohm = require ('ohm-js');
    const ohmParser = ohm.grammar (xmlGrammar);
    filename = process.argv[2];
    const text = 
    const result = ohmParser.match (text);
    ohm.
