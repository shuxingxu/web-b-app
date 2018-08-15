<template>
    <div class="container">
        <x-header class="header-t">
            <a slot="overwrite-left" @click="$router.go(-1)"><i class="icon iconback"></i>返回</a>
            提现记录
        </x-header>
        <div class="btn">
            <div class="btnl" :class="{selected:current=='underway'}" @click="current='underway'">提现中</div>
            <div class="btnr" :class="{selected:current=='finish'}" @click="current='finish'">已提现</div>
        </div>
        <div class="incomeing" v-show="current==='underway'">
            <ul>
                <li class="listitem" v-for="(v,i) in underwaydata" :key="i">
                    <i class="icon"></i>
                    <div class="middle">
                        <p class="font-md font-black">提现申请</p>
                        <p class="font-sm font-gray"><span>{{v.day}}</span><span class="pl">{{v.time}}</span></p>
                    </div>
                    <div class="right">
                        <p class="font-md font-orange">+ ¥ {{v.money}}</p>
                        <p class="font-sm font-gray">提现中</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="incomed" v-show="current==='finish'">
            <ul>
                <li class="listitem" v-for="(v,i) in finishdata" :key="i">
                    <i class="icon"></i>
                    <div class="middle">
                        <p class="font-md font-black">提现</p>
                        <p class="font-sm font-gray"><span>{{v.day}}</span><span class="pl">{{v.time}}</span></p>
                    </div>
                    <div class="right">
                        <p class="font-md font-green">+ ¥ {{v.money}}</p>
                        <p class="font-sm font-green">交易成功</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                current:'underway',
                underwaydata:[
                    {day:"2018-05-12",time:"15:26",money:25850},
                    {day:"2018-05-13",time:"15:26",money:55850},
                    {day:"2018-05-14",time:"15:26",money:85850},
                    {day:"2018-05-12",time:"15:26",money:25850},
                    {day:"2018-05-13",time:"15:26",money:55850},
                    {day:"2018-05-14",time:"15:26",money:85850},
                    {day:"2018-05-12",time:"15:26",money:25850},
                    {day:"2018-05-13",time:"15:26",money:55850},
                    {day:"2018-05-14",time:"15:26",money:85850},
                    {day:"2018-05-12",time:"15:26",money:25850},
                    {day:"2018-05-13",time:"15:26",money:55850},
                    {day:"2018-05-14",time:"15:26",money:85850},
                    {day:"2018-05-15",time:"15:26",money:125850}
                ],
                finishdata:[
                    {day:"2018-05-12",time:"15:26",money:25850},
                    {day:"2018-05-13",time:"15:26",money:55850},
                    {day:"2018-05-14",time:"15:26",money:85850},
                    {day:"2018-05-12",time:"15:26",money:25850},
                    {day:"2018-05-13",time:"15:26",money:55850},
                    {day:"2018-05-14",time:"15:26",money:85850},
                    {day:"2018-05-12",time:"15:26",money:25850},
                    {day:"2018-05-13",time:"15:26",money:55850},
                    {day:"2018-05-14",time:"15:26",money:85850},
                    {day:"2018-05-12",time:"15:26",money:25850},
                    {day:"2018-05-13",time:"15:26",money:55850},
                    {day:"2018-05-14",time:"15:26",money:85850},
                    {day:"2018-05-12",time:"15:26",money:25850},
                    {day:"2018-05-13",time:"15:26",money:55850},
                    {day:"2018-05-14",time:"15:26",money:85850},
                    {day:"2018-05-12",time:"15:26",money:25850},
                    {day:"2018-05-13",time:"15:26",money:55850},
                    {day:"2018-05-14",time:"15:26",money:85850},
                    {day:"2018-05-15",time:"15:26",money:95850}
                ]
            }
        },
        beforeCreate(){
            // axios()获取两个数据
        },
        methods:{
        },
        components: {
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
.btn{
    overflow: hidden;
    margin: 0 auto;
    .w(168);
    .mt(14);
    .mb(28);
    border: 1px solid #7224D8;
    .bradius(18);
    display: flex;
    .fs(18);
    .lh(25);
    .h(36);
    align-items: center;
    .btnl,.btnr{
        text-align: center;
        .h(36);
        .lh(36);
        color: #666;
    }
    .btnl{
        flex: 1;
    }
    .btnr{
        flex: 1
    }
    .selected{
        background-color: #7224D8;
        color: #fff;
    }
}
.listitem{
    display: flex;
    border-bottom: 1px solid #F6F6F6;
    .middle{
        flex: 2;
    };
    .right{
        flex: 1;
        text-align: right;
    };
    .font-sm{
        .pt(9);
        .pb(14);
    };
    .font-md{
        .pt(14);
    };
}
ul{
    margin:0 0.36rem 0 0.9rem;
}
.font-md{
    .fs(16);
}
.font-sm{
    .fs(13);
}
.font-orange{
    color: #FD792C;
}
.font-gray{
    color: #999;
}
.font-black{
    color: #333;
}
.font-green{
    color: #42C6A4;
}
.pl{
    .pl(13);
}
</style>

