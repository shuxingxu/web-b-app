<template>
  <div class="container">
    <!--  <div class="bar bar-nav">
      <x-header>首页</x-header>
    </div> -->
    <div class="bar bar-footer">
      <footer-bar></footer-bar>
    </div>
    <div class="content">
      <div class="headBar">
        <div class="searchBar vux-1px-b">
          <i slot="icon" class="iconfont f14 icon-dingdan"></i>
          <span class="f12">电话号话搜索订单</span>
        </div>
        <div class="navBar">
          <flexbox :gutter="0">
            <flexbox-item>
              <router-link to="/" tag="div" class="nav-link"><i class="iconfont f24 icon-dingdan"></i>
                <div class="nav-label">扫码收款</div>
              </router-link>
            </flexbox-item>
            <flexbox-item>
              <router-link to="/" tag="div" class="nav-link"><i class="iconfont f24 icon-dingdan"></i>
                <div class="nav-label">订单管理</div>
              </router-link>
            </flexbox-item>
            <flexbox-item>
              <router-link to="/statistics" tag="div" class="nav-link"><i class="iconfont f24 icon-dingdan"></i>
                <div class="nav-label">销售分析</div>
              </router-link>
            </flexbox-item>
            <flexbox-item>
              <router-link to="/bill" tag="div" class="nav-link"><i class="iconfont f24 icon-dingdan"></i>
                <div class="nav-label">我的账户</div>
              </router-link>
            </flexbox-item>
          </flexbox>
        </div>
        <div class="infoBar">
          <i class="iconfont f18 icon-dingdan text-purple"></i>
          <span class="f13">最新订单&nbsp;&nbsp;8800.00</span>
          <span class="f10 text-muted ml-md">05-19 13:12</span>
        </div>
      </div>
      <div class="count">
        <flexbox :gutter="0">
          <flexbox-item>
            <div class="count-item vux-1px-r">
              <div class="count-item-hd"><i class="iconfont f16 icon-dingdan text-orange"></i></div>
              <div class="count-item-bd">
                <div class="tit text-justify f14"><span>今日收入</span><span class="f12 text-info">11.5%</span></div>
                <div class="desc f12 text-muted">(订单10笔 | 总收入)</div>
                <countup :start-val="5000.00" :end-val="5000.00" :duration="0" :decimals="2" class="price text-orange f24"></countup>
              </div>
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="count-item vux-1px-r">
              <div class="count-item-hd"><i class="iconfont f16 icon-dingdan text-orange"></i></div>
              <div class="count-item-bd">
                <div class="tit text-justify f14"><span>今日预约</span><span class="f12 text-info">20%</span></div>
                <div class="desc f12 text-muted">(订单10笔 | 总收入)</div>
                <countup :end-val="3210.00" :duration="0" :decimals="2" class="price text-orange f24"></countup>
              </div>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
      <swiper :list="banner" :aspect-ratio="216/750" dots-position="center" :show-desc-mask="false"></swiper>
      <div class="main-tabs">
        <tab :line-width=2 v-model="tabIndex" custom-bar-width="32px">
          <tab-item class="vux-center" @on-item-click="creatEarnestDate">定金</tab-item>
          <tab-item class="vux-center" @on-item-click="creatMakeData">预约</tab-item>
          <tab-item class="vux-center" @on-item-click="creatAskData">问答</tab-item>
          <tab-item class="vux-center" @on-item-click="creatMsgData">消息<span class="msg-dot"></span></tab-item>
        </tab>
        <div class="main-content">
          <div class="earnest-box" v-show="0 === tabIndex">
            <p class="p-lg text-center text-muted" v-show="!earnestData">暂无定金数据</p>
            <div class="tab-item" v-for="(item, index) in earnestData" :key="index">
              <div class="tab-item-hd">
                <div class="w90 text-hide mr20">
                  <i class="iconfont f18 icon-dingdan text-muted"></i><span class="text-info">{{item.name}}</span>
                </div>
                <div class="tab-item-hd-body">
                  <div class="text-justify">
                    <div class="text-info"><i class="iconfont f18 icon-dingdan"></i>&nbsp;&nbsp;&nbsp;&nbsp;<a class="iconfont f18 icon-dingdan text-info" :href="'tel:'+item.phone"></a></div>
                    <div class="text-muted">{{item.date}}</div>
                  </div>
                </div>
              </div>
              <div class="media">
                <div class="media-head w90 mr20">
                  <img :src="item.cover" width="100%">
                </div>
                <div class="media-body">
                  <div class="title-box">
                    <div class="tit text-hide tow-line">{{item.title}}</div>
                    <div class="price f14">¥ {{item.price}}</div>
                  </div>
                  <div class="order-box text-right">
                    <div class="deposit-text vux-1px-b">
                      <span class="f14 text-info">实付定金：</span><span class="text-orange">¥ {{item.deposit}}</span>
                    </div>
                    <div class="home-label-group">
                      <x-button mini plain type="danger" :link='item.id'>修改订单</x-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="make-box" v-show="1 === tabIndex">
            <p class="p-lg text-center text-muted" v-show="!makeData">暂无预约数据</p>
            <div class="tab-item" v-for="(item, index) in makeData" :key="index">
              <div class="tab-item-hd">
                <div class="w90 text-hide mr20">
                  <i class="iconfont f18 icon-dingdan text-muted"></i><span class="text-info">{{item.name}}</span>
                </div>
                <div class="tab-item-hd-body">
                  <div class="text-justify">
                    <div class="text-info"><i class="iconfont f18 icon-dingdan"></i>&nbsp;&nbsp;&nbsp;&nbsp;<a class="iconfont f18 icon-dingdan text-info" :href="'tel:'+item.phone"></a></div>
                    <div class="text-muted">{{item.date}}</div>
                  </div>
                </div>
              </div>
              <div class="media">
                <div class="media-head w90 mr20">
                  <img :src="item.cover" width="100%">
                </div>
                <div class="media-body">
                  <div class="title-box">
                    <div class="tit text-hide tow-line">{{item.title}}</div>
                    <div class="price f14">¥ {{item.price}}</div>
                  </div>
                  <div class="order-box text-right">
                    <div class="date-text vux-1px-b ">
                      <p><i class="iconfont f14 icon-dingdan text-muted"></i> {{item.makeDate}}</p>
                      <p>意向：预约到店</p>
                    </div>
                    <div class="home-label-group">
                      <x-button mini plain>取消预约</x-button>
                      <x-button mini plain>查看档期</x-button>
                      <x-button mini plain type="danger" :link="item.id">修改订单</x-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ask-box" v-show="2 === tabIndex">
            <div class="sub-tit text-justify">
              <span>热门问答</span>
              <i class="iconfont icon-right text-muted"></i>
            </div>
            <p class="p-lg text-center text-muted" v-show="!askData">暂无问答数据</p>
            <div class="ask-panel media" v-for="(item, index) in askData" :key="index">
              <div class="media-body">
                <div class="ask-tit text-hide tow-line">{{item.title}}</div>
                <div class="ask-desc text-hide f14 text-info">{{item.content}}</div>
                <div class="ask-info">
                  <div class="icon-tips-number w60">
                    <i class="icon-xiaoxi iconfont text-info f18"></i>
                    <span class="number f12">{{item.replyNumber}}</span>
                  </div>
                  <div class="icon-tips-number w60">
                    <i class="icon-eye iconfont text-info f16"></i>
                    <span class="number f12">{{item.readNumber}}</span>
                  </div>
                </div>
              </div>
              <div class="media-head"><img :src="item.cover" alt="" class="ask-cover"></div>
            </div>
          </div>
          <div class="msg-box" v-show="3 === tabIndex">
            <p class="p-lg text-center text-muted" v-show="!msgData">暂无问答数据</p>
            <div class="msg-panel media" v-for="(item, index) in msgData" :key="index">
              <div class="media-head"><img :src="item.cover" alt="" class="msg-head"></div>
              <div class="media-body">
                <div class="msg-tit text-hide">{{item.userName}}</div>
                <div class="msg-desc f11 text-info text-hide tow-line">{{item.content}}</div>
                <div class="msg-date f12 text-muted">{{item.date}}&nbsp;&nbsp;&nbsp;{{item.time}}</div>
              </div>
              <div class="media-link align-self-center">
                <i class="iconfont icon-right text-muted f20"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div v-transfer-dom>
        <loading :show="loading" text="加载中..."></loading>
      </div> -->
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from 'vux'
export default {
  data() {
    return {
      banner: [{
        url: 'javascript:',
        img: './static/img/banner.png',
      }, {
        url: 'javascript:',
        img: './static/img/banner.png',
      }, {
        url: 'javascript:',
        img: './static/img/banner.png',
      }],
      loading: true,
      tabIndex: 0,
      earnestData: '',
      makeData: '',
      askData: '',
      msgData: ''
    }
  },
  created() {
    this.creatEarnestDate()
  },
  methods: {
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
    },
    creatMakeData() {
      if (!this.makeData) {
        this.$http.get('https://www.easy-mock.com/mock/5b45b8449ff0fa1bcdff197f/wedding/make')
          .then((res) => {
            this.makeData = res.data.data
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    creatAskData() {
      if (!this.askData) {
        this.$http.get('https://www.easy-mock.com/mock/5b45b8449ff0fa1bcdff197f/wedding/ask')
          .then((res) => {
            this.askData = res.data.data
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    creatMsgData() {
      if (!this.msgData) {
        this.$http.get('https://www.easy-mock.com/mock/5b45b8449ff0fa1bcdff197f/wedding/msg')
          .then((res) => {
            this.msgData = res.data.data
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}

</script>
<style lang="less" rel="stylesheet/less" scoped>
@purple: #772ADD;
@white: #fff;
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

.w90 {
  width: 1.8rem;
}

.w60 {
  width: 1.2rem;
}

.mr20 {
  margin-right: 0.4rem
}

.mr15 {
  margin-right: 0.3rem;
}

.searchBar {
  color: @white;
  height: 0.62rem;
  line-height: 0.62rem;
  margin: 0 0.4rem;
  opacity: .2;
  overflow: hidden;
}

.headBar {
  background: @purple ;
}

.infoBar {
  background: @white;
  margin: 0 0.16rem;
  height: 0.9rem;
  line-height: 0.9rem;
  padding-left: 0.2rem;
  background: linear-gradient(180deg, #FFFFFF, #F4F4F4);
}

.navBar {
  height: 1.8rem;
  overflow: hidden;
  .nav-link {
    text-align: center;
    color: @white;
    padding-top: 0.3rem;
    .nav-label {
      font-size: 0.24rem;
    }
  }
}

.count-item {
  .flexbox;
  margin: 0.4rem 0;
  padding: 0 0.38rem;
  .count-item-hd {
    width: 0.6rem;
    .iconfont {
      vertical-align: top;
    }
  }
  .count-item-bd {
    .flexitem;
    min-width: 0;
    .tit {}
  }
}

.tab-item {
  padding: 0 .4rem;
}

.tab-item-hd {
  .flexbox;
  padding: .2rem 0;
}

.tab-item-hd-body {
  .flexitem;
}

.title-box {
  .flexbox;
  margin-top: -0.08rem;
  min-height: 1rem;
  .tit {
    .flexitem;
    line-height: 1.4;
  }
  .price {
    margin-left: 0.6rem;
  }
}

.deposit-text {
  padding: 0.3rem 0 0.12rem;
  margin-bottom: 0.16rem;
}

.date-text {
  color: #666;
  font-size: 0.28rem;
  text-align: left;
  line-height: 1.4;
  margin-top: 0.12rem;
  padding-bottom: 0.12rem;
  margin-bottom: 0.12rem;
}

.deposit-text.vux-1px-b:after,
.date-text.vux-1px-b:after {
  border-color: #F6F6F6;
  color: #F6F6F6;
}

.main-tabs {
  border-top: 3px solid #F6F6F6;
}

.main-tabs .tab-item {
  padding-bottom: 0.4rem;
  border-bottom: 2px solid #E8E8E8;
}

.main-tabs .tab-item:last-child {
  border: none;
}







/*问答*/

.ask-box {
  .sub-tit {
    margin: 0 .4rem -.4rem;
  }
  .ask-panel {
    height: 2.08rem;
    overflow: hidden;
    border-bottom: 2px solid #E8E8E8;
    padding: 0.54rem 0.4rem;
    .media-head {
      margin: 0 0 0 0.28rem;
      .ask-cover {
        width: 2.08rem;
        border-radius: 0.08rem;
        overflow: hidden;
      }
    }
    .media-body {
      .ask-tit {
        margin-top: -0.08rem;
        line-height: 1.4;
        min-height: 0.92rem;
      }
      .ask-desc {
        margin: .18rem 0;
      }
    }
    &:last-child {
      border: none;
    }
  }
}


/*消息*/

.msg-box {
  .sub-tit {
    margin: 0 .4rem;
  }
  .msg-panel {
    border-bottom: 1px solid #E8E8E8;
    padding: 0.24rem 0.4rem;
    .media-head {
      .msg-head {
        width: 1.24rem;
        border-radius: 50%;
        overflow: hidden;
      }
    }
    .media-body {
      .msg-tit {
        margin-top: -0.08rem;
      }
      .msg-desc {
        margin: .18rem 0;
      }
    }
    &:last-child {
      border: none;
    }
  }
}

.msg-dot {
  position: absolute;
  width: 0.1rem;
  height: 0.1rem;
  margin-top: 0.16rem;
  margin-left: -0.1rem;
  border-radius: 100%;
  background-color: @purple;
}

</style>
<style>
.home-label-group {
  font-size: 0;
}

.home-label-group .weui-btn.weui-btn_mini {
  padding: 0 .1rem !important;
  font-size: 0.22rem !important;
}

.home-label-group .weui-btn.weui-btn_mini+.weui-btn.weui-btn_mini {
  margin-top: 0;
  margin-left: 0.16rem!important;
  margin-right: 0!important;
}

</style>
