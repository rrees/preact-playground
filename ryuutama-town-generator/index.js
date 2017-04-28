
const { Component, h, render } = window.preact;

function generateTown() {
	const environment = [
		'Forest',
		'Valley',
		'Coast',
		'Hills'
	];

	sights = [
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

class App extends Component {

	renderDetails(state) {
		console.log(state);

		const townDetails = this.townKeys.map((key) => { return [key, state[key]]});

		function renderEntry(entry) {
			const [key, value] = entry;
			const name = key.charAt(0).toUpperCase() + key.slice(1);
			return [h('dt', null, name), h('dd', null, value)];
		}

		return (
			h('dl', null, townDetails.map(renderEntry))
		);
	}

	render(props, state) {
		const component = this;
		//console.log(state);

		return (
			h('div', {id: 'app'},
				component.renderDetails(state),
				h('button', { onClick: (e) => { component.setState(generateTown()) }}, 'Generate'),
			)
		);
	}

	constructor(props) {
		super(props);

		this.townKeys = [
			'environment',
			'sights'
		];

		this.state = generateTown();
	}
}

render(h(App), document.body);
