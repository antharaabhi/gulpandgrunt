'use strict';
 module.exports = function(grunt){
	grunt.initConfig({
	  	sass: {
	        options: {
	            sourceMap: true
	        },
	        dist: {
	            files: {
	                'public/production/css1/main.css': 'public/development/css/main.sass'
	            }
	        }
    	},
    	jade: {
    		html: {
			    files: {
			      'public/production/templates1/': ['public/development/templates/*.jade']
			    },
			    options: {
			      client: false,
			      pretty: true
			    }
			}
		},
		watch: {
		  	css: {
				files: 'public/development/css/*.sass',
				tasks: ['sass']
		  	},
		  	scripts: {
				files: 'public/development/templates/*.jade',
				tasks: ['jade']
		  	}
		}
	});
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-jade');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['sass','jade','watch']);
 }