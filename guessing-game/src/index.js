
const { Component, h, render } = require('preact');

const Game = require('./game');

class App extends Component {
	componentDidMount() {
	}

	render(props, state) {
		const strapline = `Looking for ${state.targetNumber} in ${state.maxGuessableNumber}`;

		const buttons = state.guessableNumbers.map((n) => h('button', null, n.toString()));

		return (
			h('div', {id: 'app', class: "game-panel"},
				h('h1', null, 'Guessing game'),
				h('p', null, strapline),
				buttons
			)
		);
	}

	constructor(props) {
		super(props);

		this.state = Game.setup();
	}
}

render(h(App), document.getElementById('game-panel'));
