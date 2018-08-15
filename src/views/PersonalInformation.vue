<template>
<div class="container">
    <x-header class="xheader">
        <a slot="overwrite-left" @click="$router.go(-1)">返回<i class="icon iconback"></i></a>
        个人资料
    </x-header>
    <group class="firstgroup">
        <div @click="shadowbox=true">
            <cell-box class="flexbox" is-link>
                <div>头像</div>
                <div><img src="" alt=""></div>
            </cell-box>
        </div>
        <div @click="propname=true"><cell-box is-link>店铺名称</cell-box></div>
        <div><cell-box is-link>活动管理</cell-box></div>
    </group>
    <group>
        <div><cell-box is-link>我的服务</cell-box></div>
    </group>
    <group>
        <div><cell-box is-link>到店礼</cell-box></div>
    </group>
    <group>
        <div>
            <cell-box class="flexbox" is-link>
                <div>清楚缓存</div>
                <div>0M</div>
            </cell-box>
        </div>
        <div><cell-box is-link>联系客服</cell-box></div>
        <div class="last"><cell-box is-link>关于婚博会</cell-box></div>
    </group>
    <div class="shadowbox" v-show="shadowbox">
        <div class="headerimg">
            <div>拍照</div>
            <div>从相册选择...</div>
            <div @click="shadowbox=false">取消</div>
        </div>
    </div>
    <div class="propname" v-if="propname">
        <x-header>
            <a slot="overwrite-left" @click="propname=false">返回<i class="icon iconback"></i></a>
            个人资料
        </x-header>
        <group>
            <div><cell-box>{{"婚纱旗舰店"}}</cell-box></div>
        </group>
    </div>
</div>
</template>

<script>
import { Group, CellBox } from 'vux'
    export default{
        data(){
            return {
                shadowbox:false,
                propname:false
            }
        },
        components: {
            Group,
            CellBox
        }
    }
</script>

<style lang="less" scoped>
@import "../assets/css/z.less";
.container{
    background-color: #F6F6F6;
    
}
.container /deep/ .weui-cells{
    .mt(8);
}
.container .firstgroup /deep/ .weui-cells{
    .mt(3);
}
.container /deep/ .weui-cell{
    border-bottom: 1px solid #f6f6f6
}
.last /deep/ .weui-cell{
    border: none
}
.container /deep/ .weui-cells:after{
    border: none
}
.flexbox{
    display: flex;
    justify-content: space-between;
    div:nth-child(2){
        .pr(35);
    }
}
.shadowbox{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0 ,0 , 0.6);
    .headerimg{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        .h(163);
        background-color: #fff;
        display: flex;
        // justify-content: space-between;
        align-items: center;
        flex-direction: column;
        div{
            flex:1;
            .lh(55);
            border-bottom: 1px solid #f6f6f6;
            .fs(18);
            width: 100%;
            text-align: center;
        }
        div:nth-of-type(3){
            color:#999
        }
    }
}
.propname{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f6f6f6;
}
</style>
