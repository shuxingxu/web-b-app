<template>
  <div class="footerBar">
    <router-link to="/" class="item" exact>
      <i class="iconfont f20 icon-shouye"></i>
      <p>首页</p>
    </router-link>
    <router-link to="/order" class="item">
      <i class="iconfont f20 icon-dingdan"></i>
      <p>电子订单</p>
    </router-link>
    <router-link to="/userCenter" class="item">
      <i class="iconfont f20 icon-icon_pc"></i>
      <p>个人中心</p>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}

</script>
<style lang="less" rel="stylesheet/less" scoped>
.footerBar {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  z-index: 500;
  width: 100%;
  background-color: #fff;
  position: relative;
  box-shadow: 0px -2px 4px 0px rgba(241, 241, 241, 0.5);
  .item {
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    height: 1rem;
    box-sizing: border-box;
    color: #999999;
    text-align: center;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    .iconfont {
      margin-top: .1rem;
      line-height: 1.2em;
    }
    p {
      font-size: 10px;
      color: #666
    }
  }
  .router-link-active {
    color: #772ADD;
  }
}

</style>
