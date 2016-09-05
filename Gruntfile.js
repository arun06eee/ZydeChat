module.exports = function(grunt) {
 
    // Project configuration.
    grunt.initConfig({
 
        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),
        
        watch: {
            files:['app.js','modules/**/*.js'],
            tasks: ['concat', 'uglify']
        },
        less: {
             development: {
                 options: {
                     paths: ["assets/"]
                 },
                 files: {
                    "assets/css/result.css": "assets/less/source.less"
                }
             },
             production: {
                 options: {
                     paths: ["assets/"],
                     cleancss: true
                 },
                 files: {
                    "assets/css/result.css": "assets/less/source.less"
                }
             }
         },
        // Metadata.
        concat: {
            options:{
                seperator: ";",
                stripBanners: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                        '<%= grunt.template.today("yyyy-mm-dd") %> */',
            },
            dist: {
                src: ['app.js', 'modules/**/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options:{
                mangle: false,
                compress:{
                    global_defs:{
                        "DEBUG": false
                    },
                    dead_code: true,
                    unused: true,
                    drop_console: true
                }
            },
            build: {
                src: ['dist/<%= pkg.name %>.js'],
                dest:'dist/app.min.js'            
            }
        },
        
        // concat_in_order:{
        //     files: {
        //         'dist/<%= pkg.name %>.js': ['src/team/sample_!.js', 'src/**/*.js']
        //     }
        // }
    });
 
    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
 
    // Default task
    grunt.registerTask('default', ['concat', 'uglify', 'watch']);
 
};