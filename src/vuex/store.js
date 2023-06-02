
import { createStore } from 'vuex'

const store = createStore({
	state: {
		day: {
			title: "Сегодня",
			defaultTime: [

				],
			timetable: [
				{
					time: '09:00',
					person: null
				},
				{
					time: '10:00',
					person: null
				},
				{
					time: '11:00',
					person: null
				},
				{
					time: '12:00',
					person: null
				},
				{
					time: '13:00',
					person: null
				},
				{
					time: '14:00',
					person: null
				},
				{
					time: '15:00',
					person: null
				},
				{
					time: '16:00',
					person: null
				},
				{
					time: '17:00',
					person: null
				},
				{
					time: '18:00',
					person: null
				},
				{
					time: '19:00',
					person: null
				}
			]
		},
		persons: [
			{
				id:1,
				name: "Артём",
				secondName: "Алёшин",
				age: 3,
				parent: "Валентина Николаевна Алёшина",
				contacts: {tel: 8912654875},
				information: null
			}
		],
	
	},
	mutations: {
		SET_PERSON_TO_TIMETABLE: (state, data) => {
			let [time, id] = [...data];
			let currentPerson = state.persons.find((item) => item.id == id);
			state.day.timetable.find((el)=> el.time == time).person = currentPerson;
		},
		DELETE_PERSON_FROM_TIMETABLE: (state, time) => {
			state.day.timetable.find((el)=> el.time == time).person = null;
		}
	},
	actions: {
		ADD_PERSON_TO_TIMETABLE({commit}, data){
			commit('SET_PERSON_TO_TIMETABLE', data);
		},
		REMOVE_PERSON_FROM_TIMETABLE({commit}, time){
			commit('DELETE_PERSON_FROM_TIMETABLE', time);
		}
	},
	getters: {
		DAY(state){
			return state.day;
		},
		PERSONS(state){
			return state.persons;
		}
	}
})

export default store;