<template>
	<div class="flex h-full bg-stone-100 rounded-full p-2 [&>input]:hover:w-36">
		<input type="search" placeholder="Введите имя" class="border-none bg-interit outline-none w-0"
			v-model="inputValue"
		>
		<button class="w-6 h-6 bg-slate-400 rounded-full"
			@click="addPerson"
		>
			<user-plus-icon class="h-6 w-6 text-blue-950 hover:text-blue-700"/>
		</button>
	</div>
</template>

<script>
import { UserPlusIcon } from '@heroicons/vue/24/outline'
export default {
	name: 'AddingPersonInput',
	components:{
		UserPlusIcon
	},
	data(){
		return{
			inputValue: '',
		}
	},
	methods:{
		addPerson(){
			if(this.inputValue!=='' && this.inputValue.length>2){
				let name = this.inputValue.charAt(0).toUpperCase() + this.inputValue.slice(1).toLowerCase();
				let personId = this.$store.state.persons.length + 1;
				class Person{
					constructor(){
						this.id = personId;
						this.name = name,
						this.secondName = null,
						this.age = null,
						this.parent = null,
						this.contacts = null,
						this.information = null
					}
				}
				const newPerson = new Person;
				this.$store.state.persons.push(newPerson);
				this.$emit('IdOfNewPerson', personId);
				this.inputValue = '';
			} else{
				this.inputValue = '';
			}
		
		}
	}
}
</script>

<style lang="scss" scoped>

</style>