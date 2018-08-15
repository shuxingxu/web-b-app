<template lang="html">
	   <div class="select-time">
        <popup v-model="timeShow">
          <popup-header
          left-text="取消"
          right-text="完成"
          :show-bottom-border="false"
          @on-click-left="$emit('cancelTime')"
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
</template>
<script>
  import { Popup, PopupHeader, XButton, DatetimeView } from 'vux'
	export default {
		data() {
			return {
        timeShow:false,
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
			}
		},
    props:["show"],
    components: {
        Popup,
        PopupHeader,
        XButton,
        DatetimeView
    },
		computed: {
      nowTime: function(){
        return new Date().getFullYear() + '-' + (new Date().getMonth()+1) + '-' + new Date().getDate();
      }
		},
    created(){
      this.selectTimeValue = this.nowTime;
      this.timeShow = this.show; 
    },
		watch: {
      selectTimeValue: function(newVal, oldVal){
        if(new Date(newVal).getTime() == new Date(oldVal).getTime()) return;
        if(this.timeSelect == "month"){
          this.monthTime = this.selectTimeValue;
        }else if(this.timeSelect == "day"){
          this.dayTime[this.dayWay] = this.selectTimeValue;
        }
      },
      show: function(){
        this.timeShow = this.show; 
      }
		},
		methods: {
            completeSelectTime() { //完成时间选择
              if(this.timeSelect == "day"){
              console.log(4841)
                console.log(this.$emit())
                this.$emit('selectTime', this.dayTime);
              }else{
              console.log(484)
                this.$emit('selectTime', this.monthTime);
              }
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
		},
		mounted() {
		},
	}
</script>
<style lang="css">


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

.padding-l19{
  padding-left: 19px;
}
.padding-r19{
  padding-right: 19px;
}
</style>