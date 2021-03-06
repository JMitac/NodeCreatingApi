var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarUsuario = function(){
  var randomId = faker.random.uuid();
  var randomName = faker.name.findName();
  var randomContent = faker.lorem.paragraph();
  var randomDate = faker.date.future();
  var randomImage = faker.image.avatar();
  return {
    id: randomId,
    nombre: randomName,
    contenido: randomContent,
    fecha: randomDate,
    imagen: randomImage
  }
}

app.get('/', function (req, res) {
  res.send('Mi primer servidor!');
});

app.get('/post', function (req, res) {
  var cantidad = _.random(5,10)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);
});

app.get('/about', function (req, res) {
  res.send('by JMitac');
});

app.listen(3000,function(){
  console.log("La Aplicacion esta corriendo en el puerto 3000");
});