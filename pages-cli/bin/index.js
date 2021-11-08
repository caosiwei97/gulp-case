#!/usr/bin/env node

const args = ['--cwd', process.cwd(), '--gulpfile', require.resolve('..')]
args.forEach((item) => {
  process.argv.push(item)
})
require('gulp/bin/gulp.js')
