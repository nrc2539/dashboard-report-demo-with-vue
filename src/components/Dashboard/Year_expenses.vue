<template>
  <div>
    <v-card height="100%" width="100%">
      <p class="title text-center pt-3">Year Expenses</p>
      <apexchart type="line" width="100%" height="290" :options="chartOptions" :series="series"></apexchart>
    </v-card>
  </div>
</template>

<script>
export default {
  created(){
		this.mockUpData()
	},
	
  data: () => ({
		series_data : [],
		month_names : ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	}),

  computed: {
    chartOptions() {
      return {
        chart: {
          id: "year_expenses",
          events: {
            markerClick: (event, chartContext, data) => {
              this.show_report(data.dataPointIndex);
            }
					},
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
		series(){
			let data = [{
				name: 'expense (million)',
				data: this.series_data
			}]
			return data
		}
	},
	
  methods: {
    show_report(val) {
			console.log("Year expenses chart message : " + val);
			this.$store.commit('changeGraph', 'year_expenses')
      this.$router.push('/report').catch(err => {console.log(err.message)})
		},
		mockUpData() {
			this.series_data = []
			for (let num_of_data = 0; num_of_data < 12; num_of_data++) {
				this.series_data.push({x: this.month_names[num_of_data], y: Math.floor(Math.random() * 100) + 25})
			}
		}
  }
};
</script>
