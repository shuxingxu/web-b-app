<template>
  <div>
    <div class="goodOne clearfix" v-for="(good, idx) in data" :key="'good' + idx" @click="checkhandle(idx)">
      <div :class="['checkbox', {act: act === idx}]"></div>
      <div class="goodImg" :style="'background-image:url('+ good.imgUrl +')'"></div>
      <div class="fr f16">
        <div class="goodname text-default">{{good.title}}</div>
        <div class="price">&yen;{{good.price}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      act: -1,
    };
  },
  props: ['data'],
  methods: {
    checkhandle(idx){
      this.act = idx;
    }
  }
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.goodOne{
  padding: 0 .32rem;
  position: relative;
}
.goodslist .goodOne .goodImg{
  margin-left: .5rem;
}
.goodOne .goodImg{
  width: 2.24rem;
  height: 1.76rem;
  float: left;
  background-size:cover;
  background-position: center;
  border-radius: .2rem;
}

.goodslist .goodOne .fr{
  width: 3.5rem;
}
.goodOne .fr{
  width: 4rem;
}
.goodOne .goodname{
  height: 1.4rem;
}
.goodOne .price{
  color: #fd792c;
  text-align: right;
}
.goodOne .checkbox{
  position: absolute;
  left: .32rem;
  top: .1rem;
  width: 0.28rem;
  height: 0.28rem;
  border-radius: 50%;
  border: .02rem solid #999;
}
.goodOne .checkbox.act{
  border-color: #7224d8;
  background: #7224d8;
}
</style>
