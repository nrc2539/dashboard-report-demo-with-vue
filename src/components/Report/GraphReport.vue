<template>
	<div>
		<apexchart v-if="selected_graph == 'year_expenses' && (selected_period == 'year'|| selected_period == 'last7days')" type="line" width="100%" height="auto" :options="chartOptions" :series="series"></apexchart>
		<apexchart v-else type="bar" width="100%" :options="chartOptionsBar" :series="series"></apexchart>
	</div>
</template>

<script>
export default {
	data: () => ({

	}),
	computed: {
    chartOptions() {
      return {
        chart: {
					toolbar: {
						show: false
					}
        },
        yaxis: {
          title: {
            text: "Expenses (Million)",
            style: {
              fontSize: "18px"
            }
          }
        },
        markers: {
          size: 6
				},
      };
		},
		chartOptionsBar() {
      return {
        chart: {
					toolbar: {
						show: false
					}
        },
        yaxis: {
          title: {
            text: "Expenses (Million)",
            style: {
              fontSize: "18px"
            }
          }
        },
        markers: {
          size: 6
				},
      };
		},
		series (){
			let series_data = [{
				name: 'expenses (million)',
				data: this.$store.state.report_graph_data
			}]
			return series_data
		},
		selected_graph() {
			return this.$store.state.selected_graph
		},
		selected_period() {
			return this.$store.state.report_graph_period
		}
  },
}
</script>