var Q = require('q');
var Promise = require('bluebird');
var GitHubApi = require('github');

var github = new GitHubApi({
	version: '3.0.0'
});

var getUserAvatarWithCallback = function(user, callback){
	github.search.users({q: user}, function(err, res){
		if(err){callback(err, null);}
		else{
			var avatarUrl = res.items[0].avatar_url;
			callback(null, avatarUrl);
		}
	});
};

getUserAvatarWithCallback('jlfoster2', function(err, avatar){
	console.log('got url with callback pattern',  avatar);
});