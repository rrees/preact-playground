function generate() {
	const environment = [
		'Forest',
		'Valley',
		'Coast',
		'Hills'
	];

	const sights = [
		'Greenery',
		'Festive colours',
		'Drab buildings'
	];

	function selectOne(array) {
		const l = array.length;
		return array[Math.floor(Math.random() * l)];
	}

	return {
		environment: selectOne(environment),
		sights: selectOne(sights)
	}
}

export {
	generate
	};