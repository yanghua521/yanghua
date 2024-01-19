<template>
  <div class="card">
    <div class="wrapper">
      <i class="iconfont icon-12">&#xe637;</i>
      <div class="color black">
        二氧化碳
        <span class="hex">8.45万吨</span>
      </div>
      <i class="iconfont icon-13">&#xe89f;</i>
      <div class="color eerie-black">
        汽车里程
        <span class="hex">7.37km</span>
      </div>
      <i class="iconfont icon-14">&#xe606;</i>
      <div class="color chinese-black">
        等效植树
        <span class="hex">431.79万棵</span>
      </div>
      <i class="iconfont icon-15">&#xe6ad;</i>
      <div class="color night-rider">
        二氧化硫
        <span class="hex">2542.91吨</span>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style>
.icon-12 {
  display: flex;
  justify-content: space-between;
  height: 1px;
  margin-left: -17px;
  font-size: 43px !important;
  color: rgb(239, 134, 49) !important;
  
}

.icon-13 {
  display: flex;
  justify-content: space-between;
  height: 1px;
  margin-left: -14px;
  font-size: 34px !important;
  color: rgb(0, 191, 255) !important;
}
.icon-14{
  display: flex;
  justify-content: space-between;
  height: 1px;
  margin-left: -14px;
  font-size: 45px !important;
  color: rgb(4, 255, 0) !important;
}
.icon-15{
  display: flex;
  justify-content: space-between;
  height: 1px;
  margin-left: -14px;
  font-size: 40px !important;
  color: rgb(255, 213, 0) !important;
}
.card {
  width: 100%;
  height: 277px;
  /* margin: 0 auto; */
  Background-color: rgb(42, 41, 91);
  font-family: Helvetica, sans-serif;
  margin-left: 30px;

}

.wrapper {
  margin: 2rem auto;
  margin-top: 5px;
  font-size: small;
}

.title {
  text-align: center;
  color: #1b1b1b;
}

.heading {
  font-weight: bold;
  letter-spacing: 7px;
  font-size: 1.5rem;
  position: relative;
  margin-bottom: 6px;
}

.heading::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #e8e8e8;
  z-index: -1;
  filter: blur(50px);
  height: 50px;
}

.color {
  padding: 17px 47px;
  left: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.hex {
  font-size: 23px;
  text-align: end;
  font-family: monospace;
  text-transform: uppercase;
}

.black {
  font-weight: bold;
  font-size: large;
  color: #ffffff;
  background: rgb(42, 41, 91);

}

.eerie-black {
  font-weight: bold;
  font-size: large;
  color: #ffffff;
  background: rgb(42, 41, 91);
}

.chinese-black {
  font-weight: bold;
  font-size: large;
  color: #ffffff;
  background: rgb(42, 41, 91);
}

.night-rider {
  font-weight: bold;
  font-size: large;
  color: #ffffff;
  background: rgb(42, 41, 91);
}

.chinese-white {
  font-weight: bold;
  font-size: large;
  color: #ffffff;
  background: rgb(42, 41, 91);
}

.anti-flash-white {
  font-weight: bold;
  font-size: large;
  color: #ffffff;
  background: rgb(42, 41, 91);
}

.white {
  background: var(--white);
  color: var(--night-rider);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.border {
  color: var(--night-rider);
  padding: 10px 10px;
  text-align: center;
}

.border span {
  border-radius: 5px;
  color: var(--ch-white);
  padding: 2px 4px;
  background-color: var(--night-rider);
}
</style>