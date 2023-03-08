export default class Auto {
    private nombre: string;
    private modelo: number;
    private color: string;
    constructor({nombre, modelo, color}:{nombre?: string, modelo?: number, color?: string}) {
        this.nombre = nombre ? nombre : "";
        this.modelo = modelo ? modelo : 0;
        this.color = color ? color : "";
    }

    getNombre(): string {
        return this.nombre;
    }

    getModelo(): number {
        return this.modelo;
    }

    getColor(): string {
        return this.color;
    }

    setNombre(nombre: string): void {
        this.nombre=nombre;
    }

    setModelo(modelo: number): void {
        this.modelo=modelo;
    }

    setColor(color: string): void {
        this.color=color;
    }

    actualizarAuto({nombre, modelo, color}:{nombre?: string, modelo?: number, color?: string}) {
        if (nombre != null) this.nombre = nombre;
        if (modelo != null) this.modelo = modelo;
        if (color != null) this.color = color;
    }

    aTexto():string {
        return "" + this.nombre + ", " + this.modelo + ", " + this.color;
    }
}