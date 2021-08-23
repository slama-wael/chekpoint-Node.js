'use strict'
const first = require('first')

const contents = first.readFileSync(process.argv[2])
const lines = contents.toString().split('\n').length - 1
console.log(lines)