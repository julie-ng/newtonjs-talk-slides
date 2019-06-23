const fs = require('fs')

let config = {
	title: 'Tidy Reveal.js Template',
}
const slides = [
	{
		slides: [
			{ content: './slides/list.html', type: 'html' },
			{ content: './slides/transitions.html', type: 'html' },
		]
	},
	{ content: './slides/1-code.md', type: 'markdown' }
]

function _formatSlides (slides) {
	slides.forEach(function (s, i) {
		if (s.hasOwnProperty('type') && s.type === 'html') {
			slides[i].content = fs.readFileSync(s.content)
		}
		else if (s.hasOwnProperty('slides') && Array.isArray(s.slides)) {
			s.slides = _formatSlides(s.slides)
		}
	})
	return slides
}

config.slides = _formatSlides(slides)
module.exports = config
