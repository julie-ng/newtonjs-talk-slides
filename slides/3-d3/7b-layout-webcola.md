d3.js

# Layout Engine - Webcola 

<img src="./images/newton/layout-cola.png" class="img-right">

```javascript
let size = [this.width, this.height]
let force = Cola.d3adaptor(d3).size(size)

force
  .nodes(this.network.get('nodes'))
  .links(this.network.get('links'))
  .avoidOverlaps(true)
  .handleDisconnected(true)
  // .symmetricDiffLinkLengths(25,0.5)
  .jaccardLinkLengths(65,0.8)

if (this.options.flow === 'horizontal') {
  force.flowLayout('x', 100)
}

force.start(50)
```

Note:
- Default Force, Particles Engine
- Too uniform?