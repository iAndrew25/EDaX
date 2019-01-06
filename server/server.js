const app = require('express')(),
	cors = require('cors');

app.use(cors());

app.get('/get-monuments', function(req, res) {
	res.json({msg: 'This is CORS-enabled for all origins!'})
});

app.listen('8888', function() {
	console.log('App running on port 8888');
});