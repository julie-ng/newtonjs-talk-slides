D3.js

# Example Data

- Nodes array
  - IDs must be unique
- Links Array
	- `source` & `target` reference IDs
	- references are key based
	- not array index based

```javascript
const data = {
	nodes: [
		{ id: 'web', label: 'Web Frontend' },
		{ id: 'mobile', label: 'Mobile Device' },
		{ id: 'backend', label: 'Monolith Backend' },
		{ id: 'db', label: 'Database' }
	],
	links: [
		{ source: 'web', target: 'backend' },
		{ source: 'mobile', target: 'backend' },
		{ source: 'backend', target: 'db' }
	]
}
```