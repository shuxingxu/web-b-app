<template>
  <div class="container">
      <div class="bar bar-nav">
         <x-header>服务提醒</x-header>
      </div>
      <div class="content">
        <group>
          <datetime-range title="提醒日期" start-date="2017-01-01" end-date="2017-02-02" format="YYYY-MM-DD" v-model="value" @on-change="onChange"></datetime-range>
          <cell title="关联服务项目" value="hello" is-link></cell>
          <div class="textinfo">
            <h2 class="text-default f14">注意事项：</h2>
            <p>您好：</p>
            <p>您好</p>
            <p>您好</p>
            <p>您好</p>
          </div>
          <cell title="人员安排" value="选择客户联系人" is-link></cell>
        </group>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ['2017-01-15', '03', '05']
    };
  },
  methods: {
    onChange(value){
      this.value = value;
    }
  }
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .textinfo{
    line-height: .5rem;
    padding: .1rem .32rem;
  }
  .textinfo p{
    font-size: .24rem;
    color: #666;
  }
</style>
