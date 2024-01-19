<template>
    <div class="toal">
        <ul class="dz">
            <li>
                <p class="dz-p">电站名称</p>
                <span class="dz-span">三十岗电站</span>
            </li>
            <li>
                <p class="dz-p">经度/纬度</p>
                <span class="dz-span">东经117”北线23</span>
            </li>
            <li>
                <p class="dz-p">装机功率</p>
                <span class="dz-span">123.23KW</span>
            </li>
            <li>
                <p class="dz-p">组件致量</p>
                <span class="dz-span">2000块</span>
            </li>
            <li>
                <p class="dz-p">电站类型</p>
                <span class="dz-span">分布式电站</span>
            </li>
            <li>
                <p class="dz-p">投运时间</p>
                <span class="dz-span">2018年05月10日</span>
            </li>
            <li>
                <p class="dz-p">生命闲期</p>
                <span class="dz-span">25年</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {

}
</script>
<style>
* {
    color: #fff !important;
}
::marker {
    color: aqua !important;
}
.el-card {
    border-radius: 4px;
    border: 1px solid #EBEEF5;
    overflow: hidden;
    color: #303133;
    transition: .3s;
    background-color: rgb(42, 41, 91) !important;
}
/* .dz {
    color: rgb(19, 247, 249) !important;
} */

.dz li {
    width: 100%;
    height: 43px;
    float: left;
    margin-left: 10px;
}

.dz-p {
    float: left;
    color: white;

}

.dz-span {
    float: right;
    color: white;
    margin-right: 10px;
}
</style>