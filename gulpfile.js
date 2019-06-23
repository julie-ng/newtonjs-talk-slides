const { src, dest, parallel, series, watch } = require('gulp')
const del = require('del')
const fs = require('fs')
const sass = require('gulp-sass')
const merge = require('merge-stream')
const hb = require('gulp-hb')
const rename = require('gulp-rename')
const tree = require('directory-tree')
const browserSync = require('browser-sync')
const server = browserSync.create()

const config = require('./slides.config.js')
const slides = _filterTree(tree('./slides').children)
const data = Object.assign({}, config, { slides: slides })


// Build and Template Setup
// ------------------------

function clean () {
	return del([
    'build/**/*',
  ])
}

function reload (done) {
  server.reload()
  done()
}

function serve (done) {
  server.init({
    server: {
      baseDir: './build'
    }
  })
  done()
}

function watcher () {
	watch('theme/scss/**/*.scss', series(css, reload))
	watch('theme/**/*.{hbs,html}', series(html, reload))
	watch('slides/**/*', series(html, reload))
}

function _filterTree (tree) {
	let filtered = []
	tree.forEach(function (child, i) {
		if (child.type === 'directory') {
			filtered.push({
				folder: child.path,
				slides: _filterTree(child.children)
			})
		}
		else if (child.extension === '.html') {
			filtered.push({
				type: 'html',
				content: fs.readFileSync(child.path)
			})
		}
		else if (child.extension === '.md') {
			filtered.push({
				type: 'markdown',
				content: child.path
			})
		}
	})
	return filtered
}


// Tidy template
// -------------

function css () {
	return src('./theme/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(dest('./build/css'))
}

function html () {
	const hbstream = hb()
		.partials('./theme/partials/*.hbs')
		.data(data)
	return src('./theme/*.hbs')
		.pipe(hbstream)
		.pipe(rename({ extname: '.html' }))
		.pipe(dest('./build'))
}

function markdown () {
	return src('./slides/**/*.md')
		.pipe(dest('./build/slides'))
}


// Reveal.js Library
// -----------------

function reveal () {
	return merge(
		src('./node_modules/reveal.js/css/**/*.css')
			.pipe(dest('./build/revealjs/css')),

		src('./node_modules/reveal.js/js/reveal.js')
			.pipe(dest('./build/revealjs')),

		src('./node_modules/reveal.js/lib/**')
			.pipe(dest('./build/revealjs/lib')),

		src('./node_modules/reveal.js/plugin/**')
			.pipe(dest('./build/revealjs/plugin'))
	)
}

function init () {
	return src('./reveal.init.js')
		.pipe(rename('init.js'))
		.pipe(dest('./build/'))
}


// Public Gulp Tasks
// -----------------

function build (done) {
	return series(
		clean,
		parallel(
			css,
			html,
			markdown,
			reveal
		),
		init
	)(done)
}


// Exports
// -------

exports.default = build
exports.build = build
exports.dev = series(build, serve, watcher)