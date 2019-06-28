Hide d3.js

# Our Diagram
```javascript
const network = new Network(data.nodes, data.links)
const graph = new Graph({
	width: window.innerWidth,
	height: window.innerHeight,
	flow: 'horizontal',
	// engine: 'd3', // webcola per default
	draggable: true,
	network: network
})
graph.init()

graph.on('node:click', (n) => {
	graph.highlightDependencies(n, { arrows: true })
})
```