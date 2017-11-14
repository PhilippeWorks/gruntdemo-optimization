module.exports = function(grunt) {
  grunt.initConfig({

      cssmin: {
        options: {},
        target: {
	        files: {
	     	 'css/main.css': ['css/style.css', 'css/print.css']
	    	}
  }
},
/*uncss: {
  dist: {
    files: {
      'frontend-nanodegree-mobile-portfolio/css/final.css': ['index.html']
    }
  }
},*/  
    critical: {
	        dist: {
	            options: {
	                base: 'css',
	                css: ['main.css',],
	                dimensions: [{width: 768,height: 700},{width: 360, height: 640}],
	                inline: true,
	                minify: true
	            },
	            src: 'index.html',
	            dest: 'index.html'
	        },
    },

    htmlmin: {                                     // Task 
        dist: {                                      // Target 
            options: {                                 // Target options 
                removeComments: true,
                collapseWhitespace: true
            },
            files: {                                   // Dictionary of files 
                'index.html': 'index.html',     // 'destination': 'source' 
               }
            }
    },

    uglify: {
        my_target: {
          files: {
            'js/perfmatters.js': ['js/perfmatters.js']
          }
        }
     },

  imagemin: {

        dynamic: {

            files: [{
                expand: true,
                cwd: 'img/',
                src: ['**/*.{png,jpg}'],
                dest: '/img/'
            }]
        }
    }

});



    //grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-critical');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');


    grunt.registerTask('default', ['critical','htmlmin', 'cssmin', 'uglify', 'imagemin']);
};



