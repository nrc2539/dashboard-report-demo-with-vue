<template>
  <div>
    <v-card height="100%" width="100%">
      <v-row class="expand-graph-card">
        <v-col cols="12" md="6" lg="6">
          <p class="title text-center pt-1">Expense This Month</p>
          <apexchart type="donut" width="100%" height="329" :options="chartOptions1" :series="series"></apexchart>
        </v-col>
        <v-col cols="12" md="6" lg="6">
          <p class="title text-center pt-1">Credit Balance</p>
          <apexchart type="donut" width="100%" height="329" :options="chartOptions2" :series="series2"></apexchart>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: [60, 91],
      series2: [80, 44]
    };
  },
  computed: {
    chartOptions1() {
      return {
        // chart: {
        //   events: {
        //     dataPointSelection: (event, chartContext, data) => {
        //       this.show_msg("Data Index " + data.dataPointIndex);
        //     }
        //   }
        // },
        legend: {
					show: true,
					position: "bottom"
        },
        labels: [
					"Spending",
					"Balance"
				],
				plotOptions:{
					pie:{
						expandOnClick: false,
						donut:{
							size: '65%'
						}
					}
				},
        responsive: [
          {
            breakpoint: 600,
            options: {
              legend: {
                show: false               
              }
            }
          }
        ]
      };
		},
		chartOptions2() {
      return {
        // chart: {
        //   events: {
        //     dataPointSelection: (event, chartContext, data) => {
        //       this.show_msg("Data Index " + data.dataPointIndex);
        //     }
        //   }
        // },
        legend: {
					show: true,
          position: "bottom"
        },
        labels: [
          "Credit Spending",
          "Credit Balance",
				],
				plotOptions:{
					pie:{
						expandOnClick: false,
						donut:{
							size: '65%'
						}
					}
				},
        responsive: [
          {
            breakpoint: 600,
            options: {
              legend: {
                show: false               
              }
            }
          }
        ]
      };
    }
  },
  methods: {
    show_msg(val) {
      alert("Month expenses chart message : " + val);
    }
  }
};
</script>

<style scoped>
	@media screen and (min-width: 1264px) {
		.expand-graph-card {
			height: 380px;
		}
	}

</style>
