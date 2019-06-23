Reveal.initialize({
	controls: true,
	progress: true,
	center: true,
	hash: true,

	transition: 'slide', // none/fade/slide/convex/concave/zoom

	// More info https://github.com/hakimel/reveal.js#dependencies
	dependencies: [
		{ src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: 'plugin/highlight/highlight.js', async: true },
		{ src: 'plugin/search/search.js', async: true },
		{ src: 'plugin/zoom-js/zoom.js', async: true },
		{ src: 'plugin/notes/notes.js', async: true }
	]
})
