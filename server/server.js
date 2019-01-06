const app = require('express')(),
	cors = require('cors');

const store = require('./store.json'),
	constants = require('./constants.json');

app.use(cors());

app.get('/api/get-monuments', function(req, res) {
	let {searchedTerm} = req.query;

	res.json({
		monuments: store
			.filter(monument => 
					monument['Denumirea în muzeu'].toLowerCase().includes(searchedTerm.toLowerCase()) && 
					monument['Descriere'] && 
					monument['URL-ul imaginii']
			)
			.map(monument => ({
				id: monument['Denumirea în muzeu'] + Math.random(), // don't try this at home
				title: monument['Denumirea în muzeu'],
				thumbnail: monument['URL-ul imaginii'],
				description: monument['Descriere']
			}))
	})
});

app.get('/api/get-filters-config', function(req, res) {
	let filtersConfig = {
		type: constants.type,
		ethnicity: constants.ethnicity,
		owner: [],
		dating: [],
		area: []
	}

	store.forEach(monument => {
		monument['Muzeul deținător'] && 
		!filtersConfig.owner.includes(monument['Muzeul deținător']) && 
		filtersConfig.owner.push(monument['Muzeul deținător']);
		
		monument['Datarea'] && 
		!filtersConfig.dating.includes(monument['Datarea']) && 
		filtersConfig.dating.push(monument['Datarea']);
		
		monument['Zona ennografică de proveniență'] && 
		!filtersConfig.area.includes(monument['Zona ennografică de proveniență']) && 
		filtersConfig.area.push(monument['Zona ennografică de proveniență']);
	});

	res.json(filtersConfig);
});

app.listen('8888', function() {
	console.log('App running on port 8888');
});