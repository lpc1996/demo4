<template>
	
		<div class="logo-container">
			<el-link class="logo-link" :href="logoInfo.href" :underline="false">
				<el-image class="logo-image" :src="logoInfo.image" />
				<span class="logo-title">{{ logoInfo.title }}</span>
			</el-link>
		</div>
		<div class="user-container">
			<el-dropdown>
				<div class="dropdown-title">
					<el-avatar class="avator" :size="50" :src="userInfo.avator"></el-avatar>
					<span class="user-name">{{ userInfo.nickName }}</span>
					<font-awesome-icon class="dropdown-icon" icon="fa-solid fa-chevron-down" />
				</div>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item>个人中心</el-dropdown-item>
						<el-dropdown-item>修改密码</el-dropdown-item>
						<el-dropdown-item>
							退出
							<font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
						</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>

</template>

<script>
import { onUpdated, reactive, toRefs } from 'vue'

export default {
	props: {
		receiveData: Object,
	},
	data() {
		let homeInfo = {};
		let logoInfo = {};
		let userInfo = {};
		return {
			homeInfo,
			logoInfo,
			userInfo,
		}
	},
	watch: {
		receiveData(newValue) {
			this.homeInfo = newValue.homeInfo;
			this.logoInfo = newValue.logoInfo;
			this.userInfo = newValue.userInfo;
		}
	}
}
</script>

<style scoped>

.logo-container {
	display: flex;
	/* width: 200px;	 */
	margin: 0;
}

.logo-title {
	font-size: large;
}

.user-container {
	display: flex;
	/* width: 200px; */
	margin: 0;
}

.dropdown-title {
	display: flex;
	align-items: center;
	justify-content: center;
}

.avator {
	align-self: center;
}

.user-name {
	align-self: center;
	font-size: 20px;
	;
}

.left-menu {
	border: none;
}
</style>