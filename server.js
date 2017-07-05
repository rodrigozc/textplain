var express = require('express'),
		app = express(),
		bodyParser = require("body-parser")
		path = require("path");

app.use(bodyParser.text());

app.post('/textfile', function(req, res) {
	let text = req.body;
	res.setHeader('Content-type', 'text/plain');
	console.log(text);
	res.write(text);
	res.end()
});

var listener = app.listen(process.env.PORT || 3000, function() {
	console.log('Server listening on port ' + listener.address().port + '...');
});
