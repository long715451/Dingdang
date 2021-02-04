<template>
	<div class="layout">
		<div class="side">
			<sidebar />
		</div>
		<div class="right">
			<navbar />
			<div class="input">
				<el-input
					v-model="input"
					placeholder="请输入内容"
					size="medim"
					suffix-icon="el-icon-search"
				></el-input>
			</div>
			<div class="app-main">
				<transition name="fade-transform" mode="out-in">
					<router-view></router-view>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
import { Sidebar, Navbar } from "./components";
export default {
	data() {
		return {
			input: "",
		};
	},
	components: {
		Sidebar,
		Navbar,
	},
};
</script>

<style lang="scss">
.layout {
	display: flex;
	.side {
		width: 200px;
	}

	.right {
		width: 100%;
		.input {
			width: 500px;
			margin: 20px 0 0 10px;
		}
		.app-main {
			padding: 20px;
		}
	}
}
</style>
