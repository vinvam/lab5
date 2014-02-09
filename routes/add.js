var data = require("../data.json");

exports.addTask = function(req, res) {
	var newTask = {name:req.query.name, description:req.query.description};
	console.log(newTask);
	data["tasks"].push(newTask); 
	console.log(data);
	/*res.render('/index');*/
	res.render('index', data);
}