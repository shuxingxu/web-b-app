<template lang="html">
	<div ref="echarts" style="width:100%;height:300px"></div>
</template>
<script>
//使用说明  <chart :xdata="[1,2,3]" :ydata="[22,33,44]" :colors="['#FFA774','#FF5E00']"></chart>   颜色第一个是头部颜色，第二个是底部颜色
var echarts = require('echarts')
	export default {
		props: {
			xdata:Array,
			ydata:Array,
			colors:Array
		},
		data() {
			return {
                // x:[],
                // y:[]
			}
		},
		computed: {

		},
		watch: {
            // xdata:function(newd,oldd){
            //     this.x=newd
            // },
            // ydata:function(newd,oldd){
            //     this.y=newd
            // }
		},
		methods: {
		},
		mounted() {
            // 基于准备好的dom，初始化echarts实例
            // this.data.forEach(item=>this.date.push(item.date));
            var myChart = echarts.init(this.$refs.echarts);
            // 绘制图表
            myChart.setOption({
                title: {
                    
                },
                tooltip: {
                    show:false
                },
                grid:{
                    left:80
                },
                xAxis: {
                    data: [...this.xdata],
                    axisLabel:{
                        interval:0,
                        color:'#999'
                    },
                    axisTick:{       //x轴刻度线
                    show:false
                    },
                    splitLine:{
                        show:false
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#999'
                        }
                    },
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
                    splitLine:{
                        show:false
                    },
                    axisLabel:{
                        interval:0,
                        color:'#999'
                    },
                    axisTick:{       //y轴刻度线
                    show:false
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#999'
                        }
                    }
                },
                series: [{
                    name: '销量',
                    type: 'bar',
                    // label: {
                    //     normal: {
                    //         show: true,
                    //         position: 'top'
                    //     },
                    //     fontSize:11
                    //  },
                    data: [...this.ydata]
                },
                {
                data: [...this.ydata],
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
                label:{
                    normal: {
                        show: true,
                        color:'#333',
                        position: 'top',
                        fontSize:11,
                        distance:8
                    }
                },
            }],
                itemStyle: {
                    //柱形图圆角，初始化效果
                    barBorderRadius:[30,30,0,0],
                    color:new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: this.colors[0]},
                            {offset: 1, color: this.colors[1]}
                        ]
                    )
                },
                barMaxWidth:"10",
                markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            });
            window.onresize = myChart.resize;
            // console.log(this.x+this.y)
		},
		beforeDestroy() {
		}
	}
</script>
<style lang="css">

</style>