function getAttribute (diagram, field) {
    var attributeArray = diagram.attributes;
    var matchingAttribute = attributeArray.find (a => {
	return (a ['name'] === field);
    });
    var val = matchingAttribute ['value'];
    return val;
}

