import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
categoria = {
id:0, nombre:"Cate de ejemplo", descripcion:"Texto de ejemplo"
}
categorias = [
  {id:1,nombre:"Zapateria",descripcion:"Todo lo relacionado con zapatos"},
  {id:2,nombre:"Pesca",descripcion:"Todo lo relacionado con la pesca"},
  {id:3,nombre:"Deportes",descripcion:"Todo lo relacionado con deportes"},
  {id:4,nombre:"Hogar",descripcion:"Todo lo relacionado con hogar"},
  {id:5,nombre:"Electronica",descripcion:"Todo lo relacionado con pantallas y laptops"}
]
agregarCategorias(){
  const posId=this.categorias.findIndex((cat)=>cat.id==this.categoria.id)
  if (this.categoria.id>0 || posId!=-1) {
    //
    const categoriaSinVincular={
      id: this.categoria.id,
      nombre: this.categoria.nombre,
      descripcion : this.categoria.descripcion
    }
    //this.categorias.push(categoriaSinVincular);
    this.categorias.push(categoriaSinVincular);
  } else {
  alert("Erorr: verifica tus datos");
  }


}

eliminarCategoria(id:number){
if(confirm("Esta seguro de eliminar el registro?")){
const posId=this.categorias.findIndex((categoria)=>categoria.id==id)
this.categorias.splice(posId,1)
}
}

seleccionarCategoria(categoriaSeleccionada:{id:number,nombre:string,descripcion:string}){ //Para saber que categoria seleccionar
this.categoria.id=categoriaSeleccionada.id;
this.categoria.nombre = categoriaSeleccionada.nombre;
this.categoria.descripcion = categoriaSeleccionada.descripcion;
}

actualizarCategoria(){ //Para actualizar la categoria seleccionada
const idActualizar = this.categorias.findIndex((cat)=>cat.id==this.categoria.id);

this.categorias[idActualizar].id=this.categoria.id;

this.categorias[idActualizar].nombre=this.categoria.nombre;

this.categorias[idActualizar].descripcion=this.categoria.descripcion;
//alert(this.categorias[idActualizar].id);
}
}
