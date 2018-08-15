<template>
  <div class="container">
    <div class="bar bar-nav">
      <x-header>销售分析</x-header>
    </div>
    <div class="content">
      <div class="data-analysis">
        <!-- tabs -->
        <div class="tabs border-bottom4 padding-l19 padding-r19">
          <div class="tabs-unit left">
            <div class="tabs-name f18" @click="tabs(0)" :class="tabValue == 0 ? 'active' : ''">{{tabName[0]}}</div>
          </div>
          <div class="tabs-unit right">
            <div class="tabs-name f18" @click="tabs(1)" :class="tabValue == 1 ? 'active' : ''">{{tabName[1]}}</div>
          </div>

          <div class="tabs-bar-box padding-l19 padding-r19" :class="tabBar[tabValue]">
            <div class="tabs-bar">
              <div class="tabs-name f18 active">{{tabName[tabValue]}}</div>
              <div class="tabs-bar-progress"><span></span></div>
            </div>
          </div>

        </div>

        <div class="data-main bc-white">
          <div class="data-header padding-r10 padding-l10">
            <div class="data-h-text">
              <p class="f16 text-info">2018年6月</p>
              <a href="javascript:;" @click="selectTime"><i class="iconfont text-info icon-dingdan f20"></i></a>
            </div>
            <div class="data-h-line"></div>
          </div>

          <!-- data -->
          <div class="data-list border-bottom4" v-for="(item, index) in options">
            <div class="data-list-title f16 padding-l10 padding-r10">
              <p class="left">{{item.title.text}}</p>
              <p class="right"><i class="iconfont icon-dingdan f16"></i><countup :start-val="Number(item.title.money)" :end-val="Number(item.title.money)" :duration="2" :decimals="2"></countup></p>
            </div>
            <div class="data-trend f12 text-info vux-1px-b padding-l10 padding-r10" v-if="item.title.trend"><i class="iconfont icon-dingdan f12" :class="trend[item.title.trend[0]]"></i><span>{{item.title.trend[1]}}</span></div>
            <div class="data-list-chart padding-l10 padding-r10">
              <e-charts :options = "item" :echarts-id="'charts' + index"></e-charts>
            </div>
            <div class="chart-legend padding-r10 padding-l10 f12">
                <div class="legend-list" v-for="legend in item.legend">
                  <span class="icon" :style="{backgroundColor: legend.color}"></span>
                  <span class="left text-info">{{legend.label}}</span>
                  <span class="right"><i class="iconfont icon-dingdan f12"></i><countup :start-val="Number(legend.money)" :end-val="Number(legend.money)" :duration="2" :decimals="2"></countup></span>
                </div>
            </div>
          </div>


        </div>
        <div class="data-foot bc-white padding-r19 padding-l19">
          <div class="data-ft-h f14">成单率(%)</div>
          <div class="data-progress" v-for="item in successData">
            <h5 class="f12 text-info">{{item.label}}<span><i class="iconfont icon-dingdan f12"></i><countup :start-val="Number(item.money)" :end-val="Number(item.money)" :duration="2" :decimals="2"></countup></span></h5>
            <div class="progress">
              <p class="show"><x-progress :percent="Number(item.progress)" :show-cancel="false"></x-progress></p>
              <p class="text f12 text-info">{{item.progress}}%</p>
            </div>
          </div>
        </div>

      </div>      

      <!-- select-time start-->
      <div class="select-time">
        <popup v-model="timeShow">
          <popup-header
          left-text="取消"
          right-text="完成"
          :show-bottom-border="false"
          @on-click-left="timeShow = false"
          @on-click-right="completeSelectTime"
          class="vux-1px-b f16"></popup-header>
          <div class="select-main bc-white">
            <div class="select-main-btn">
              <x-button plain type="primary" class="custom-primary f14" @click.native="selectTimeWay">{{timeSelectWay[timeSelect]}} <i class="icon-dingdan iconfont f14"></i></x-button>
            </div>
            <div class="selected-time padding-r19 padding-l19">
              <p class="time-left vux-1px-b" @click="clickDayStart">{{timeSelect == 'day' ? (dayTime.startTime || '开始时间') : monthTime}}</p>
              <p class="time-center" v-if="timeSelect == 'day'">至</p>
              <p class="time-right vux-1px-b" :class="{'text-muted' : !dayTime.endTime}" @click="clickDayEnd" v-if="timeSelect == 'day'">{{dayTime.endTime || '结束时间'}}</p>
            </div>
            <div class="time-box">
              <datetime-view v-model="selectTimeValue" ref="datetime" :format="format"></datetime-view>
            </div>
          </div>  
        </popup>
      </div>
      <!-- select-time end-->



    </div>
  </div>
