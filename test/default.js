QUnit.module( "qunit-fixture" );
QUnit.test( "should be make #qunit-fixture", function ( assert ) {
	assert.ok( !!document.getElementById( "qunit-fixture" ) );
});
QUnit.test( "QUnit.fixture should be set html in #qunit-fixture", function ( assert ) {
	QUnit.fixture( "<div id='test'></div>" );
	assert.equal( document.getElementById( "test" ).parentNode, document.getElementById( "qunit-fixture" ) );
});
QUnit.test( "QUnit.fixture should be return childeNodes of #qunit-fixture", function ( assert ) {
	var fixtureNodes = QUnit.fixture( "<div id='test'></div><div id='test2'></div>" );
	assert.equal( fixtureNodes.length, 2 );
});
QUnit.test( "If it's not called QUnit.fixture #qunit-fixture have to empty.", function ( assert ) {
	assert.equal( document.getElementById( "qunit-fixture" ).innerHTML, "" );
});