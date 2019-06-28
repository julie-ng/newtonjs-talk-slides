Architecture Documentation

# Diagramming with Code

<img src="./images/architecture/graph-simple.png" alt="Enter mobile devices" class="img-center" width="300" style="margin:1em auto;">

```javascript
const data = {
	nodes: [
		{ id: 'web', label: 'Web Frontend' },
		{ id: 'mobile', label: 'Mobile Device' },
		{ id: 'server', label: 'Monolith Backend' },
		{ id: 'db', label: 'Database' },
	],
	links: [
		{ source: 'web', target: 'server' },
		{ source: 'mobile', target: 'server' },
		{ source: 'server', target: 'db' }
	]
}
```

Note:

- start simple
- just components
- no boundaries (boxes)