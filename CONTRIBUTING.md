**_Note:_** __These instructions are for personal use only! Not accepting pulls. Raise an issue if you like__

## SPA Architecture
- This webapp runs as a single page application (SPA)
- Constant parts of the page like _toolbar_, _navigation-menu_, _footer_ etc. does not reload.
- When user tries to navigate away from within the application (i.e. using navigation menu or footer links), the URL is parsed.
- The decision to load page partially or complete reload is based on predefined logic
- For each page of website separate static html files are generated.


## Tools
- [Javascript Minifier](https://javascript-minifier.com/) - Minify javascript files
- [CSS Minifier](https://cssminifier.com/) - Minify CSS files
- [Google Chrome's coverage tool](https://developers.google.com/web/tools/chrome-devtools/coverage) - Find unused JavaScript And CSS code
- [Sitemap Generator](https://www.xml-sitemaps.com/) - Generator XML sitemaps
- [ImageMagick](https://imagemagick.org/index.php) - Convert images to webp

## General
- Buttons must have `aria-label` with button's description
- cross-origin links must have `rel="noopener"` attribute
- Image must have `alt` attribute
- Images must be properly resized and in `webp` format
- All links must be domain relative.
    - For example, project structure is -
	```
	    .
	    └── ankurparihar.github.io
	        └── res-iitr
	            ├── index.html
	            └── style.css
	```
    - Then ways to call `style.css` from `index.html` or somewhere else will be
		- `/res-iitr/style.css` ✔️
		- `file://...ankurparihar.github.io/res-iitr/style.css` ❌
		- `./style.css` ❌
		- `style.css` ❌

### Responsiveness
- Make it as responsive as possible
- Testing on Chrome Desktop and chrome devtools mobile emulator  


## Utilities

### URL breakup
- `URLDissect(url)` function breaks down given `URL` into parts
- For example `http://ankurparihar.github.io/res-iitr?tab=6-2&theme=light` breaks into
	```JSON
	{
		"url": "http://ankurparihar.github.io/res-iitr?tab=6-2&theme=light",
		"protocol": "http",
		"domain": "ankurparihar.github.io",
		"path": "/res-iitr",
		"param": {
			"tab": "6-2",
			"theme": "light"
		}
	}
	```

### `contentRoot`
- It is an `HTMLElement` from `index.html` files.
- Dynamic content is pasted inside this element
- Physical structure outside this, remains consistent across all `index.html` files
	```HTML
	    ...
	        <div class="container pa-0 fluid">
	            <!--Dynamic content pasted by pages here-->	
	        </div>
	    ...
	```
- Do not temper with this or outside this.

### Overlay mechanism
- Multiple elements can request overlay activation through `activateOverlay` function.
- Overlay will deactivate on click or touchstart event.
- The requesting element needs to register itself through `registerOverlayElement(element, function)`.
- The function will be executed in case of indirect deactivation of overlay, for example clicking on other area than of element itself
- For example:
	- User opens navigation `showNav`
	- The `navElement` element registers with `registerOverlayElement(navElement, closeNav)`
	- `closeNav` closes navigation and deactivates overlay
	- But in case user clicks on overlay it will fire `closeNav` to close the navigation 
- Overlay can be requsted by many elements, but on deactivation all elements are closed and application returns to its normal state
- Overlay does not propogate click events but scrolling will work.

### Dialog box
- Dialog is used to display information about something
- To show dialog just call `showDialog(innerHTML)` with html snippet as parameter.
- It will simply include your html and display with an overlay
- It is below overlay

### Ripple Effect
- Ripple logic is copied and minified from vuetify library
- To use on some element, just add the element to `rippleEnabledElements` array, which will show it after `click` event
- To use it on custom event on some element, use `showRippleEffect(event, element)` function
	```javascript
	element.addEventListener('click', (event) => {
	    showRippleEffect(event, element)
	})
	```


## Development

### Developing in local environment

#### Guidelines for xamppx server

- Enable virtual host by uncommenting (remove `#`) this line in `/opt/lampp/etc/httpd.conf`
	```
	#Include etc/extra/httpd-vhosts.conf
	```
- edit virtual host configuration in `/opt/lampp/etc/extra/httpd-vhosts.conf`
	```xml
	<VirtualHost *:80>
		DocumentRoot "/path/to/ankurparihar.github.io"
		DirectoryIndex index.html index.php
		ServerName ankurparihar.github.io
		<Directory "/path/to/ankurparihar.github.io">
			Options All
			AllowOverride All
			Require all granted
		</Directory>
	</VirtualHost>
	```

### Recommanded Configuration
- _OS_: Ubuntu 16.04
- _Code Editor_: Visual Studio Code
- _Server Stack_: Xampp
- _Browser_: Google Chrome

### Testing application on mobile
- Get IP address of device on which local server is running, e.g. `ifconfig` or `hostname -I`
- _[Optional]_ Disable firewall. In ubuntu use: `sudo ufw disable`
- From mobile device visit IP address
- Don't visit domain name _[ankurparihar.github.io]_ as it will redirect to github page instead of local server.


## Pages
A page is part of application. Like `/res-iitr`, `/sign-in` etc.

### Format
- Each page has a dedicated folder named after page.
- The folder must contains `index.html`, `style.css` and `script.js` files
- index.html contains static html code
- style.css contains styling rules for the page only
- script.js contains page specific logic and styling rules
- `script.js` must follow below structure. Example for page - `/section1/page1/`
	```javascript
		const page__data = {
			navID: "nav-page-nav",	// to highlight navigation corresponding element in navigation menu
			page_loc_text: "Page",	// short description to display on header of page
			template: "...",		// page's skeleton which can be appended to contentRoot
			style: "...",			// page's styling rules, copied directly (minified) from page's style.css
			apply: (root, URLInfo) => {
				// Logic when: html doesn't contain static data
			},
			onStaticLoad: (root, URLInfo) => {
				// Logic when: html contains static data
			}
		}
		// Do not append '/' in the end
		spa.register('/section1/page1', page__data)
	```

### Rules
- Do not link `script.js` in `index.html`. It will be loaded from spa logic.
- Link `style.css` in `index.html` with id `injectedCSS`
- Never put event listeners in `index.html`. Attach them from script only for example via `addEventListener`
- Every change must be compiled and corresponding html and data-template must be synchronized
- To be a part of SPA, every such page must have script with corresponding data in accordance to template which can be registered to SPA
- Styling should be limited to `.css` files instead of `.html` files as much as possible
- `.css` and `.js` files should not have unused components. Use coverage tool to remove them

## Global files
- These files are part of fixed application structure which repeats in each file
- `/media/script.js` - Global Script, contains SPA code and global utilities
- `spa` variable in global script does all the magic!
- `/media/style.min.css` - Global styling rules
- `/media/simplebar.min.js` and `/media/simplebar.min.js` - simplebar library for scrollbars
- app related scripts are imported, this way variables declared in scripts does not take place in global scope and help reduce conflict


## Version Control

### This repository
- [master](https://github.com/ankurparihar/ankurparihar.github.io/tree/master) branch has minified resources for production (ex. uglyfied or compressed `.js` and `.css`).
- [dev](https://github.com/ankurparihar/ankurparihar.github.io/tree/dev) branch has pretty-formatted resources for development.
- Make changes only on `dev` branch and merge them back to `master`.

### Submodules
- Create two separated branches for each submodule
	- `github.io` - has minified resources for production
	- `github.io-dev` - has pretty-formatted resources for development
	- make changes on `github.io-dev` and merge them back to `github.io`
- Sync `github.io` branch with `master`
- Sync `github.io-dev` branch with `dev`

### Workflow

#### Non-submodule

- Switch to `dev` branch
- Make changes, commit and sync with remote `dev`
- Switch to `master`
- Checkout changed files from `dev`
- Compress and minify files
- Commit changes and sync with remote `master`
<details>
<summary>View sample commands</summary>

```shell

    $ git checkout dev
    $ # make changes to path/to/file and commit
    $ git push <remote> dev
    $ git checkout master
    $ git checkut dev path/to/file  # get file from dev branch
    $ # minify and compress
    $ git add /path/to/file
    $ git commit -m '<message>'
    $ git push <remote> master

```
</details>

#### Submodule

- Change directory to submodule
- Switch to `github.io-dev`
- Make changes, commit and sync with remote `github.io-dev`
- Switch to `github.io`
- Checkout changed files from `github.io-dev`
- Compress and minify files
- Commit changes and sync with remote `github.io`
- Switch root_repo:`master` and submodule `github.io`
- Commit root_repo and sync with remote `master`
- Switch root_repo:`dev` and submodule `github.io-dev`
- Commit root_repo and sync with remote `dev`
<details>
<summary>View sample commands</summary>

```shell

    $ cd path/to/submodule
    $ git checkout github.io-dev
    $ # make changes and commit
    $ git push <remote> github.io-dev
    $ git checkout github.io
    $ git checkout github.io-dev /path/to/file # checkout changes from github.io-dev
    $ # minify, compress and commit
    $ git push <remote> github.io
    $ cd path/to/repository # cd to root repository
    $ git checkout master
    $ git add path/to/submodule && git commit -m '<Message>'
    $ git push <remote> master
    $ cd path/to/submodule
    $ git checkout github.io-dev
    $ cd path/to/repository
    $ git checkout dev
    $ git add path/to/submodule && git commit -m '<Message>'
    $ git push <remote> dev

```
</details>
