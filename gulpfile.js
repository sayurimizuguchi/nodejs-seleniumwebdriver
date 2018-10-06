const gulp = require('gulp');
var run = require('gulp-run');

/**
 * Test task - User not types password
 * @return Error returned from server AND
 * ERROR: User does not type the password
 */
gulp.task('error_notPassword', function() {
    return run('node testingError/errorNotPassword').exec()  // run 
        .pipe(gulp.dest('output'));      // writes results to output/echo. 
});

/**
 * Test task - User not type any log in data
 * @return Error returned from server AND
 * ERROR: User not types any data
 */
gulp.task('error_notDataLogin', function() {
    return run('node testingError/testErrorSignUp').exec()  // run 
        .pipe(gulp.dest('output'));      // writes results to output/echo. 
});

/**
 * Task test - Register - Happy way
 * @return Register success message AND
 * OK: User already registered
 */
gulp.task('success_register', function() {
    return run('node testingSuccess/successCadastro').exec()  // run 
        .pipe(gulp.dest('output'));      // writes results to output/echo. 
});

/**
 * Task test - Login - Happy way
 * @return Menu access
 * OK: User logged with success
 */
gulp.task('success_login', function() {
    return run('node testingSuccess/successLogin').exec()  // run 
        .pipe(gulp.dest('output'));      // writes results to output/echo. 
});

/**
 * Task test - Back Button - Register page
 * @return expected redirect to Home
 * BUG: User not redirected
 */
gulp.task('bug_goback', function() {
    return run('node testingBugs/bugGoBack').exec()  // run 
        .pipe(gulp.dest('output'));      // writes results to output/echo. 
});


/**
 * Task test - Logout - Menu page
 * @return expected redirect to error endpoint
 * BUG: After click logout, the session continue
 */
gulp.task('bug_logout', function() {
    return run('node testingBugs/bugLogout').exec()  // run 
        .pipe(gulp.dest('output'));      // writes results to output/echo. 
});