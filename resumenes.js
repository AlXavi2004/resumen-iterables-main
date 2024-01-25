'use strict'

// 5.6 iterables

for (let char of "test") {
    // Se dispara 4 veces: una vez por cada carácter
    alert( char ); // t, luego e, luego s, luego t
  }
/*iterables es sencillo, solo usa un bucle for para primero declarar una variable que almacenara un item de la cada y luego valida que cadena quiere
 sea guardada con el of "".*/

//5.7 map y set

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visitas, algunos usuarios lo hacen varias veces
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set solo guarda valores únicos
alert( set.size ); // 3

for (let user of set) {
  alert(user.name); // John (luego Pete y Mary)
}
/* set en resumidas cuentas funciona para almacenar datos no repetidos en forma de array. Primero creamos el 'set', declaramos las variables con su clave 
y valor para luego poder agregarlas al set usando set.add */

//5.9 object.keys, values, entries

let user = {
    name: "John",
    age: 30
  };
  
  // bucle sobre los valores
  for (let value of Object.values(user)) {
    alert(value); // John, luego 30
  }

  /* Primero declaramos nuestro objeto y luego usamos un bucle 'for of' parar iterarlo, por ultimo usamos el metodo .values para imprimir los valores
  dentro de nuestro objeto */

//5.10 asignacion desestructurante

let user2 = {
    name: "John",
    age: 30
};
        // recorrer claves-y-valores
for (let [key, value] of Object.entries(user2)) {
    alert(`${key}:${value}`); // name:John, luego age:30
}

//Primero declaramos nuestro objeto y usando 'for of' podemos desestructurarlo para para acceder a sus claves y valores.

//5.11 fecha y hora

// fecha actual
let date = new Date();

// la hora en tu zona horaria actual
alert( date.getHours() );

// la hora respecto de la zona horaria UTC+0 (Hora de Londres sin horario de verano)
alert( date.getUTCHours() );

//5.12 Metodos JSON, toJSON

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
  };
  
  let json = JSON.stringify(student);
  
  alert(typeof json); // ¡obtenemos un string!
  
  alert(json);
  
//JSON.stringify transforma a json.