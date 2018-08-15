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

        <!-- data -->
        <div class="data-session data" v-for="(item, index) in data" :key="index">
          <div class="part padding-l19 padding-r19 vux-1px-b">
            <h3 class="data-title f16">{{item.title}}</h3>
            <div class="data-number">
              <countup :end-val="Number(item.money)" :duration="2"></countup>
            </div>
            <div class="data-des f14">
            	<span>{{item.total.title}}</span>：<countup :start-val="Number(item.total.money)" :end-val="Number(item.total.money)" :duration="2"></countup>
            </div>
          </div>
          <div class="part data-part padding-l19 padding-r19 border-bottom4">
          	<div class="data-list f14" v-for="(details, detailsIndex) in item.details" :key="detailsIndex">
          		<div class="cell left text-info">{{details.date}}</div>
	            <div class="cell center text-info"><countup :start-val="Number(details.money)" :end-val="Number(details.money)" :duration="2"></countup></div>
	            <div class="cell right"><i class="iconfont f12" :class="trend[details.trend[0]]"></i><span>{{details.trend[1]}}</span></div>
          	</div>
          </div>
        </div>


        <!-- data -->
        <div class="data-session data">
          <div class="part data-part-tab padding-l19 padding-r19 vux-1px-b">
            <div class="mid-tabs-btn">
              <x-button :class="{active : midTabIndex == 0}" @click.native="midTabClick(0)" mini plain type="primary">天</x-button>
              <x-button :class="{active : midTabIndex == 1}" @click.native="midTabClick(1)" mini plain type="primary">周</x-button>
              <x-button :class="{active : midTabIndex == 2}" @click.native="midTabClick(2)" mini plain type="primary">月</x-button>
            </div>
          </div>
          <!-- charts  start-->
          <div class="part padding-l19 padding-r19 border-bottom4" v-for="(item, index) in option[0]">
            <div class="chart-title">
              <div class="cell left f14">{{item.title}}</div>
              <div class="cell right f12 text-info" v-if="item.subTitle">
                <span>{{item.subTitle.date}}</span>
                <span><i class="iconfont icon-dingdan f12 red" :class="trend[item.subTitle.trend[0]]"></i>{{item.subTitle.trend[1]}}</span>
              </div>
              <div class="chart-legend" v-if="item.legend">
                <div v-for="legend in item.legend" class="cell f12 text-info"><span :style="{backgroundColor: legend.color}"></span>{{legend.label}}</div>
              </div>
            </div>
            <!-- <div class="data-chart vux-1px-b" ref="echarts"></div> -->
            <div class="data-chart vux-1px-b">
              <e-charts :options = "item" :echarts-id="'charts' + index"></e-charts>
            </div>
            <div class="data-foot f14">{{item.summary}}</div>
           
          </div>
          <!-- charts  end-->
          <!-- charts  start-->
          <div class="part padding-l19 padding-r19 border-bottom4" v-for="(item, index) in option[1]">
            <div class="chart-title">
              <div class="cell left f14">{{item.title}}</div>
              <div class="cell right f12 text-info" v-if="item.subTitle">
                <span>{{item.subTitle.date}}</span>
                <span><i class="iconfont icon-dingdan f12 red" :class="trend[item.subTitle.trend[0]]"></i>{{item.subTitle.trend[1]}}</span>
              </div>
              <div class="chart-legend" v-if="item.legend">
                <div v-for="legend in item.legend" class="cell f12 text-info"><span :style="{backgroundColor: legend.color}"></span>{{legend.label}}</div>
              </div>
            </div>
            <!-- <div class="data-chart vux-1px-b" ref="echarts"></div> -->
            <div class="data-chart vux-1px-b">
              <e-charts :options = "item" :echarts-id="'charts' + index"></e-charts>
            </div>
            <div class="data-foot f14">{{item.summary}}</div>
           
          </div>
          <!-- charts  end-->



        </div>
      </div>      




    </div>
  </div>
</template>
<script>
import { Countup, XButton } from 'vux'
import ECharts from "@/components/echarts"


