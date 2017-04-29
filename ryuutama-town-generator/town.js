
const populationTable = {
	choices: [
		[1, 3, 'Village'],
		[4, 7, 'Town'],
		[8, 9, 'City'],
		[10, 10, 'Large city']
	],
	maxChoice: 10
};

const environment = [
	'Forest',
	'Valley',
	'Coast',
	'Cliff',
	'Wasteland',
	'Plains',
	'Trees',	
	'Hills'
];

const sights = [
	'Greenery',
	'Festive colours',
	'Drab buildings',
	'Gleaming buildings'
];


const sounds = [
	'Running water',
	'Birds',
	'Market hawkers',
	'Clanging metal',
	'Children',
	'Livestock'
	];

function selectOne(key, array, state) {
	console.log(state);
	const l = array.length;
	const value = array[Math.floor(Math.random() * l)];
	state[key] = value;
	return state
}

function selectFromTable(key, choicesTable, state) {
	const choice = 1 + Math.floor(Math.random() * choicesTable.maxChoice);
	//console.log(choice);

	const entry = choicesTable.choices.find((entry) => entry[0] <= choice && choice <= entry[1]);

	if(entry) {
		state[key] = entry[2];
	}

	return state;
}

function generate() {

	const generators = [
		(state) => selectFromTable('Population', populationTable, state),
		(state) => selectOne('Environment', environment, state),
		(state) => selectOne('Sights', sights, state),
		(state) => selectOne('Sounds', sounds, state)
	];

	return Array.reduce(generators,(acc, f) => f(acc), {})
}

export {
	generate
	};