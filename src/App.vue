<template>
  <div id="app" class="bg-green-50 px-8">
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
