export default class Matriz {
    private datos: number[][];
    constructor(fila: number, columna: number) {
        this.datos = new Array(fila);
        for (let i = 0; i < this.datos.length; i++) {
            this.datos[i] = new Array(columna).fill(0);
        }
    }

    get(fila: number, columna: number): number {
        if(fila >= this.datos.length || columna >= this.datos[0].length) {
            throw new Error('ISe sale de indice');
        }
        return this.datos[fila][columna];
    }

    set(fila: number, columna: number, valor: number): void {
        if(fila >= this.datos.length || columna >= this.datos[0].length) {
            throw new Error('ISe sale de indice');
        }
        this.datos[fila][columna] = valor;
    }
}