=========================== New Site Document ===========================

**_Note:_** __These instructions are for personal use only!__

### Follows SPA Architecture
- This webapp runs as a single page application (SPA)
- Constant parts of the page like _toolbar_, _navigation-menu_, _footer_ etc. does not reload.
- When user tries to navigate away from within the application (i.e. using navigation menu or footer links), the URL is parsed.
- If the URL is application domain, we load only necessary part of application required and redraw necessary area.
- For each part of website separate static data is generated.

### Benefits of being SPA
- Reduce data consumption as only partial data is loaded.
- SEO friendly
- Fast
- Serverless

### Responsive
- Responsive layout
- Testing on Chrome Desktop and chrome Mobile 

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

## Developing in local environment

- Using xampp as local server
- Enable virtual host by uncommenting this line (remove `#`)
	```
	#Include etc/extra/httpd-vhosts.conf
	```
- edit virtual host configuration in `/opt/lampp/etc/extra/httpd-vhosts.conf`
	```xml
	<VirtualHost *:80>
		DocumentRoot "/home/ankur/php/subdomains/development/ankurparihar.github.io"
		DirectoryIndex index.html index.php
		ServerName ankurparihar.github.io
		<Directory "/home/ankur/php/subdomains/development/ankurparihar.github.io">
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

### To test application on mobile
- Get IP address of device on which local server is running, e.g. `ifconfig` or `hostname -I`
- _[Optional]_ Disable firewall. In ubuntu use: `sudo ufw disable`
- From mobile device visit IP address
- Don't visit domain name _[ankurparihar.github.io]_ as it will redirect to github page instead of local server.


### Home Page /
- Ribbons time default valut --------
- Ribbons left default disabled
- Ribbons right default enabled


Do not put event listeners which have function reference in html. Attach them from script only
Every change must be compiled and corresponding html must be updated
spa variable contains all the data
app related scripts are imported, this way variables declared in scripts does not take place in global scope and help reduce conflict
each script registers itself to spa