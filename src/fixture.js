( function() {
	if ( !document.getElementById( "qunit-fixture" ) ) {
		document.body.insertAdjacentHTML( "afterbegin", "<div id='qunit-fixture'></div>" );
	}

	if ( QUnit ) {
		QUnit.fixture = function( fixture ) {
			var fixtureEle = document.getElementById( "qunit-fixture" );
			fixtureEle.innerHTML = fixture;
			return fixtureEle.childNodes;
		};
	}
} )();
