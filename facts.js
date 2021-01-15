function createExistenceFact (element) {
    addPrologFact ("exists", element.id, undefined);
}

function createParentFact (element) {
    let a = element.attributes;
    if (a.parent) {
	addPrologFact ("parent", a.id, a.parent);
    }
}

function createNameFact (element) {
    let a = element.attributes;
    if (a.value) {
	addPrologFact ("rectname", a.id, a.value);
    }
}

function createArrowFact (element) {
    let a = element.attributes;
    if (isEdge (element)) {
	addPrologFact ("arrow", a.id, undefined);
	addPrologFact ("source", a.id, a.source);
	addPrologFact ("target", a.id, a.target);
	// we're not interested in arrow geometry - that's just for the drawing
    }
}

function createRectFact (element) {
    if (isRect (element)) {
	addPrologFact ("rect", element.id, undefined);
	addGeometry (element);
    }
}

// various

function isEdge (e) {
    var result;
    let a = element.attributes;
    if (a.edge) {
	result = (a.edge === "1");
    } else if (a.vertex) {
	result = (a.vertex === "0");
    } else {
	result = (a.vertex !== undefined);
    }
    return result;
}

function isRect (e) {
    return (!isEdge (e) &&
	    isVertex (e));
}

function isVertex (e) {
    let a = element.attributes;
    return (a.vertex && a.vertex === "1");
}

function addGeometry (element) {
    var content = element.content;
    if (content) {
	var geometry = getElement (content, 'geometry');
	if (geometry) {
	    var id = getAttribute (element, 'id');
	    addPrologFactInt ("x", id, getAttribute (geometry, 'x'));
	    addPrologFactInt ("y", id, getAttribute (geometry, 'y'));
	    addPrologFactInt ("width", id, getAttribute (geometry, 'width'));
	    addPrologFactInt ("height", id, getAttribute (geometry, 'height'));
	}
    }
}
