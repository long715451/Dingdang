<template>
	<div id="sections">
        <my-navbar title="选择科室"/>
		<div class="sections-header">
			根据问题描述，已为你推荐以下科室
		</div>
        <div class="sections-tab" :class="{active: selected == recommendOffice.id}" @click="setActive(recommendOffice.id)">
            <div class="sections-tab-tit">
                <div>{{recommendOffice.name}}</div>
                <span>推荐</span>
            </div>
            <div class="sections-tab-content">
                {{recommendOffice.keywords}}
            </div>
        </div>

		<div class="sections-subtitle">
			你也可以选择其他科室
		</div>
        <div class="sections-tab" :class="{active: selected == item.id}" v-for="(item, index) of offices" :key="index" @click="setActive(item.id)">
            <div class="sections-tab-tit">
                <div>{{item.name}}</div>
            </div>
            <div class="sections-tab-content">
                {{item.keywords}}
            </div>
        </div>
        

		<div class="next-btn">
			<van-button size="large" color="#00c792" round @click="next"
				>下一步</van-button
			>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
            selected: 7,
            recommendOffice: {
                name: '消化内科',
                keywords: '反酸、腹泻、便秘、黄疸、腹痛、消化不良、脂肪肝、胰腺炎、肠炎、胃溃疡、胃癌、乙肝、胃镜',
                id: 7
            },
            offices: [
                {
                    name: '皮肤科',
                    keywords: '痣、痘痘、痤疮、湿疹、狐臭、瘙痒、脚气、脱发、灰指甲、皮肤过敏、毛孔粗大、毛囊炎',
                    id: 1
                },
                {
                    name: '儿科',
                    keywords: '小儿发烧、咳嗽、哮喘、流鼻涕、腹泻、黄疸、辅食、生长发育、疫苗接种、儿童用药、幼儿急疹',
                    id: 2
                },
                {
                    name: '妇科',
                    keywords: '月经不调、阴道炎、白带异常、宫颈癌、阴道出血、多囊卵巢综合征、盆腔炎、子宫内膜息肉、子宫肌瘤、宫颈炎、宫颈糜烂',
                    id: 3
                },
                {
                    name: '产科',
                    keywords: '孕检报告、早期妊娠反应、早期出血、孕期用药安全、宫外孕、先兆流产、胎停、胎儿胎位、孕期高血压、孕期糖尿病',
                    id: 4
                },
                {
                    name: '泌尿外科',
                    keywords: '尿频、尿血、尿分叉、包皮过长、睾丸疼痛、前列腺炎、前列腺增生、阳痿、早泄、龟头炎、男科问题',
                    id: 14
                },
                {
                    name: '骨科',
                    keywords: '骨折、颈肩痛、腰腿痛、骨质疏松、椎间盘突出、腰肌劳损、运动损伤、股骨头坏死、扁平足、颈椎病',
                    id: 6
                },
            ]
        };
	},
	methods: {
        next() {
            this.$router.push({path:'/emgcall/order',query:{
                officeid: this.selected,
                patientid: this.$route.query.patientid,
                userid: this.$store.state.userInfo.user_id
            }})
        },
        setActive(id){
            this.selected = id
        }
    },
    mounted(){
        window.scrollTo(0, 0)
    }
};
</script>

<style scoped>

#sections .sections-tab .sections-tab-tit > span {
    padding: 2px;
    color: #999;
    font-size: 12px;
    line-height: 14px;
    background-color: #f5f5f5;
    border-radius: 2px;
}

#sections .sections-tab .sections-tab-tit > div {
    padding: 20px 0;
    font-weight: 500;
    font-size: 17px;
    line-height: 19px;

}

#sections .sections-tab .sections-tab-content {
    padding-bottom: 20px;
    padding-left: 30px;
    color: #666;
    font-weight: 300;
    font-size: 13px;
    line-height: 1.5;
}

#sections .sections-tab .sections-tab-tit {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
}

#sections .sections-tab.active .sections-tab-tit {
    color: #00c792;
}

#sections .sections-tab.active .sections-tab-tit::before {
    content: '\F0C8';
    position: absolute;
    left: 0;
    top: 20px;
    font: normal normal normal 20px/1 'vant-icon';
}

#sections .sections-tab {
    margin: 0 16px;
    position: relative;

}


#sections {
	color: #333;
	min-height: 100vh;
	padding-bottom: 100px;
}
#sections .sections-subtitle,
#sections .sections-header {
	padding: 20px 16px;
	font-weight: 500;

}
#sections .sections-header {
	font-size: 20px;
	line-height: 22px;
}
#sections .sections-subtitle {
    font-size: 18px;
    line-height: 20px;
}

#sections .next-btn {
    background-color: #fff;
	box-sizing: border-box;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 10px 16px;
}
</style>
