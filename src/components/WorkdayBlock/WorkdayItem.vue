<template>
	<li class="flex flex-row p-2 hover:bg-green-200">
		<div class="w-16 px-2">
			<div>{{item_data.time}}</div>
		</div>
		<div class="w-full pl-4 overflow-hidden flex justify-between ">
			<div class="w-5"></div>
			<button class="ml-auto"
				@click="removeTimetableItem(i)"
			><i class="fi fi-rr-cross"></i></button>
		</div>
	</li>
</template>

<script>
	export default {
		name: 'WorkdayItem',
		props:{
		item_data: {
			type: Object,
			default() {
				return {}
			}
		}
	},
		data(){

		}
	}
</script>

<style lang="scss" scoped>

</style>