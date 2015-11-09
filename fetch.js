var Twitter = require('twitter')
  , fs = require('fs')
  , config = require(__dirname + '/config.json')
  , tokenData = require(__dirname + '/token.json')
  , tweetID = process.argv[2];

var client = new Twitter({
  consumer_key: config.consumerKey,
  consumer_secret: config.consumerSecret,
  access_token_key: tokenData.token,
  access_token_secret: tokenData.tokenSecret
});

var params = {screen_name: 'nodejs'};

client.get('statuses/retweets/'+tweetID, {}, function(error, tweets, response){
    fs.writeFileSync(__dirname + '/data.json', JSON.stringify(tweets), 'utf-8');
});
