class Producto{
    constructor(codigo, nombre, cantidad, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }

    getCodigo(){
        return this.codigo;
    }

    getNombre(){
        return this.nombre;
    }

    getCantidad(){
        return this.cantidad;
    }

    getPrecio(){
        return this.precio;
    }
}

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
                    return 0;
                }
            }
        }else{
            this.inventario.pop();
        }
    }

    buscar(codigo){
        for(let i=0; i<this.inventario.length-1; i++){
            if(codigo == this.inventario[i].getCodigo()){
                return `Producto: ${this.inventario[i].getNombre()}, Cantidad: ${this.inventario[i].getCantidad()}, Precio: ${this.inventario[i].getPrecio()}$`;
            }
        }
        return null;
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

let inventory = new Inventario();

//agregar producto

const btnAgregar = document.getElementById('add');
btnAgregar.addEventListener('click', ()=>{
    let code = document.getElementById('codigo').value;
    let name = document.getElementById('nombre').value;
    let amount = document.getElementById('cantidad').value;
    let price = document.getElementById('costo').value;
    let product = new Producto(code, name, amount, price);
    inventory.agregar(product);
    alert("Producto agregado");
})

const btnEliminar = document.getElementById('delete');
btnEliminar.addEventListener('click', ()=>{
    let code = document.getElementById('eliminacion').value;
    inventory.eliminar(code);
    alert("Producto eliminado");
})

const btnBuscar = document.getElementById('search');
btnBuscar.addEventListener('click', ()=>{
    let code = document.getElementById('busqueda').value;
    document.getElementById('resB').innerHTML +=  inventory.buscar(code);
    //alert(inventory.buscar(code));
})

const btnListar = document.getElementById('listar');
btnListar.addEventListener('click', ()=>{
    document.getElementById('resLis').innerHTML +=  inventory.listar();
})

const btnListarInvertido = document.getElementById('listarIn');
btnListarInvertido.addEventListener('click', ()=>{
    document.getElementById('resLisIn').innerHTML +=  inventory.listadoInverso();
})