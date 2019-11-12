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
**So I asked myself, what if we diagrammed with code?**

- start simple
- just components
- no boundaries (boxes)

**But I'm not the first with this idea...**