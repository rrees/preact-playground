
const { Component, h, render } = window.preact;

class App extends Component {
	componentDidMount() {
		this.setState({message: "Hello world!"})
	}

	render(props, state) {
		const strapline = `${state.message}`;
		
		return (
			h('div', {id: 'app'},
				h('h1', null, 'Guessing game'),
				h('p', null, strapline)
			)
		);
	}
}

render(h(App), document.getElementById('game-panel'));
