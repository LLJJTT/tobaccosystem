<template>
	<div id="home">
		<HomeContent/>
		<div style="clear:both"></div>
	</div>
</template>
<script>
	import HomeContent from '@/components/homecontent'
	export default{
		data() {
      return {
        
      }
    },
		components:{
			HomeContent
		}
	}
</script>

<style scoped>
	#home{
			height: 100%;
	}
	
</style>