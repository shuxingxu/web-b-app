<template>
    <div class="container">
        <x-header class="header-t">
            <a slot="overwrite-left" @click="$router.go(-1)">返回<i class="icon iconback"></i></a>
            账户明细
            <a slot="right" @click.prevent.stop="filter=!filter;shadow=!shadow">筛选</a>
        </x-header>
        <div class="topbar">
            <div class="topbar-t">
                <p>本月</p>
                <i class="icon" @click="showfilterbox"></i>
            </div>
            <div class="topbar-b">
                <span>收入 ¥{{income}}</span>
            </div>
        </div>
        <div class="itemcontainer">
            <div v-for="(v,i) in showdata" class="itembox" :key="i">
                <img :src="v.imgurl" alt="">
                <div>
                    <h4>{{v.title}}</h4>
                    <p><span>{{v.day}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{{v.time}}</span></p>
                </div>
                <span class="text-orange">{{v.shouru}}</span>
            </div>
        </div>
        <div class="shadowbox" v-show="shadow"  @touchmove.prevent>
            <div class="filtercontainer" v-show="filter">
                <div class="filterbox">
                    <h3></h3>
                    <button @click="showtype='all';filter=false;shadow=false">全部</button>
                </div>
                <div class="filterbox">
                    <h3></h3>
                    <button @click="showtype='income';filter=false;shadow=false">收入</button>
                </div>
                <div class="filterbox">
                    <h3></h3>
                    <button @click="showtype='pay';filter=false;shadow=false">支出</button>
                </div>
            </div>
        </div>
        <div class="shadowbox2" v-show="shadow2"  @touchmove.prevent>
            <div class="pickercontainer" v-show="picker">
                <div class="picker-t"><a @click="cancelandreset">取消</a><a @click="checkandpost">完成</a></div>
                <button class="switchbtn" @click="switchPickerRange">{{pickerbtntxt}}</button>
                <div class="shownowdata">
                    <div class="mth" v-show="pickerRange==='mth'">
                        <span class="bline">{{pickerMthdata[1]}}</span>
                    </div>
                    <div class="day" v-show="pickerRange==='day'">
                        <span @click="pickerRangeday='day1'" class="bline">{{pickerDaystart[2]}}</span>
                        <span>至</span>
                        <span @click="pickerRangeday='day2'" class="bline">{{pickerDayend[2]}}</span>
                    </div>
                </div>
                <!-- <datetime
                v-model="value1">
                <div slot="">
                    <div>123</div>
                    <div>abc</div>
                </div>
                </datetime> -->
                <div class="allpbox">
                    <div v-show="pickerRangeday==='day1' && pickerRange==='day'">
                        <Picker @on-change="changevalueday1" :columns="3" :data="years" v-model="year2"></Picker>
                        <!-- <DatetimeView></DatetimeView> -->
                    </div>
                    <div v-show="pickerRangeday==='day2' && pickerRange==='day'">
                        <Picker @on-change="changevalueday2" :columns="3" :data="years2" v-model="year3"></Picker>
                        <!-- <DatetimeView></DatetimeView> -->
                    </div>
                    <Picker v-show="pickerRange==='mth'" @on-change="changevaluemth" :columns="2" :data="years" v-model="year1"></Picker>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Picker,DatetimeView  } from 'vux'
