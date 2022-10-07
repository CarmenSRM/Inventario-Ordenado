class Inventario{
    constructor(){
        this._productos = new Array();
    }

    agregar(producto){
        let fin = false;
        let min = 0; 
        let max = this._productos.length;
        let buscado;
        
        if(max !== 0){ 
            do{
                buscado = Math.floor((min + max)/2);
                console.log(buscado);

                if(producto.getCodigo() > this._productos[buscado].getCodigo()){
                    if(producto.getCodigo() < this._productos[buscado + 1].getCodigo()){
                        this._productos.push(this._productos[this._productos.length-1]);
                        
                        for(let i = this._productos.length-2; i > buscado; i--){
                            this._productos[i] = this._productos[i - 1];
                        }
                        
                        this._productos[buscado + 1] = producto;
                        fin = true;
                    }
                }else{
                    if(this._productos[buscado].getCodigo() > producto.getCodigo()){
                        max = buscado;
                    }else{
                        min = buscado;
                    }
                }
                console.log(min);
                console.log(max);
            }while(fin === false && min < max);

        }else{
            this._productos.push(producto);
            console.log("agregar");
        }
    }  
    
    buscar(codigo){
        let fin = false;
        let min = 0; 
        let max = this._productos.length;
        let buscado;
        if(max !== 0){
            do{
                buscado = Math.floor((min + max)/2);
                if(this._productos[buscado].getCodigo() == codigo){ 
                    fin = true;
                    return this._productos[buscado];
                }else{
                    if(this._productos[buscado].getCodigo() > codigo){
                        max = buscado-1;
                    }else{
                        min = buscado+1;
                    }
                }
            }while(fin === false && min < max);    
        }
        return null;
    }

    eliminar(codigo){
        let e = false;
        let fin = false;
        let min = 0; 
        let max = this._productos.length;
        let buscado;

        if(max !== 0){
            do{
                buscado = Math.floor((min + max)/2);
                console.log(buscado);
                if(this._productos[buscado].getCodigo() == codigo){ 
                    e = true;
                    fin = true;
                }else{
                    if(this._productos[buscado].getCodigo() > codigo){
                        max = buscado-1;
                    }else{
                        min = buscado+1;
                    }
                }
            }while(fin === false && min < max);    
        }

        if(e === false){
            return -1;
        }else{
            for(let i = buscado; i <= this._productos.length - 1; i++){
                this._productos[i] = this._productos[i + 1];
            }
            this._productos.pop();
            return 1;
        }
    }

    listado(){
        let lista = '';

        if(this._productos.length === 0){
            return -1;
        }else{
            for(let i = 0; i < this._productos.length; i++){
                lista += `<br>${this._productos[i].getInfo()}`; 
            }
            return lista;
        }
    }

    listadoInverso(){
        let lista = "";

        if(this._productos.length === 0){
            return -1;
        }else{
            for(let i = this._productos.length-1; i >= 0; i--)
            {
                lista += `<br>${this._productos[i].getInfo()}`; 
            }
            return lista;
        }
    }

    cantidad(){
        return this._productos.length;
    }
}

//Ramos Macías Carmen Shaireni 3°G