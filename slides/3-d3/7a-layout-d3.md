d3.js

# Layout Engine - D3 Force 

<img src="./images/newton/layout-d3.png" class="img-right">

```javascript
let force = d3.forceSimulation(this.network.get('nodes'))
  .force('link', d3.forceLink(
    this.network.get('links'))
      .id(d => d.id)
      .distance(100)
      .strength(0.5)
  )
  .force('charge', d3.forceManyBody(-30))
  .force('center', d3.forceCenter(this.width / 2, this.height / 2))
  .force('collide', d3.forceCollide(50))
  .force('position', d3.forceRadial(20))
```

Note:
- Better, but flawed too
- Layout must be recalculated everytime (see demo)