QUnit.module( "qunit-fixture Compatibility" );

QUnit.test( "QUnit.fixture should be set html in #qunit-fixture", function ( assert ) {
	QUnit.fixture( "<div id='foo'></div>" );
	assert.equal( document.getElementById( "foo" ).parentNode, document.getElementById( "qunit-fixture" ) );
});
QUnit.test( "QUnit.fixture should be return childeNodes of #qunit-fixture", function ( assert ) {
	var fixtureNodes = QUnit.fixture( "<div id='foo'></div><div id='bar'></div>" );
	assert.equal( fixtureNodes.length, 2 );
});
QUnit.test( "If it's not called QUnit.fixture and QUnit.fixture has fixture #qunit-fixture have to set before html.", function ( assert ) {
	var fixtureNodes = document.getElementById( "qunit-fixture" ).childNodes;
	assert.equal( fixtureNodes.length, 3 );
});