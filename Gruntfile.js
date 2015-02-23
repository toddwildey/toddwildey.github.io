module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-serve');

	grunt.initConfig({
	    serve: {
	        options: {
	        	hostname: '0.0.0.0',
	            port: 9000
	        }
	    }
	});

	grunt.registerTask('default', ['serve']);
};

