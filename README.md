# Font Awesome helper

### Install
```js
meteor add theara:fa-helpers
```
### Usage
```js
// in template
{{fa "plus"}}

// in js
fa("plus");
fa("plus", "My title");
fa("plus", "My title", true); // For safeString = true
```