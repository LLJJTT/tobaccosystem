<template>
	<div id="index">
		<Head/>
		<Menu/>
		<router-view></router-view>
		<Foot/>
		<div style="clear:both"></div>
	</div>
</template>

<script>
	import Head from '@/components/head'
	import Menu from '@/components/menu'
	import Foot from '@/components/foot'
	export default{
		components: {
	      Head,Menu,Foot
	      
    	}
	}
</script>

<style scoped>
	
</style>