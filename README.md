# useful.positions.js: Screen Positions Library

A library of useful functions to ease working with screen positions.

Try the <a href="http://www.woollymittens.nl/useful/default.php?url=useful-positions">tests</a>.

## How to include the script

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="./js/useful-positions.js"></script>
```

To enable the use of HTML5 tags in Internet Explorer 8 and lower, include *html5.js*.

```html
<!--[if lte IE 9]>
	<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
```

## How to control the script

### window

```javascript
coordinates = useful.positions.window();
```

Returns the dimensions of the window.

**coordinates : {object}** - An object containing coordinates.x and coordinates.y.

### document

```javascript
coordinates = useful.positions.document(element);
```

Returns the scrolled position of the document, or any given element with scrolling enabled.

**element : {DOM object}** - A DOM object in the document.

### object

```javascript
coordinates = useful.positions.object(element);
```

Returns the position of an object in the first parent with relative positioning.

**element : {DOM object}** - A DOM object in the document.

### cursor

```javascript
coordinates = useful.positions.cursor(event, parent);
```

Returns the position of the cursor relative to the window or an optional parent object.

**event : {event object}** - An event object originating from a mouse or touch interaction.

**parent : {DOM object}** - Optional DOM object to use as reference for the cursor position.

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses grunt.js from http://gruntjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `grunt import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `grunt dev` - Builds the project for development purposes.
+ `grunt prod` - Builds the project for deployment purposes.
+ `grunt watch` - Continuously recompiles updated files during development sessions.
+ `grunt serve` - Serves the project on a temporary web server at http://localhost:8000/ .

## License

This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/
