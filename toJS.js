function addToJS (semantics) {
    semantics.addOperation (
	'toJS',
	{
	    MXFile: function (_1, _2, _3s, _4, _5s, _6, _7, _8, _9) { // "<" "mxfile" attribute* ">" Diagram+ "<" "/" "mxfile" ">"
		return { attributes: _3s.toJS (), diagrams: _5s.toJS () }; },
	    Diagram: function (_1, _2, _3s, _4, _5s, _6, _7, _8, _9) { // "<" "diagram" attribute* ">" contentChar+ "<" "/" "diagram" ">"
		return { element: _2.toJS(), attributes: _3s.toJS (), content: _5s.toJS ().join ('') }; },
	    xml: function (_1s) { return _1s.toJS (); }, // element*
	    element: function (_1s, _2s) { return _1.toJS (); }, // (compositeElement | leafElement)+ ws*
	    leafElement: function (_1) { return _1.toJS (); }, // elementBeginEnd
	    compositeElement: function (_1, _2, _3) { // elementBegin content elementEnd
		return { element: _1.toJS (), content: _2.toJS () }; },
	    elementBeginEnd: function (_1, _2, _3s, _4s, _5, _6, _7s) { // "<" id ws* attribute* "/" ">" ws*
		return { name: _2.toJS (), attributes: _4s.toJS () }; },
	    elementBegin: function (_1, _2, _3s, _4s, _5, _6s) { // "<" id ws* attribute* ">" ws*
		// return array of attributes, _4s is an array of attributes
		return { name: _2.toJS (), attributes:_4s.toJS () }; },
	    elementEnd: function (_1, _2, _3, _4, _5s) { return _2.toJS (); }, // "<" "/" id ">" ws*
	    content: function (_1, _2s) { // elementHead elementTail*
		return (_1.toJS () + _2.toJS ().join ('')); },
	    elementTail: function (_1, _2, _3s) { // &"<" element contentChar*
		return { element: _2.toJS(), data: _3s.toJS ().join ('') }; },
	    elementHead: function (_1s) { return _1s.toJS ().join (''); }, // contentChar*
	    contentChar: function (_1) { return _1.toJS(); }, // ~"<" any
	    attribute: function (_1, _2, _3, _4s) { // id "=" string ws*
		return { name: _1.toJS (), data: _3.toJS () }; },
	    id: function (_1, _2s) { return _1.toJS () + _2s.toJS ().join (''); }, // letter (letter | digit)*
	    string: function (_1, _2s, _3) { return _2s.toJS ().join (''); }, // "\"" stringChar* "\""
	    stringChar: function (_1) { return _1.toJS (); }, // escapedChar |  anyStringChar
	    escapedChar: function (_1, _2) { // "\\" any
		var c = _toJS ();
		if (c == "n") return "\n"
		else if (c == "t") return "\t";
		else if (c == "r") return "\r";
		else return c; },
	    anyStringChar: function (_1) { return _1.toJS (); }, // ~"\"" any
	    ws: function (_1) { return ""; }, // " " | "\t" | "\n"
	    _terminal: function() { return this.primitiveValue; }
	});
    }
