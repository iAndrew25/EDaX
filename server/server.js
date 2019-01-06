const app = require('express')(),
	cors = require('cors');

const store = require('./store.json');

app.use(cors());

app.get('/api/get-monuments', function(req, res) {
	let {searchedTerm} = req.query;

	res.json({
		monuments: store
			.filter(monument => monument['Denumirea în muzeu'].toLowerCase().includes(searchedTerm.toLowerCase()) && monument['Descriere'] && monument['URL-ul imaginii'])
			.map(monument => ({
				id: monument['Denumirea în muzeu'] + Math.random(),
				title: monument['Denumirea în muzeu'],
				thumbnail: monument['URL-ul imaginii'],
				description: monument['Descriere']
			}))
	})
});

app.listen('8888', function() {
	console.log('App running on port 8888');
});