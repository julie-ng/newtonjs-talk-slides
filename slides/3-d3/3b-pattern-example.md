d3.js

# Pattern Example - Nodes

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

Note: 

- Chain methods, e.g. `remove()` onto `exit()`
- Here: new and existing nodes styled same
- **Disadvantage: order matters…**
	- join, exit, enter, update
	- not intuitiive