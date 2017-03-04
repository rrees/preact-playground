
const { Component, h, render } = window.preact;

class App extends Component {

	render(props, state) {
		const component = this;
		console.log(state);

		function renderActions(state) {
			if(state.currentEntry.actions.length === 0) {
				return h('p', {}, "Your story has ended");
			}

			return state.currentEntry.actions.map((action) => h('p', {}, h('a', {onclick: (e) => component.setState({currentEntry: component.entries[action.nextEntry]})}, action.description)));
		}

		return (
			h('div', {id: 'app'},
				h('h1', null, state.adventureName),
				h('h2', null, state.currentEntry.name),
				h('p', null, state.currentEntry.description),
				renderActions(state)
			)
		);
	}

	constructor(props) {
		super(props);

		this.entries = {
			1: {
				name: "The grounds",
				description: `A dark path winds through an overgrown garden to the veranda of a grand house`,
				actions: [
					{
						description: "Walk onto the veranda",
						nextEntry: 2
					}
				]
			},
			2: {
				name: "The veranda",
				description: `Paint peels from the wood of the veranda revealing black rot in the wood beneath.`,
				actions: [
					{
						description: "Enter the overgrown grounds surrounding the house",
						nextEntry: 1
					},
					{
						description: "Enter the house",
						nextEntry: 3
					}
				]
			},
			3: {
				name: "The hall of the house",
				description: "The door closes behind you and you cannot open it again.",
				actions: []
			}
		};


		this.state = {
			adventureName: "The Haunted House",
			currentEntry: this.entries[1]
		};
	}
}

render(h(App), document.body);