export default {
  data() {
    return {
      tabValue:0,
      midTabIndex:1,
      tabBar:["active-left","active-right"],
      tabName:["订单数据统计","套餐对比分析"],
      data:[
      	{
      		title:"今日预计金额（元）",
      		money:"40000",
      		total:{
      			title:"总预计收入（元）",
      			money:"4564654",
      		},
      		details:[
      			{
      				date:"日",
      				money:"54654",
      				trend:[0,"0%"],  //0负 1平 2升
      			},
      			{
      				date:"周",
      				money:"6366354",
      				trend:[1,"20%"],  //0负 1平 2升
      			},
      			{
      				date:"月",
      				money:"788252",
      				trend:[2,"3%"],  //0负 1平 2升
      			}
      		]
      	},
      	{
      		title:"今日预计金额（元）",
      		money:"40000",
      		total:{
      			title:"总预计收入（元）",
      			money:"4564654",
      		},
      		details:[
      			{
      				date:"日",
      				money:"54654",
      				trend:[0,"0%"],  //0负 1平 2升
      			},
      			{
      				date:"周",
      				money:"6366354",
      				trend:[1,"20%"],  //0负 1平 2升
      			},
      			{
      				date:"月",
      				money:"788252",
      				trend:[2,"3%"],  //0负 1平 2升
      			}
      		]
      	},
      	{
      		title:"今日预计金额（元）",
      		money:"36890",
      		total:{
      			title:"总预计收入（元）",
      			money:"4564654",
      		},
      		details:[
      			{
      				date:"日",
      				money:"54654",
      				trend:[0,"0%"],  //0负 1平 2升
      			},
      			{
      				date:"周",
      				money:"6366354",
      				trend:[1,"20%"],  //0负 1平 2升
      			},
      			{
      				date:"月",
      				money:"788252",
      				trend:[2,"3%"],  //0负 1平 2升
      			}
      		]
      	},
      ],

      trend:[
      	["icon-dingdan","green"],
      	["icon-dingdan","grey"],
      	["icon-dingdan","red"]
      ],

      option:[],

      options:[[
      	{	
      		title:"今日实收金额（元）",
      		subTitle:{
      			date:"（昨日）",
      			trend:[2,"50%"],
      		},
      		summary:"今日实收：456,725.00元",
      		workBreak:true, //x坐标是否换行
      		type:"bar",
      		option: {
      			xAxis: {
              data: ['周一 28/6', '周二 8/6', '周三 8/6', '周四 8/6', '周五 8/6', '周六 8/6', '周日 8/6']
            },
            yAxis: {
                data:["0万","1万","2万","3万","4万","12122"]
            },
            series: [{
                data: ["3万", "1万", "3万", "2万", "1万", "2万", "3万"],
            }]
        	}
      	},
      	{	
      		title:"今日订单量（单）",
      		subTitle:{
      			date:"（昨日）",
      			trend:[3,"50%"],
      		},
      		summary:"今日订单量：42单",
      		type:"line",
      		workBreak:true, //x坐标是否换行
      		option: {
            xdata: ['周一 28/6', '周二 8/6', '周三 8/6', '周四 8/6', '周五 8/6', '周六 8/6', '周日 8/6'],
            ydata:["0单","10单","20单","30单","40单"],
            series: [{
                data: ["10单", "10单", "30单", "20单", "10单", "20单", "10单"]
            }]
        	}
      	},
      	{	
      		title:"今日客单价（元）",
      		subTitle:{
      			date:"（昨日）",
      			trend:[3,"50%"],
      		},
      		summary:"今日收入：43,250.00元",
      		type:"line", //图表类型
      		workBreak:true, //x坐标是否换行
      		option: {
            xdata: ['周一 28/6', '周二 8/6', '周三 8/6', '周四 8/6', '周五 8/6', '周六 8/6', '周日 8/6'],
            ydata: ["0万","2万","4万","6万","8万","564646"],
            series: [{
                data: ["2万", "0万", "4万", "0万", "8万", "4万", "6万"]
            }]
        	}
      	},
      ],
      [
        { 
          title:"今日实收金额（元）",
          subTitle:{
            date:"（昨日）",
            trend:[2,"50%"],
          },
          summary:"今日实收：456,725.00元",
          workBreak:true, //x坐标是否换行
          type:"bar1",
          option: {
            xAxis: {
              data: ['周日 28/6', '周日 8/6', '周日 8/6', '周日 8/6', '周日 8/6', '周日 8/6',]
            },
            yAxis: {
                data:["0万","1万","2万","3万","4万","5万"]
            },
            series: [
              {
                data: ["1万", "1万", "3万", "2万", "1万", "2万", "3万"],
              },{
                data: ["3万", "3万", "5万", "0万", "0万", "5万", "2万"],
              },{
                data: ["4万", "2万", "3万", "2万", "0万", "4万", "3万"],
              },{
                data: ["0万", "4万", "4万", "5万", "2万", "4万", "0万"],
              },{
                data: ["5万", "1万", "3万", "2万", "5万", "2万", "5万"],
              },{
                data: ["3万", "5万", "5万", "4万", "4万", "1万", "2万"],
              },
            ]
          }
        }
      ],
      [//月
      	{	
      		title:"本月统计（元）",
      		legend:[
	      		{
	      			label:"预计金额",
	      			color:"#7224D8",
	      		},
	      		{
	      			label:"已收金额",
	      			color:"#FF8945",
	      		}
      		],
      		summary:"今日收入：43,250.00元",
      		workBreak:true, //x坐标是否换行
          type:"line1",
      		option: {
      			xdata: ['1月 2018', '2月', '3月', '4月', '5月', '6月', '7月'],
              yAxis: {
                  data: ["0万","10万","20万","30万","40万"],
              },
              series: [
                	{
                    data: ["10万","0万","20万","30万","10万","30万","40万"],
                	},
                	{
                    data: ["20万","10万","30万","10万","40万","20万","40万"],
                  }
              ]
          }
      	},
      	{	
      		title:"今日客单价（元）",
      		subTitle:{
      			trend:[3,"50%"],
      		},
      		summary:"今日收入：43,250.00元",
      		workBreak:true, //x坐标是否换行
          type:"line2",
      		option: {
      			xdata: ['1月 2018', '2月', '3月', '4月', '5月', '6月', '7月'],
            ydata: ["0万","2万","4万","6万","8万","8456万"],
            series: [{
                data: ["8万","2万","6万","4万","8万","2万","6万"],
            }]
          }
      	},

      ]],


    }
  },
  components: {
    Countup,
    ECharts,
    XButton
  },
  created(){
    this.option[this.midTabIndex%3] = this.options[this.midTabIndex]
  },
  mounted() {
  },
  watch:{
    midTabIndex: function(){

      if(this.option[0] && this.option[0].length > 0){
        this.option[0] = [];
        this.option[1] = this.options[this.midTabIndex];
      }else{
        this.option[1] = [];
        this.option[0] = this.options[this.midTabIndex];
      }

    }
  },
  methods: {
    tabs(i){
      this.tabValue = i;
      let path = ["statistics","analysis"];
      this.$router.push({ path: '/' + path[i] })
    },
    midTabClick(i){
      this.midTabIndex = i;
    },

  }
}

