import RegistroAutomotor from "./RegistroAutomotor";
import Auto from "./Auto";

// primero creo una nueva instancia de la clase RegistroAutomotor
const registro = new RegistroAutomotor();

// agrego algunos autos a la lista usando el metodo "agregarAuto" 
registro.agregarAuto(new Auto({nombre:'Ford Mustang', modelo:2022, color:'red'}));
registro.agregarAuto(new Auto({nombre:'Tesla Model S', modelo:2021, color:'black'}));
registro.agregarAuto(new Auto({nombre:'Toyota Corolla', modelo:2020, color:'white'}));

// busco el automovil usando el metodo "buscarAuto"
console.log("--registro de auto Ford Mustang--");
const autoEncontrado = registro.buscarAuto('Ford Mustang');
console.log(autoEncontrado?.aTexto()); // { nombre: 'Ford Mustang', year: 2022, color: 'red' }

// actualizo los datos usando el metodo "actualizarAuto"
console.log("--actualizacion de auto Tesla Model S--");
registro.actualizarAutos('Tesla Model S', { modelo: 2022 });
const autoEncontrado2 = registro.buscarAuto('Tesla Model S');
console.log(autoEncontrado2?.aTexto()); // { nombre: 'Tesla Model S', year: 2022, color: 'black' }

console.log("--Lista de Autos--");
registro.listarAutos(); 

// Elimino un auto de la lista usando el metodo "borrarAuto"
console.log("--borrado de auto Toyota Corolla--");
registro.borrarAuto('Toyota Corolla');
console.log("--Lista de Autos--");
registro.listarAutos(); // [{ nombre: 'Ford Mustang', year: 2022, color: 'red' }, { nombre: 'Tesla Model S', year: 2022, color: 'black' }]


console.log("--carga de lista de autos desde JSON--");
registro.cargarAutosFromCollection();
console.log("--Lista de Autos--");
registro.listarAutos();
