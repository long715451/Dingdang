<template>
	<div>
		<div>
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="用户管理" name="first">
					<div>
						<el-table
							:data="tableData"
							style="width: 100%"
							:stripe="true"
							:border="true"
						>
							<el-table-column label="日期" >
								<template slot-scope="scope">
									<i class="el-icon-time"></i>
									<span style="margin-left: 10px">{{ scope.row.date }}</span>
								</template>
							</el-table-column>
							<el-table-column label="姓名" >
								<template slot-scope="scope">
									<el-popover trigger="hover" placement="top">
										<p>姓名: {{ scope.row.name }}</p>
										<p>住址: {{ scope.row.address }}</p>
										<div slot="reference" class="name-wrapper">
											<el-tag size="medium">{{ scope.row.name }}</el-tag>
										</div>
									</el-popover>
								</template>
							</el-table-column>
							<el-table-column label="地址" prop="address">
							</el-table-column>
							<el-table-column label="操作" align="center" width="200">
								<template slot-scope="scope">
									<el-button
										size="mini"
										@click="handleEdit(scope.$index, scope.row)"
										>编辑</el-button
									>
									<el-button
										size="mini"
										type="danger"
										@click="handleDelete(scope.$index, scope.row)"
										>删除</el-button
									>
								</template>
							</el-table-column>
						</el-table>
						<div class="pagination">
							<el-pagination layout="prev, pager, next" :total="1000">
							</el-pagination>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
				<el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeName: "first",
			tableData: [
				{
					date: "2016-05-02",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄",
				},
				{
					date: "2016-05-04",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1517 弄",
				},
				{
					date: "2016-05-01",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1519 弄",
				},
				{
					date: "2016-05-03",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1516 弄",
				},
			],
		};
	},
	methods: {
		handleClick(tab, event) {
			console.log(tab, event);
		},
		handleEdit(index, row) {
			console.log(index, row);
		},
		handleDelete(index, row) {
			console.log(index, row);
		},
	},
};
</script>

<style lang="scss">

.pagination {
  display: flex;
  justify-content: center;
  padding: 20px;
}
</style>
