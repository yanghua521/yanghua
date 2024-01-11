<style>
.layout {
  border: 1px solid #cdfaf6;
  background: #728f9e;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: -1px;
  left: -30px;
}

.layout-nav {
  width: 400px;
  margin: 0 auto;
  margin-right: 20px;
}

.container {
  display: flex;
  flex-wrap: wrap;
}

.box {
  width: 30%;
  /* 每个盒子的宽度 */
  border: 1px solid red;
  /* 边框颜色 */
}

/* 第一排三个等大的盒子 */
.box:nth-child(1),
.box:nth-child(2),
.box:nth-child(3) {
  width: 30%;
  /* 每个盒子的宽度 */
}

/* 第二排两个等大的盒子 */
.box:nth-child(4),
.box:nth-child(5) {
  width: 45%;
  /* 每个盒子的宽度 */
}
</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">
            <img :src="zz" alt="1">
          </div>

          <div class="layout-nav">
            <MenuItem name="1">
            <div class="demo-avatar">
              <Avatar src="https://tse1-mm.cn.bing.net/th/id/OIP-C.iLNZXgBICy5lg5fb5vjZyAHaE7?rs=1&pid=ImgDetMain" />
            </div>
            </MenuItem>
            <MenuItem name="2">
            <Icon type="logo-octocat" />
            无语子
            </MenuItem>
            <MenuItem name="3">
            <div>
              <p style="float: left;"> {{ time }} | {{ date }}</p>

            </div>
            </MenuItem>

          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{ background: '#fff' }">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="md-home" />
                首页
              </template>

            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-flash" />
                电力监控
              </template>

            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="md-locate" />
                光伏区监控
              </template>

            </Submenu>
            <Submenu name="4">
              <template slot="title">
                <Icon type="ios-map" />
                设备分布图
              </template>

            </Submenu>
            <Submenu name="5">
              <template slot="title">
                <Icon type="md-warning" />
                故障告警
              </template>

            </Submenu>
            <Submenu name="6">
              <template slot="title">
                <Icon type="ios-desktop" />
                远程控制
              </template>

            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{ padding: '0 24px 24px' }">
          <Breadcrumb :style="{ margin: '24px 0' }">

          </Breadcrumb>
          <Content :style="{ padding: '24px', minHeight: '280px', background: '#fff' }">
            <Tabs>
              <TabPane label="运行监控" icon="md-pulse">
                <div class="container">
                  <div class="box red">
                    <ABCD></ABCD>
                  </div>
                  <div class="box red">
                      <DD></DD>
                  </div>
                  <div class="box red">
                    <CCC></CCC>
                  </div>
                  <div class="box red">
                    <WWW></WWW>
                  </div>
                  <div class="box red">
                    <YYDS></YYDS>
                  </div>
                </div>
              </TabPane>
              <TabPane label="生产管理" icon="ios-photos">标签二的内容</TabPane>
              <TabPane label="电站维护" icon="logo-reddit">标签三的内容</TabPane>
              <TabPane label="系统管理" icon="md-options">标签三的内容</TabPane>
            </Tabs>

          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import zz from '@/assets/zz.png'
import ABCD from './ABCD.vue'
import YYDS from './YYDS.vue'
import WWW from './WWW.vue'
import DD from './DD.vue'
import CCC from './CCC.vue'
export default {

  components: {
    ABCD,
    YYDS,
    WWW,
    DD,
    CCC



  }, data() {
    return {
      time: '',
      date: '',
      zz: zz
    };
  },
  mounted() {
    this.updateTime(); // 首次加载时立即更新时间
    setInterval(this.updateTime, 1000); // 每秒钟更新一次时间
  },
  methods: {
    updateTime() {
      const now = new Date();
      this.time = now.toLocaleTimeString(); // 更新时间
      this.date = now.toLocaleDateString(); // 更新日期
    }
  }
};

</script>
