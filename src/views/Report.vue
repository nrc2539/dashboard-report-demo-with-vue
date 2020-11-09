<template>
	<div>
		<v-container grid-list-xs>
			<h1>Report</h1>
			<v-row>
				<!-- ** vuetify v2.x.x using cols instead xs -->
				<v-col cols="12" sm="12" md="6" lg="6">
					<GraphReport></GraphReport>
				</v-col>
				<v-col cols="12" sm="12" md="6" lg="6">
					<v-row align="center">
						<v-col md="12" lg="3" offset-lg="1">
							<p style="font-weight: bold">Graph Type</p>
						</v-col>
						<v-col md="12" lg="8">
							<v-select
								v-model="selected_graph"
								:items="items_graph"
								dense
								solo
							></v-select>
						</v-col>
					</v-row>
					<v-row align="center">
						<v-col md="12" lg="3" offset-lg="1">
							<p style="font-weight: bold">Time Period</p>
						</v-col>
						<v-col md="12" lg="8">
							<v-select
								v-model="selected_time"
								:items="items_time_period"
								dense
								solo
							></v-select>
						</v-col>
					</v-row>
					
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<ReportTable></ReportTable>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import GraphReport from "@/components/Report/GraphReport";
import ReportTable from "@/components/Report/ReportTable";
export default {
	components:{
		GraphReport,
		ReportTable
	},
	created() {
		console.log('Report created')
		this.selected_time = this.$store.state.report_graph_period
		this.selected_graph = this.$store.state.selected_graph
	},
	data: () => ({
		items_time_period: [
			{text: 'Year', value: 'year'},
			{text: 'Half-Year', value: 'halfyear'},
			{text: 'Quarter', value: 'quarter'},
			{text: 'Last 7 days', value: 'last7days'}
		],
		items_graph: [
			{text: 'Year expenses', value: 'year_expenses'},
			{text: 'Department expenses', value: 'department_expenses'},
			{text: 'Quantity', value: 'quantity'},
			{text: 'Product Expenses', value: 'product_expenses'}
		],
		selected_time: '',
		selected_graph: ''
	}),
	watch: {
		selected_time(new_period){
			this.changePeriod(new_period)
		},
		selected_graph(new_graph){
			this.changeGraph(new_graph)
		}
	},
	methods:{
		changePeriod(new_period){
			this.$store.commit('changePeriod', new_period)
		},
		changeGraph(new_graph){
			this.$store.commit('changeGraph', new_graph)
			this.changePeriod(this.selected_time)
		}
	}
}
</script>