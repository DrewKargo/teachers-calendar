<template>
	<li class="h-12 p-1 flex flex-row items-center hover:bg-green-200">
		<div class="w-16 px-1">
			<div>{{item_data.time}}</div>
		</div>
		<div class="w-full h-full pl-4 overflow-hidden flex justify-between [&>button]:hover:w-6">
			<adding-person-input
				v-if="item_data.person==null"
				@IdOfNewPerson="addToTimetable"
			/>
			<person-card
			v-else
			:person="item_data.person"
			@removePerson="clearTime"
			/>
			<button class="ml-auto w-0"
				@click="removeItem"
			><i class="fi fi-rr-cross"></i>
			</button>
		</div>
	</li>
</template>

<script>
	import { mapActions } from 'vuex';
	import AddingPersonInput from './AddingPersonInput.vue';
	import PersonCard from './PersonCard.vue';
	export default {
		name: 'WorkdayItem',
		components:{
			AddingPersonInput,
			PersonCard
		},
		emits:{
			IdOfNewPerson:{
				type: Number,
				required: true
			},
			removePerson:{
				type: Number,
				required: true
			}
		},
		props:{
			item_data: {
				type: Object,
				default() {
					return {}
				}
		}
		},
		data(){

		},
		methods:{
			removeItem(){
				this.$emit('removeItem',this.item_data);
			},
			...mapActions([
			'ADD_PERSON_TO_TIMETABLE',
			'REMOVE_PERSON_FROM_TIMETABLE'
			]),
			addToTimetable(id){
				let time = this.item_data.time;
				let currentId = id;
				console.log(time, currentId);
				let data = [time, currentId]
				this.ADD_PERSON_TO_TIMETABLE(data);
			},
			clearTime(){
				let time = this.item_data.time;
				this.REMOVE_PERSON_FROM_TIMETABLE(time);
			}

		},
		mutations:{
		
		}
	}
</script>

<style lang="scss" scoped>

</style>