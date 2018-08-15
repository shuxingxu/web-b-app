<template>
  <div class="container">
      <div class="bar bar-nav">
         <x-header>选择套餐</x-header>
      </div>
      <div class="bar bar-footer">
         <footer-bar></footer-bar>
      </div>
      <div class="content">
        <div class="goodslist">

          <Goodlist :data="goodslist"></Goodlist>
        </div>
      </div>
  </div>
</template>
<script>
import Goodlist from '@/components/goodsList'
export default {
  data() {
    return {
      act: -1,
      goodslist: [
        {
          imgUrl: '/static/images/1.jpg',
          title: '死啦地附近冻死了开发商的减肥啦开讲啦可适当减肥啦',
          price: '9800'
        },
        {
          imgUrl: '/static/images/1.jpg',
          title: '死啦地附近冻死了开发商的减肥啦开讲啦可适当减肥啦',
          price: '9800'
        },
        {
          imgUrl: '/static/images/1.jpg',
          title: '死啦地附近冻死了开发商的减肥啦开讲啦可适当减肥啦',
          price: '9800'
        }
      ]
    };
  },
  methods: {
    checkhandle(idx){
      this.act = idx;
    }
  },
  components: {Goodlist}
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
  width: 3rem;
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
