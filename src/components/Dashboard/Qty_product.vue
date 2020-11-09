<template>
  <div>
    <v-card height="100%" width="100%">
      <p class="title text-center pt-3">Product Quantity</p>
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
		series_data : [],
		item_list: ['Paper', 'Pen', 'Hard Disk', 'CD', 'Ink', 'Chair', 'Table', 'Snack', 'Box', 'Bottle']
	}),
	
  computed: {
    chartOptions() {
      return {
        chart: {
          id: "qty_product",
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
            text: "Quantity",
            style: {
              fontSize: "18px"
            }
          }
        }
      };
		},
		series(){
			let data = [{
				name: 'Quantity',
				data: this.series_data
			}]
			return data
		}
	},
	
  methods: {
		show_report() {
			this.$store.commit('changeGraph', 'quantity')
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
    //   this.series = [{data: this.series[0].data.sort((a, b) => a.y - b.y)}];
    // },

    // //methods order from large to less
    // descending_order() {
    //   this.series = [{data: this.series[0].data.sort((a, b) => b.y - a.y)}];
    // }
  }
};
</script>
