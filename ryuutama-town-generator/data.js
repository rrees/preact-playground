const populationTable = {
	choices: [
		[1, 3, 'Village'],
		[4, 7, 'Town'],
		[8, 9, 'City'],
		[10, 10, 'Large city']
	],
	maxChoice: 10
};

const governmentTable = {
	choices: [
		[0, 0, "As needed"],
		[1, 2, "Eldest"],
		[3, 4, "Elected Head"],
		[5, 6, "Elected council"],
		[7, 7, "Lottery"],
		[8, 9, "Hereditary council"],
		[10, 11, "Hereditary ruler"]
	],
	maxChoice: 10,
	modifier: (state) => {
		console.log(state);
		if(state.Population === "Village") {
			return -1;
		}

		if(state.Population === "City"
			|| state.Population === "Large city") {
			return 1;
		}

		return 0;
	}
}

const rulingAttitude = [
	"Resistant to change",
	"Secretive",
	"Cynical",
	"Lazy",
	"Inexperienced",
	"Crude",
	"Forgetful",
	"Generous",
	"Meticulous",
	"Idealistic"
];

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

const buildingTable = {
	maxChoice: 6,
	choices: [
		[1, 1, "Bridge"],
		[2, 2, "Market"],
		[3, 3, "Shrine"],
		[4, 4, "Speciality production"],
		[5, 5, "Civic center"],
		[6, 6, "Monument"],
		[7, 7, "Castle"]
	],
	modifier: function(state) {
		if(state.Population === "City"
			|| state.Population === "Large city") {
			return 1;
		}

		return 0;
	}
}

export default {
	populationTable,
	governmentTable,
	environment,
	sights,
	sounds,
	rulingAttitude,
	buildingTable
}