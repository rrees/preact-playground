
const { Component, h, render } = window.preact;

function generateTown() {
	const environment = [
		'Forest',
		'Hills'
	];

	function selectOne(array) {
		const l = array.length;
		return array[Math.floor(Math.random() * l)];
	}

	return {
		environment: selectOne(environment)
	}
}

class App extends Component {

	renderDetails(state) {
		if(!state) {
			return null;
		}
		const townDetails = ['environment'].map((key) => {[key, state[key]]});
		console.log(townDetails);
		return (
			h('dl', null,
				null)
		);
	}

	render(props, state) {
		const component = this;
		console.log(state);

		return (
			h('div', {id: 'app'},
				h('h2', null, 'Create your town'),
				component.renderDetails(state),
				h('button', { onClick: (e) => { component.setState(generateTown()) }}, 'Create'),
			)
		);
	}

	constructor(props) {
		super(props);
	}
}

render(h(App), document.body);
