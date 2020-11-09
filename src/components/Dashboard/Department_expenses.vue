<template>
  <div>
    <v-card height="100%" width="100%">
      <p class="title text-center pt-3">Department Expenses</p>
      <apexchart type="bar" width="100%" height="320" :options="chartOptions" :series="series"></apexchart>
    </v-card>
  </div>
</template>

<script>
export default {
  created(){
		this.mockUpData()
	},
	
  data: () => ({
		series_data : []
	}),

  computed: {
    chartOptions() {
      return {
        chart: {
          id: "department_expenses",
          events: {
            dataPointSelection: () => {
              this.show_report()
            }
					},
					toolbar: {
						show: false
					}
        },
        legend: {
          show: true,
          position: "right"
        },
        plotOptions: {
          bar: {
            horizontal: false,
            dataLabels: {
              position: "bottom"
            }
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
        responsive: [
          {
            breakpoint: 1264,
            options: {
              plotOptions: {
                bar: {
                  horizontal: false
                }
              }
            }
          }
        ]
      };
		},
		series () {
			let data = [{
				name: "expenses (Million)",
				data: this.series_data
			}]
			return data
		}
	},
	
  methods: {
		show_report() {
			this.$store.commit('changeGraph', 'department_expenses')
      this.$router.push('/report').catch(err => {console.log(err.message)})
		},
		mockUpData() {
			this.series_data = []
			for (let num_of_data = 0; num_of_data < 10; num_of_data++) {
				this.series_data.push({x: 'Department ' + (num_of_data + 1), y: Math.floor(Math.random() * 100) + 25})
			}
			this.series_data = this.series_data.sort((a, b) => b.y - a.y)
		}
  }
};
</script>
