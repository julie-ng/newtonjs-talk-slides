d3.js

# Links, Key Functions

```javascript
let links = d3.select(this.container)
	.selectAll('.link')
	.data(data.links. (d) => d.source.id + '-' + d.target.id) //  (d) => d.id) - does not work for links` 🤦‍♀️
```

```javascript
links.exit()
	.transition(fade)
	.remove()
```

```javascript
links.enter()
	.append('line')
	.merge(links)
		.attr('id', (l) => 'link-' + l.source.id + '-' + l.target.id)
		.attr('marker-end', 'url(#end)')
```