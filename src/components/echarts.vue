<template lang="html">
	<div :ref="echartsId" class="charts"></div>
</template>
<script>
// 引入 EChartsvar 
const echarts = require('echarts')
export default {
	props: ["options","echartsId"],
	data() {
		return {
        }
	},
    computed: {

    },
    mounted() {
        this.initChart();
    },
	methods: {
        initChart(){
            let myChart = echarts.init(this.$refs[this.echartsId]);
            let option = this.formatOpt();
            let _option = null;

            switch (this.options.type){
                case "line":
                    _option = this.linesChart(option);
                    break;
                case "line1":
                    _option = this.line1chart(option);
                    break;
                case "line2":
                    _option = this.line2chart(option);
                    break;
                case "bar":
                    _option = this.barsChart(option);
                    break;
                case "bar1":
                    _option = this.bar1Chart(option);
                    break;
                case "pie":
                    _option = this.piesChart(option);
                    break;
                default:
                    _option = option;
                    break;
            }

            myChart.setOption(_option, true)
        },
        formatOpt(opt) {
            opt = opt || this.options;

            if(opt.type == "pie") return opt;

            if(opt.workBreak && opt.option.xAxis && opt.option.xAxis.data){
                opt.option.xAxis.data = opt.option.xAxis.data.map(item => item.split(" ").join('\n'));
            }

            if(opt.option.xdata){
                opt.option.xAxis = opt.option.xAxis || {};
                opt.option.xAxis.data = [...opt.option.xdata];
                opt.option.xAxis.data = opt.option.xAxis.data.map(item => item.split(" ").join('\n'));
                opt.option.xAxis.data.push("");
            }

            if(opt.option.ydata){
                opt.option.yAxis = opt.option.yAxis || {};
                opt.option.yAxis.data = [...opt.option.ydata];
                opt.option.yAxis.data.push("");
            }

            return opt.option;
        },
        barsChart(opt) {
            return {
                grid: {
                    left:"0",
                    right:"5",
                    top:"10",
                    bottom:"10",
                    containLabel:true
                },
                xAxis: {
                    type: 'category',
                    axisLine:{
                        lineStyle:{
                            color:"#f6f6f6"
                        }
                    },
                    axisTick:{
                        alignWithLabel: true,
                        inside: true
                    },
                    axisLabel:{
                         color:"#999",
                    },
                    textStyle:{
                        lineHeight:20,
                        color: "#fc0"
                    },
                    data: opt.xAxis.data,
                    axisPointer:{
                        show:true,
                        label:{
                            show:true,
                            color:"#333",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            shadowColor: "rgba(0, 0, 0, 0)"
                        },
                        lineStyle: {
                            width:0
                        }
                    }
                },
                yAxis: {
                    type: 'category',
                    data:opt.yAxis.data,
                    boundaryGap:false,
                    axisLine:{
                        lineStyle:{
                            color:"#fff"
                        }
                    },
                    axisLabel:{
                        color:"#999",
                        margin:10,
                    },
                    splitLine:{
                        show: true,
                        lineStyle:{
                            color:"#f6f6f6",
                        }
                    },
                    textStyle:{
                        lineHeight:20,
                        color: "#fc0"
                    },
                },
                series: [{
                    data: opt.series[0].data,
                    type: 'bar',
                    itemStyle: {
                        //柱形图圆角，初始化效果
                        barBorderRadius:[30,30,0,0],
                        color:new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: "#A35CFF"},
                                {offset: 1, color: "#7224D8"}
                            ]
                        )
                    },
                    barMaxWidth:"14",
                },{
                data: opt.series[0].data,
                type: 'line',
                symbol: "circle",
                symbolSize: 4,
                showSymbol:false,
                hoverAnimation:false,
                symbolOffset:[0,"150%"],
                itemStyle : {
                    color:'#fff'
                },
                lineStyle:{
                    color:'#7224D8',
                    width: 0
                },
            }]
            }
        },
        bar1Chart(opt) {
            let data = [];
            opt.series.forEach((e,i) => {
                data[i] = {
                        data: e.data,
                        type: 'bar',
                        itemStyle: {
                            //柱形图圆角，初始化效果
                            barBorderRadius:[10,10,0,0],
                            color:new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: "#A35CFF"},
                                    {offset: 1, color: "#7224D8"}
                                ]
                            )
                        },
                        // barMaxWidth:"4",
                    }
                });
            return {
                grid: {
                    left:"0",
                    right:"5",
                    top:"10",
                    bottom:"10",
                    containLabel:true
                },
                xAxis: {
                    type: 'category',
                    axisLine:{
                        lineStyle:{
                            color:"#f6f6f6"
                        }
                    },
                    axisTick:{
                        alignWithLabel: true,
                        inside: true
                    },
                    axisLabel:{
                         color:"#999",
                    },
                    textStyle:{
                        lineHeight:20,
                        color: "#fc0"
                    },
                    data: opt.xAxis.data,
                    axisPointer:{
                        show:true,
                        label:{
                            show:true,
                            color:"#333",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            shadowColor: "rgba(0, 0, 0, 0)"
                        },
                        lineStyle: {
                            width:0
                        }
                    }
                },
                yAxis: {
                    type: 'category',
                    data:opt.yAxis.data,
                    boundaryGap:false,
                    axisLine:{
                        lineStyle:{
                            color:"#fff"
                        }
                    },
                    axisLabel:{
                        color:"#999",
                        margin:10,
                    },
                    splitLine:{
                        show: true,
                        lineStyle:{
                            color:"#f6f6f6",
                        }
                    },
                    textStyle:{
                        lineHeight:20,
                        color: "#fc0"
                    },
                },
                series: data
            }
        },
        linesChart(opt) {
            return {
                grid: {
                    left:"0",
                    right:"-5%",
                    top:"-10%",
                    bottom:"10",
                    containLabel:true
                  },
                xAxis: {
                    type: 'category',
                    boundaryGap:false,
                    axisLine:{
                        lineStyle:{
                            color:"#f6f6f6"
                        }
                    },
                    axisTick:{
                        alignWithLabel: true,
                        inside: true
                    },
                    axisLabel:{
                         color:"#999",
                    },
                    splitLine:{
                        show: true,
                        lineStyle:{
                            color:"#f6f6f6",
                        }
                    },
                    textStyle:{
                        color: "#fc0"
                    },
                    data: opt.xAxis.data,
                    axisPointer:{
                        show:true,
                        label:{
                            show:true,
                            color:"#333",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            shadowColor: "rgba(0, 0, 0, 0)"
                        },
                        lineStyle: {
                            width:0
                        }
                    }
                },
                yAxis: {
                    type: 'category',
                    boundaryGap:false,
                    data:opt.yAxis.data,
                    axisLine:{
                        lineStyle:{
                            color:"#f6f6f6"
                        }
                    },
                    axisTick:{
                        alignWithLabel: true,
                        inside: false
                    },
                    axisLabel:{
                        color:"#999",
                        margin:16,
                    },
                    splitLine:{
                        show: true,
                        lineStyle:{
                            color:"#f6f6f6",
                        }
                    },
                    textStyle:{
                        lineHeight:20,
                        color: "#fc0"
                    },
                },
                series: [{
                    data: opt.series[0].data,
                    type: 'line',
                    symbol: "circle",
                    symbolSize: 8,
                    // hoverAnimation:false,
                    itemStyle : {
                        color:'#7224D8',
                        borderColor:"#fff",
                        borderWidth:2,

                    },
                    lineStyle:{
                        color:'#7224D8'
                    },
                    smooth: true,
                }]
            }
        },
        line1chart(opt) {
            return {
                grid: {
                    left:"0",
                    right:"-6%",
                    top:"20",
                    bottom:"10",
                    containLabel:true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap:false,
                    axisLine:{
                        lineStyle:{
                            color:"#f6f6f6"
                        }
                    },
                    axisTick:{
                        alignWithLabel: true,
                        inside: true
                    },
                    axisLabel:{
                         color:"#999",
                    },
                    textStyle:{
                        color: "#fc0"
                    },
                    data: opt.xAxis.data,
                    axisPointer:{
                        show:true,
                        z:0,
                        label:{
                            show:true,
                            color:"#333",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            shadowColor: "rgba(0, 0, 0, 1)"
                        },
                        lineStyle: {
                            width: 1,
                            color: "rgba(114, 36, 217, 0.38)"
                        }
                    }
                },
                yAxis: {
                    type: 'category',
                    boundaryGap:false,
                    data: opt.yAxis.data,
                    axisLine:{
                        lineStyle:{
                            color:"#fff"
                        }
                    },
                    axisTick:{
                        alignWithLabel: true,
                        inside: false
                    },
                    axisLabel:{
                        color:"#999",
                        margin:15,
                    },
                    splitLine:{
                        show: true,
                        lineStyle:{
                            color:"#f6f6f6",
                        }
                    },
                    textStyle:{
                        lineHeight:20,
                        color: "#fc0"
                    },
                },
                series: [
                    {
                    data: opt.series[0].data,
                    type: 'line',
                    symbol: "circle",
                    symbolSize: 1,
                    showSymbol:false,
                    symbolOffset:[0,"450%"],
                    itemStyle:{
                        color:"#fff",
                    },
                    lineStyle:{
                        color:'#7224D8',
                        width: 1
                    },
                    smooth: true,
                                areaStyle: {
                                    color: {
                                            type: 'linear',
                                            x: 0,
                                            y: 0,
                                            x2: 0,
                                            y2: 1,
                                            colorStops: [{
                                                offset: 0, color: '#AB4AEE' // 0% 处的颜色
                                            }, {
                                                offset: 1, color: '#fff' // 100% 处的颜色
                                            }],
                                            }
                                }
                    },
                    {
                    data: opt.series[1].data,
                    type: 'line',
                    symbol: "circle",
                    symbolSize: 1,
                    showSymbol:false,
                    symbolOffset:[0,"450%"],
                    itemStyle:{
                        color:"#fff",
                    },
                    lineStyle:{
                        color:'#FF8945',
                        width: 1
                    },
                    smooth: true,
                                areaStyle: {
                                    color: {
                                            type: 'linear',
                                            x: 0,
                                            y: 0,
                                            x2: 0,
                                            y2: 1,
                                            colorStops: [{
                                                offset: 0, color: '#FF816C' // 0% 处的颜色
                                            }, {
                                                offset: 1, color: '#fff' // 100% 处的颜色
                                            }],
                                            }
                                }
                }
              ]
          }
        },
        line2chart(opt) {
            return {
                grid: {
                    left:"0",
                    right:"-6%",
                    top:"-10%",
                    bottom:"10",
                    containLabel:true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap:false,
                    axisLine:{
                        lineStyle:{
                            color:"#f6f6f6"
                        }
                    },
                    axisTick:{
                        alignWithLabel: true,
                        inside: true
                    },
                    axisLabel:{
                         color:"#999",
                    },
                    splitLine:{
                        show: true,
                        lineStyle:{
                            color:"#f6f6f6",
                        }
                    },
                    textStyle:{
                        color: "#fc0"
                    },
                    data: opt.xAxis.data,
                    axisPointer:{
                        show:true,
                        z:0,
                        label:{
                            show:true,
                            color:"#333",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            shadowColor: "rgba(0, 0, 0, 1)"
                        },
                        lineStyle: {
                            width: 1,
                            color: "rgba(114, 36, 217, 0.38)"
                        }
                    }
                },
                yAxis: {
                    type: 'category',
                    boundaryGap:false,
                    data:opt.yAxis.data,
                    axisLine:{
                        lineStyle:{
                            color:"#f6f6f6"
                        }
                    },
                    axisTick:{
                        alignWithLabel: true,
                        inside: false
                    },
                    axisLabel:{
                        color:"#999",
                        margin:15,
                    },
                    splitLine:{
                        show: true,
                        lineStyle:{
                            color:"#f6f6f6",
                        }
                    },
                    textStyle:{
                        lineHeight:20,
                        color: "#fc0"
                    },
                },
                series: [{
                    data: opt.series[0].data,
                    type: 'line',
                    symbol: "circle",
                    symbolSize: 8,
                    hoverAnimation:false,
                    itemStyle : {
                        color:'#7224D8',
                        borderColor:"#fff",
                        borderWidth:2,
                    },
                    lineStyle:{
                        color:'#7224D8',
                        width: 1
                    },
                    smooth: true,
                                areaStyle: {
                                    color: {
                                            type: 'linear',
                                            x: 0,
                                            y: 0,
                                            x2: 0,
                                            y2: 1,
                                            colorStops: [{
                                                offset: 0, color: '#AB4AEE' // 0% 处的颜色
                                            }, {
                                                offset: 1, color: '#fff' // 100% 处的颜色
                                            }],
                                            }
                                }
                }]
          }
        },
        piesChart(opt) {
            let data = [];
            opt.legend.forEach(e => {
                data.push({
                   value: e.value,
                   name: e.label,
                   itemStyle:{color: e.color} 
                });
            })

            return {
                series : [
                    {
                        type: 'pie',
                        radius: ['50%', '70%'],
                        center: "50%",
                        data:data,
                        hoverAnimation:true,
                        itemStyle: {
                            borderColor:"#fff",
                            borderWidth:1
                        },
                        label: {
                            show:true,
                            fontSize:12,
                            formatter: "{c|{c}万}  {d|{d}%}",
                            lineHeight:16,
                            rich: {
                                c: {
                                    color: '#666',
                                },
                                d: {
                                    color:"#333",
                                    fontWeight:"bold"
                                }
                            }
                        },
                        labelLine: {
                            show:true,
                            lineStyle:{
                                color:"#DBDBDB",
                            },
                            length:5,
                            // length2:40,
                        },
                    }
                ]
            }
        }
	},
}
        //有type为bar line不用添加图表配置自定义除外
        //第一种传参不会对xy轴添加空格
        // {   
        //     workBreak:true, //x坐标是否换行
        //     type:"bar",
        //     option: {
        //         xAxis: {
        //       data: ['周一 28/6', '周二 8/6', '周三 8/6', '周四 8/6', '周五 8/6', '周六 8/6', '周日 8/6']
        //     },
        //     yAxis: {
        //         data:["0万","1万","2万","3万","4万"]
        //     },
        //     series: [{
        //         data: ["3万", "1万", "3万", "2万", "1万", "2万", "3万"],
        //     }]
        //     }
        // },
        // {   
        //     type:"line",
        //     workBreak:true, //x坐标是否换行
        //     option: {
        //     xdata: ['周一 28/6', '周二 8/6', '周三 8/6', '周四 8/6', '周五 8/6', '周六 8/6', '周日 8/6'],
        //     ydata:["0单","10单","20单","30单","40单"],
        //     series: [{
        //         data: ["10单", "10单", "30单", "20单", "10单", "20单", "10单"]
        //     }]
        //     }
        // },
</script>
<style type="text/css">
.charts{
    height: 100%;
}
</style>