# JazzyAjax

## Installation

Simply include JazzyAjax in your `<head>`

```html
<script src="https://raw.githubusercontent.com/jimtendo/JazzyAjax/master/jquery.jazzyajax.js">
```

Place initialisation code somewhere (a good place is just before the end of the `</body>` tag.

```html
<script>
    $(document).jazzyAjax();
</script>
```

## Usage

Use by adding a `data-container="#your-container"` attribute to your `<a>` or `<form>` elements. Contents of the link or form will now be loaded into that container. 