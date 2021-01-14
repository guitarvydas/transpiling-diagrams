function addListCommand (semantics) {
    semantics.addOperation (
	'list',
	{
	    MXGraph: function (_1) {}, // element
	    xml: function (_1s) {}, // element*
	    element: function (_1s, _2s) {}, // ((compositeElement | leafElement)+ ws*
	    leafElement: function (_1) {}, //(elementBeginEnd
	    compositeElement: function (_1, _2, _3) {}, //(elementBegin content elementEnd
	    elementBeginEnd: function (_1, _2s, _3s, _4, _5, _6s) {}, //("<" ws* attribute* "/" ">" ws*
	    elementBegin: function (_1, _2, _3s, _4s, _5, _6s) {}, //("<" id ws* attribute* ">" ws*
	    elementEnd: function (_1, _2, _3, _4, _5s) {}, //("<" "/" id ">" ws*
	    content: function (_1, _2s) {}, // elementHead elementTail*
	    elementTail: function (_1, _2, _3s) {}, // &"<" element contentChar*
	    elementHead: function (_1s) {}, // contentChar*
	    contentChar: function (_1) {}, // ~"<" any
	    attribute: function (_1, _2, _3, _4s) {}, // id "=" string ws*
	    id: function (_1, _2s) {}, // letter (letter | digit)*
	    string: function (_1, _2s, _3) {}, // "\"" stringChar* "\""
	    stringChar: function (_1) {}, // escapedChar |  anyStringChar
	    escapedChar: function (_1, _2) {}, // "\\" any
	    anyStringChar: function (_1) {}, // ~"\"" any
	    ws: function (_1) {}, // " " | "\t" | "\n"
	    _terminal: function() { return this.primitiveValue; }
	});
    }
