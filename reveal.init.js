Reveal.initialize({
	controls: true,
	progress: true,
	center: true,
	hash: true,

	transition: 'slide', // none/fade/slide/convex/concave/zoom

	// More info https://github.com/hakimel/reveal.js#dependencies
	dependencies: [
		{ src: 'revealjs/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: 'revealjs/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: 'revealjs/plugin/highlight/highlight.js', async: true },
		{ src: 'revealjs/plugin/search/search.js', async: true },
		{ src: 'revealjs/plugin/zoom-js/zoom.js', async: true },
		{ src: 'revealjs/plugin/notes/notes.js', async: true }
	]
})
