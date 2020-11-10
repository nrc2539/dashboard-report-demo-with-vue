import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		report_graph_period: 'year',
		selected_graph: 'year_expenses',
		report_graph_data: []
  },
  mutations: {
		changeGraph(state, new_graph){
			// console.log('store new graph ---->', new_graph)
			state.selected_graph = new_graph
		},
		changePeriod(state, new_period){
			// console.log('store new period ---->', new_period)
			state.report_graph_period = new_period
			let data_arr = []
			if(state.selected_graph == 'year_expenses'){
				if(new_period == 'year'){
					const month_list = ['Jan', 'Feb' , 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
					for (let index = 0; index < month_list.length; index++) {
						data_arr.push({x: month_list[index], y: Math.floor((Math.random() * 1000) + 1)})
					}
				}else if(new_period == 'halfyear'){
					for (let index = 0; index < 2; index++) {
						data_arr.push({x: `H${index+1}`, y: Math.floor((Math.random() * 1000) + 1)})
					}
				}else if(new_period == 'quarter'){
					for (let index = 0; index < 4; index++) {
						data_arr.push({x: `Q${index+1}`, y: Math.floor((Math.random() * 1000) + 1)})
					}
				}else if(new_period == 'last7days'){
					for (let index = 0; index < 7; index++) {
						let current_date = new Date()
						current_date.setDate(current_date.getDate() - (6 -index))
						data_arr.push({x: current_date.toLocaleDateString('TH-th'), y: Math.floor((Math.random() * 300) + 1)})
					}
				}
				state.report_graph_data =  data_arr
			}else if(state.selected_graph == 'department_expenses'){
				for (let index = 0; index < 10; index++) {
					data_arr.push({x: `Department${index+1}`, y: Math.floor((Math.random() * 500) + 1)})
				}
				state.report_graph_data =  data_arr.sort((a, b) => b.y - a.y)
			}else if(state.selected_graph == 'quantity'){
				let product_list = ['Paper', 'Pen', 'Hard Disk', 'CD', 'Ink', 'Chair', 'Table', 'Snack', 'Box', 'Bottle']
				for (let index = 0; index < product_list.length; index++) {
					data_arr.push({x: product_list[index], y: Math.floor((Math.random() * 250) + 1)})
				}
				state.report_graph_data =  data_arr.sort((a, b) => b.y - a.y)
			}else if(state.selected_graph == 'product_expenses'){
				let product_list = ['Coffee', 'Milk', 'Keyboard', 'Mouse', 'Sugar', 'Cup', 'Bettery', 'Plastic', 'Pencil', 'Scissors']
				for (let index = 0; index < product_list.length; index++) {
					data_arr.push({x: product_list[index], y: Math.floor((Math.random() * 10) + 1)})
				}
				state.report_graph_data =  data_arr.sort((a, b) => b.y - a.y)
			}
		}
  },
  actions: {
  },
  modules: {
  }
})
