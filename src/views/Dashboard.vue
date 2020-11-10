<template>
  <div>
    <v-container grid-list-xs>
			<h1>Dashboard</h1>
        <v-row>
					<v-col cols="12" md="12" lg="6">
						<div class="mx-3">
							<MonthExpenses /> 
						</div>              
					</v-col>
					<v-col cols="12" md="12" lg="6"> 
						<div class="mx-3">
							<YearExpenses />  
						</div>                                      
					</v-col>
        </v-row>
    
        <v-row>
            <v-col cols="12">
							<div class="mx-3">
								<DepartmentExpenses />
							</div>                                    
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="12" lg="6">
							<div class="mx-3">
									<QtyProduct />  
							</div>                                         
            </v-col>
            <v-col cols="12" md="12" lg="6">
							<div class="mx-3">
									<ExpensesProduct />
							</div>                                              
            </v-col>
        </v-row>
		</v-container>
  </div>
</template>

<script>
import YearExpenses from "@/components/Dashboard/Year_expenses";
import MonthExpenses from "@/components/Dashboard/Month_expenses";
import DepartmentExpenses from "@/components/Dashboard/Department_expenses";
import QtyProduct from "@/components/Dashboard/Qty_product";
import ExpensesProduct from "@/components/Dashboard/Expenses_product";
export default {
	components: {
    YearExpenses,
    MonthExpenses,
    DepartmentExpenses,
    QtyProduct,
    ExpensesProduct
  },

	created() {
		console.log('Dashboard created')
	},

  data: () => ({

	}),

	methods:{
		
	}
}
</script>
