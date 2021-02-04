<template>
	<div class="nav-bar">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item>首页</el-breadcrumb-item>
			<el-breadcrumb-item>活动管理</el-breadcrumb-item>
			<el-breadcrumb-item>活动列表</el-breadcrumb-item>
			<el-breadcrumb-item>活动详情</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="avatar">
			<el-dropdown @command="clickItem">
				<el-avatar :size="30" :src="require(`@/assets/avatar.jpg`)"></el-avatar>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="user">个人中心</el-dropdown-item>
					<el-dropdown-item command="logout">注销</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
  },
  methods: {
    clickItem(command){
      console.log(command)
      if(command == 'logout'){
        localStorage.removeItem('hasLogin');
        this.$router.push('/login')
      }
    }
  }
};
</script>

<style lang="scss">
.el-breadcrumb {
	padding: 20px;
	box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.nav-bar {
	position: relative;
	.avatar {
		position: absolute;
		top: 50%;
		right: 20px;
		transform: translateY(-50%);
	}
}
</style>