let nowdate=new Date().getFullYear() + '-' + (new Date().getMonth()+1) + '-' + new Date().getDate()
function YearDataCreater(sy,sm,sd){
    //初始化年月日数据
    let nowyear =sy||new Date().getFullYear(),nowmonth=sm||new Date().getMonth()+1,nowday=sd||new Date().getDate(),allyears = [],allmonths=[],alldays=[],years=[]
    // console.log(nowyear,nowmonth,nowday)
    for(let index=0;index<=9;index++){
        //年循环内部
        allyears.push({
            'value':nowyear - index + '',
            'name':nowyear - index + '年',
            'parent':0
        })
        // console.log(allyears)
        for (let i = 1; i <= 12; i++) {
            //月循环内部,先判断超过本年月份没有
            if(index==0&&i>nowmonth){
                //超过跳出
                break
            }else{
                //未超过计算本月
                allmonths.push({
                    'value':nowyear - index + '-' + i,
                    'name':i+'月',
                    'parent':nowyear - index + ''
                })
            }
            // console.log(allmonths)
            //判断月内日的数量
            let days=30;
            if(i == 2){
                //判断闰年
                if((allyears[index].num % 4 === 0 && allyears[index].num % 100 !== 0)  || allyears[index].num % 400 === 0)
                {
                    days = 29;
                }
                else
                {
                    days = 28;
                }
                //判断小月
            }else if(i == 4 || i == 6 ||i == 9 ||i == 11){
                days = 30;
            }else{
                days = 31;
            };
            for(let j=1;j<=days;j++){
                //日内循环
                //判断超过今天则退出循环
                if(index==0&&i==nowmonth&&j>nowday){
                    break
                }else{
                    alldays.push({
                        'value':nowyear - index + '-' + i + '-' + j,
                        'name':j+'日',
                        'parent':nowyear - index + '-' + i
                    })
                }
            }
            // console.log(alldays)
        }
    }

    return years=[...allyears,...allmonths,...alldays]
}
let years = YearDataCreater()
// console.log(years)
    export default{
        data() {
            return {
                itemlist:[
                    {day:"2018-05-01",time:'18:30',imgurl:'',shouru:'+82888',title:'ininininininininininin德国淡粉色手工刺绣长裙婚纱',type:'in'},
                    {day:"2018-05-01",time:'18:30',imgurl:'',shouru:'+81888',title:'outoutoutoutoutoutoutout德国淡粉色手工刺绣长裙婚纱',type:'out'},
                    {day:"2018-05-01",time:'18:30',imgurl:'',shouru:'+8888',title:'德国淡粉色手工刺绣长裙婚纱',type:'in'},
                    {day:"2018-05-01",time:'18:30',imgurl:'',shouru:'+8888',title:'德国淡粉色手工刺绣长裙婚纱',type:'out'},
                    {day:"2018-05-01",time:'18:30',imgurl:'',shouru:'+8888',title:'德国淡粉色手工刺绣长裙婚纱',type:'in'},
                    {day:"2018-05-01",time:'18:30',imgurl:'',shouru:'+8888',title:'德国淡粉色手工刺绣长裙婚纱',type:'out'},
                    {day:"2018-05-01",time:'18:30',imgurl:'',shouru:'+8888',title:'德国淡粉色手工刺绣长裙婚纱',type:'in'},
                    {day:"2018-05-01",time:'18:30',imgurl:'',shouru:'+8888',title:'德国淡粉色手工刺绣长裙婚纱',type:'out'},
                    {day:"2018-05-01",time:'18:30',imgurl:'',shouru:'+8888',title:'德国淡粉色手工刺绣长裙婚纱',type:'in'},
                    {day:"2018-05-01",time:'18:30',imgurl:'',shouru:'+8888',title:'德国淡粉色手工刺绣长裙婚纱',type:'in'}
                ],
                showtype:'all',
                income:8800,
                filter:false,
                picker:false,
                shadow:false,
                shadow2:false,
                pickerRange:'mth',
                pickerRangeday:'day1',
                pickerMthdata:'请选择月份',
                pickerDaystart:nowdate,
                pickerDayend:'结束时间',
                datecorrect:false,
                allyears:[],
                allmonths:[],
                alldays:[],
                years: [...years],
                // years2: [...years],
                year1: [''],
                year2: [''],
                year3: ['']
                
            }
        },
        methods:{
            switchPickerRange(){
                // if(this.pickerRange==='mth'){
                //     this.pickerRange='day'
                // }else{
                //     this.pickerRange='mth'
                // }
                this.pickerRange=this.pickerRange==='mth'? 'day':'mth';
            },
            cancelandreset(){
                this.picker=false;
                this.shadow2=false;
                this.pickerRange='mth';
                this.pickerMthdata='请选择月份';
                this.pickerDaystart='开始时间';
                this.pickerDayend='结束时间';
                this.datecorrect=false
            },
            checkandpost(){
                //重置状态
                this.picker=false;
                this.shadow2=false;
                // 检测是那种日期选择模式
                if(this.pickerRange==='mth'){
                    // check数值是否正确
                    if(this.pickerMthdata!='开始时间'){
                        this.datecorrect=true;
                        // 清除data数据等待添加新的赋值
                        this.itemlist=[];
                        // axios()根据选定日期请求数据更改数据，并在成功后把datecorrect重置false
                    }else{
                        alert("请选择正确数值")
                    }
                }else{
                    // check数值是否正确
                    if(this.pickerDaystart!='开始时间'&&this.pickerDayend!='结束时间'){
                        this.datecorrect=true;
                        // 清除data数据等待添加新的赋值
                        this.itemlist=[];
                        // axios()根据选定日期请求数据更改数据，并在成功后把datecorrect重置false
                    }else{
                        alert("请选择正确数值")
                    }
                }
            },
            showfilterbox(){
                this.picker=true;
                this.shadow2=true;
            },
            change(){

            },
            changevalueday1(val){
                this.pickerDaystart = val
            },
            changevalueday2(v){
                this.pickerDayend = v
            },
            changevaluemth(val){
                this.pickerMthdata = val
            }
        },
        computed:{
            pickerbtntxt(){
                return this.pickerRange==='mth'? '按月选择':'按日选择';
            },
            showdata(){
                // return this.itemlist
                if(this.showtype==='all'){
                    return this.itemlist
                }else if(this.showtype==='income'){
                    return this.itemlist.filter(item=>item.type==='in')
                }else if(this.showtype==='pay'){
                    return this.itemlist.filter(item=>item.type==='out')
                }
            },
            years2(){
                let y = this.pickerDaystart[2].split("-")[0]
                let m = this.pickerDaystart[2].split("-")[1]
                let d = this.pickerDaystart[2].split("-")[2]
                return YearDataCreater(y,m,d)
            }
        },
        components: {
            Picker,
            DatetimeView
        },
        created(){
            // this.years2 = years2
        }
    }
