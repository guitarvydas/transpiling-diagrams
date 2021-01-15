function main () {
    var diagramObjects = getElement (graphModel.content, 'root').content;
    factbase = [];
    diagramObjects.forEach (element => {
	//createExistenceFact (element);
	createParentFact (element);
	createNameFact (element);
	createArrowFact (element);
	createRectFact (element);
    })
}

main ();
logPrologFB ();
