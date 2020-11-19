<template>
	<div>
		<v-app-bar
			app
			color="primary"
			dark
		>
			<v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
			<v-toolbar-title class="hover-title" @click="pushPage('/', 'Dashboard')">Dashboard&Report Demo</v-toolbar-title>
		</v-app-bar>
		<v-navigation-drawer
			v-model="drawer"
			absolute
			hide-overlay
			temporary
		>
			<v-list nav dense>
				<v-list-item-group active-class="deep-purple--text text--accent-4">
					<v-list-item @click="pushPage('/', 'Dashboard')">
						<v-list-item-icon>
							<v-icon>mdi-monitor-dashboard</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Dashboard</v-list-item-title>
					</v-list-item>

					<v-list-item @click="pushPage('/report', 'Report')">
						<v-list-item-icon>
							<v-icon>mdi-file-chart</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Report</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>
export default {
	data: () => ({
		drawer: false
	}),
	methods: {
		pushPage(page, currentRouteName){
			// console.log(this.$route.name)
			if(this.$route.name != currentRouteName){
				this.$router.push(page)
			}else{
				console.log('already in this page')
			}
		}
	}
}
</script>

<style scoped>
	.hover-title {
		cursor: pointer;
	}
</style>