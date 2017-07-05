var express = require('express'),
		app = express(),
		bodyParser = require("body-parser")
		path = require("path");

app.use(bodyParser.text());

//tell express what to do when the /form route is requested
app.post('/textfile', function(req, res) {
	let text = req.body;
	res.setHeader('Content-type', 'text/plain');
	console.log(text);
	res.write(text);
	res.end()
});

//wait for a connection
app.listen(3000, function () {
  console.log('Server is running. Point your browser to: http://localhost:3000');
});
