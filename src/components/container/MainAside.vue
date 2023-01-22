<template>
	<el-scrollbar>
		<el-menu class="left-menu" default-active="2"
			v-if="menuInfo != undefined && menuInfo != null && menuInfo.length > 0">
			<template v-for="menu in menuInfo[0]">
				<el-sub-menu v-if="menu.children != null" :index="menu.index + ''" :key="menu.id">
					<template #title>
						<font-awesome-icon :icon="menu.icon" />
						<span>{{ menu.name }}</span>
					</template>
					<el-menu-item v-for="item in menu.children" :index="menu.index + '-' + item.index" :key="item.id">
						<font-awesome-icon :icon="item.icon" />
						<span>{{ item.name }}</span>
					</el-menu-item>
				</el-sub-menu>
				<el-menu-item v-else>
					<font-awesome-icon :icon="menu.icon" :index="menu.index + ''" :key="menu.id" />
					<span>{{ menu.name }}</span>
				</el-menu-item>
			</template>
		</el-menu>
	</el-scrollbar>
	
</template>

<script>
import { watch } from "vue";
export default {
	props: {
		receiveData: {
			type: Array
		}
	},
	data() {
		return {
			menuInfo: []
		}
	}, 
	watch: {
		receiveData(newVal) {
			this.menuInfo.push(newVal);
		}
	}
}
</script>

<style scoped>
.left-menu {
	border: none;
}
</style>