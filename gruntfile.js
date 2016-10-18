/// <vs BeforeBuild='uglify:bundle' />
module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        cssmin: {
            options: {
                processImport: true
            },
            bundles: {
                files: {
                    'bundles/styles.css': [
                        'assets/bootstrap/css/bootstrap.css',
                        'assets/css/owl.theme.css',
                        'assets/css/owl.carousel.css',
                        'assets/css/magnific-popup.css',
                        'assets/css/simpletextrotator.css',
                        'assets/css/font-awesome.css',
                        'assets/css/animate.css',
                        'lib/modules/loading-bar/loading-bar.css',
                        'lib/modules/angularjs-toaster/toaster.css',
						'assets/css/style.css'
                    ]
                }
            }
        },
        uglify: {
            bundles: {
                files: {
                    'bundles/core.js': [
                        'assets/js/jquery-1.11.0.js',
                        'assets/bootstrap/js/bootstrap.js',
                        'assets/js/jquery.backstretch.js',
                        'assets/js/owl.carousel.js',
                        'assets/js/jquery.magnific-popup.js',
                        'assets/js/jquery.simple-text-rotator.js',
                        'assets/js/jquery.waypoints.js',
                        'assets/js/jquery.countTo.js',
                        'assets/js/wow.js',
                        'assets/js/smoothscroll.js',
                        'assets/js/jquery.fitvids.js',
                        'assets/js/custom.js',
                        'lib/angular/angular.min.js',
                        'lib/angular/angular-animate/angular-animate.js',
                        'lib/angular/angular-sanitize/angular-sanitize.min.js',
                        'lib/angular/angular-touch/angular-touch.min.js',
                        'lib/angular/angular-ui-router/angular-ui-router.min.js',
                        'lib/modules/angular-translate/angular-translate.min.js',
                        'lib/modules/angularjs-toaster/toaster.min.js',
                        'lib/modules/loading-bar/loading-bar.min.js',
                        'assets/js/googleAnalytics.min.js',
                        'app/**/*.js',
                        
                    ]
                }
            }
        },
        watch: {
            scripts: {
                files: ['app/**/*.js'],
                tasks: ['uglify']
            }
        }
    });

    grunt.registerTask('default', ['cssmin', 'uglify', 'watch']);

    grunt.loadNpmTasks("grunt-bower-task");
};