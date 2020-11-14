<template>
  <div id="app" class="bg-green-100">
 <!--    <Navbar> </Navbar> -->
    
    <router-view/>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
  
export default {

components:{

  Navbar

},


data(){

  return {



  }
}

}

</script>
