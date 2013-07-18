module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),

        // Constants for the Gruntfile so we can easily change the path for
        // our environments.
        BASE_PATH: '../',
        DEVELOPMENT_PATH: '../dev/',
        PRODUCTION_PATH: '../prod/',

        // The JSON to JavaScript plugin.
        json: {
            prod: {
                options: {
                    namespace: 'JSON_DATA',                     // Default 'myjson'
                    includePath: false,
                    processName: function(filename) {
                        return filename.toLowerCase();
                    }
                },
                src: ['<%= DEVELOPMENT_PATH %>' + '**/*.json'],
                dest: '<%= PRODUCTION_PATH %>' + 'assets/scripts/json.js'
            }
        }

    });

    // Loads the necessary tasks for this Grunt file.
    grunt.loadNpmTasks('grunt-json');

    // Grunt tasks.
    grunt.registerTask('default', ['json']);

};