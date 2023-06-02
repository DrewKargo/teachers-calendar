<template>
	<div class="h-screen dark:bg-slate-900 font-montserrat">	
		<H1 class="text-3xl font-bold underline bg-slate-800">Мой календарь</H1>
		<workday-block/>
	</div>

</template>

<script>
import WorkdayBlock from './components/WorkdayBlock/WorkdayBlock.vue';



export default{
  name: 'App',
  components:{
	WorkdayBlock,
	
  }
}
</script>

<style lang="scss">
	@import url(./assets/css/style.css);
</style>
