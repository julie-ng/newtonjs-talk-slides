d3.js

# Nodes

```javascript
// join
let nodes = d3.select(this.container)
	.selectAll('.node')
	.data(data.nodes, (d) => d.id) // apply data
```

```javascript
// exit
nodes.exit().remove()
```

```javascript
// update
nodes = nodes.enter()
	.append('circle')
		.attr('id', (n) => 'node-' + n.id)
	.merge(nodes)
		.attr('data-title', (n) => n.label) // any html property
		.attr('class', (n) => 'node status-' + n.status) // styling
```