<template>
    <div class="container">
        <div class="header">
            <x-header class="xheader">
                <a slot="overwrite-left" @click="$router.go(-1)">返回<i class="icon iconback"></i></a>
                账单
                <a class="card" slot="right" @click.prevent.stop="goto('billcard')"><i class="iconfont icon-card"></i></a>
            </x-header>
            <div class="header-m">
                <h4>余额（元）</h4>
                <div>
                    <p>{{yue}}</p>
                    <button @click.stop.prevent="goto('billwithdrawdeposit')">提现</button>
                </div>
            </div>
            <div class="header-b">
                <div class="header-b-box">
                    <p>昨日收益（元）<span>{{shouyibi}}</span></p>
                    <p>{{data[0].sales}}</p>
                </div>
                <div class="linecol"></div>
                <div class="header-b-box">
                    <p>累计交易（单）<span>{{jiaoyibi}}</span></p>
                    <p>{{data.length}}</p>
                </div>
            </div>
        </div>
        <ul class="list">
            <li  @click.stop.prevent="goto('billdetail')"><i class="icon iconl"></i><span>账户明细</span><i class="icon"></i></li>
            <li @click.stop.prevent="goto('billincomedetail')"><i class="icon iconl"></i><span>提现记录</span><i class="icon"></i></li>
        </ul>
        <p class="charttitle">近七日收益表（元）</p>
        <chart :xdata="xdata" :ydata="ydata" :colors="['#FFA774','#FF5E00']"></chart>
    </div>
</template>

<script>
import chart from "@/components/chart"

    export default{
        data() {
            return {
                yue:'127900.00',
                data: [
                    { date: '05-17', sales: 602000 },
                    { date: '05-16', sales: 820000 },
                    { date: '05-15', sales: 510000 },
                    { date: '05-14', sales: 710000 },
                    { date: '05-13', sales: 330000 },
                    { date: '05-11', sales: 550000 },
                    { date: '05-10', sales: 610000 }
                ],
                xdata:[],
                ydata:[]
            }
        },
        computed:{
            shouyibi(){
                let num = this.data[0].sales - this.data[1].sales
                if(num>=0){
                    return '+' + num;
                }else{
                    return num;
                }
            },
            jiaoyibi(){
                let num = 11;
                if(num>=0){
                    return '+' + num;
                }else{
                    return num;
                }
            }
        },
        methods:{
            goto(v){
                this.$router.push(v)
            }
        },
        components: {
            chart
        },
        beforeCreate(){
            // axios()获取七日收益数据和日期
            //七日交易数应该是在这里一起请求出来了，计算一下length就可以了
            // this.$http.post('/api.shouyi?uid=123322134&day=7').then(data=>{
                // 柱状图data更新
                // let arr = [];
                // JSON.parse(data.data).forEach(item=>{
                //     let obj={};
                //     obj.date = item.date;
                //     obj.sales = item.sales;
                //     arr.push(obj);
                // })
            // });
            // axios()获取余额信息
            // this.$http.get('/api.yue?uid=123322134').then(data=>{
                // this.yue = JSON.parse(data.data)
            // });
            // axios()获取七日累计交易数量
            // this.$http.get('').then(data=>{

            // });
        },
        created(){
            this.data.forEach(i=>this.xdata.push(i.date));
            this.data.forEach(i=>this.ydata.push(i.sales));
        },
        beforeMount(){
         
        },
        mounted(){

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
.vux-header{
    background-color:transparent;
}
.header{
    background: linear-gradient(to bottom,#7224D8 0%,#964CF6 100%);
    background-color: #7224D8;
    color: #fff;
}
.card{
    .w(17);
    .h(17);
    background-color: #666;
}
.header-m,.header-b{
    .pt(36);
    .pl(43);
    .pr(25);
    .pb(34);
}
.header-m{
    h4{
        .fs(13);
        opacity: .8;
    };
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
            .fs(26);
        };
        button{
            .h(30);
            .w(80);
            text-align: center;
            .fs(13);
            border: 1px solid #fff;
            border-radius: 20px;
            background: transparent;
            color: #fff

        }
    }
}
.header-b{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .pt(0);
    // .mb(50);
    .linecol{
        position: absolute;
        left: 50%;
        top: 18%;
        // transform: translateY(-50%);
        display: inline-block;
        width: 1px;
        .h(30);
        background-color: #fff;
        opacity: .3;
    }
}
.header-b-box{
    flex-basis: 49%;
    p{
        .fs(18);
        .mb(10);
    };
    p:nth-child(1){
        .fs(11);
        opacity: .8;
        span{
            .fs(11);
        }
    }
}
.header-b-box:nth-child(3){
    .pl(43);
}
.list{
    .pt(20);
    .pb(14);
    list-style: none;
    li{    
        position: relative;
        .pl(51);
        .pr(21);
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom:1px solid #F6F6F6;
        span{
            flex: 1;
            .h(50);
            .lh(50);
        };
        .icon{
            position: absolute;;
            .w(12);
            .h(12);
            background-color: #eee;
            .right(18);
        };
        .iconl{
            .left(21);
        };
    }
}
.charttitle{
    .ml(21);
    .mr(21);
    .fs(12);
    .mt(31);
    .mb(-30);
    color: #666;
}

</style>

