
const { Component, h, render } = require('preact');

const Game = require('./game');

class App extends Component {
	componentDidMount() {
	}

	render(props, state) {
		const strapline = `Looking for ${state.targetNumber} in ${state.maxGuessableNumber}`;

		const buttons = state.guessableNumbers.map((n) => {
			const attributes = {
				onClick: (e) => this.setState(Game.handleGuess(state, n))
			};

			if(state.guessedNumbers.includes(n)) {
				attributes.disabled = 'true'
			}

			return h('button', attributes, n.toString());
		});

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
