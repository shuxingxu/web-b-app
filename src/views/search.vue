<template>
  <div class="container">
      <div class="search-main padding-l19 padding-r19">
        <div class="search-content">
          <i class="iconfont icon-dingdan f12 text-info"></i>
          <input class="f12 text-info" type="text" :placeholder="placeholder" autofocus v-model.trim="searchVal" @blur="submit"  @keyup.enter="submit">
        </div>
        <div class="search-btn f12 text-info" @click="searchBack">取消</div>
      </div>

      <div class="search-history padding-l19 padding-r19">
        <div class="search-h-header">
          <h4 class="f14 text-muted h4">搜索历史</h4>
          <a href="javascript:;" class="a text-muted" @click="clearHistory"><i class="iconfont icon-dingdan f14"></i></a>
        </div>
        <div class="search-h-list din-regular">
          <div class="new-list">
            <ul>
              <li @click="historySearch(item)" v-for="(item, index) in newSearchHistory" class="vux-1px f12 text-info">{{item}}</li>
            </ul>
          </div>
          <div class="old-list">
            <ul>
              <li @click="historySearch(item)" v-for="(item, index) in oldSearchHistory" class="vux-1px f12 text-muted">{{item}}</li>
            </ul> 
          </div>
        </div>
        
      </div>
      <!-- //弹框 -->
      <div v-transfer-dom>
        <confirm v-model="show"
          :title="alertTitle"
          @on-confirm="onConfirm">
          <p style="text-align:center;">{{alertContent}}</p>
        </confirm>
      </div>



  </div>
</template>

<script>
import { Confirm } from 'vux'

export default {
  data() {
    return {
      searchVal:"",
      placeholder:"电话号码搜索订单",
      newSearchHistory:[],
      oldSearchHistory:[],
      show:false,
      alertTitle:"",
      alertContent:"",

    }
  },
  components: {
    Confirm 
  },
  created() {
    this.getList();
  },
  computed: {

  },
  methods: {
    getList(){
      this.oldSearchHistory = localStorage.getItem('oldSearchHistory') ? JSON.parse(localStorage.getItem('oldSearchHistory')) : [];
    },
    searchBack() {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    historySearch(val) {
      this.searchVal = val;
      this.submit();
    },
    clearHistory() {
      this.show = true;
      this.alertTitle = "删除提示";
      this.alertContent = "确认要删除搜索历史？";
    },
    onConfirm(){
      localStorage.clear();
      this.newSearchHistory = [];
      this.oldSearchHistory = [];
    },
    submit(){
      console.log(this.searchVal);
      if(!this.searchVal) return false;
      
      this.newSearchHistory = this.newSearchHistory.filter(item => item != this.searchVal);
      this.oldSearchHistory  = this.oldSearchHistory.filter(item => item != this.searchVal);
      this.newSearchHistory.unshift(this.searchVal);

      localStorage.setItem('oldSearchHistory',JSON.stringify(this.newSearchHistory.concat(this.oldSearchHistory)));

      //submit



    }

  },
}

</script>
<style lang="less" rel="stylesheet/less" scoped>
ul,li{
  list-style: none;
}
.container{
  background-color: #F5F5F9;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  font-family: PingFangSC-Regular;
}
.search-main{
  padding: 0.26rem 0;
  background-color: #fff;
  display: flex;
}
.search-content{
  box-sizing: border-box;
  height: 0.4rem;
  border-bottom: 2px solid #E1E1E1;
  line-height: 0.36rem;
  flex-grow:1;
  display: flex;
} 
.search-content input{
  padding-left: 8px;
  border: none;
  outline: none;
  flex-grow:1;
}
.search-btn{
  width: 0.66rem;
  text-align: right;
  color: #7224D8;
}
.search-h-header{
  padding-top: 0.28rem;
  margin-bottom: 0.26rem;
  display: flex;
}
.search-h-header .h4{
  height: 0.4rem;
  line-height: 0.4rem;
  flex-grow: 1;
  font-weight: normal;
}
.search-h-header .a{
  height: 0.4rem;
  line-height: 0.4rem;
}

.search-h-list ul{
  display: flex;
  flex-wrap:wrap;
}
.search-h-list ul li{
  line-height: 0.3rem;
  margin:0.1rem;
  padding: 0.1rem 0.16rem 0.08rem;
}
.search-h-list .old-list ul li:before{
  border-color: #EDEDED;
}
.search-h-list .new-list ul li{
  background-color: #ededed;
}

.din-regular{
  font-family: DIN-Regular;
}


.padding-l19{
  padding-left: 19px;
}
.padding-r19{
  padding-right: 19px;
}
</style>