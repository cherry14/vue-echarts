<template>
 <div>
    <div id="app" style="width:670px;height:450px">
   
    
  </div>
   <div id="chart_example">

 

    </div>
 </div>
</template>

<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
require('echarts/lib/chart/pie')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: 'app',
  data() {
    return {
      msg: 'helle echarts'
    }
  },
 created(){
   this.drawLine() 
   this.pie()
 },
 mounted() {
    var drawLine = this.drawLine();
    var pie = this.pie()
    window.onresize = function temp() {
    drawLine.resize(); //重绘，窗口大小改动时
    pie.resize();
    };


    //下面是饼状图代码
    // let this_ = this;
        
       
},
methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('app'))
      // 绘制图表
      myChart.setOption({
        title: { text: '第一个图表' },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'line',
          data: [5, 200, 36, 10, 10, 20]
        }]
      });
　　　 return myChart

   },
   pie(){
     let myCharts = echarts.init(document.getElementById('chart_example'))
     
     myCharts.setOption({
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        }
    ]
});
        return muCharts
        
            
        //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）

      
   }
  } 
}

</script>

<style lang="scss" scoped>
#app{
  width:670px;
  height:450px;
  color:gray;
  background-color: rgb(238, 211, 211);
  margin: 20px auto;
}
#chart_example{

    width: 50%;

    height: 500px;

    border: 1px solid red;

    margin: 0 auto;

  }
</style>
