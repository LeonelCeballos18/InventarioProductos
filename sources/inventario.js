class Inventario{
    constructor(){
        this.inventario = new Array();
    }

    agregar(producto){
        this.inventario.push(producto);
    }

    eliminar(codigo){
        if(this.inventario.length>0){
            for(let i=0; i<this.inventario.length; i++){
                if(codigo == this.inventario[i].getCodigo()){
                    this.inventario[i] = '';
                    for(let x=i; x<this.inventario.length-1; x++){
                        this.inventario[i] = this.inventario[i+1];
                    }
                    this.inventario.pop();
                }
            }
        }else{
            this.inventario.pop();
        }
    }

    buscar(codigo){
        for(let i=0; i<this.inventario.length-1; i++){
            if(codigo == this.inventario[i].getCodigo()){
                //Regresar objeto
                return `Producto: ${this.inventario[i].getNombre()}, Cantidad: ${this.inventario[i].getCantidad()}, Precio: ${this.inventario[i].getPrecio()}$`;
            }
        }
        return "Producto no encontrado..";
    }

    listar(){
        let lista = "";
        this.inventario.forEach((inv, i) => {
            lista += `${this.inventario[i].getCodigo()}-. Producto: ${this.inventario[i].getNombre()}, Cantidad: ${this.inventario[i].getCantidad()},Precio: ${this.inventario[i].getPrecio()}$ <br>`;
        });
        return lista;
    }

    listadoInverso(){
        let lista = "";
        for(let i=this.inventario.length-1; i>=0; i--){
            lista += `${this.inventario[i].getCodigo()}-. Producto: ${this.inventario[i].getNombre()}, Cantidad: ${this.inventario[i].getCantidad()},Precio: ${this.inventario[i].getPrecio()}$/ <br>`;
        }
        return lista;
    }
}