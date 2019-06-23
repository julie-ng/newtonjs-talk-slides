const { src, dest, parallel, series } = require('gulp')
const del = require('del')
const sass = require('gulp-sass')
const merge = require('merge-stream')
const hb = require('gulp-hb')
const rename = require('gulp-rename')
const config = require('./slides.config.js')

function clean () {
	return del([
    'build/**/*',
  ])
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
		.pipe(rename('reveal.js'))
		.pipe(dest('./build/'))
}

exports.default = series(
	clean,
	parallel(
		css,
		html,
		reveal
	),
	init
)
