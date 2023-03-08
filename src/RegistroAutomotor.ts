//En un mismo proyecto NPM
//Ejercicio1: Usando la clase Auto: implementar la clase RegistroAutomotor con metodos,para consultar por un auto
//en un listado, borrar, actualizar y dar de alta.

//Partir de una funcion ya implementada para leer archivos.

//Ejercicio2: Implementar la clase matriz. En vez de consultar los valores con los corchetes, se debe hacer (desde afuera)
//a traves de un metodo get(x,y)
import Auto from "./Auto";
import * as fs from 'fs';

export default class RegistroAutomotor {
    private listaAutos: Auto[];
    constructor() {
      this.listaAutos = new Array();
    }
  
    //agregarAuto: añade un coche a la lista.
    agregarAuto(auto: Auto):void {
      this.listaAutos.push(auto);
    }
  
    //buscarAuto: devuelve el primer coche de la lista con el nombre proporcionado o undefined si no se encuentra.
    buscarAuto(nombreAuto: string):Auto|undefined {
      let auto:Auto|undefined = this.listaAutos.find((auto) => auto.getNombre() === nombreAuto);
      if (auto===undefined) {
        throw new Error('Auto no encontrado');
      }
      return auto;
    }

    //buscarAuto: devuelve el primer coche de la lista con el nombre proporcionado o undefined si no se encuentra.
    buscarAutoPorIndice(indiceAuto: number):Auto {
      if(indiceAuto < 0 || indiceAuto > this.listaAutos.length){
        throw new Error('Auto no encontrado');
      }
      return this.listaAutos[indiceAuto];
    }

    listarAutos():void {
      this.listaAutos.forEach((auto, index) => {
        console.log(auto.aTexto());
        if (index===this.listaAutos.length) {
          console.log("\n");
        }
      });
    }
  
    //actualizarAuto: actualiza los datos del coche con el nombre proporcionado.
    actualizarAutos(nombreAuto: string, {nombre, modelo, color}:{nombre?: string, modelo?: number, color?: string}) {
      const autoIndex = this.listaAutos.findIndex((auto) => auto.getNombre() === nombreAuto);
      if (autoIndex < 0 ) {
        throw new Error('Auto no encontrado');
      }
      this.listaAutos[autoIndex].actualizarAuto({nombre, modelo, color});
    }
  
    //borrarAuto: elimina el coche con el nombre proporcionado de la lista.
    borrarAuto(nombreAuto: string) {
      this.listaAutos = this.listaAutos.filter((auto) => auto.getNombre() !== nombreAuto);
    }

    cargarAutosFromCollection() {
      try {
        const jsonData = fs.readFileSync('src/listaAutos.json', 'utf-8');
        const dataAutos = JSON.parse(jsonData) as Auto[];
  
        for (const dataAuto of dataAutos) {
          let auto:Auto= new Auto({...dataAuto});
          this.listaAutos.push(auto);
        }
      } catch (error) {
        console.error(`Error loading cars data: ${error}`);
      }
    }
  }
