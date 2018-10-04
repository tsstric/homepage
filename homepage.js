var express = require('express');
var random = require('./random');

var app = express();
var handlebars = require('express-handlebars').create({ defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', 3000); // Bash to change node:  setenv PORT 3001

// QA Middleware

app.use(function(req, res, next) {
	res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
	next();
});

app.get('/about', function(req, res) {
	res.render('about', {
		random: random.randomInt(1, 500),
		pageTestScript:  '/qa/tests-about.js',
		title: "About Tim"
	} );
});

app.get('/', function(req, res) {
	res.render('home');
});

app.get('/about', function(req, res) {
	res.render('about', { title: "About Tim" } );
});

app.get('/projects', function(req, res) {
	res.render('projects', { title: "Projects" });
});

//static pages

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
	res.status(404);
	res.render('404');
});

app.use(function(req, res) {
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function() {
	console.log('Express started on http://localhost:' + 
		app.get('port') + '; press Ctrl+C to terminate.');


});

