# PostCSS Relative Opacity

<img align="right" width="135" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="https://postcss.org/logo-leftp.svg">

[PostCSS] plugin to add opacity to any colors with [Relative Color Syntax].

Upcoming CSS Colors 5 allows to change any color including adding opacity.
But Firefox still [doesn’t support] this syntax. This tool partially polyfill
thi syntax via [`color-mix()`].

```css
.notice {
  background: oklch(from var(--accent-color) l c h / 30%);
}
```

will be processed to:

```css
.notice {
  background: color-mix(in srgb, var(--accent-color) 30%, transparent);
}
```

---

<img src="https://cdn.evilmartians.com/badges/logo-no-label.svg" alt="" width="22" height="16" />  Made in <b><a href="https://evilmartians.com/devtools?utm_source=NAME&utm_campaign=devtools-button&utm_medium=github">Evil Martians</a></b>, product consulting for <b>developer tools</b>.

---

[Relative Color Syntax]: https://www.w3.org/TR/css-color-5/#relative-color
[doesn’t support]:       https://caniuse.com/css-relative-colors
[`color-mix()`]:         https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix
[PostCSS]:               https://github.com/postcss/postcss


## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-relative-opacity
```

**Step 2:** Check your project for existing PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-relative-opacity'),
    require('autoprefixer')
  ]
}
```

[official docs]: https://github.com/postcss/postcss#usage

