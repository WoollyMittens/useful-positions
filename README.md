# positions.js: Screen Positions Library

*DEPRICATION WARNING: the functionality in this script has been superceeded / trivialised by updated web standards.*

A library of useful functions to ease working with screen positions.

## How to include the script

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="js/positions.js"></script>
```

Or use [Require.js](https://requirejs.org/).

```js
requirejs([
	'js/positions.js'
], function(positions) {
	...
});
```

Or use imported as a component in existing projects.

```js
@import {positions} from "js/positions.js');
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

## How to test the script

These test uses Selenium from http://docs.seleniumhq.org/

+ `npm install webdriverjs` - Installs the webdriver prerequisite.
+ `npm install mocha -g` - Installs the prerequisite test framework.
+ `java -jar /Applications/Selenium/selenium-server-standalone-2.42.2.jar` - Starts Selenium.
+ `mocha` - Runs the automated tests.

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens).
