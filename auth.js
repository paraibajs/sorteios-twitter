var express = require('express')
  , passport = require('passport')
  , Strategy = require('passport-twitter').Strategy
  , open = require('open')
  , fs = require('fs')
  , config = require(__dirname + '/config.json')
  , port = process.env.PORT || 3000;

passport.use(new Strategy({
    consumerKey: config.consumerKey,
    consumerSecret: config.consumerSecret,
    callbackURL: "http://127.0.0.1:3000/login/twitter/return"
  },
  function(token, tokenSecret, profile, done) {
    var tokenData = {
      token: token,
      tokenSecret: tokenSecret
    };
    fs.writeFileSync(__dirname + '/token.json', JSON.stringify(tokenData) ,'utf-8');
    done(null, profile);
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

var app = express();
// app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', passport.authenticate('twitter'));

app.get('/error', function(req, res) {
  res.send('Ops, algo deu errado!');
});

app.get('/login/twitter/return',
  passport.authenticate('twitter', { failureRedirect: '/error' }),
  function(req, res) {
    res.send('Pode fechar esta janela agora! :)');
    console.log('Tudo pronto! Agora é só rodar:\n\nnode fetch.js <tweet_id>\nnode sorteia.js');
    setTimeout(process.exit, 1000);
  });

app.listen(port, function() {
  console.log('App rodando na porta '+port);
});

open('http://127.0.0.1:'+port+'/');
