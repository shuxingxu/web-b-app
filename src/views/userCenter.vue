<template>
  <div class="container">
    <div class="bar bar-footer">
      <footer-bar></footer-bar>
    </div>
    <div class="content">
      <div class="user-head-box">
        <i class="iconfont icon-dingdan f20 setup-icon"></i>
        <div class="media user-head">
          <div class="media-head"><img src="static/img/pic2.png" alt="" class="user-head-img"></div>
          <div class="media-body align-self-center">婚纱旗舰店 <i class="iconfont icon-dingdan f20"></i></div>
        </div>
      </div>
      <div class="user-content">
        <div class="user-nav-box">
          <div class="user-nav-item">
            <div class="nav-icon"><i class="iconfont icon-dingdan f20"></i></div>
            <div class="nav-label">套餐管理</div>
          </div>
          <div class="user-nav-item">
            <div class="nav-icon"><i class="iconfont icon-dingdan f20"></i></div>
            <div class="nav-label">活动管理</div>
          </div>
          <div class="user-nav-item">
            <div class="nav-icon"><i class="iconfont icon-dingdan f20"></i></div>
            <div class="nav-label">展会管理</div>
          </div>
        </div>
        <div class="user-title text-justify">
          <div class="f14"><i class="iconfont icon-dingdan f16 text-purple"></i> <span class="bold">收入统计</span></div>
          <div class="text-info f14">明细 <i class="iconfont icon-right f16"></i></div>
        </div>
        <div class="income-box">
          <p class="income-name f11 text-info">今日收入(元)</p>
          <p class="income-price"><countup :end-val="14748.25" :duration="1" :decimals="2" class="f24 text-orange bold"></countup></p>
          <div class="income-items">
            <div class="income-item">
              <div class="tit f11 text-info">本周收益(元)</div>
              <div class="price f15 bold"><number-comma :number="4399.12"></number-comma></div>
            </div>
            <div class="income-item vux-1px-l vux-1px-r">
              <div class="tit f11 text-info">本月收益(元)</div>
              <div class="price f15 bold"><number-comma :number="8905.15"></number-comma></div>
            </div>
            <div class="income-item">
              <div class="tit f11 text-info">总收益(元)</div>
              <div class="price f15 bold"><number-comma :number="35645.20"></number-comma></div>
            </div>
          </div>
        </div>
        <div class="user-title">
          <div class="f14"><i class="iconfont icon-dingdan f16 text-orange"></i> <span class="bold">定金统计</span></div>
        </div>
        <div class="custom-tabs-a">
          <tab :line-width="1" custom-bar-width="1rem">
            <tab-item selected>今日定金</tab-item>
            <tab-item>本周定金</tab-item>
            <tab-item>本月定金</tab-item>
          </tab>
          <div class="user-tab-content">
             <div class="user-count-hd">
               <p class="f12 text-muted text-justify"><span>2018-5-3</span><span>订单 : 10笔</span></p>
               <p class="text-justify" style="padding: .18rem 0;"><span class="bold">定金实际收入</span><number-comma :number="4302.64"  class="text-orange"></number-comma></p>
               <p class="f14 text-info  text-justify"><span>定金预计收入</span><number-comma :number="85300.15"></number-comma></p>
             </div>
             <div class="user-count-tit vux-1px-b">
               <span class="bold f14">定金收益明细</span>
             </div>
             <div class="user-count-item vux-1px-b">
               <p class="tit text-justify"><span>玉兰一字肩婚纱</span><span>880</span></p>
               <p class="date">2018-5-3 16:25</p>
               <p class="id">ID:65421</p>
             </div>
             <div class="user-count-item vux-1px-b">
               <p class="tit text-justify"><span>玉兰一字肩婚纱</span><span>880</span></p>
               <p class="date">2018-5-3 16:25</p>
               <p class="id">ID:65421</p>
             </div>
             <div class="user-count-item vux-1px-b">
               <p class="tit text-justify"><span>玉兰一字肩婚纱</span><span>880</span></p>
               <p class="date">2018-5-3 16:25</p>
               <p class="id">ID:65421</p>
             </div>
             <div class="user-count-item vux-1px-b">
               <p class="tit text-justify"><span>玉兰一字肩婚纱</span><span>880</span></p>
               <p class="date">2018-5-3 16:25</p>
               <p class="id">ID:65421</p>
             </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import { numberComma, numberPad, numberRandom } from 'vux'
