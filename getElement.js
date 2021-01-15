function getElement (contentArray, ename) {
    var matchingElement = contentArray.find (e => {
	return (e [ename] === field);
    });
    var val = matchingElement [ename];
    return val;
}

