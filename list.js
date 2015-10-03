var participantes = require('./data.json');

console.log('Participantes:');
var c = 0;
for(var i in participantes) {
  c++;
  console.log(c+' - '+participantes[i].user.screen_name);
}
