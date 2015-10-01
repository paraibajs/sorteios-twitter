
var tweetID = process.argv[2];
var fs = require('fs');
var token = fs.readFileSync('./token', 'utf-8');
var exec = require('child_process').exec,
  child;

exec("rm data.json; curl --get 'https://api.twitter.com/1.1/statuses/retweets/"+tweetID+".json' --header 'Authorization: "+token+"' --verbose > data.json",
function (error, stdout, stderr){
  console.log(error);
  console.log(stdout);
  console.log(stderr);
});
