// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from './store'
import './assets/css/common.css'

//  把router功能放到vuex的state中 例：store.state.route.path
import { sync } from 'vuex-router-sync'
sync(store, router)

// vue-lodash
import VueLodash from 'vue-lodash'
Vue.use(VueLodash, { name: 'lodash' })

//自定义全局组件
import footerBar from '@/components/footer'  //共用底部
Vue.component('footer-bar', footerBar) 

import numberComma from '@/components/numberComma' // 分割数字888,88
Vue.component('number-comma', numberComma) 

//vux 共用组件
import { AjaxPlugin, TransferDom, Card, Toast, ToastPlugin, Countup, Clocker, Loading, XHeader, XButton, Actionsheet, Group, CellBox, Cell, XInput, Popup, LoadMore, ButtonTab, ButtonTabItem, Panel, Picker, Divider, Flexbox, FlexboxItem, ViewBox, Grid, GridItem, Tab, TabItem, DatetimeRange, Datetime, InlineCalendar} from 'vux'
// AjaxPlugin 插件依赖于 axios，组件内使用this.$http 调用
Vue.use(AjaxPlugin)

Vue.use(ToastPlugin)
Vue.component('toast', Toast)
Vue.component('card', Card)
Vue.component('actionsheet', Actionsheet)
Vue.directive('transfer-dom', TransferDom)
Vue.component('countup', Countup)
Vue.component('clocker', Clocker)
Vue.component('loading', Loading)
Vue.component('x-header', XHeader)
Vue.component('x-button', XButton)
Vue.component('cell-box', CellBox)
Vue.component('cell', Cell)
Vue.component('group', Group)
Vue.component('x-input', XInput)
Vue.component('popup', Popup)
Vue.component('load-more', LoadMore)
Vue.component('button-tab', ButtonTab)
Vue.component('button-tab-item', ButtonTabItem)
Vue.component('panel', Panel)
Vue.component('picker', Picker)
Vue.component('divider', Divider)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)
Vue.component('view-box', ViewBox)
Vue.component('grid', Grid)
Vue.component('grid-item', GridItem)
Vue.component('tab', Tab)
Vue.component('tab-item', TabItem)
Vue.component('datetime-range', DatetimeRange)
Vue.component('datetime', Datetime)
Vue.component('inline-calendar', InlineCalendar)

// 用于消除click移动浏览器上物理点击与事件触发之间的300毫秒延迟
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
