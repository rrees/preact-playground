import data from './data';

function pickBetween(lower, upper) {
	return lower + Math.floor(Math.random() * upper);
}

function selectOne(key, array, state) {
	console.log(state);
	const l = array.length;
	const value = array[Math.floor(Math.random() * l)];
	state[key] = value;
	return state
}

function selectFromTable(key, choicesTable, state) {
	let choice = 1 + Math.floor(Math.random() * choicesTable.maxChoice);

	//console.log(choice);
	if(choicesTable.modifier) {
		choice = choice + choicesTable.modifier(state);
	}
	//console.log(choice);

	const entry = choicesTable.choices.find((row) => row[0] <= choice && choice <= row[1]);

	if(entry) {
		state[key] = entry[2];
	}

	return state;
}

function selectOneWithModifier(key, table, state) {
	const modifier = table.modifier ? table.modifier(state) : 0;

	const goods = table.choices[pickBetween(0, table.defaultUpperLimit) + modifier];

	state[key] = goods;

	return state;
}

function generate() {

	const generators = [
		(state) => selectFromTable('Population', data.populationTable, state),
		(state) => selectFromTable('Government', data.governmentTable, state),
		(state) => selectOne('Authority attitude', data.rulingAttitude, state),
		(state) => selectOne('Environment', data.environment, state),
		(state) => selectFromTable('Building', data.buildingTable, state),
		(state) => selectOne('Sights', data.sights, state),
		(state) => selectOne('Sounds', data.sounds, state),
		(state) => selectOneWithModifier('Speciality goods', data.specialityGoods, state),
	];

	return Array.reduce(generators,(acc, f) => f(acc), {})
}

export {
	generate
	};