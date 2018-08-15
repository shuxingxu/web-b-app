<template>
  <div class="container">
      <div class="bar bar-nav">
         <x-header>创建订单</x-header>
      </div>
      <div class="bar bar-footer">
         <footer-bar></footer-bar>
      </div>
      <div class="content">
        <div class="userInfo f18">
          <i class="iconfont">o</i>
          <span class="text-default">夏河</span>
          <span class="text-info">18311111111</span>
        </div>
        <div class="itemsBox">
          <div @click="handelTagClick(idx)" v-for="(item, idx) in tagNams" :key="'name' + idx" :class="idx === action ? 'f20 text-default act' : 'f18 text-info'">
            {{item}}
          </div>
        </div>
        <div class="itemBox">
          <!-- 选套餐 -->
          <template v-if="action === 0">
            <div v-if="goodsList.length === 0" class="linkbox">
              <router-link :to="{ name: 'goodsList'}" class="checkGoodLink"><i class="iconfont">+</i>选择套餐</router-link>
            </div>
            <div v-if="goodsList.length !== 0">
              <div class="listbox">
                <Goodlist :data="goodsList"></Goodlist>
              </div>
              <div class="checkGoodLink" style="margin: .9rem auto .8rem" @click="action = 1">下一步</div>
            </div>
          </template>
          <!-- 选服务内容 -->
          <template v-if="action === 1">
            <p class="greyTitle">已选套餐</p>
            <div class="listbox">
              <Goodlist :data="goodsList"></Goodlist>
            </div>
            <p class="greyTitle">本套餐服务全程一共6条(婚博会标准10条)</p>
            <div v-for="(item, idx) in standard" :key="'standard' + idx" class="itemList" @click="checkHandle(idx)">
              <i :class="['checkbox', {act: item.checked, cancel: !item.checked && item.systemCheck}]"></i>{{item.content}}
            </div>
            <div class="checkGoodLink" style="margin: .9rem auto .8rem" @click="action = 2">下一步</div>
          </template>
          <!-- 支付方式 -->
          <template v-if="action === 2">
            <p class="greyTitle">已选套餐</p>
            <div class="listbox">
              <Goodlist :data="goodsList"></Goodlist>
            </div>
            <div class="amountBox">
              <div class="clearfix amountOne text-info f16">
                <div class="fl">浮动金额：</div>
                <div class="fr">&yen; +/-0.00</div>
              </div>
              <div class="clearfix amountOne text-info f16">
                <div class="fl">优惠券（满10000减去1000）</div>
                <div class="fr text-orange">&yen; -1000.00</div>
              </div>
              <div class="clearfix amountOne text-info f16">
                <div class="fl">APP下单优惠</div>
                <div class="fr text-orange">&yen; -1000.00</div>
              </div>
              <div class="clearfix amountOne text-default f">
                <div class="fl">应付金额：</div>
                <div class="fr text-orange">&yen; 8000.00</div>
              </div>
            </div>
            <p class="greyTitle">支付方式</p>
            <div class="tabbox">
              <div :class="['tabitem', {act: amountact === idx}]" v-for="(item, idx) in amountType" :key="'amount' + idx" @click="amountact = idx">
                <i class="iconfont"></i>{{item}}
              </div>
            </div>
            <div class="allpay clearfix" v-if="amountact === 0">
              <i class="iconfont fl">o</i>
              <div class="payinfo fr">
                <div class="clearfix">
                  <div class="fl text-default">一期款　　&yen;8800.00</div>
                  <div class="fr text-info">已收款（APP付款）</div>
                </div>
                <p class="text-muted">2018-05-30 15:00:00</p>
              </div>
            </div>
            <div class="paylist clearfix" v-if="amountact === 1">
              <div class="payOne" v-for="(pay, idx) in payList" :key="'pay' + idx">
                <div class="clearfix">
                  <div class="fl text-default">{{number_zh[idx]}}期款：</div>
                  <div class="fr text-origin" @click="focu = idx"><input v-model="pay.price" placeholder="请输入金额"/></div>
                </div>
                <div class="clearfix">
                  <div class="fl text-default">截止付款项：</div>
                  <div class="fr text-origin" :class="{'text-muted': !pay.endTypeId}">{{pay.endTypeId || '请选择截止付款的服务项目'}}</div>
                </div>
              </div>
            </div>
            <div class="addPayform" @click="addbtnHandleClick" v-if="payList.length < 10">
              + 添加付款期数
            </div>
            <div class="checkGoodLink" style="margin: .9rem auto .8rem" @click="action = 2">提交</div>
          </template>
        </div>
        <div class="orderMoreBtn">
          查看已有订单<i class="iconfont">></i>
        </div>
        <div class="orderList"  v-if="orderlist.length !== 0">
          <div class="orderOne borB" :key="'order' + idx" v-for="(order, idx) in orderlist">
            <div class="userInfo f18">
              <i class="iconfont">o</i>
              <span class="text-default">夏河</span>
              <div class="statu">
                {{status[order.status]}}
              </div>
            </div>
            <div class="orderDefault clearfix">
              <div class="orderImg" :style="'background-image: url('+ order.imgurl +')'"></div>
              <div class="defaultRight">
                <div class="titleLine clearfix text-default">
                  <div class="titlename fl">{{order.title}}</div>
                  <div class="div-price fr">&yen;{{order.price}}</div>                  
                </div>
                <div class="f14 text-info">{{order.createTime}}</div>
                <div class="f12 text-info borB">意向:{{order.remarks}}</div>
                <div class="btnsLine">
                  <div class="btn mini-btn cancel">取消</div>
                  <div class="btn mini-btn confirm">确认</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="no-order" v-if="orderlist.length === 0">
          <img src="/images/nothing.png" />
          <p>当前没有可查看的订单</p>
        </div>
      </div>
  </div>
