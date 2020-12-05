<template>
  <div class="px-12 h-full">

  	<!-- 	The Navigational Bar -->

	<nav class="flex bg-tranparent justify-between py-4 items-center">

		<!-- The first flex  -->
		
		<div>

			<a class="text-gray-800 font-black font-body text-xl"> Farmly</a>			

		</div>

		<!-- End of the first flex -->

		<!-- The second flex  -->

		<div class=" flex justify-between items-center space-x-3 text-gray-800 font-medium">


			<a href="" class="px-3 py-2 tracking-wider text-white bg-gray-800 rounded-lg font-bold font-display"> Login</a>

			<a href="" class="px-2 py-2 rounded-lg tracking-wider bg-green-600 text-white font-bold font-display" >Sign Up</a>

	

		</div>

		<!-- End of the second flex -->

	</nav>




		<!-- End Of The Navigational Bar -->


 <!--  	The Hero Section -->
  	<div class="flex justify-between">


  		<div class="mt-32">
  			<h1 class="text-6xl text-gray-800 font-bold tracking-wider font-body"> Farmly. </h1>

  			<p class="text-4xl mt-8 font-medium text-gray-800 font-display"> Social Market Place For Farmers</p>

        <p class="text-2xl mt-8 text-gray-800 font-display"> Bringing Africa To The Market</p>

  			<div class="flex mt-16 space-x-4">

  				<a href="" class="px-3 py-4 bg-green-600 rounded-lg text-white tracking-wider font-display"> Get Started</a>

  				<a href="" class="px-3 py-4 bg-gray-800 rounded-lg text-white tracking-wider font-display"> Learn More</a>
  				

  			</div>

  			


  		</div>

  		<div>
  			
  			<img src="/img/nature.svg" class="h-full w-full object-cover object-center">

  		</div>

  		

  	</div>

 <!--  	End Of The Hero Section -->

 	<!-- The Featured Section -->


   
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
