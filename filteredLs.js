var fs = require('fs');

module.exports = function(path, ext, callback) {
	fs.readdir(path, function(err, list) {
		if(err) {
			callback(err);
			return;
		}
		var results = list.filter(function(elem) {
			var matches = elem.match(/\..+$/);
			if(matches === null) {
				return false;
			} else {
				return matches[0] === '.' + ext;
			}
		});
		callback(null, results);
	})
}