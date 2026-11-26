# Yahya AFFAN — Portfolio

Personal portfolio: authentication, access control and audit projects, education, experience and contact. Available in English, French and Chinese.

Live: https://elbragga.github.io/Yahya-AFFAN-Portfolio/

## Run it locally

No build step. Open `index.html` in a browser.

## Files

- `index.html` — page shell and metadata
- `styles.css` — all styles
- `script.js` — content and translations (the `T` object at the top) plus the page logic
- `assets/hero.jpg` — landing page photo

## Editing content

All text, in all three languages, is in the `T` object at the top of `script.js`. Text in `[brackets]` is a placeholder to replace.

## Contact form

Set `FORM_URL` at the top of the app section in `script.js` to a [Formspree](https://formspree.io) form URL. Until it is set, the form opens the visitor's email app with the message filled in.

## Notes

- The site is plain HTML, CSS and JavaScript, with Google Fonts as the only external resource.
- Page addresses use the URL hash (for example `#/work/1`), so the back button works on GitHub Pages.
- The language choice is saved in the browser's localStorage.

## License

MIT, see `LICENSE`.
