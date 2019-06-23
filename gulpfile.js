const { src, dest, parallel, series, watch } = require('gulp')
const del = require('del')
const sass = require('gulp-sass')
const merge = require('merge-stream')
const hb = require('gulp-hb')
const rename = require('gulp-rename')
const browserSync = require('browser-sync')
const server = browserSync.create()
const config = require('./slides.config.js')

// Build and Template Setup

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
	watch('theme/**/*.+(hbs|html)', series(html, reload))
}


// Tidy template

function css () {
	return src('./theme/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(dest('./build/css'))
}

function html () {
	return src('./theme/*.hbs')
		.pipe(hb().data(config))
		.pipe(rename({ extname: '.html' }))
		.pipe(dest('./build'))
}

// Reveal.js Library

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

function build (done) {
	return series(
		clean,
		parallel(
			css,
			html,
			reveal
		),
		init
	)(done)
}

exports.default = build
exports.build = build
exports.dev = series(build, serve, watcher)