class Producto{
    constructor(codigo, nombre, cantidad, presio){
        this._codigo = codigo;
        this._nombre = nombre;
        this._cantidad = cantidad;
        this._presio = presio;
    }

    getCodigo(){
        return this._codigo;
    }

    getNombre(){
        return this._nombre;
    }

    getCantidad(){
        return this._cantidad;
    }

    getPresio(){
        return this._presio;
    }
    
    getInfo(){
        return `${this._codigo} :  ${this._nombre} : (${this._cantidad}) : $ ${this._presio}`;
    }
}


//Ramos Macías Carmen Shaireni 3°G