export default {
  data() {
    return {
      earnestData:""
    }
  },
  created(){
    this.creatEarnestDate();
     
  },
  methods:{
     creatEarnestDate() {
      if (!this.earnestData) {
        this.$http.get('https://www.easy-mock.com/mock/5b45b8449ff0fa1bcdff197f/wedding/earnest')
          .then((res) => {
            this.earnestData = res.data.data;
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }
}

</script>
<style lang="less" rel="stylesheet/less" scoped>
.flexbox {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}

.flexitem {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
.userPanel {
  border-radius: 2px;
  background: #fff;
  box-shadow: 0px 2px 2px 0px rgba(247, 247, 247, 0.5);
}

.content {
  background-color: rgba(248, 248, 248, 1);
}

.user-head-box {
  height: 3.4rem;
  /*background: linear-gradient(131.1deg, rgba(150, 76, 246, 1), rgba(114, 36, 216, 1));*/
  background: url('../assets/img/user_bg.png');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 100% auto;
  color: #fff;
  font-size: 0.36rem;
  position: relative;
  .setup-icon {
    position: absolute;
    top: 0.2rem;
    right: 0.4rem;
  }
  .user-head {
    padding: 0.8rem 0 0 0.4rem;
  }
  .user-head-img {
    width: 1.16rem;
    border-radius: 50%;
    overflow: hidden;
  }
}

.user-content {
  position: absolute;
  margin-top: -0.4rem;
  left: 0.4rem;
  right: 0.4rem;
}

.user-nav-box {
  .flexbox;
  .userPanel;
  height: 1.64rem;
  .user-nav-item {
    .flexitem;
    padding: 0 0.28rem;
    text-align: center;
    .nav-icon {
      padding-top: 0.3rem;
    }
    .nav-label {
      font-size: 0.24rem;
    }
    &:first-child {
      text-align: left;
      .nav-icon {
        padding-left: 0.27rem;
      }
    }
    &:last-child {
      text-align: right;
      .nav-icon {
        padding-right: 0.27rem;
      }
    }
  }
}

.user-title {
  padding: 0.4rem 0 0.24rem;
}

.income-box {
  .userPanel;
  height: 3.08rem;
  text-align: center;
  .income-name{
    padding: 0.3rem 0 0.1rem;
  }
  .income-price{
    padding-bottom: 0.34rem;
  }
  .income-items{
    .flexbox;
    .income-item{
      .flexitem;
    }
  }
}
.income-item.vux-1px-l:before{
  top:.15rem;
  bottom:.15rem;
  color: #F6F6F6;
  border-left: 1px solid #F6F6F6;
}
.income-item.vux-1px-r:after{
  border-right: 1px solid #F6F6F6;
  color: #F6F6F6;
  top:.15rem;
  bottom:.15rem;
}
.user-tab-content{
  .userPanel;
}
.user-count-tit{
  line-height: 1.16rem;
  padding: 0 0.4rem;
}
.user-tab-content .vux-1px-b:after{
  border-bottom: 1px solid #F6F6F6;
  color: #F6F6F6;
}
.user-count-hd{
  padding:0.4rem;
  border-bottom: 2px solid #F6F6F6;
}
.user-count-item{
  padding: 0.2rem 0.4rem;
  .tit{
    font-size: 0.28rem;
    font-weight: bold;
  }
  .date{
    padding: .08rem 0;
  }
  .date,.id{
    font-size: 0.24rem;
    color:#999;
  }
}
</style>
