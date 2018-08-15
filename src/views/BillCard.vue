<template>
    <div class="container">
        <x-header class="header-t">
            <a slot="overwrite-left" @click="$router.go(-1)">返回<i class="icon iconback"></i></a>
            管理银行卡
            <a slot="right" @click.prevent.stop="more"><i class="icon card"></i></a>
        </x-header>
        <div class="cardcontainer">
            <div class="cardbox">
                <img :src="data.imgurl" alt="">
                <div>
                    <p>{{data.bank}}</p>
                    <p>{{data.cardid}}</p>
                </div>
            </div>
            <div class="dashborder"></div>
        </div>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                data:{
                    imgurl:"",
                    bank:"交通银行",
                    // 应该后台处理好在发给前端，这样私密性更好
                    cardid:"●●●● ●●●● ●●●● 7587"
                }
            }
        },
        methods:{
            more(){
                alert("点击执行了more")
            }
        },
        components: {
        },
        beforeCreate(){
            //请求绑定卡片信息
            // this.$http.post('/api.cards?uid=123322134').then(data=>{
            //     this.data = JSON.parse(data.data)
            // });
        },
        computed:{
            cardidnew(){
                
            }
        }
    }
</script>

<style lang="less" scoped>
@import "../assets/css/z.less";
.cardcontainer{
    // .w(321);
    margin: 0 auto;
    .mt(24);
    .cardbox{
        margin: 0 auto;
        background-color: #0A4F9A;
        .w(321);
        .h(85); 
        background-image: url();
        background-size: cover;
        display: flex;
        align-items: center;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        img{
            .w(40);
            .h(40);
            background-color: #fff;
            border-radius: 50%;
            .ml(36);
        }
        div{
            .mt(10);
            .ml(12);
            p{
                // 15手机上显示太大会被挤过去，改成12正好
                .fs(12);
                .lh(21);
                .pb(7);
                color: #ffff;
            }
        }
        p{
            color: #fff;
        }
    }
    .dashborder{
        .w(335);
        border-bottom: 2px dashed #000;
        opacity: 0.07;
        margin: 0 auto;
        .mt(10);
    }
}
.header-t{
    background: #fff
}
</style>

