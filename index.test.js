let { equal } = require('node:assert')
let { test } = require('node:test')
let postcss = require('postcss').default

let plugin = require('./')

function run(input, output, opts) {
  let result = postcss([plugin(opts)]).process(input, { from: '/test.css' })
  equal(result.css, output)
  equal(result.warnings().length, 0)
}

test('supports simple case', () => {
  run(
    'a { color: oklch(from green l c h / 20%) }',
    'a { color: color-mix(in srgb, green 20%, transparent) }'
  )
})

test('supports hex', () => {
  run(
    'a { color: oklch(from #ff0 l c h / 5.5%) }',
    'a { color: color-mix(in srgb, #ff0 5.5%, transparent) }'
  )
})

test('supports custom properties', () => {
  run(
    'a { color: oklch(from var(--foo) l c h / 100%) }',
    'a { color: color-mix(in srgb, var(--foo) 100%, transparent) }'
  )
})

test('supports multiple values', () => {
  run(
    'a { border-color: oklch(from white l c h / 5%) ' +
      'oklch( from black l  c  h  /  5%) }',
    'a { border-color: color-mix(in srgb, white 5%, transparent) ' +
      'color-mix(in srgb, black 5%, transparent) }'
  )
})
