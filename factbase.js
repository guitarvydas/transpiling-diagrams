var factbase = [];

function clearFB () { factbase = []; }

function addFact (relation, subject, object) {
    if (object === null || object === undefined) {
	factbase.push ({r: relation, s: subject});
    } else {
	factbase.push ({r: relation, s: subject, o: object});
    }
}

function logFB () { console.log (factbase); }
