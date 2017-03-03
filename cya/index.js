
const { Component, h, render } = window.preact;

class App extends Component {

	render(props, state) {
		return (
			h('div', {id: 'app'},
				h('h1', null, state.adventureName),
				h('h2', null, state.currentEntry.name),
				h('p', null, state.currentEntry.description)
			)
		);
	}

	constructor(props) {
		super(props);

		this.state = {
			adventureName: "The Haunted House",
			currentEntry: undefined,
			entries: {
				1: {
					name: "The Grounds",
					description: `A dark path winds through an overgrown garden to the veranda of a grand house`,
					actions: [
						
					]
				}
			}
		};

		this.state.currentEntry =  this.state.entries[1];
	}
}

render(h(App), document.body);
