// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	console.log("HERE!");
	res.render('index', data);
};