d3.js

# Data Driven – describe what, not how

- There are no loops over the DOM
- Based on `data()`
- `selectAll()` does it all: 
  - add, update, remove elements
  - no DOM management
- Apply values to DOM attributes: `cx`, `cy` and `r`

```javascript

const data = [
  { 'x': 1.0, 'y': 1.1, 'prio': 5 },
  { 'x': 2.0, 'y': 2.5, 'prio': 1 },
]

svg.selectAll('circle')
  .data(data)
  .enter().append('circle')
    .attr('cx', (d) => d.x)
    .attr('cy', (d) => d.y)
    .attr('r', (d) => 10 / d.prio) // larger circle
     
```

Note:
- No DOM management
- There is no CRUD
- Just define styles