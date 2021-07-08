const {crearArchivo} = require('./helpers/multiplicar');
const color=require('colors')

const argv = require('./config/yargs');
console.clear();

// const [,,arg3='5']=process.argv
// const [,base='5']=arg3.split('=');


 crearArchivo(argv.b,argv.l,argv.h)
  .then(nomreArchivo=>console.log(nomreArchivo.rainbow,'creado'))
  .catch(err=> console.log(err));