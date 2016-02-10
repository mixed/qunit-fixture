module.exports = function( grunt ) {
	"use strict";
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-qunit-istanbul');
	grunt.loadNpmTasks("grunt-jscs");

	grunt.initConfig({
		"copy": {
			lib: {
				expand: true,
				flatten: true,
				src: [
					"src/fixture.js"
				],
				dest: "dist"
			},
		},
		"jscs": {
			src: "src/fixture.js",
			options: {
				config: ".jscsrc"
			}
		},
		"jshint": {
			files: [ "src/fixture.js", "test/fixture.js" ],
			options: {
				jshintrc: true,
				reporter: require("jshint-stylish")
			}
		},
		"qunit": {
			all: ['test/*.html'],
			options: {
				timeout: 10000,
				coverage: {
					disposeCollector: true,
					src: ["src/*.js"],
					instrumentedFiles: "temp/",
					htmlReport: "report",
					coberturaReport: "report",
					linesThresholdPct: 0
				}
			}
		},
		"uglify": {
			dist: {
				src: "dist/fixture.js",
				dest: "dist/fixture.min.js"
			}
		}
	});

	grunt.registerTask("default", ["jshint", "jscs", "copy", "uglify", "qunit"]);
};