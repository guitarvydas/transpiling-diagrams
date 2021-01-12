function main () {
    var graphicalObjects = graphModel.root;
    factbase = [];
    graphicalObjects.forEach (element => {
	//createExistenceFact (element);
	createParentFact (element);
	createNameFact (element);
	createArrowFact (element);
	createRectFact (element);
    })
}

main ();
logPrologFB ();
