<style>
.text-container {
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  padding: 10px;
}

.text {
  margin-left: 10px;
}

.center {
  display: flex;
  align-items: center;
  margin-top: 35px;
}

</style>
<template>
  <div style="height: 400px;">
    <div class="text-container">发电功率</div>

    <div class="p">累计发电</div>

    <div class="center">
      <Icon type="logo-octocat" /><Progress :percent="25" :stroke-width="20" text-inside />
    </div>
    <div>今日发电</div>
    <div class="center">
      <Icon type="logo-octocat" /><Progress :percent="65" :stroke-width="20" status="wrong" text-inside />
    </div>
    <div>当前功率</div>
    <div class="center">
      <Icon type="logo-octocat" /><Progress :percent="75" :stroke-width="20" text-inside color="#0000ff" />
    </div>
  </div>
</template>
<script>

export default {

}
</script>
