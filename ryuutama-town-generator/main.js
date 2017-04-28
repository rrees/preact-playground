
const { Component, h, render } = window.preact;
import * as town from './town';

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
				h('button', { onClick: (e) => { component.setState(town.generate()) }}, 'Generate'),
			)
		);
	}

	constructor(props) {
		super(props);

		this.townKeys = [
			'environment',
			'sights',
			'sounds'
		];

		this.state =town.generate();
	}
}

render(h(App), document.body);
