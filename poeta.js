//20100412 jorge@jorgechamorro.com

var kCuantos= 5e3;
var kLength= 8192;
var ctr= 0;
var now= +new Date();
var puts= require("sys").puts;

function rnd (n) {
  return (n* Math.random()) >>> 0;
}

var words= "Con diez cañones por banda viento en popa a toda vela no corta el mar si no vuela un velero bergantín bajel pirata llamado por su bravura el temido en todo el mar conocido del uno al otro confín".toLowerCase().split(" ");

function poeta (length, r, curr, prev) {
  r= "";
  while (r.length < length) {
    do {
      curr= words[rnd(words.length)];
    } while (curr === prev);
    r+= (prev= curr)+ " ";
  }
  ctr++;
  return r;
}

while (ctr < kCuantos) {
  poeta(kLength);
}

puts(kCuantos+ " poemas de "+ kLength+ " caracteres.");
puts((now= (+new Date()- now)/1e3).toFixed(1)+ " segundos.");
puts((kCuantos/ now).toFixed(1)+ " poemas / segundo.");
