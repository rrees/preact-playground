
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

function generate() {

	const generators = [
		(state) => selectOne('Environment', environment, state),
		(state) => selectOne('Sights', sights, state),
		(state) => selectOne('Sounds', sounds, state)
	];

	return Array.reduce(generators,(acc, f) => f(acc), {})
}

export {
	generate
	};