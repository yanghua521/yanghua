
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">
            <img class="log11" :src="zz" alt="1">
          </div>

          <div class="layout-nav">
            <MenuItem name="1">
            <div class="demo-avatar">
              <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
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
            <i class="iconfont icon-4">&#xe67e;</i>
            <i class="iconfont icon-6">&#xe8e9;</i>
            <i class="iconfont icon-5">&#xe872;</i>

          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{ background: ' rgb(42, 41, 91)' }">
          <Menu :theme="theme3" active-name="1">
            <MenuItem name="1">
            <Icon type="md-home" />
            首页
            </MenuItem>
            <MenuItem name="2">
            <Icon type="ios-flash" />
            电力监控
            </MenuItem>
            <MenuItem name="3">
            <Icon type="md-locate" />
            光伏区监控
            </MenuItem>
            <MenuItem name="4">
            <Icon type="ios-map" />
            设备分布图
            </MenuItem>
            <MenuItem name="5">
            <Icon type="md-warning" />
            故障告警
            </MenuItem>
            <MenuItem name="6">
            <Icon type="ios-desktop" />
            远程控制
            </MenuItem>
          </Menu>

        </Sider>
        <Layout :style="{ padding: '0 24px 24px' }">
          <Breadcrumb :style="{ margin: '24px 0' }">

          </Breadcrumb>
          <Content :style="{ padding: '24px', minHeight: '280px', background: '#fff' }">
            <Tabs>
              <TabPane label="运行监控" icon="md-pulse">
                <div class="grid-layout">
                  <el-row :gutter="20">
                    <el-col :xs="24" :sm="12" :md="8">

                      <el-card>
                        <div slot="header"><i class="iconfont icon-7">&#xe6ee;</i>发电与功率</div>
                        <ABCD></ABCD>
                      </el-card>

                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8">
                      <el-card>
                        <div slot="header"><i class="iconfont icon-8">&#xe6e0;</i>节能减排</div>
                        <div>
                          <BB></BB>
                        </div>
                      </el-card>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8">
                      <el-card>
                        <div slot="header"><i class="iconfont icon-9">&#xe600;</i>电站基本信息</div>
                        <div>
                          <CCC></CCC>
                        </div>
                      </el-card>
                    </el-col>
                  </el-row>
                  <el-row :gutter="20">
                    <el-col :xs="24" :sm="12">
                      <el-card>
                        <div slot="header"><i class="iconfont icon-10">&#xe6d0;</i>日功率-辐射强度</div>
                        <DDD></DDD>
                      </el-card>
                    </el-col>
                    <el-col :xs="24" :sm="12">
                      <el-card>
                        <div slot="header"><i class="iconfont icon-11">&#xe647;</i>日累计发电量</div>
                        <div>
                          <EEE></EEE>
                        </div>
                      </el-card>
                    </el-col>
                  </el-row>
                </div>


              </TabPane>
              <TabPane label="生产管理" icon="ios-photos">标签二的内容</TabPane>
              <TabPane label="电站维护" icon="logo-reddit"><FFFF></FFFF></TabPane>
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
import EEE from './EEE.vue'
import DDD from './DDD.vue'
import BB from './BB.vue'
import CCC from './CCC.vue'
import FFFF from './FFFF.vue'
export default {

  components: {
    ABCD,
    EEE,
    DDD,
    BB,
    CCC,
    FFFF
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
<style>
.icon-7 {
  position: absolute;
  top: 21px;
  left: 10px;
  font-size: 22px !important;
}

.icon-8 {
  position: absolute;
  top: 22px;
  left: 466px;
  font-size: 18px !important;
}

.icon-9 {
  position: absolute;
  top: 24px;
  left: 918px;
  font-size: 16px !important;
}

.icon-10 {
  position: absolute;
  top: 24px;
  left: 11px;
  font-size: 18px !important;
}

.icon-11 {
  position: absolute;
  top: 24px;
  left: 692px;
  font-size: 18px !important;
}

.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
  color: #2d8cf0;
  background: rgb(42, 41, 91) !important;
  z-index: 2;
}

.ivu-menu.ivu-menu-light.ivu-menu-vertical {
  width: 200px !important;
  background-color: rgb(42, 41, 91) !important;
}

.ivu-breadcrumb {
  margin: -6px 0px !important;
}

.ivu-layout {
  background-color:rgb(91, 91, 140) !important;
}
.ivu-layout-content{
  background-color:rgb(91, 91, 140) !important;
}
.layout {
  border: 1px solid #cdfaf6;
  background: rgb(42, 41, 91) !important;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.ivu-layout-header {
  background: rgb(42, 41, 91) !important;
  padding: 0 50px;
  height: 64px;
  line-height: 64px;
}

.layout-logo {
  width: 100px;
  height: 30px;
  background: rgb(42, 41, 91) !important;
  border-radius: 3px;
  float: left;
  position: relative;
  top: -1px;
  left: -30px;
}

.layout-nav {
  width: 449px;
  margin: 0 auto;
  margin-right: -301px;
}

.container {
  display: flex;
  flex-wrap: wrap;
}

.box {
  width: 30%;
  /* 每个盒子的宽度 */
  /* border: 1px solid red; */
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

.log11 {

  position: absolute;
  top: 0px;
  left: -21px;
  border-radius: 5px 2px;
  width: 201px;
  height: 65px;
  border-style: none;
}

.ivu-menu-dark {
  background: rgb(42, 41, 91) !important;
}

.ivu-menu-horizontal {
  position: absolute;
  height: 64px;
  line-height: 63px;
  width: 1442px;
}

.ivu-menu-vertical.ivu-menu-light:after {
  width: 0px !important;
}

.ivu-tabs {
  background-color: rgb(91, 91, 140);
}</style>