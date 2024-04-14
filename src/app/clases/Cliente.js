export default class Cliente {
    constructor(nombre, impuesto){
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(newNombre){
        let nombreValue = String(newNombre);
        this._nombre = nombreValue;
    }

    calcularImpuesto(){
        return (`El impuesto total a pagar de ${this._nombre} es:
        ${(this._impuesto.montoBruto -
            this._impuesto.deducciones) * 0.21}
        `)
    }
}
