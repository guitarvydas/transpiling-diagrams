function listDiagrams (mxg) {
    var valArray = [];
    mxg.diagrams.forEach (diagram => {
	var val = getAttribute (diagram, 'name');
	valArray.push (val);
    });
    return valArray;
}