</script>

<style lang="less" scoped>
@import "../assets/css/z.less";
.container /deep/ .vux-header .vux-header-title{
    color: #fff;
}
.container /deep/ .vux-header a{
    color: #fff;
}
.container /deep/ .vux-header-left .left-arrow:before{
        border-top-color:#fff;
        border-left-color: #fff;
}
.topbar{
    .mt(22);
    .pl(20);
    .pr(20);
    background-color: #F7F7F7;
    .topbar-t{
        display: flex;
        justify-content: space-between;
        .pt(8);
        .fs(16);
        .lh(22);
        .icon{
            display: inline-block;
            .w(17);
            .h(14);
            background-color: #666;
        }
    };
    .topbar-b{
        .pt(8);
        .pb(9);
        .fs(12);
        .lh(17);
        color: #666;
    };
}
.itemcontainer{
    .pt(21);
    .itembox{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #E8E8E8;
        img{
            border-radius: 3px;
            .w(112);
            .h(84);
            .mt(3);
            background-color: #eee;
            align-self:baseline;
        };
        div{
            // .w(143);
            flex: 1;
            .ml(16);
            h4{
                word-break: break-all;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                .mb(10);
                .fs(16);
                .lh(22);
                font-weight: normal;
            };
            p{
                .fs(12);
                color: #666;
            };
            .text-orange{
                .fs(16);
                .lh(20);
            };
        };
        .pt(16);
        .pl(20);
        .pr(20);
        .pb(12);
    };
}
.shadowbox,.shadowbox2{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:rgba(0,0,0,0.6);
}
.shadowbox{
    top:46px;
}
.shadowbox .filtercontainer{
    display: flex;
    position: absolute;
    justify-content: flex-end;
    .w(180);
    .h(250);
    background-color: #fff;
    flex-wrap: wrap;
    right:20px;
    top: 5px;
    .pl(22);
}
.shadowbox .filtercontainer::after{
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom: 5px solid #fff;
    top:-10px;
    right: 5px;
}
.shadowbox .filtercontainer .filterbox{
    .h(66);
    width: 100%;
}
.shadowbox .filtercontainer button{
    .w(63);
    .h(27);
    border: none;
    border-radius: 4px;
    background-color: #f4f4f4;
    color: #666;
    .fs(12);
    .mt(15);
}
.pickercontainer{
    position: fixed;
    // .h(400);
    width: 100%;
    background-color: #fff;
    bottom: 0;
    .picker-t{
        .pl(20);
        .pr(20);
        .pt(25);
        .pb(7);
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        a{
            color: blueviolet;
        }
    }
    .switchbtn{
        .w(100);
        .h(30);
        .mt(25);
        .ml(20);
        .mb(20);
        border-radius: 15px;
        border: 1px solid #666;
        background-color: #eee;
    }
    .shownowdata{
        text-align: center;
        div{
            .w(335);
            margin: 0 auto;
            display: flex;
            .pl(20);
            .pr(20);
            span{
                flex-basis: 0.8rem;
                .lh(40);
            }
            .bline{
                flex: 1;
                display: inline-block;
                border-bottom: 1px solid blueviolet;
            }
        }
    }
}
.allpbox{
    .h(123);
    overflow: hidden;
}
.allpbox /deep/ .vux-flexbox{
    .h(123);
}
</style>