</template>
<script>
import { Countup, XProgress, Popup, PopupHeader, XButton, DatetimeView } from 'vux'
import ECharts from "@/components/echarts"


export default {
  data() {
    return {
      timeShow: false,
      timeSelectWay:{
        day:"按日选择",
        month:"按月选择",
      },
      timeSelect:"day",
      selectTimeValue: '2017-10-11',
      dayWay:"startTime",
      dayTime:{
        startTime:"",
        endTime:""
      },
      monthTime:"",
      format: 'YYYY-MM-DD',

      tabValue:1,
      midTabIndex:2,
      tabBar:["active-left","active-right"],
      tabName:["订单数据统计","套餐对比分析"],

      trend:[
      	["icon-dingdan","green"],
      	["icon-dingdan","grey"],
      	["icon-dingdan","red"]
      ],

      options:[
        {
          title:{
            text:"预计收入金额(元)",
            money:"121213.2323",
            trend:[2,"30%"],
          },
          type:"pie",
          legend:[
            {
              label:"8服8造+限量新景拍摄",
              money:"5555",
              value:20,
              color:"#60ABFF",
            },
            {
              label:"北京旅拍长城+云阳拍摄",
              money:"5257425",
              value:40,
              color:"#77D5B5",
            },
            {
              label:"旅拍国风·经典+内景",
              money:"4252452",
              value:50,
              color:"#A560FF",
            },
            {
              label:"秒杀创意+底片多拍多送",
              money:"4524524",
              value:30,
              color:"#FF970F",
            },
            {
              label:"复古风+创意总监团队",
              money:"4524452",
              value:60,
              color:"#CFADFF",
            }
          ],
        },
        {
          title:{
            text:"预计收入金额(元)",
            money:"121213.2323",
          },
          type:"pie",
          legend:[
            {
              label:"8服8造+限量新景拍摄",
              money:"5555",
              value:20,
              color:"#60ABFF",
            },
            {
              label:"北京旅拍长城+云阳拍摄",
              money:"5257425",
              value:40,
              color:"#77D5B5",
            },
            {
              label:"旅拍国风·经典+内景",
              money:"4252452",
              value:50,
              color:"#A560FF",
            },
            {
              label:"秒杀创意+底片多拍多送",
              money:"4524524",
              value:30,
              color:"#FF970F",
            },
            {
              label:"复古风+创意总监团队",
              money:"4524452",
              value:60,
              color:"#CFADFF",
            }
          ],
        }
      ],

      successData:[
        {
          label:"8服8造+限量新景拍摄",
          money:"5555",
          progress:"22",
        },
        {
          label:"复古风+创意总监团队",
          money:"4524452",
          progress:"22",
        },
        {
          label:"北京旅拍长城+云阳拍摄",
          money:"5257425",
          progress:"22",
        },
        {
          label:"旅拍国风·经典+内景",
          money:"4252452",
          progress:"22",
        },
        {
          label:"秒杀创意+底片多拍多送",
          money:"4524524",
          progress:"22",
        },
      ]

    }
  },
  components: {
    Countup,
    ECharts,
    XProgress,
    Popup,
    PopupHeader,
    XButton,
    DatetimeView
  },
  created(){
    this.selectTimeValue = this.nowTime;
  },
  computed:{
    nowTime: function(){
      return new Date().getFullYear() + '-' + (new Date().getMonth()+1) + '-' + new Date().getDate();
    }
  },
  mounted() {

  },
  watch: {
    selectTimeValue: function(newVal, oldVal){
      if(new Date(newVal).getTime() == new Date(oldVal).getTime()) return;
      if(this.timeSelect == "month"){
        this.monthTime = this.selectTimeValue;
      }else if(this.timeSelect == "day"){
        this.dayTime[this.dayWay] = this.selectTimeValue;
      }
    }
  },
  methods: {
    tabs(i) {
      this.tabValue = i;
      let path = ["statistics","analysis"];
      this.$router.push({ path: '/' + path[i] })
    },
    selectTime() { //选择时间
      this.timeShow = true;
    },
    completeSelectTime() { //完成时间选择
      if(this.timeSelect == "day"){
        console.log(this.dayTime)
      }else{
        console.log(this.monthTime)
      }

      this.timeShow = false;
    },
    selectTimeWay() { //切换筛选方式
      if(this.timeSelect == "day"){
        this.format = "YYYY-MM";
        this.selectTimeValue = this.monthTime || this.nowTime;
        this.timeSelect = "month";
      }else{
        this.format = "YYYY-MM-DD";
        this.selectTimeValue = this.dayTime[this.dayWay] || this.nowTime;
        this.timeSelect = "day";
      }
      
      this.$refs.datetime.render();

    },
    clickDayStart() {
      if(this.timeSelect == "day"){
        this.dayWay = "startTime";
        this.selectTimeValue = this.dayTime.startTime || this.nowTime;
        this.$refs.datetime.render();
      }
    },
    clickDayEnd() {
      this.dayWay = "endTime";
      this.selectTimeValue = this.dayTime.endTime || this.nowTime;
      this.$refs.datetime.render();
    },








  }
}

