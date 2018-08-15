<template>
  <div class="container">
    <div class="bar bar-nav">
        <x-header>服务项目</x-header>
    </div>
    <div class="bar bar-footer">
        <footer-bar></footer-bar>
    </div>
    <div class="content">
      <p class="greyTitle">本套餐服务标准</p>
      <div v-for="(item, idx) in standard" :key="'standard' + idx" class="itemList" @click="checkHandle(idx)">
        <i :class="['checkbox', {act: item.checked, cancel: !item.checked && item.systemCheck}]"></i>{{item.content}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      standard: [
        {
          content: '1.确定拍摄时间',
          checked: true
        },
        {
          content: '2.到点签合同',
          checked: true
        },
        {
          content: '3.上传合同及相关票据',
          checked: false
        },
        {
          content: '4.预约拍摄时间及地点',
          checked: false
        }
      ]

    };
  },
  methods: {
    checkHandle(idx){
      let obj = {...this.standard[idx]};
      obj['checked'] = !obj['checked'];
      this.standard.splice(idx, 1, obj);
    }
  },
  mounted() {}
};
</script>
<style lang="less" rel="stylesheet/less" scoped>

.greyTitle{
  height: 0.9rem;
  background: #f7f7f7;
  line-height: 0.9rem;
  color: #333;
  font-size: .32rem;
  padding: 0 .38rem;
}
.itemList{
  height: 1.12rem;
  line-height: 1.12rem;
  color: #333;
  font-size: .32rem;
  padding: 0 .32rem;
}
.itemList i{
  display: inline-block;
  width: 0.28rem;
  height: 0.28rem;
  border: .02rem solid #999;
  border-radius: 50%;
  vertical-align: middle;
  margin-top: -.06rem;
  margin-right: .1rem;
}
.itemList i.act{
  border-color: #7224d8;
  background: #7224d8;
}
.itemList i.cancel{
  border-color: #666;
  background: #666;
}
</style>