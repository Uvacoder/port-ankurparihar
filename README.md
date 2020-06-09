
## SPA Architecture
- This webapp runs as a single page application (SPA)
- Constant parts of the page like _toolbar_, _navigation-menu_, _footer_ etc. does not reload.
- When user tries to navigate away from within the application (i.e. using navigation menu or footer links), the URL is parsed.
- The decision to load page partially or complete reload is based on predefined logic
- For each page of website separate static html files are generated.

### Benefits of being SPA
- Reduce data consumption as only partial data is loaded.
- SEO friendly - separate meta tags for each page
- Fast - less data required between pages
- Serverless - generate static files as well

## General Guidelines

**_Note:_** __These instructions are for personal use only!__

### Responsiveness
- Making it as responsive as possible
- Testing on Chrome Desktop and chrome devtools mobile emulator  

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

### Ripple Effect
- Ripple logic is copied and minified from vuetify library
- To use on some element, just add the element to `rippleEnabledElements` array, which will show it after `click` event
- To use it on custom event on some element, use `showRippleEffect(event, element)` function
	```javascript
	element.addEventListener('click', (event) => {
	    showRippleEffect(event, element)
	})
	```

### Developing in local environment
- Using xampp as local server
- Enable virtual host by uncommenting this line (remove `#`)
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

### Configuration
- _Environment_: Ubuntu 16.04
- _Code Editor_: Visual Studio Code
- _Server Stack_: Xampp

### Cautions
- disable git fileMode checking by `git config core.fileMode false`
- Develop on `dev` branch only

### Testing application on mobile
- Get IP address of device on which local server is running, e.g. `ifconfig` or `hostname -I`
- _[Optional]_ Disable firewall. In ubuntu use: `sudo ufw disable`
- From mobile device visit IP address
- Don't visit domain name _[ankurparihar.github.io]_ as it will redirect to github page instead of local server.


## Pages

### Format
- Each page has a dedicated folder named after page.
- The folder must contains `index.html`, `style.css` and `script.js` files
- index.html contains static html code
- style.css contains styling rules for the page only
- script.js contains page specific logic
- `script.js` must follow below structure. Example for page - `/section1/page1/`
	```javascript
		const page__data = {
			navID: "nav-page-nav",	// to highlight navigation corresponding element in navigation menu
			page_loc_text: "Page",	// short description to display on header of page
			apply: (root) => {
				// Logic when: html doesn't contain static data
			},
			onStaticLoad: (root) => {
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
- Every change must be compiled and corresponding html and data-template must be updated
- Every script must have data which must be registered to SPA
- Styling should be limited to .css files as much as possible

## Global files
- These files are part of fixed application structure which repeats in each file
- `/media/script.js` - Global Script, contains SPA code and global utilities
- `spa` variable in global script contains all the data
- `/media/style.css` - Global styling rules
- `/media/vuetify-1.0.17.min.css` - vuetify css library
- `/media/simplebar.min.js` and `/media/simplebar.min.js` - simplebar library for scrollbars
- app related scripts are imported, this way variables declared in scripts does not take place in global scope and help reduce conflict
