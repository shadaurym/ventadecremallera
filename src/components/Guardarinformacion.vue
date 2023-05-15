<template>
<input v-model="imagen" type="text" placeholder="imagen">
   <input v-model="modelo" type="text" placeholder="modelo">
    <input v-model="ano" type="text" placeholder="ano">
     <input v-model="precio" type="text" placeholder="precio">
     <input v-model="cantidad" type="text" placeholder="cantidad disponible">
     <button @click="guardar()">guardar</button>
</template>

<script>
import router from '@/router'
import axios from 'axios'
export default {
    data() {
        return {
               imagen:null,
                modelo:"",
                ano:"",
                precio:"",
                cantidad:"",

            

          
          listadeobjetos:[]
        }
    },

    methods: {
        guardar(){
           let lista={
            imagen:this.imagen,
            modelo:this.modelo,
            ano:this.ano,
            precio:this.precio,
            cantidad:this.cantidad
           }
             

               axios.post(' http://localhost:3000/profile', lista)
               .then(function(respuesta){
                
      })
      


             
     

          
        }


    },

}
</script>

<style>

</style>