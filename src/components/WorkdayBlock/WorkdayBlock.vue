<template>
	<div class="w-80 h-[450px] relative mx-auto">
		<div class="h-full flex flex-col bg-green-100 opacity-75 rounded-3xl border-2 border-green-600/20 
			shadow-2xl overflow-hidden">
			<h2 class="text-center p-2 border-b-2 border-green-600 font-semibold text-lg">{{DAY.title}}</h2>
			<div class="h-96 shrink overflow-hidden hover:overflow-auto">
				<ul class="flex flex-col divide-y divide-green-500/30 pt-2">
					<workday-item
					v-for="item in DAY.timetable" 
					:key="item.time"
					:item_data="item"
					@removeItem="removeTimetableItem"
					/>
				</ul>
			</div>
			<transition name="timeSettingPannel">
				<div class="w-full h-48 transition-all bg-neutral-50 rounded-b-3xl border-t-4 relative"
					v-if="showTimePanel"
				>
					<i class="fi fi-rr-angle-down absolute left-32 px-6"
						@click="showTimePanel = !showTimePanel"
					></i>
					<div class="flex py-4 justify-center items-center">
						<div class="flex flex-col w-16">
						<button class="h-6 rounded-t-xl border-t-2 border-slate-600  hover:border-t-4"
							@click.prevent="hour++"
						>
							<i class="fi fi-rr-angle-double-small-up"></i>
						</button>
						<div class="h-16 bg-slate-200 rounded-xl border-2 border-slate-600 text-center py-4 text-xl">{{hour}}</div>
						<button class="h-6 rounded-b-xl border-b-2 border-slate-600 hover:border-b-4"
							@click.prevent="hour--"
						>
							<i class="fi fi-rr-angle-double-small-down"></i>
						</button>
						</div>
						<div class="mx-4 animate-pulse">
							<div class="w-1 h-2 rounded-full bg-slate-600 my-1"></div>
							<div class="w-1 h-2 rounded-full bg-slate-600 my-1"></div>
						</div>
						<div class="flex flex-col w-16">
							<button class="h-6 rounded-t-xl border-t-2 border-slate-600 hover:border-t-4"
								@click.prevent="minutes+=5"
							>
								<i class="fi fi-rr-angle-double-small-up"></i>
							</button>
						<div class="h-16 bg-slate-200 rounded-xl border-2 border-slate-600 text-center py-4 text-xl">{{minutes}}</div>
					<button class="h-6 rounded-b-xl border-b-2 border-slate-600 hover:border-b-4"
					@click.prevent="minutes-=5"
					>
						<i class="fi fi-rr-angle-double-small-down"></i>
					</button>
						</div>	
					</div>
				</div>
			</transition>
		</div>
		<div class="w-9 h-9 absolute -bottom-4 left-32 mx-3 bg-green-400 rounded-full flex justify-center 
		items-start pt-0.5">
			<transition name="openPanel" mode="out-in">
				<i class="fi fi-rr-time-add text-3xl"
				v-if="!showTimePanel"
				@click="showTimePanel = true"
				></i>
			</transition>
			<transition name="addTime" mode="out-in">
				<i class="fi fi-rr-time-check text-3xl"
				v-if="showTimePanel"
				@click="createNewTime(), sortItemsByTime()"
			></i>
			</transition>

		</div>
	</div>  
</template>

<script>
import { mapGetters } from 'vuex'
import WorkdayItem from './WorkdayItem.vue';
export default {
	name: 'WorkdayBlock',
	components:{
		WorkdayItem,
	},
	emits:{
		removeItem:{
			type: Object,
			required: true
		}
	},
	data(){
		return{
			showTimePanel: false,
			hour: 10,
			minutes: 30

		}
	},
	methods:{
		createNewTime(){
			let newTime= `${this.hour}:${this.minutes}`;
			console.log('ok', newTime);
			class Item {
				constructor(){
					this.time = newTime;
					this.person = null;
				}
			}
			const newItem = new Item
			if(this.DAY.timetable.find((el) => el.time === newItem.time)){
				console.log('oops, time is busy')
			}else{
				this.DAY.timetable.push(newItem);
				this.showTimePanel = false;
			}

		},
		sortItemsByTime(){
			//this.timetable.sort();
		},
		removeTimetableItem(item){
			let current = this.DAY.timetable.indexOf(item);
			this.DAY.timetable.splice(current, 1);
		}
	},
	computed:{
		...mapGetters([
			'DAY',
			'PERSONS'
		])
	}
}
</script>

<style lang="scss" scoped>
	.timeSettingPannel-enter-active{
		animation: timeSettingPannel-in .5s;
	}
	.timeSettingPannel-leave-active{
		animation: timeSettingPannel-in .5s reverse;
	}
	@keyframes timeSettingPannel-in {
		0%{
			transform: translateY(100%);
			
		}
		100%{
			transform: translateY(0%);
		}
	}
	
	.openPanel-enter-from, .addTime-enter-from, .openPanel-leave-to,.addTime-leave-to{
		animation: iconAnimation-out .3s reverse;
	}
	.openPanel-leave-active, .addTime-leave-active{
		animation: iconAnimation-out .3s;
	}
	@keyframes iconAnimation-out {
		0%{
			transform: scale(1);
		}
		10%{
			transform: scale(.8);
		}
		30%{
			transform: scale(1.2);
		}
		100%{
			transform: scale(0);
			opacity: 0;
		}
	}
</style>