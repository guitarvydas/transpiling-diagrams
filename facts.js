function createExistenceFact (element) {
    addPrologFact ("exists", element.id, undefined);
}

function createParentFact (element) {
    if (element.parent) {
	addPrologFact ("parent", element.id, element.parent);
    }
}

function createNameFact (element) {
    if (element.value) {
	addPrologFact ("rectname", element.id, element.value);
    }
}

function createArrowFact (element) {
    if (isEdge (element)) {
	addPrologFact ("arrow", element.id, undefined);
	addPrologFact ("source", element.id, element.source);
	addPrologFact ("target", element.id, element.target);
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
    if (e.edge) {
	result = (e.edge === "1");
    } else if (e.vertex) {
	result = (e.vertex === "0");
    } else {
	result = (e.vertex !== undefined);
    }
    return result;
}

function isRect (e) {
    return (!isEdge (e) &&
	    isVertex (e));
}

function isVertex (e) {
    return (e.vertex && e.vertex === "1");
}

function addGeometry (element) {
    var content = element.content;
    if (content) {
	if (content.element === "mxGeometry") {
	    var id = element.id;
	    addPrologFactInt ("x", id, content.x);
	    addPrologFactInt ("y", id, content.y);
	    addPrologFactInt ("width", id, content.width);
	    addPrologFactInt ("height", id, content.height);
	}
    }
}
