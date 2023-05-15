<template>
  <nav>
   <header>
  <img src="https://www.fprdireccioneshidraulicas.com.ar/post/cremallera-hidraulica-big.jpg" alt="">
   <h1>juan cremallera</h1>
    <router-link to="/"><h2>home</h2></router-link>
   </header>
  <hr> 
    

  </nav>
  <router-view/>
  <!-- <Cremayeras/> -->
 <!-- <Guardarinformacion/> -->
</template>

<script>
// import Cremayeras from './components/cremayeras.vue'
// import Guardarinformacion from './components/Guardarinformacion.vue'
export default {
  data() {
    return {
      
    }
  },
  components:{
    // Cremayeras,
    // Guardarinformacion
  }
}
</script>
<style lang="scss">
// // #app {
// //   font-family: Avenir, Helvetica, Arial, sans-serif;
// //   -webkit-font-smoothing: antialiased;
// //   -moz-osx-font-smoothing: grayscale;
// //   text-align: center;
// //   color: #2c3e50;
// }

img{
    width:80px;
    

}
header{
    display: flex;
    justify-content: space-between;
}

.butonagregar{
    display: flex;
    justify-content: flex-end;
    
}
.butonagregar img{
    width: 30px;
}



nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
