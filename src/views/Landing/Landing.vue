<template>
  <div class="h-screen">

  	<!-- 	The Navigational Bar -->

	<nav class="flex bg-tranparent justify-between py-4 items-center">

		<!-- The first flex  -->
		
		<div>

			<img src="/img/logo/agronomy.svg" class="object-cover object-center h-8 w-8">			

		</div>

		<!-- End of the first flex -->

		<!-- The second flex  -->

		<div class=" flex justify-between items-center space-x-3 text-gray-800 font-medium">


			<a href="" class="px-3 py-2 tracking-wider text-white bg-gray-800 rounded-lg font-bold font-body"> Login</a>

			<a href="" class="px-2 py-2 rounded-lg tracking-wider bg-green-600 text-white font-bold font-body" >Sign Up</a>

	

		</div>

		<!-- End of the second flex -->

	</nav>




		<!-- End Of The Navigational Bar -->


 <!--  	The Hero Section -->
  	<div class="flex h-full">


  		<div class="mt-32 w-full lg:w-1/2">
  			<h1 class="text-7xl lg:text-8xl text-gray-800 font-black tracking-wider font-body"> Farmly.io</h1>

        <p class="text-4xl mt-8 font-black tracking-wider text-gray-800">Connect. Grow. Share</p>

  			<p class="text-2xl mt-8 font-ordinary tracking-wider text-gray-800 text-capitalize"> Social marketplace designed to bridge the <br>Gap Between farms and market</p>

        <!-- <p class="text-2xl mt-8 font-ordinary text-gray-800 font-body tracking-wider"> Connecting Farmers to the world.</p> -->

      

  			<div class="flex mt-16 space-x-4">

  				<a href="" class="px-3 py-4 bg-green-600 rounded-lg text-white tracking-wider font-body font-bold"> Get Started</a>

  				<a href="" class="px-3 py-4 bg-gray-800 rounded-lg text-white tracking-wider font-body font-bold"> Learn More</a>
  				

  			</div>

  			


  		</div>

  		<div class="hidden lg:block">
  			
  			<img src="/img/nature.svg" class="h-full w-full object-cover object-center ">

  		</div>

  		

  	</div>

 <!--  	End Of The Hero Section -->

 	<!-- The Featured Section -->


<div class="mt-32">


<!-- The flex section -->

  <div class="flex">
    
    <div class="hidden lg:block">

      <img src="/img/farmgirl.svg" class="h-full w-full">
      
    </div>


    <div class="mt-32 w-full lg:w-1/2">

  
        <h1 class="text-4xl text-gray-800 font-black tracking-wider font-body"> Showcase Your Products.
</h1>

        <p class="text-2xl mt-16 font-medium tracking-wider text-gray-800"> You are just one stop away from showcasing your agro-products to the world.</p>

        <div class="mt-16">
          <a href="" class=" px-3 py-4 bg-gray-800 rounded-lg text-white font-bold tracking-wider"> Get Started</a>
    
        </div>

       


      
    </div>

  </div>

<!--   End of the flex section -->


<!-- The flex section -->

  <div class="flex mt-32">
    
    


    <div class="mt-32 w-full lg:w-1/2">

  
        <h1 class="text-4xl text-gray-800 font-black tracking-wider font-body"> Connect With Farmers
</h1>

        <p class="text-2xl mt-16 font-medium tracking-wider text-gray-800 font-body"> Connect with like-minds and similar interest as you.</p>

        <div class="mt-16">
          <a href="" class=" px-3 py-4 bg-gray-800 rounded-lg text-white font-bold tracking-wider"> Get Started</a>
    
        </div>

       


      
    </div>

    <div class="hidden lg:block">

      <img src="/img/farmgirl.svg" class="h-full w-full">
      
    </div>

  </div>

<!--   End of the flex section -->
  

</div>


  <!-- End of The Featured Section -->


   
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Landing',
  components: {
    // HelloWorld
  }
}
</script>
