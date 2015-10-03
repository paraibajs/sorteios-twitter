var request = require('request');
var participantes = require('./data.json');
var numSorteados = process.argv[2] || 1;
var total = participantes.length - 1;

request('http://www.random.org/integers/?num='+numSorteados+'&min=0&max='+total+'&col=1&base=10&format=plain&rnd=new', function (error, response, body) {

  var ganhadores = body.trim().split("\n");
  ganhadores.forEach(function(item) {
    console.log(participantes[item].user.screen_name);
  });

});