</script>
<style lang="less" rel="stylesheet/less" scoped>
ul,li{
  list-style: none;
}
.iconfont{
	vertical-align: top;
}
.data-analysis{
}
.border-bottom4{
   border-bottom: 0.08rem solid #F8F8F8;
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

.data-title{
  padding: 0.4rem 0 0.3rem;
  line-height: 0.44rem;
  font-weight: normal;
}
.data-number{
	text-align: center;
	font-size: 0.8rem;
	color: #FF7100;
	font-family: DIN-Medium;
	font-weight: bold;
	line-height: 0.96rem;
}
.data-des{
	text-align: center;
	line-height: 0.4rem;
	padding: 0.2rem 0 0.3rem;
}
.data-part{
	padding: 0.12rem 0 0.4rem;
}

.data-list{
	display: flex;
	
}
.data-list .cell{
	width: 32%;
	line-height: 0.34rem;
	padding-top:0.24rem;
}
.data-list .center{
	text-align: center;
	width: 36%;
	font-family: DIN-Regular;
}
.data-list .left{
	text-align: right;
}
.data-list .right{
	text-align: left;
	font-family: DIN-Regular;
}

.data-session{
	font-family: PingFangSC-Regular;
}

.data-part-tab{
	padding: 0.52rem 0 0.16rem;
}
.chart-title{
	position: relative;
	padding: 0.28rem 0;
	display: flex;
}
.chart-title .cell{
	width: 50%;
}
.chart-title .cell.right{
	text-align: right;
}
.data-chart{
	height: 3.9rem;
}
.data-foot{
	padding: 0.16rem 0 0.32rem;
	line-height: 0.4rem;
}
.chart-legend{
	position: absolute;
	right: 0;
	top: 0.4rem;
	text-align: right;
}
.chart-legend .cell{
	height: 0.32rem;
	line-height: 0.32rem;
	width: auto;
	margin-bottom: 0.04rem;
}
.chart-legend .cell span{
	display: inline-block;
	width: 0.16rem;
	height: 0.16rem;
	border-radius: 50%;
	background-color: #fc0;
	margin-right: 14px;
}
.mid-tabs-btn{
  display: flex;
}
.mid-tabs-btn button{
  height: 0.6rem;
  margin-top: 0;
  flex-grow: 1;
}
.mid-tabs-btn button:first-child{
  border-radius: 0.12rem 0 0 0.12rem;
  border-right: none;
}
.mid-tabs-btn button:nth-child(2){
  border-radius: 0;
}
.mid-tabs-btn button:last-child{
  border-radius: 0 0.12rem 0.12rem 0;
  border-left: none;
}
.mid-tabs-btn button.active{
  background-color: #7224D8;
  color: #fff;
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