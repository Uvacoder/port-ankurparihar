# ankurparihar.github.io
[Ankur's Little Playground](https://ankurparihar.github.io)

## Important
- All the links must be domain relative not directory relative
- Style and Scripts must be included in relative files not in global files
- Use standard [index.html](index.html) and make necessary changes.
- Content must be inside `.content` div starting with `stylesheet` element for css if required
- Javascript files must be at the end inside body element. Injected javascripts must have id `injectedJS`
- [Update sitemap](https://www.xml-sitemaps.com)

## Branching
- [master](https://github.com/ankurparihar/ankurparihar.github.io/tree/master) branch has minified javascript and css files, while [dev](https://github.com/ankurparihar/ankurparihar.github.io/tree/dev) branch has beautified files
- Demo projects are used as submodules
- Submodule **master** branch contains original code, **github.io** branch contains minified code embedded into site, **github.io-dev** contains beautified code

#### This repo

|    master   |     dev     |
|-------------|-------------|
|   minimize  |  beautified |

#### Submodule repo

| master | github.io | github.io-dev |
|-----------------------|-----------------------|-----------------------|
| original code | (site) minimized | (site) beautified |

- Workflow
	- make sure github.io -> dev, submodule -> github.io-dev
	- Make changes -> Push to repective branches
	- In submodules
		- Minify files
		- Checkout github.io -> push
	- After that, in this
		- Minify files
		- Checkout all -> push
	- Making change in non JS/CSS file
		- Sync with command `git checkout <branch> <path/to/file>`, do not `cherry-pick`

## Working in local environment
- Use local virtual host. Due to all relative links the host must be changed.
- Create an entry if not `127.0.0.1 ankurparihar.github.io` in */etc/hosts* . Use your virtual host ip address in place of `127.0.0.1`.

## Personalization
- Themes are enabled on website
- Github authentication is needed to enable personalization
- [git-ddb](https://github.com/ankurparihar/git-ddb-docs) is used for storing data
- Use color variables `var(--theme-color, #f3c669)` and `rgba(var(--theme-color-r, 243), var(--theme-color-g, 198), var(--theme-color-b, 105), 0.5)` to apply themes sitewide

## Content upload

### General
- Upload content and get a reference like a link to Google drive
- Upload relative image  of size 268x394 in `/media/{directory}`
- Image must have `alt` attribute
- buttons must have `aria-label` with button description
- cross-origin links must have `rel="noopener"` attribute
- Update rich preview meta data as necessary
- Minify files using [JSMinifier](https://javascript-minifier.com/) and [CSSMinifier](https://cssminifier.com/)

### Course content
- Add course information in [script.js](/res-iitr/script.js). If the course is new simply add that course in `Semester` variable.
- Use `svg_data` to display relative material icon
- Update semester `cur_sem`

### Demos/Projects
- Add project info in `Projects`
- Create relative entry in `Semester` if the project is course related
- For live project create subdir under `demo` directory with same name as written in `Projects`
- Upload relative image of size 800x400 or ratio 2:1 in `/media/demo/` directory

### Dynamic page
- Only direct child of root node can be dynamic page
- Create page in appropriate directory and make sure to have a unique `nav-icon` to be used by `cur_tab`
- Update `references` in [dynamic.js](/media/dynamic.js)
- Update all other index files to add that page in navigation menu and footer if necessary

### Home page ribbons
- Copy ribbon skeleton from [index.html](index.html)
- Simply create entry in [home.js](/media/home.js) if creating new ribbon
- Make sure to follow convention
- Calculate timestamp using
```javascript
	(new Date()).getTime();
```

## Index files
- /index.html
- /error.html
- /res-iitr/index.html
- /demo/index.html
- /demo/fractal-generator/index.html
- /changelog/index.html