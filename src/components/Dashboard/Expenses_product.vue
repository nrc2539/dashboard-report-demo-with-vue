<template>
  <div>
    <v-card height="100%" width="100%">
      <p class="title text-center pt-3">Product Expenses</p>
      <apexchart type="bar" width="100%" :options="chartOptions" :series="series"></apexchart>
    </v-card>
  </div>
</template>

<script>
export default {
	created(){
		this.mockUpData()
	},

  data: () => ({
		series_data: [],
		item_list: ['Car', 'Server', 'Computer', 'Router', 'Phone', 'Scanner', 'Table', 'Monitor', 'Storage', 'Cable'],
	}),

  computed: {
    chartOptions() {
      return {
        chart: {
          id: "expenses_product",
          events: {
            dataPointSelection: () => {
              this.show_report()
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
        }
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
			this.$store.commit('changeGraph', 'product_expenses')
      this.$router.push('/report').catch(err => {console.log(err.message)})
		},
		mockUpData(){
			this.series_data = []
			for (let num_of_data = 0; num_of_data < 10; num_of_data++) {
				this.series_data.push({x: this.item_list[num_of_data], y: Math.floor(Math.random() * 100) + 25})
			}
			this.series_data = this.series_data.sort((a, b) => b.y - a.y)
		},

    // //methods order from less to large
    // ascending_order() {
    //   // console.log(this.series)
    //   this.series = [{data: this.series[0].data.sort((a, b) => a.y - b.y)}];
    //   // console.log(this.series)
    // },

    // //methods order from large to less
    // descending_order() {
    //   this.series = [{data: this.series[0].data.sort((a, b) => b.y - a.y)}];
    //   // console.log(this.series)
    // }
  }
};
</script>
