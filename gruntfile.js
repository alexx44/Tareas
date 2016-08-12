module.exports = function(grunt){
    //project configuration
    grunt.initConfig({
        jshint:{
            all:['scripts1.js']
        },
        concat:{
            dist: {
                src:['scripts1.js','script1.js','script2.js','script3.js' ],
                dest:'unidos.js'
                    }
        },
        uglify:{
            dist:{
                src: 'unidos.js',
                dest: 'build/unidos.min.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');   
    
    //default Task
    grunt.registerTask('default',['jshint','concat','uglify']);
};