d3.js

# General Update Pattern - newer Syntax

```javascript
svg.selectAll("circle")
  .data(data)
  .join(
    enter => enter.append("circle").attr("fill", "green"),
    update => update.attr("fill", "blue")
  )
  .attr("stroke", "black");
```

<cite>Source: https://github.com/d3/d3-selection</cite>

Note: 
	- New as of version 1.4, one year ago?
	- solves problem of large files with sequential blocks of code.