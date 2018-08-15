<template>
    <div class="container">
        <div class="header">
            <x-header class="header-t">
                <a slot="overwrite-left" @click="$router.go(-1)">返回<i class="icon iconback"></i></a>
                提现
            </x-header>
            <div class="header-b">
                <p>{{"685464541"}}</p>
                <span>可用余额（元）</span>
            </div>
        </div>
        <div class="inputcontainer">
            <div class="inputbox">
                <p>取现金额（元）</p>
                <!-- v-number-only 删除了 -->
                <input type="tel" v-model="cash" :style="{color:cash===''?'#999':'#333'}" placeholder="0.00" >
                <span>提示：单笔取现金额需大于10000元</span>
            </div>
            <button :disabled="cash===''" :class="{graybtn:cash===''}" class="btn" @click="checkandpost">确定</button>
        </div>
        <div class="successboxcontainer" v-if="successmsg">
            <div class="successbox" v-if="successbox">
                <img src="" alt="">
                <p>提交成功</p>
                <span>我们将在三个工作日内处理您的提现申请</span>
                <button class="sharebtn" @click="cancel">确定</button>
                <!-- <button class="sharebtn" @click="showshare">分享接着赚</button>
                <button class="close" @click="cancel"><i class="icon">X</i></button> -->
            </div>
            <!-- 分享功能，暂时取消，备注 -->
            <!-- <div class="sharebox" v-if="sharebox">
                <ul>
                    <li>
                        <img src="" alt="" @click="shareto(pyq)">
                        <span @click="shareto(pyq)">朋友圈</span>
                    </li>
                    <li>
                        <img src="" alt="" @click="shareto(wx)">
                        <span @click="shareto(wx)">微信</span>
                    </li>
                    <li>
                        <img src="" alt="" @click="shareto(wb)">
                        <span @click="shareto(wb)">微博</span>
                    </li>
                </ul>
                <button @click="cancel">取消</button>
            </div> -->
        </div>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                cash:'',
                successmsg:false,
                successbox:true,
                sharebox:false
            }
        },
        methods:{
            checkandpost(){
                if( /\D+/.test(this.cash) ){
                    alert('请输入正确是数值');
                    this.cash='';
                }else{
                    let num = parseInt(this.cash);
                    console.log(num)
                    if(num>=10000){
                        alert("post发送请求");
                        this.successmsg=true;
                        // 重新获取余额数据。

                        // 清空输入框
                        this.cash='';
                    }else{
                        alert("多取点呀~不能少于一万");
                        this.cash='';
                    }
                }
            },
            cancel(){
                this.successmsg=false;
                this.successbox=true,
                this.sharebox=false
            },
            // showshare(){
            //     this.successbox=false,
            //     this.sharebox=true
            // },
            // shoareto(how){
            //     alert("分享到："+how)
            // }
        },
        components: {
            
        },
        beforeCreate() {
            
        },
        //替换输入的非数字
        // directives: {
        //     numberOnly: {
        //         bind: function(el) {
        //             el.handler = function() {
        //                 el.value = el.value.replace(/\D+/g, '');
        //                 console.dir()
        //             }
        //             el.addEventListener('input', el.handler)
        //         },
        //         unbind: function(el) {
        //             el.removeEventListener('input', el.handler)
        //         }
        //     }
        // }
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
.container{
    background-color: #F5F5F5;
    height: 100vh;
}
.header{
    background: linear-gradient(to bottom, #7224D8 0%, #964CF6 100%);
}
.header .header-t{
    background:linear-gradient(transparent 0%,transparent 100%)
}
.header-b{
    .h(100);
    color: #fff;
    p{
        .fs(28);
        .lh(34);
        .mb(7);
        .mt(27);
        text-align: center;
    };
    span{
        .fs(12);
        .lh(17);
        display: block;
        text-align: center;
    }
}
.inputbox{
    .h(155);
    .mt(10);
    background-color: #fff;
    p{
        .fs(16);
        .lh(22);
        .pt(20);
        .pb(13);
        .pl(19);
    };
    input{
        border: none;
        .fs(26);
        .lh(37);
        .ml(19);
        .mt(5);
        // width: 100%;
        outline:none;
        .h(51);
        color: #999;
    };
    span{
        display: block;
        .pl(19);
        .fs(13);
        .lh(18);
        .pt(15);
        .pb(15);
        color: #999;
        border-top: 1px solid #E8E8E8;
    }
}
.btn{
    .w(335);
    .h(44);
    background: linear-gradient(to bottom, #7224D8 0%, #964CF6 100%);
    .bradius(20);
    border: none;
    margin: 0 auto;
    display: block;
    .mt(17);
    color: #fff;
    .fs(14);
    .lh(20);
}
.graybtn{
    background: linear-gradient(to bottom, #E8E8E8 0%, #E8E8E8 100%);
    color: #666;
}
.successboxcontainer{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.6);
    .successbox{
        position: relative;
        .w(275);
        .h(305);
        background-color: #fff;
        margin: 0 auto;
        .mt(153);
        .pt(20);
        border-radius: 5px;
        text-align: center;
        img{
            .w(94);
            .h(94);
            background-color: #eee;
            display: block;
            margin: 0 auto;
        }
        p{
            .fs(18);
            .lh(25);
            color: #666;
            .mb(13.5);
        }
        span{
            display: block;
            .w(125);
            margin: 0 auto;
            .fs(12);
            .lh(17);
            color: #666;
        }
        .sharebtn{
            .w(172);
            .h(35);
            background-color: #730FDC;
            border-radius: 17px;
            color: #fff;
            .fs(12);
            .lh(17);
            border: none;
            box-shadow: 1px 1px 1px #7224D8;
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
        }
        .close{
            .w(25);
            .h(25);
            border-radius: 50%;
            background-color: #fff;
            border: none;
            position: absolute;
            .right(-13);
            .top(-13);
        }
    }
    .sharebox{
        ul{
            position: fixed;
            width: 100%;
            .h(112);
            background-color:#FAF4FF;
            .bottom(58);
            border-radius: 5px;
            display: flex;
            .pt(50);
            li{
                flex: 1;
                list-style: none;
                text-align: center;
                img{
                    display: block;
                    .w(50);
                    .h(50);
                    margin: 0 auto;
                    background-color: #eee;
                }
                span{
                    .mt(7);
                    .fs(12);
                    color: #666;
                    .lh(17);
                }
            }
        }
        button{
            position: fixed;
            width: 100%;
            .h(55);
            background-color: #fff;
            bottom: 0;
            border-radius: 5px;
            border: none;
            .fs(16);
            .lh(22);
            color: #333;
        }
    }
}
</style>