</script>
<style lang="less" rel="stylesheet/less" scoped>
ul,li{
  list-style: none;
}
.content{
  background-color:#f5f5f5; 
}
.data-analysis .tabs{
  background-color:#fff;
}
.border-bottom4{
   border-bottom: 0.08rem solid #F5F5F5;
}
.tabs{
  display: flex;
  position: relative;
}
.tabs-unit{
  flex-grow: 1;
  display: flex;
}
.tabs-unit.left{
  justify-content: flex-start;
}
.tabs-unit.right{
  justify-content: flex-end;
}
.tabs-name{
  padding: 0.18rem 0;
  line-height: 1.3333333;
}
.tabs-bar .tabs-name{
  opacity: 0;
  height: 1px;
  overflow: hidden;
  padding: 0;
}
.tabs-bar-box{
  position: absolute;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  transition: all 1s;
}
.tabs-bar{
  position: relative;
}
.tabs-bar-progress{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.tabs-bar-progress span{
  width: 0.74rem;
  height: 2px;
  overflow: hidden;
  border-radius: 1px;
  background-color: #7224D8;
}

.tabs-name.active{
  font-weight: bold;
}
.tabs-bar-box.active-left{  
  justify-content: flex-start;
}
.tabs-bar-box.active-right{  
  justify-content: flex-end;
}

.data-main{
  margin:0 10px;
  border-radius:0.2rem;
}
.data-header{
  padding-top: 0.16rem;
  border-radius:0.2rem 0.2rem 0 0;
  background:url('./../assets/img/data_bg.png') repeat-x left top/auto 0.16rem; 
}
.data-h-text{
  position: relative;
  height: 0.44rem;
  line-height: 0.44rem;
  padding: 0.12rem 0 0.2rem;
}
.data-h-text a{
  position: absolute;
  right: 0;
  top: 0.12rem;
  height: 0.44rem;
  line-height: 0.44rem;
}
.data-h-line{
  height: 6px;
  overflow: hidden;
  background: url('./../assets/img/data_bg_1.png') repeat-x top left;
}
.data-list-title{
  height: 0.44rem;
  line-height: 0.44rem;
  padding: 0.6rem 0 0.16rem;
  display: flex;
}
.data-list-title p{
  flex-grow: 1;
}
.data-list-title p.right{
  text-align: right;
  color: #FF7100;
}
.data-trend{
  text-align: right;
  padding-bottom: 0.32rem;
}
.data-list-chart{
  height: 4.0rem;
}
.chart-legend{
  padding-bottom: 0.36rem;
}
.legend-list{
  padding-bottom: 0.28rem;
  display: flex;
  align-items: flex-end;
}
.legend-list>span.icon{
  width: 0.32rem;
  height: 0.28rem;
  border-radius: 0.04rem;
  margin-right: 0.24rem;
  background-color: #fc0;
}
.legend-list span.left{
  line-height: 0.28rem;
  flex-grow: 1;
}
.legend-list span.right{
  text-align: right;
  height: 0.26rem;
  line-height: 0.26rem;
}
.data-list:nth-child(2) .data-list-title{
  padding-top: 0.4rem;
}
.data-foot{
  padding-top: 0.6rem;
  padding-bottom: 0.6rem; 
}
.data-ft-h{
  height: 0.4rem;
  line-height: 0.4rem;
  padding-bottom: 0.4rem;
}
.data-progress{
  margin-bottom: 0.46rem;
}
.data-progress h5{
  height: 0.34rem;
  line-height: 0.34rem;
  margin-bottom: 0.2rem;
  font-weight: normal;
}
.data-progress h5>span{
  margin-left: 0.2rem;
}
.progress{
  display: flex;
}
.progress .show{
  height: 0.16rem;
  padding:0.08rem 0;
  overflow: hidden;
  border-radius: 0.08rem;
  flex-grow: 1;
}
.progress .text{
  height: 0.32rem;
  line-height: 0.32rem;
  width: 0.64rem;
  text-align: right;
}

.select-main-btn{
  padding: 0.32rem 0.4rem 0.5rem;
  width: 2.0rem;
  height: 0.6rem;
}

.selected-time{
  display: flex;
  margin-bottom: 0.44rem;
}
.selected-time p{
  height: 0.44rem;
  line-height: 0.44rem;
  padding-bottom: 0.16rem;
  text-align: center;
}
.selected-time .time-left{
  flex-grow: 1;
}
.selected-time .time-right{
  width: 40%;
}
.selected-time .time-center{
  width: 20%;
}
.time-box{
  height: 145px;
  overflow: hidden;
}






.iconfont{
  vertical-align: top;
}
.bc-white{
  background-color:#fff;
}
.border-bottom4{
   border-bottom: 0.08rem solid #F5F5F5;
}
.padding-l10{
  padding-left: 10px;
}
.padding-r10{
  padding-right: 10px;
}

.padding-l19{
  padding-left: 19px;
}
.padding-r19{
  padding-right: 19px;
}
.iconfont.red{
	color: #CD313E;
}
.iconfont.green{
	color: #1BD637;
}
.iconfont.grey{
	color: #999;
}
</style>
<style type="text/css">
.progress .weui-progress__bar{
  height: 0.16rem;
  border-radius: 0.08rem;
}
.progress .weui-progress__inner-bar{
  background-color: #7224D8;
  border-radius: 0.08rem;
}

.custom-primary {
  height: 0.56rem !important;
  width: 1.96rem !important;
  line-height: 0.4rem !important;
  padding: 0.08rem 0 !important;
  border-radius: 0.3rem !important;
  border-color: #979797!important;
  color: #333!important;
  background-color: #F3F3F3 !important;
}

.select-time .vux-popup-header{
  background-color: #fff;
  height: 0.44rem;
  line-height: 0.44rem;
  padding: 0.34rem 0 0.12rem;
}
.select-time .vux-popup-header-left{
  color: #7224D8 !important;
}
.select-time .vux-1px-b:after{
  border-bottom: 1px solid #7E0AE1;
  color: #7E0AE1;
}
</style>