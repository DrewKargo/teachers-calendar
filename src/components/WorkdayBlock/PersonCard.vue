<template>
	<div class="h-6 w-36 hover:w-full rounded-full bg-fuchsia-100 shadow-inner border border-fuchsia-700 px-2 py-px my-auto flex overflow-hidden">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
			<path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
		</svg>
		<p class="text-neutral-950">{{ person.name }}</p>
		<p class="text-slate-50"
			v-if="person.age"
		><span class="px-1">|</span>{{ person.age }}</p>
		<button class="ml-auto"
			@click="removePerson"
		>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-fuchsia-800">
				<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
		</button>
	</div>
</template>

<script>
export default {
		name: 'PersonCard',
		props:{
			person:{
				type: Object,
				required: true
			}
		},
		methods:{
			removePerson(){
				this.$emit('removePerson');
			}
		}
}
</script>

<style lang="scss" scoped>

</style>