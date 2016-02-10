# qunit-fixture
This utility is fixture for [QUnit](https://github.com/jquery/qunit). 

## Why use it?

If you have to use fixture It has some ways.
### 1. Add html in `#fixture`.
```html
<div id="fixture">
	<span>1</span>
</div>
```
This case has some cons. `fixture` is too hard to read and maintain If I have many fixture. For example. It can't know `fixture` in [testcase](https://github.com/naver/egjs/blob/5dc0a716bdd6e4c78d7cb1e8dc7d566e1ca0febd/test/js/flicking.test.js#L96-L100). So. I search for `#fixture` in [html](https://github.com/naver/egjs/blob/5dc0a716bdd6e4c78d7cb1e8dc7d566e1ca0febd/test/flicking.test.html#L25-L90) but It is hard to search.

### 2. Append html using `append` or ....
```js
jQuery("<span>1</span>").appendTo("#fixture");
```
This case has resolve uppon problem. but I feel like a hack.

So. I made `fixture`. If you use `fixture` you can easy use `fixture`.

## How to use it?
### install
```
npm install qunit-fixture
```
or
```
bower install qunit-fixture
```
### setup
```html
<script src="jquery.js"></script>
<script src="../bower_components/qunit-fixture/fixture.js"></script>
```
### method
`QUnit.fixture`
 - parameter : (String) html
 - return : (NodeList) childNodes for `#fixture`

### sample
```js
function plusWidth10px( id ){
	var currentWidth = document.getElementById( id ).style.width;
	document.getElementById( id ).style.width = currentWidth + 10;
}

QUnit.test( "QUnit.fixture should be return childeNodes of #qunit-fixture", function ( assert ) {
	var fixtureNodes = QUnit.fixture( "<div id='test' style='width:10px'></div>" );

	plusWidth10px("test");

	assert.equal( fixtureNodes[0].style.width, "20px" );
});
```