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
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    //default Task
    grunt.registerTask('default',['jshint']);
};