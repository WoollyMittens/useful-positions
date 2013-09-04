# useful.positions.js: Screen Positions Library

A library of useful functions to ease working with screen positions.

Try the <a href="http://www.woollymittens.nl/useful/default.php?url=positions">tests</a>.

## How to include the script

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="./js/positions.min.js"></script>
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

## Prerequisites

To concatenate and minify the script yourself, the following prerequisites are required:
+ https://github.com/WoollyMittens/useful-polyfills

## License
This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/