</template>
<script>
import Goodlist from "@/components/goodsList";
const status = ["待确认", "已确认"];
const amountType = ['全额支付', '分期支付'];
const number_zh = ['一','二','三','四','五','六','七','八','九','十'];
let payform = {
          price: '',
          endTypeId: '' 
        }


export default {
  data() {
    return {
      key: "a",
      tagNams: ["选套餐", "服务内容", "支付方式"],
      amountType,
      amountact: 1,
      action: 2,
      status,
      number_zh,
      goodsList: [
        {
          imgUrl: "/static/images/1.jpg",
          title: "死啦地附近冻死了开发商的减肥啦开讲啦可适当减肥啦",
          price: "9800"
        }
      ],
      orderlist: [
        {
          user: {
            name: "夏河",
            userID: "123123",
            phone: "18310101010"
          },
          status: 0,
          imgurl: "/static/images/1.jpg",
          title: "阿萨德六块腹肌爱丽丝看风",
          price: 8800,
          createTime: "2018-06-07 15:00:00",
          remarks: "预约到店"
        }
      ],
      standard: [
        {
          content: '1.确定拍摄时间',
          checked: true,
          systemCheck: true
        },
        {
          content: '2.到点签合同',
          checked: true,
          systemCheck: true
        },
        {
          content: '3.上传合同及相关票据',
          checked: false,
          systemCheck: true
        },
        {
          content: '4.预约拍摄时间及地点',
          checked: false,
          systemCheck: false
        }
      ],

      payList: [
        {
          ...payform
        }
      ]
    };
  },
  methods: {
    handelTagClick(idx) {
      this.action = idx;
    },
    checkHandle(idx){
      let obj = {...this.standard[idx]};
      obj['checked'] = !obj['checked'];
      this.standard.splice(idx, 1, obj);
    },
    addbtnHandleClick(){
      this.payList.push({...payform});
    }
  },
  components: { Goodlist }
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.userInfo {
  line-height: 1.36rem;
  padding: 0 0.34rem;
  border-bottom: 0.06rem solid #f6f6f6;
  position: relative;
}
.itemsBox {
  border-bottom: 0.02rem solid #f6f6f6;
  height: 1.08rem;
  line-height: 1.28rem;
  padding: 0 0.34rem;
  display: flex;
  justify-content: space-between;
}
.itemsBox .act {
  border-bottom: 0.04rem solid #7224d8;
}
.itemBox {
  border-bottom: 0.02rem solid #f6f6f6;
}
.linkbox {
  padding: 1rem 0 0.66rem;
}
.checkGoodLink {
  width: 3.4rem;
  height: 0.8rem;
  color: #fff;
  font-size: 0.32rem;
  background: #7224d8;
  margin: 0 auto;
  display: block;
  text-align: center;
  line-height: 0.8rem;
  border-radius: 0.4rem;
}
.orderMoreBtn {
  border-bottom: 0.02rem solid #f6f6f6;
  text-align: center;
  font-size: 0.32rem;
  color: #333;
  height: 1.04rem;
  line-height: 1.04rem;
}
.no-order {
  text-align: center;
}
.no-order img {
  margin: 0.96rem auto 0.4rem;
}
.no-order p {
  text-align: center;
  color: #999;
  font-size: 0.28rem;
}
.orderList .userInfo {
  border: none;
  height: 1.2rem;
  line-height: 1.2rem;
}
.orderOne {
  padding-bottom: 0.2rem;
}
.statu {
  position: absolute;
  right: 0.34rem;
  top: 0;
  line-height: 1.36rem;
  color: #fd792c;
}
.orderDefault {
  padding: 0.1rem 0.32rem;
}
.orderDefault .orderImg {
  width: 1.8rem;
  height: 2.56rem;
  float: left;
  background-size: cover;
  background-position: center;
}
.orderDefault .defaultRight {
  float: right;
  width: 4.6rem;
}
.titlename {
  width: 3rem;
}
.defaultRight .borB {
  padding-bottom: 0.12rem;
}
.btnsLine {
  text-align: right;
  padding-top: 0.12rem;
}
.btnsLine .btn {
  display: inline-block;
}
.btn {
  width: 1.08rem;
  height: 0.36rem;
  line-height: 0.36rem;
  text-align: center;
  font-size: 0.22rem;
  border-radius: 0.18rem;
}
.cancel.btn {
  color: #999;
  border: 0.02rem solid #999;
}
.confirm.btn {
  color: #fff;
  background: #fd792c;
  border: 0.02rem solid #fd792c;
}
.listbox {
  padding-top: 0.3rem;
}
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
.amountBox{
  border-top: .08rem solid #f6f6f6;
  padding: .17rem .32rem;
  line-height: .74rem;
  margin-top: .2rem;
}
.tabbox{
  display: flex;
  justify-content: space-around;
  height: 1.08rem;
  line-height: 1.08rem;
  border: .02rem solid #f6f6f6;
}
.tabbox .tabitem{
  color: #666;
}
.tabbox .act{
  color: #333;
}
.allpay{
  padding: .3rem .32rem;
}
.payinfo{
  width: 6.5rem;
}
.paylist{
}
.payOne{
  padding: .2rem .32rem;;
  line-height: .8rem;
  border-bottom: .02rem solid #f6f6f6;
}
.payOne input{
  text-align: right;
  outline: none;
  font-size: .32rem;
  color: #fd792c;
}
.addPayform{
  margin: .72rem auto;
  width: 3.4rem;
  height: 0.8rem;
  border: .02rem dashed #979797;
  color: #999;
  line-height: .8rem;
  text-align: center;
}
</style>
