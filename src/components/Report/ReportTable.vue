<template>
	<div>
		<v-row justify='end'>
			<v-col cols="12" md="2" lg="2">
				<v-btn block color="success" @click="exportData()">Export</v-btn>
			</v-col>
		</v-row>
		<vxe-table :data="tableData" height="400" border show-overflow>
			<vxe-table-column field="companyId" title="Company ID" width="220" fixed="left" align="center"></vxe-table-column>
			<vxe-table-column field="companyName" title="Company Name" width="270" align="center"></vxe-table-column>
			<vxe-table-column field="division_name" title="Division Name" width="220" align="center"></vxe-table-column>
			<vxe-table-column field="department_name" title="Department Name" width="220" align="center"></vxe-table-column>
			<vxe-table-column field="budget" :formatter="formatterNum" title="Company Budget" width="180" align="right"></vxe-table-column>
			<vxe-table-column field="spending" :formatter="formatterNum" title="Spending" width="180" align="right"></vxe-table-column>
			<vxe-table-column field="balance" :formatter="formatterNum" title="Balance" width="180" align="right"></vxe-table-column>
		</vxe-table>
	</div>
</template>

<script>
export default {
	created() {
		this.mockUpData()
	},

	data: () => ({
		data : [],
		division_name_list: ['Bangkok', 'Chiang Mai', 'Khon kaen', 'Phuket'],
		depertment_name_list: ['Engineering', 'Accounting', 'Customer Service', 'Sales'],
	}),

	computed:{
		tableData(){
			return this.data
		}
	},

	methods:{
		mockUpData(){
			this.data = []
			for (let num_of_data = 0; num_of_data < 250; num_of_data++) {
				let random_budget = (Math.floor(Math.random() * 10) + 1) * 100000
				let random_spening = (Math.floor(Math.random() * 10) + 1) * 10000
				let balance = random_budget - random_spening
				this.data.push({
					companyId: '100' + num_of_data,
					companyName: 'Test' + (num_of_data+1),
					division_name: this.division_name_list[Math.floor(Math.random() * 4)],
					department_name: this.depertment_name_list[Math.floor(Math.random() * 4)],
					budget: random_budget,
					spending : random_spening,
					balance: balance
				})
			}
		},

		formatterNum ({ cellValue }) {
			return cellValue.toLocaleString('TH-th')
		},
		
		exportData(){
			let JSONData = this.data
			let showLabel = true
			let data = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData
			let CSV = 'sep=,' + '\r\n\n'
			if (showLabel) {
				let row = ""
				//This loop will extract the label from 1st index of on array
				for (let index in data[0]) {
					//Now convert each value to string and comma-seprated
					if(index != '_XID') {
						row += index + ','
					}
				}
				//remove comma at the end of string 
				row = row.slice(0, -1);
				//append Label row with line break
				CSV += row + '\r\n'
			}

			//1st loop is to extract each row
			for (let i = 0; i < data.length; i++) {
				let row = ""
				//2nd loop will extract each column and convert it in string comma-seprated
				for (let index in data[i]) {
					if(index != '_XID'){
						row += '"' + data[i][index] + '",'
					}
				}
				//remove comma at the end of string
				row.slice(0, row.length - 1);
				//add a line break after each row
				CSV += row + '\r\n'
			}

			if (CSV == '') {        
				alert("Invalid data")
				return
			}   

			//Generate a file name
			let fileName = "ExportData_" + new Date().toLocaleString('th-TH')

			//Initialize file format you want csv or xls
			let uri = 'data:text/csv;charset=utf-8,' + escape(CSV)

			// Now the little tricky part.
			// you can use either>> window.open(uri);
			// but this will not work in some browsers
			// or you will not get the correct file extension    

			//this trick will generate a temp <a /> tag
			let link = document.createElement("a")
			link.href = uri;

			//set the visibility hidden so it will not effect on your web-layout
			link.style = "visibility:hidden"
			link.download = fileName + ".csv"

			//this part will append the anchor tag and remove it after automatic click
			document.body.appendChild(link)
			link.click();
			document.body.removeChild(link)
		}
	}
}
</script>