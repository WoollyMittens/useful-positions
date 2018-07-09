# positions.js: Screen Positions Library

A library of useful functions to ease working with screen positions.

Try the <a href="http://www.woollymittens.nl/default.php?url=useful-positions">tests</a>.

## How to include the script

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="./js/positions.js"></script>
```

## How to control the script

### window

```javascript
coordinates = positions.window();
```

Returns the dimensions of the window.

**coordinates : {object}** - An object containing coordinates.x and coordinates.y.

### document

```javascript
coordinates = positions.document(element);
```

Returns the scrolled position of the document, or any given element with scrolling enabled.

**element : {DOM object}** - A DOM object in the document.

### object

```javascript
coordinates = positions.object(element);
```

Returns the position of an object in the first parent with relative positioning.

**element : {DOM object}** - A DOM object in the document.

### cursor

```javascript
coordinates = positions.cursor(event, parent);
```

Returns the position of the cursor relative to the window or an optional parent object.

**event : {event object}** - An event object originating from a mouse or touch interaction.

**parent : {DOM object}** - Optional DOM object to use as reference for the cursor position.

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses gulp.js from http://gulpjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `gulp import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `gulp dev` - Builds the project for development purposes.
+ `gulp dist` - Builds the project for deployment purposes.
+ `gulp watch` - Continuously recompiles updated files during development sessions.
+ `gulp serve` - Serves the project on a temporary web server at http://localhost:8500/.
+ `gulp php` - Serves the project on a temporary php server at http://localhost:8500/.

## How to test the script

These test uses Selenium from http://docs.seleniumhq.org/

+ `npm install webdriverjs` - Installs the webdriver prerequisite.
+ `npm install mocha -g` - Installs the prerequisite test framework.
+ `java -jar /Applications/Selenium/selenium-server-standalone-2.42.2.jar` - Starts Selenium.
+ `mocha` - Runs the automated tests.

## License

This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/
