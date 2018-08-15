<template>
  <div class="container">
      <div class="bar bar-footer">
         <footer-bar></footer-bar>
      </div>
      <div class="content">
        <div class="searchCenter">
          <i class="iconfont">o</i>
          <div class="orderinput">
            <input type="text" v-model="key" placeholder="输入单号或直接扫描二维码" />

            <i class="iconfont">o</i>
          </div>
        </div>
        <box gap="10px 10px">
          <x-button :disabled="key === ''" style="margin-top: 1.24rem" @click.native="haldleClick">查询</x-button>
        </box>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      key: "a"
    };
  },
  methods: {
    haldleClick(e){
      // console.log(this.key)
      this.$router.push({name: 'createOrder', params: {orderId: this.key}})
    }
  }
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.searchCenter{
  display: flex;
  justify-content: center;
  padding-top:4rem;
}
.orderinput {
  border: none;
  border-bottom: 0.02rem solid #e8e8e8;
  width: 4.4rem;
  height: 0.76rem;
  line-height: 0.76rem;
  font-size: 0.26rem;
  color: #c2c2c2;
  display: flex;
  justify-content: space-between;
}
.orderinput input {
  width: 80%;
  outline: none;
}
input::-webkit-input-placeholder {
  color: #c2c2c2;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #c2c2c2;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #c2c2c2;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #c2c2c2;
}
.search-btn{
  
}
</style>
