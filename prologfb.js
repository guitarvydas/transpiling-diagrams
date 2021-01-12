function addPrologFact (relation, subject, object) {
    if (undefined === object) {
	factbase.push (`${relation}('${subject}').`);
    } else {
	factbase.push (`${relation}('${subject}', '${object}').`);
    }
}
// push a relation where the object is an integer
function addPrologFactInt (relation, subject, integerObject) {
    if (!integerObject || !subject || !relation) {
	throw `need a triple, here [${relation} (${subject}, ${object})]`;
    } else {
	factbase.push (`${relation}('${subject}', ${integerObject}).`);
    }
}

function logPrologFB () { factbase.forEach (fact => { console.log (fact); })}


