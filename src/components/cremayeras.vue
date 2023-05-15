<template>


    
   
     <div v-for="(item, index) in listadeobjetos" :key="index"> 
        <div class="card" style="width: 18rem;">
  <img :src="item.imagen" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">{{item.modelo}}</h5>
    <p class="card-text">{{item.ano}}</p>
    <p class="card-text">{{item.precio}}</p>
    <p class="card-text">{{item.cantidad}}</p>
    
  </div>
</div>
     </div>

  <div @click="navegar()" class="butonagregar">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd0HZQBmTv4stlFSmVSSH6OAjd4jvvXbNxTw&usqp=CAU" alt="">
  </div>

   

</template>

<script>
import router from '@/router'
import axios from 'axios'
export default {
    data() {
        return {

         listadeobjetos:[]
         
            
        }
    },

   
    methods:{
        navegar(){
            router.push("Guardarinformacion")
        },

      
    },

    mounted(){
       
      axios.get(' http://localhost:3000/profile')
      .then(respuesta=>{
        this.listadeobjetos=respuesta.data
        console.log(respuesta);
      })
    },


}
</script>

<style scoped>


</style>