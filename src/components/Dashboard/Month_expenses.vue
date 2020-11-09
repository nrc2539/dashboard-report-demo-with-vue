<template>
  <div>
    <v-card height="100%" width="100%">
      <v-row>
        <v-col sm="12" md="12" lg="6">
          <p class="title text-center pt-1">Expense This Month</p>
          <apexchart type="donut" width="100%" height="329" :options="chartOptions1" :series="series"></apexchart>
        </v-col>
        <v-col sm="12" md="12" lg="6">
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
