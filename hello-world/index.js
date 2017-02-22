
const { Component, h, render } = window.preact;

class App extends Component {
	componentDidMount() {
		this.setState({message: "Hello world!"})
	}

	render(props, state) {
		return (
			h('div', {id: 'app'},
				h('h1', null, 'Preact demo'),
				h('p', null, state.message)
			)
		);
	}
}

render(h(App), document.body);
