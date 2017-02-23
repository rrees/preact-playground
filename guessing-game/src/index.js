
const { Component, h, render } = require('preact');

const Game = require('./game');

class App extends Component {
	componentDidMount() {
	}

	render(props, state) {
		const component = this;

		function renderStrapline() {
			if(state.won) {
				return "Congratulations, you won!";
			}

			if(!state.playing && !state.won) {
				return "Sorry, you've lost";
			}
			
		 	return `Looking for ${state.targetNumber} in ${state.maxGuessableNumber} with ${state.remainingGuesses} guess left`;
		}

		function renderButtons() {
			return state.guessableNumbers.map((n) => {
				const attributes = {
					onClick: (e) => component.setState(Game.handleGuess(state, n))
				};

				if(state.guessedNumbers.includes(n)) {
					attributes.disabled = 'true'
				}

				return h('button', attributes, n.toString());
			});
		}

		return (
			h('div', {id: 'app', class: "game-panel"},
				h('h1', null, 'Guessing game'),
				h('p', null, renderStrapline()),
				renderButtons()
			)
		);
	}

	constructor(props) {
		super(props);

		this.state = Game.setup();

	}
}

render(h(App), document.getElementById('game-panel'));
