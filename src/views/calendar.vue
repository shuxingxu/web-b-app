  <template>
  <div>
    <inline-calendar
    ref="calendar"
    @on-change="onChange"
    @on-view-change="onViewChange"
    class="inline-calendar-demo"
    :show.sync="show"
    v-model="value"
    :range="range"
    :show-last-month="showLastMonth"
    :show-next-month="showNextMonth"
    :highlight-weekend="highlightWeekend"
    :return-six-rows="return6Rows"
    :hide-header="hideHeader"
    :hide-week-list="hideWeekList"
    :replace-text-list="replaceTextList"
    :weeks-list="weeksList"
    :render-function="buildSlotFn"
    :disable-past="disablePast"
    :disable-future="disableFuture"
    :disable-weekend="disableWeekend"
    :disable-date-function="disableDateFunction">
    </inline-calendar>
    <div class="todoBox">
      <div class="clearfix tit f14 text-info">
        <div class="fl">3月14</div>
        <div class="fr">
          <i class="iconfont icon-dingdan icon-edit"></i>
          <i class="iconfont icon-dingdan"></i>
        </div>
      </div>
      <div class="todoInfo">
        <div class="infoOne f12">
          <div class="text-default">服务项目：</div>
          <div class="text-info">安排拍摄</div>
        </div>
        <div class="infoOne f12">
          <div class="text-default">注意事项：</div>
          <div class="text-info">1、请尽快确定拍摄时间，方便为您预约摄影师<br/>2、请您带上您的护照</div>
        </div>
        <div class="infoOne f12">
          <div class="text-default">人员安排：</div>
          <div class="scrollList">
            <div class="bigbox clearfix" ref="bigbox">
              <div class="itemOne fl" v-for="(person, idx) in persons" :key="'person' + idx">
                <img :src="person.imgUrl" />
                <p class="f12 text-default">{{person.Title}}</p>
                <p class="f12 text-muted">{{person.name}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fixAddBtn"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arranged: [
        '2018-07-04'
      ],
      show: true,
      value: "",
      listValue: "",
      range: false,
      showLastMonth: true,
      showNextMonth: true,
      highlightWeekend: false,
      return6Rows: true,
      hideHeader: false,
      hideWeekList: false,
      replaceTextList: {},
      replace: false,
      changeWeeksList: false,
      weeksList: [],
      useCustomFn: false,
      buildSlotFn: (lIndex, vIndex, date) => {
        if(this.arranged.indexOf(date.formatedDate) >= 0){
          return '<span style="position:absolute;display:block;width:.12rem;height:.12rem;left:50%;bottom:0;margin-left:-.06rem;border-radius:50%;background:#7ED321;"></span>'
        }
      },
      disablePast: false,
      disableFuture: false,
      disableWeekend: false,
      disableDateFunction(date) {
        if (date.formatedDate === "2017-10-16") {
          return true;
        }
      },
      persons: [
        {
          name: 'summer',
          Title: '首席化妆师',
          imgUrl: 'static/images/1.jpg'
        },
        {
          name: 'summer',
          Title: '首席化妆师',
          imgUrl: 'static/images/1.jpg'
        },
        {
          name: 'summer',
          Title: '首席化妆师',
          imgUrl: 'static/images/1.jpg'
        },
        {
          name: 'summer',
          Title: '首席化妆师',
          imgUrl: 'static/images/1.jpg'
        }
      ]
    };
  },
  methods: {
    onChange (val) {
      console.log('on-change', val)
    },
    onViewChange (val, count) {
      console.log('on view change', val, count)
    }
  },
  mounted(){
    this.$refs.bigbox.style.width = 1.7 * this.persons.length + 'rem';
  }
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .todoBox{
    border-top: .12rem solid #f8f8f8;
    padding: 0 .32rem;
  }
  .todoBox .tit{
    line-height: .8rem;
    border-bottom: .02rem solid #f7f7f7;
  }
  .icon-edit{
    margin-right: .4rem;
  }
  .todoInfo{
    padding: .1rem 0;
  }
  .todoInfo .infoOne{
    line-height: .54rem;
    display: flex;
    justify-content: flex-start;
  }
  .todoInfo .text-default{
    width: 1.3rem;
  }
  .scrollList{
    width: 5.3rem;
    overflow-x: scroll;
    padding: .7rem 0 .3rem;
    line-height: .36rem;
  }
  .scrollList .itemOne{
    width: 1.3rem;
    text-align: center;
    margin-right: .4rem;
  }
  .scrollList .itemOne:last-child{
    margin-right: 0;
  }
  .scrollList .itemOne img{
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 50%;
    margin: 0 auto;
  }
  .fixAddBtn{
    width: 0.96rem;
    height: 0.96rem;
    background: #7224db;
    border-radius: 50%;
    position: fixed;
    right: .4rem;
    bottom: .12rem;
  }
  .fixAddBtn:after,.fixAddBtn:before{
    position: absolute;
    left: 50%;
    top: 50%;
    content: ' ';
    display: block;
    background: #fff;
  }
  .fixAddBtn:after{
    width: 0.5rem;
    height: 0.06rem;
    margin-top: -.03rem;
    margin-left: -.25rem;
  }
  .fixAddBtn:before{
    height: 0.5rem;
    width: 0.06rem;
    margin-left: -.03rem;
    margin-top: -.25rem;
  }
</style>