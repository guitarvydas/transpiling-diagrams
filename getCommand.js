function getDiagramByTabName (mxg, tabName) {
    var found = "";
    mxg.diagrams.forEach (diagram => {
	var diagramName = getAttribute (diagram, 'name');
	if (tabName === diagramName) {
	    found = diagram;
	}
    });
    if (found !== "") {
	return found;
    } else {
	throw `diagram ${tabName} not found`;
    }
}
