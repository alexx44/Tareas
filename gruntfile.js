module.exports = function(grunt){
    //project configuration
    grunt.initConfig({
        jshint:{
            all:['scripts1.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    //default Task
    grunt.registerTask('default',['jshint']);
};