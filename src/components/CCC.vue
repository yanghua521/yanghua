<template>
    <div class="card1">
        <div class="text-container">电站基本信息</div>
        <div class="wrapper1">
            <div class="color1 black1">
                电站名称
                <span class="hex1">三十岗电站</span>
            </div>
            <div class="color1 eerie-black1">
                经度/纬度
                <span class="hex1">东经117 北纬23</span>
            </div>
            <div class="color1 chinese-black1">
                装机功率
                <span class="hex1">123.23kw</span>
            </div>
            <div class="color1 night-rider1">
                组件数量
                <span class="hex1">2000块</span>
            </div>
            <div class="color1 chinese-white1">
                电站类型
                <span class="hex1">分布式电站</span>
            </div>
            <div class="color1 anti-flash-white1">
                投运时间
                <span class="hex1">2018年5月10日</span>
            </div>
            <div class="color1 white1">
                生命周期
                <span class="hex1">25年</span>
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
  
<style lang="scss" >
.card1 {
    width: 465px;
    height: 400px;
    background-color: #cdfaf6;
    font-family: Helvetica, sans-serif;
}

.wrapper1 {
    margin: 2rem auto;

    font-size: small;
}

.title1 {
    text-align: center;
    color: #1b1b1b;
}

.heading1 {
    font-weight: bold;
    letter-spacing: 7px;
    font-size: 1.5rem;
    position: relative;
    margin-bottom: 6px;
}

.heading::before1 {
    content: '';
    position: absolute;
    inset: 0;
    background: #e8e8e8;
    z-index: -1;
    filter: blur(50px);
    height: 50px;
}

.color1 {
    padding: 9px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.hex1 {
    text-align: end;
    font-family: monospace;
    text-transform: uppercase;
}

.black1 {
    font-weight: bold;
    font-size: initial;
    color: #43A49B;
    background: #cdfaf6;
}

.eerie-black1 {
    font-weight: bold;
    font-size: large;
    color: #43A49B;
    background: #cdfaf6;
}

.chinese-black1 {
    font-weight: bold;
    font-size: large;
    color: #43A49B;
    background: #cdfaf6;
}

.night-rider1 {
    font-weight: bold;
    font-size: large;
    color: #43A49B;
    background: #cdfaf6;
}

.chinese-white1 {
    font-weight: bold;
    font-size: large;
    color: #43A49B;
    background: #cdfaf6;
}

.anti-flash-white1 {
    font-weight: bold;
    font-size: large;
    color: #43A49B;
    background: #cdfaf6;
}

.white1 {
    font-weight: bold;
    font-size: large;
    color: #43A49B;
    background: #cdfaf6;
}

.border1 {
    color: var(--night-rider);
    padding: 10px 10px;
    text-align: center;
}

.border1 span {
    border-radius: 5px;
    color: var(--ch-white);
    padding: 2px 4px;
    background-color: var(--night-rider);
}
</style>