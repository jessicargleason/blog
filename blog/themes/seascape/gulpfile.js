var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps"),
    uglify = require('gulp-uglify'),
    pipeline = require('readable-stream').pipeline;

var paths = {
    styles: {
        // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
        src: "source/sass/**/*.scss",
        // Compiled files will end up in whichever folder it's found in (partials are not compiled)
        dest: "source/css"
    },
    scripts: {
        src: "source/js/**/*.js",
        dest: "source/js-min"
    }
}

// Define tasks after requiring dependencies
function style() {
    // Where should gulp look for the sass files?
    // My .sass files are stored in the styles folder
    // (If you want to use scss files, simply look for *.scss files instead)
    return (
        gulp
            .src(paths.styles.src)
            // Initialize sourcemaps before compilation starts
            .pipe(sourcemaps.init())
            // Use sass with the files found, and log any errors
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(postcss([autoprefixer(), cssnano()]))
            // Now add/write the sourcemaps
            .pipe(sourcemaps.write())
            // What is the destination for the compiled file?
            .pipe(gulp.dest(paths.styles.dest))
    );
}

function watch(){
    // gulp.watch takes in the location of the files to watch for changes
    // and the name of the function we want to run on change
    gulp.watch(paths.styles.src, style)
}

function compress(){
    return pipeline(
          gulp.src(paths.scripts.src),
          uglify(),
          gulp.dest(paths.scripts.dest)
    );
  };
 
// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp style
exports.watch = watch;
exports.style = style;
exports.compress = compress;