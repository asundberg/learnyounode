// HELLO WORLD
// console.log("HELLO WORLD");


// BABY STEPS
// var array = process.argv.slice(2);
// var reduced = array.reduce(function(prevVal, currentVal) {
// 	return Number(prevVal) + Number(currentVal);
// });
// console.log(reduced);


// MY FIRST I/0!
// var fs = require('fs');
// var str = (fs.readFileSync(process.argv[2])).toString();
// console.log(str.match(/\n/g).length);


// MY FIRST ASYNC I/0!
// var fs = require('fs');
// fs.readFile(process.argv[2], function(err, data) {
// 	console.log(data.toString().match(/\n/g).length);
// })


// FILTERED LS
// var fs = require('fs');
// var ext = process.argv[3];
// fs.readdir(process.argv[2], function(err, list) {
// 	var results = list.filter(function(elem) {
// 		var matches = elem.match(/\..+$/);
// 		if(matches === null) {
// 			return false;
// 		} else {
// 			return matches[0] === '.' + ext;
// 		}
// 	});
// 	results.forEach(function(elem) {
// 		console.log(elem);
// 	});
// })


// MAKE IT MODULAR
// var filteredLs = require('./filteredLs');
// filteredLs(process.argv[2], process.argv[3], function(err, data) {
// 	if(err) {
// 		console.log(err);
// 		return;
// 	} 
// 	data.forEach(function(elem) {
// 		console.log(elem); 
// 	})
// })


// HTTP CLIENT
var http = require('http');
http.get(process.argv[2], function(response) {
	response.on('data', function(data) {
		console.log(data.toString());
	})
})













