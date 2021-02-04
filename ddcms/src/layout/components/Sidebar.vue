<template>
    <div class="side-bar" >
        <el-menu
            default-active="/material/doctor"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :style="{height: clientH}"
            router
        >
            <el-menu-item index="/">
                <i class="el-icon-menu"></i>
                <span slot="title">总览</span>
            </el-menu-item>
            <el-submenu index="/material">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>医护信息</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/material/doctor">医生管理</el-menu-item>
                    <el-menu-item index="/material/hospital">医院管理</el-menu-item>
                    <el-menu-item index="/material/office">科室管理</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
	data() {
		return {
      clientH: '',
			activeIndex: "1",
			activeIndex2: "1",
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},
    },
    mounted(){
        this.clientH = document.documentElement.clientHeight + 'px'
        console.log(this.$router.options)
    }
};
</script>

<style lang="scss">
.side-bar .el-menu-vertical-demo{
    background-color: rgb(84, 92, 100);
    min-width: 200px;
}

</style>
