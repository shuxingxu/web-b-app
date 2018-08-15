import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import order from '@/views/order'
import userCenter from '@/views/userCenter'
import orderSearch from '@/views/orderSearch'
import createOrder from '@/views/createOrder'
import goodsList from '@/views/goodsList'
import remind from '@/views/remind'
import calendar from '@/views/calendar'
import standard from "@/views/standard"
import selectPerson from "@/views/selectPerson"

import search from '@/views/search'
import bill from '@/views/Bill'
import billcard from '@/views/BillCard'
import billdetail from '@/views/BillDetail'
import billincomedetail from '@/views/BillIncomeDetail'
import billwithdrawdeposit from '@/views/BillWithdrawDeposit'
import personalinformation from '@/views/PersonalInformation'
import button from '@/views/button'
import analysis from '@/views/DataAnalysis'
import statistics from '@/views/DataStatistics'

Vue.use(Router)

export default new Router({
	mode: 'history',
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/button',
      name: 'button',
      component: button
    },{
      path: '/order',
      name: 'order',
      component: order
    },{
      path: '/userCenter',
      name: 'userCenter',
      component: userCenter
    }, {
      path: '/orderSearch',
      name: 'orderSearch',
      component: orderSearch
    }, {
      path: '/createOrder/:orderId',
      name: 'createOrder',
      component: createOrder
    }, {
      path: '/goodsList',
      name: 'goodsList',
      component: goodsList
    }, {
      path: '/remind',
      name: 'remind',
      component: remind
    }, {
      path: '/calendar',
      name: 'calendar',
      component: calendar
    }, {
      path: '/standard',
      name: 'standard',
      component: standard
    }, {
      path: '/selectPerson',
      name: 'selectPerson',
      component: selectPerson
    }, {
      path: '/search',
      name: 'search',
      component: search
    },{
      path: '/analysis',
      name: 'analysis',
      component: analysis
    },{
      path: '/statistics',
      name: 'statistics',
      component: statistics
    },{
      path: '/bill',
      name: 'bill',
      component: bill
    },{
      path: '/billcard',
      name: 'billcard',
      component: billcard
    },{
      path: '/billdetail',
      name: 'billdetail',
      component: billdetail
    },{
      path: '/billincomedetail',
      name: 'billincomedetail',
      component: billincomedetail
    },{
      path: '/billwithdrawdeposit',
      name: 'billwithdrawdeposit',
      component: billwithdrawdeposit
    },{
      path: '/personalinformation',
      name: 'personalinformation',
      component: personalinformation
    }
  ]
})
