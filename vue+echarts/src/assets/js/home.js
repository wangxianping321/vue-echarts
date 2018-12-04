export default {
  data() {
    return {
      isShow: false,
      columnarData: ['销量'],
      columnarList: ["衬衫", "羊毛衫", "裤子", "高跟鞋", "袜子"],
      colList: [5, 20, 107, 7, 87],
      demo2List: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
      demo2ConList: [
        {value: 335, name: '直接访问'},
        {value: 310, name: '邮件营销'},
        {value: 234, name: '联盟广告'},
        {value: 135, name: '视频广告'},
        {value: 1548, name: '搜索引擎'}
      ],
      pieData: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
      pieceList: [
        {value: 335, name: '直接访问'},
        {value: 310, name: '邮件营销'},
        {value: 234, name: '联盟广告'},
        {value: 135, name: '视频广告'},
        {value: 1548, name: '搜索引擎'}
      ],
      demo5Data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
      demo5Week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      demo5List1: [120, 132, 101, 134, 90, 230, 210],
      demo5List2: [230, 212, 106, 234, 685, 180, 209],
      demo5List3: [120, 132, 109, 210, 150, 531, 169],
      demo5List4: [520, 132, 101, 134, 90, 230, 120],
      demo5List5: [820, 932, 901, 934, 1290, 1330, 1320],
      xData: ['8:00-10:00', '10:00-12:00', '12:00-14:00', '14:00-16:00', '16:00-18:00'],
      yData: [80, 87, 51, 81, 23, 45, 33],
      isFullscreen: false
    }
  },
  mounted() {
    this.Columnar();
    this.demo2();
    this.demo3();
    this.demo4();
    this.demo5();
    this.demo6();
    this.demo7();
    this.demo8();
    this.demo9();
    this.demo10();
    this.demo11();
    this.demo13();
    this.demo14();
    this.demo15();
    this.demo16();
  },
  methods: {
    resizeWorldMapContainer: function () {
      demo12.style.width = window.innerWidth + 'px';
      demo12.style.height = window.innerHeight + 'px';
    },
    Columnar: function () {  //柱状图
      //初始化实例
      var demo1 = this.$echarts.init(document.getElementById('demo1'));
      //指定图表的配置项和数据
      var maxY = Math.max(this.colList);

      var option = {
        title: {
          text: '柱状图demo'
        },
        legend: {
          data: this.columnarData
        },
        xAxis: {
          data: this.columnarList
        },
        yAxis: {},
        toolbox: {
          show: true,
          feature: {  //各工具配置项
            saveAsImage: {},
            dataView: {   //数据视图
              readOnly: false
            },
            restore: {},
            magicType: {  //动态类型切换
              type: ['line', 'bar']
            },
            fullscreen: {
              show: true,
              title: '全屏展示',
              icon: 'image://http://echarts.baidu.com/images/favicon.png',
              onclick: function () {
                this.requestFullscreen()
              }
            }
          }
        },
        series: [{
          name: '销量',
          type: 'bar',
          data: this.colList
        }],
        markPoint: {
          animation: 'true',
          animationThreshold: 3000
        }
      }
      //使用刚指定的配置项和数据显示图表
      demo1.setOption(option)
      window.onresize = demo1.resize;
    },
    demo2option: function (olddivid, newdivid) {  //环形图
      var _this = this
      //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
      this.resizeWorldMapContainer()
      var demo2 = this.$echarts.init(document.getElementById('demo2'));
      var option = {
        title: {
          text: "环形图demo",
          show: true,   //是否显示组件标题 true显示，false隐藏
          link: 'https://www.baidu.com/',   //主标题文本超链接
          target: 'blank',  //指定窗口打开标题链接  self是当前窗口打开，blank是新窗口打开
          x: 'center', //标题居中
          textStyle: {
            color: 'blue',  //主标题颜色
            fontStyle: 'oblique',    //主标题字体风格 italic、oblique斜体  normal 正常
            fontWeight: 'normal',     //主标题文字字体粗细 normal 正常 bold 加粗
            fontFamily: 'Microsoft YaHei',   //主标题文字的字体系列 serif、monospace、Arial、Courier New、 Microsoft YaHei
            fontSize: 16,   //主标题文字的字体大小
            align: 'left',   //文字水平对齐方式 默认自动
            verticalAlign: 'top',   //文字垂直对齐方式 默认自动
            // lineHeight:56     //行高 rich中如果没有设置lineHeight,则会取父层级的lineHeight
            textBorderColor: 'pink',     //文字本身的描边颜色 transparent（透明的）
            textBorderWidth: 1,    //文字本身的描边宽度
            textShadowColor: 'orange',       //文字本身的阴影颜色 transparent（透明的）
            textShadowBlur: 1,    //文字本身的阴影长度
            textShadowOffsetX: 0,     //文字本身的阴影X偏移
            textShadowOffsetY: 0      //文字本身的阴影Y偏移
          },
          subtext: '环形图的副标题',
          sublink: 'https://www.baidu.com/',   //副标题的文本超链接
          subtextStyle: {
            color: 'orange',     //副标题文字的颜色
            fontStyle: 'normal',    //副标题文字字体的风格
            fontWeight: 'normal',    //副标题文字字体的粗细
          },
          triggerEvent: 'false',     //是否触发事件
          padding: 5,    //标题内边距 单位为PX，默认各方向内边距为5 上右下左
          itemGap: 10,    //主副标题之间的间距
          right: 20,    //grid 组件离容器右侧的距离
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a}<br/>{b}:{c}({d}%)"   //a 系列名  b 数据名  c 数据值 d 百分比
        },
        toolbox: {
          show: true,
          feature: {  //各工具配置项
            saveAsImage: {},
            dataView: {   //数据视图
              readOnly: false
            },
            restore: {},
            magicType: {  //动态类型切换
              type: ['line', 'bar']
            },
            myScreen: {
              show: true,
              title: '全屏展示',
              icon: 'image://http://echarts.baidu.com/images/favicon.png',
              // icon:'image://image/full.png',
              onclick: function () {
                var demo2 = document.getElementById(olddivid);
                var demo12div = document.getElementById(newdivid);
                var demo12 = _this.$echarts.init(document.getElementById(newdivid))
                demo12div.style.display = 'block'
                //更新数据
                var option = _this.demo2option(newdivid, olddivid)
                demo2.style.display = 'none'
                demo12.setOption(option);
              }
            }
          }
        },
        legend: {
          type: 'plain',       //plain 普通图例   scroll 可滚动翻页的图例。当图例数量较多是可以使用
          show: 'false',
          width: 'auto',      //图例组件的宽度。默认自适应
          height: 'auto',     //图例组件的高度。默认自适应
          orient: 'vertical',    //图例列表的布局朝向  horizontal（水平）vertical（垂直）
          padding: 5,       //图例内边距
          itemGap: 30,      //图例每项之间的间隔  横向布局时为水平间隔，纵向布局时为纵向间隔。
          itemWidth: 35,   //图例标记的图形宽度
          itemHeight: 24,  //图例标记的图形高度
          selectedMode: true,   //图例选择的模式，控制是否可以通过点击图例改变系列的显示状态 ，默认开启true  false关闭
          inactiveColor: 'pink',  //图例关闭时的颜色，默认#ccc灰色
          x: 'left',    //相对于容器的屏幕X坐标
          data: this.demo2List,   //图例的数据数组
          textStyle: {   //图例的公共文本样式
            color: 'blue',
            fontStyle: 'italic'   //文字字体风格 默认normal
          },
          borderColor: 'green',   //图例的边框颜色
          borderWidth: 1,          //图例的边框宽度
          borderRadius: 5,         //圆角半径  borderRadius: [5, 5, 0, 0] //（顺时针左上，右上，右下，左下）
        },
        series: [
          {
            name: '访问来源',    //系列名称 用于tooltip的显示
            type: 'pie',   //图类型
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,    //是否启用防止标签重叠策略，默认开启，在标签拥挤重叠的情况下会挪动各个标签的位置，防止标签间的重叠。
            label: {
              normal: {
                show: false,
                position: 'center',    //outside(扇区外侧) inside/inner(扇区内部)  center(饼图中心位置)
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            // labelLine: {   //lable position设置为outside时才会显示视觉引导线
            //   length: 30,    //视觉引导线第一段长度
            //   length2:18,    //视觉引导线第二段长度
            //   // smooth:'false'//是否平滑视觉引导线，，默认平滑
            // },
            itemStyle: {
              borderColor: 'red',   //图形的描边颜色
            },
            data: this.demo2ConList,
          }
        ],
        markPoint: {
          animation: 'true',
          animationThreshold: 2000
        }
      }
      //使用刚指定的配置项和数据显示图表
      // demo2.setOption(option)
      return option;
      //用于使chart自适应高度和宽度
      // window.onresize = function () {
      //   //重置容器高宽
      //   this.resizeWorldMapContainer();
      //   demo2.resize();
      // };
    },
    demo2: function () {  //环形图
      var demo2 = this.$echarts.init(document.getElementById('demo2'));
      var option = this.demo2option('demo2', 'demo12');
      //使用刚指定的配置项和数据显示图表
      demo2.setOption(option)
    },
    demo3: function () {
      var demo3 = this.$echarts.init(document.getElementById('demo3'));
      var option = {
        title: {
          text: '饼图demo',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        toolbox: {
          show: true,
          feature: {  //各工具配置项
            saveAsImage: {},
            dataView: {   //数据视图
              readOnly: false
            },
            restore: {},
            magicType: {  //动态类型切换
              type: ['line', 'bar', 'stack', 'tiled']
            }
          }
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.pieData
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: this.pieceList,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            label: {
              position: 'outside'    //设置为outside时会显示视觉引导线
            },
            labelLine: {
              length: 30,    //视觉引导线第一段长度
              length2: 18,    //视觉引导线第二段长度
              // smooth:'false',//是否平滑视觉引导线，，默认平滑
              lineStyle: {
                // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: 'red'    //0%处的颜色
                  }, {
                    offset: 1, color: 'blue'   //100%处的颜色
                  }],
                  globalCoord: false
                },
                // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
                // color: {
                //   type: 'radial',
                //   x: 0.5,
                //   y: 0.5,
                //   r: 0.5,
                //   colorStops: [{
                //     offset: 0, color: 'red' // 0% 处的颜色
                //   }, {
                //     offset: 1, color: 'blue' // 100% 处的颜色
                //   }],
                //   globalCoord: false // 缺省为 false
                // },
                width: 1,   //线宽
                type: 'dashed',   //线的类型 dotted(圆点)dashed(虚线) solid(实线)
              }
            }
          }
        ],
        markPoint: {
          animation: 'true',
          animationThreshold: 3000
        }
      }
      demo3.setOption(option)
    },
    demo4: function () {
      var demo4 = this.$echarts.init(document.getElementById('demo4'));
      var option = {
        backgroundColor: '#394056',
        title: {
          text: '折线图堆叠',   //标题文本
          show: false,   //是否显示组件标题 true显示，false隐藏
          link: 'https://www.baidu.com/',   //主标题文本超链接
          target: 'blank',  //指定窗口打开标题链接  self是当前窗口打开，blank是新窗口打开
          x: 'center', //标题居中
          textStyle: {
            color: "white"
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
          textStyle: {
            color: 'white'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {  //工具栏，内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具
          show: true,
          feature: {
            saveAsImage: {   //保存为图片
              type: 'png',    //保存的图片格式
              name: '',       //保存的文件名称，默认使用title.text作为名称
              backgroundColor: '',      //保存的图片背景色
              excludeComponents: ['toolbox'],    //保存为图片是忽略的组件列表，默认忽略工具栏
              show: true,      //是否显示该工具
              title: '保存为图片'
            },
            dataView: {   //数据视图
              readOnly: false
            },
            restore: {},
            magicType: {  //动态类型切换
              type: ['line', 'bar', 'stack', 'tiled']
            }
          }
        },
        xAxis: {
          type: 'category',  //坐标轴类型  value数值轴，适用于连续数据  category类目轴 适用于离散的类目数据 time时间轴，适用于连续的时序数据 log对数轴，适用于对数数据
          boundaryGap: false,   //坐标轴两边留百策略
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          axisLine: {
            lineStyle: {
              color: "white"
            }
          }
        },
        yAxis: {
          type: 'value',
          nameLocation: 'end',
          axisLine: {
            lineStyle: {
              color: "white"
            }
          }
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ],
        markPoint: {
          animation: 'true',
          animationThreshold: 4000
        }
      }
      demo4.setOption(option)
    },
    demo5: function () {
      var demo5 = this.$echarts.init(document.getElementById('demo5'));
      var option = {
        title: {
          text: '堆叠区域图',
          show: false,   //是否显示组件标题 true显示，false隐藏
        },
        tooltip: {  //提示框组件  可以设置在全局，即 tooltip  可以设置在坐标系中，即 grid.tooltip、polar.tooltip、single.tooltip  可以设置在系列中，即 series.tooltip 可以设置在系列的每个数据项中，即 series.data.tooltip
          trigger: 'axis',
          axisPointer: {  //坐标轴指示器配置项
            type: 'cross',   //指示器类型
            label: {          //坐标轴指示器的文本标签
              backgroundColor: '#6a7985',  //文本标签的背景颜色
              borderWidth: 2,       //文本标签的边框宽度
              borderColor: 'red'     //文本标签的边框颜色。
            }
          }
        },
        legend: {
          data: this.demo5Data
        },
        toolbox: {   //工具栏
          feature: {
            saveAsImage: {   //保存为图片
              type: 'png'
            }
          }
        },
        grid: {  //直角坐标系内绘图网格
          left: '3%',   //grid 组件离容器左侧的距离
          right: '4%',    //grid 组件离容器右侧的距离
          bottom: '3%',     //grid 组件离容器下侧的距离
          containLabel: true   //grid 区域是否包含坐标轴的刻度标签
        },
        xAxis: [
          {
            type: 'category',   //坐标轴类型 'value'  'time'   'log'     'category'
            boundaryGap: false,   //坐标轴两边留白策略
            data: this.demo5Week
          }
        ],
        yAxis: [
          {
            type: 'value'  // 数值轴，适用于连续数据
          }
        ],
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {//单项区域填充样式

            },
            data: this.demo5List1
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: this.demo5List2
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: this.demo5List3
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: this.demo5List4
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'   //标签的位置
              }
            },
            areaStyle: {normal: {}},
            data: this.demo5List5
          }
        ]
      }
      demo5.setOption(option)
    },
    demo6: function () {
      var demo6 = this.$echarts.init(document.getElementById('demo6'))
      var option = {
        title: {
          text: '世界人口总量',
          subtext: '数据来自网络'
        },
        tooltip: {  //提示框组件
          trigger: 'axis',  //触发类型  item 数据项图形触发，主要在散点图，饼图等无类目轴的图标中使用 axis 坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {  //图例组件
          data: ['2011年', '2012年']
        },
        grid: {   //直角坐标系内绘制网格
          left: '3%',   //grid 组件离容器左侧的距离
          right: '4%',   //grid 组件离容器右侧的距离
          bottom: '3%',   //grid 组件离容器下侧的距离
          containLabel: true  //grid 区域是否包含坐标轴的刻度标签
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
        },
        series: [
          {
            name: '2011年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230],
            itemStyle: {
              normal: {   //柱状图渐变series-radar.data.areaStyle
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 1, 0,
                  [
                    {offset: 0, color: '#3977E6'},
                    {offset: 1, color: '#37BBF8'}
                  ]
                )
              }
            }
          },
          {
            name: '2012年',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807],
            itemStyle: {
              normal: {   //柱状图渐变
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 1, 0,
                  [
                    {offset: 0, color: '#E46E39'},
                    {offset: 1, color: '#F6BA9F'}
                  ]
                )
              }
            }
          },
        ]
      }
      demo6.setOption(option)
    },
    demo7: function () {
      var demo7 = this.$echarts.init(document.getElementById('demo7'));
      var option = {
        backgroundColor: '#394056',
        title: {
          text: '航线上座率分析',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#F1F1F3'
          },
          left: '6%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#57617B'
            }
          }
        },
        legend: {
          icon: 'rect',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          data: ['南宁-曼芭', '桂林-曼芭', '南宁-甲米'],
          right: '4%',
          textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          },
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {  //坐标轴轴线相关设置
            lineStyle: {
              color: '#57617B'
            }
          },
          axisLabel: { //坐标轴刻度标签的相关设置
            margin: 10,
            textStyle: {
              fontSize: 14
            }
          },
          splitLine: {  //坐标轴在 grid 区域中的分隔线
            lineStyle: {
              color: '#57617B'
            }
          }
        }],
        series: [{
          name: '南宁-曼芭',
          type: 'line',
          smooth: true,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          areaStyle: {   //区域填充样式
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(137, 189, 27, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(137, 189, 27, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',  //阴影颜色
              shadowBlur: 10   //图形阴影的模糊大小
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(137,189,27)'
            }
          },
          data: [96.3, 96.4, 97.5, 95.6, 98.1, 94.8, 89.6, 94.1, 80.1, 52.4, 75.8, 94.7]
        }, {
          name: '桂林-曼芭',
          type: 'line',
          smooth: true,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          areaStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0, 136, 212, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(0, 136, 212, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(0,136,212)'
            }
          },
          data: [97.3, 99.2, 99.3, 100.0, 99.6, 90.6, 80.0, 91.5, 69.8, 67.5, 90.4, 84.9]
        }, {
          name: '南宁-甲米',
          type: 'line',
          smooth: true,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          areaStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(219, 50, 51, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(219, 50, 51, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(219,50,51)'
            }
          },
          data: [84.2, 81.0, 67.5, 72.1, 43.7, 88.5, 91.9, 101.8, 79.7, 87.6, 92.9, 0]
        },]
      }
      demo7.setOption(option)
    },
    demo8: function () {
      var demo8 = this.$echarts.init(document.getElementById('demo8'));
      var option = {
        backgroundColor: "#111c4e",
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            lineStyle: {
              opacity: 0
            }
          },
          formatter: function (prams) {
            return "办理数：" + prams[0].data
          }
        },
        grid: {
          left: '0%',
          right: '0%',
          bottom: '5%',
          top: '7%',
          height: '85%',
          containLabel: true,
          z: 22
        },
        xAxis: [{
          type: 'category',
          gridIndex: 0,
          data: this.xData,
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {  //坐标轴轴线相关设置
            lineStyle: {
              color: '#0c3b71'
            }
          },
          axisLabel: {  //坐标轴刻度标签的相关设置
            show: true,
            color: 'rgb(170,170,170)',
            fontSize: 16,
            interval: 0,
            rotate: 40
          }
        }],
        yAxis: [{
          type: 'value',
          gridIndex: 0,
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#0c3b71'
            }
          },
          axisLabel: {
            color: 'rgb(170,170,170)',
            formatter: '{value}'
          }
        },
          {
            type: 'value',
            gridIndex: 0,
            splitNumber: 12,
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitArea: {
              show: true,
              areaStyle: {
                color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
              }
            }
          }
        ],
        series: [{
          name: '办理数',
          type: 'bar',
          barWidth: '30%',
          xAxisIndex: 0,
          yAxisIndex: 0,
          label: {
            normal: {
              show: true,
              position: "top",
              textStyle: {
                color: "#ffc72b",
                fontSize: 20
              }
            }
          },
          itemStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(
                0, 0, 0, 1, [{
                  offset: 0,
                  color: '#00feff'
                },
                  {
                    offset: 0.5,
                    color: '#027eff'
                  },
                  {
                    offset: 1,
                    color: '#0286ff'
                  }
                ]
              )
            }
          },
          data: this.yData,
          zlevel: 11
        },
          {
            name: '背景',
            type: 'bar',
            barWidth: '50%',
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: '-135%',
            data: [100, 100, 100, 100, 100, 100, 100],
            itemStyle: {
              normal: {
                color: 'rgba(255,255,255,0.1)'
              }
            },
            zlevel: 9
          },

        ]
      }
      demo8.setOption(option)
    },
    demo9: function () {
      var demo9 = this.$echarts.init(document.getElementById('demo9'));
      var option = {
        // series: [{
        //   type: 'liquidFill',
        //   data: [0.3],
        //   label:{
        //     normal:{
        //       textStyle:{
        //         fontSize:10
        //       }
        //     }
        //   },
        // }]
        series: [{
          type: 'liquidFill',
          data: [0.6, 0.5, 0.4, 0.3],
          radius: '40%',
          shape: 'diamond',
          center: ['25%', '25%'],
          label: {
            normal: {
              textStyle: {
                fontSize: 14
              }
            }
          }
        }, {
          type: 'liquidFill',
          data: [0.6, 0.5, 0.4, 0.3],
          direction: 'left',
          radius: '40%',
          shape: 'rect',
          center: ['75%', '25%'],
          label: {
            normal: {
              textStyle: {
                fontSize: 14
              }
            }
          }
        }, {
          type: 'liquidFill',
          data: [0.6, 0.5, 0.4, 0.3],
          radius: '40%',
          shape: 'roundRect',
          center: ['25%', '75%'],
          label: {
            normal: {
              textStyle: {
                fontSize: 14
              }
            }
          },
          backgroundStyle: {
            borderColor: '#156ACF',
            borderWidth: 1,
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
          },
          outline: {
            show: false
          },
          waveAnimation: false, // 禁止左右波动
        }, {
          type: 'liquidFill',
          data: [0.6, 0.5, 0.4, 0.3],
          radius: '50%',
          shape: 'pin',
          center: ['75%', '75%'],
          amplitude: 0,
          waveAnimation: false,
          label: {
            normal: {
              textStyle: {
                fontSize: 14
              }
            }
          },
          outline: {
            show: false
          },
          backgroundStyle: {
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
          },

        }]
      }

      demo9.setOption(option)
    },
    demo10: function () {
      var demo10 = this.$echarts.init(document.getElementById('demo10'));
      var option = {
        series: [{
          type: 'liquidFill',
          data: [0.6, 0.55, 0.4, 0.25],
          radius: '90%',
          outline: {
            show: false
          },
          backgroundStyle: {
            borderColor: '#156ACF',
            borderWidth: 1,
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
          },
          shape: 'path://M367.855,428.202c-3.674-1.385-7.452-1.966-11.146-1.794c0.659-2.922,0.844-5.85,0.58-8.719 c-0.937-10.407-7.663-19.864-18.063-23.834c-10.697-4.043-22.298-1.168-29.902,6.403c3.015,0.026,6.074,0.594,9.035,1.728 c13.626,5.151,20.465,20.379,15.32,34.004c-1.905,5.02-5.177,9.115-9.22,12.05c-6.951,4.992-16.19,6.536-24.777,3.271 c-13.625-5.137-20.471-20.371-15.32-34.004c0.673-1.768,1.523-3.423,2.526-4.992h-0.014c0,0,0,0,0,0.014 c4.386-6.853,8.145-14.279,11.146-22.187c23.294-61.505-7.689-130.278-69.215-153.579c-61.532-23.293-130.279,7.69-153.579,69.202 c-6.371,16.785-8.679,34.097-7.426,50.901c0.026,0.554,0.079,1.121,0.132,1.688c4.973,57.107,41.767,109.148,98.945,130.793 c58.162,22.008,121.303,6.529,162.839-34.465c7.103-6.893,17.826-9.444,27.679-5.719c11.858,4.491,18.565,16.6,16.719,28.643 c4.438-3.126,8.033-7.564,10.117-13.045C389.751,449.992,382.411,433.709,367.855,428.202z',
          label: {
            normal: {
              position: ['38%', '40%'],
              formatter: function () {
                return 'perfect';
              },
              textStyle: {
                fontSize: 30,
                color: '#D94854'
              }
            }
          }
        }]

      }
      demo10.setOption(option)
    },
    demo11: function () {
      var demo11 = this.$echarts.init(document.getElementById('demo11'))
      var option = {
        backgroundColor: '#04184A',
        series: [{
          type: 'liquidFill',
          //data: [0.6, 0.5, 0.4, 0.3],
          data: [0.6, 0.5, 0.4, 0.3],
          radius: '40%',    //图大小
          // 水球颜色
          color: ['#49d088', '#38b470', '#2aaf66'],
          center: ['25%', '50%'],
          // outline  外边
          outline: {
            // show: false
            borderDistance: 5,
            itemStyle: {
              borderWidth: 5,
              borderColor: '#13FDCE',
            },
          },
          label: {
            normal: {
              // textStyle: {
              color: 'red',
              insideColor: 'yellow',
              fontSize: 28
              // }
            }
          },
          // 内图 背景色 边
          backgroundStyle: {
            color: 'rgba(4,24,74,0.8)',
            // borderWidth: 5,
            // borderColor: 'red',
          }
        }, {
          type: 'liquidFill',
          //data: [0.6, 0.5, 0.4, 0.3],
          data: [0.3, 0.2, 0.1, 0.05],
          radius: '40%',  //图大小
          // 水球颜色
          color: ['#FE5555', '#F07581', '#FB5E61'],
          center: ['50%', '50%'],
          // outline  外边
          outline: {
            // show: false
            borderDistance: 5,
            itemStyle: {
              borderWidth: 5,
              borderColor: '#FE5555',
            },
          },
          label: {
            normal: {
              textStyle: {
                color: 'red',
                insideColor: 'yellow',
                fontSize: 28
              }
            }
          },
          // 内图 背景色 边
          backgroundStyle: {
            color: 'rgba(4,24,74,0.8)',
            // borderWidth: 5,
            // borderColor: 'red',
          }
        }, {
          type: 'liquidFill',
          //data: [0.6, 0.5, 0.4, 0.3],
          data: [0.1, 0.05, 0.25],
          radius: '40%',   //图大小
          // 水球颜色
          color: ['#FFBF11', '#F4B30E', '#EACE36'],
          center: ['75%', '50%'],
          // outline  外边
          outline: {
            // show: false
            borderDistance: 5,
            itemStyle: {
              borderWidth: 5,
              borderColor: '#FFBF11',
            },
          },
          label: {
            normal: {
              textStyle: {
                color: 'red',
                insideColor: 'yellow',
                fontSize: 28
              }
            }
          },
          // 内图 背景色 边
          backgroundStyle: {
            color: 'rgba(4,24,74,0.8)',
            // borderWidth: 5,
            // borderColor: 'red',
          }
        }]
      }
      demo11.setOption(option)
    },
    demo13: function () {
      var demo13 = this.$echarts.init(document.getElementById('demo13'));
      var option = {
        backgroundColor: "#05224d",
        tooltip: {},
        grid: {
          top: '8%',
          left: '1%',
          right: '1%',
          bottom: '8%',
          containLabel: true,
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
              color: '#233e64'
            },
          },
          axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
              color: '#6a9cd5',
              margin: 15,
            },
          },
          axisTick: {show: false,},
          data: ['6.1', '6.2', '6.3', '6.4', '6.5', '6.6', '6.7'],
        }],
        yAxis: [{
          type: 'value',
          min: 0,
          max: 140,
          splitNumber: 7,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#233e64'
            }
          },
          axisLine: {show: false,},
          axisLabel: {
            margin: 20,
            textStyle: {
              color: '#6a9cd5',

            },
          },
          axisTick: {show: false,},
        }],
        series: [{
          name: '异常流量',
          type: 'line',
          smooth: true, //是否平滑曲线显示
// 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
          symbolSize: 0,

          lineStyle: {
            normal: {
              color: "#3deaff"   // 线条颜色
            }
          },
          areaStyle: { //区域填充样式
            normal: {
              //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {offset: 0, color: 'rgba(61,234,255, 0.9)'},
                {offset: 0.7, color: 'rgba(61,234,255, 0)'}
              ], false),

              shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
              shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
          },
          data: [90, 105, 84, 125, 110, 92, 98]
        }]
      }
      demo13.setOption(option)
    },
    demo14: function () {
      var demo14 = this.$echarts.init(document.getElementById('demo14'));
      var gain = 0.9;
      var gap = 0;
      var myColor = ['#e63810', '#ff6b00', '#e3b61f', '#13b5b1'];
      var myBgColor = ['rgba(230,56,16,0.2)', 'rgba(255,107,0,0.2)', 'rgba(227,182,31,0.2)', 'rgba(19,181,177,0.2)'];
      //柱子数据
      var data = [8, 15, 10, 6];
      var option = {
        // backgroundColor:'rgba(0,0,0,0.8)',
        grid: {
          left: '3%',
          top: '10%',
          right: '2%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(160,160,160,0.3)',
            }
          },
          axisLabel: {
            textStyle: {
              color: function (param, index) {
                return myColor[index]
              },
              fontSize: 13 * gain,
            }
          },
          data: ['01', '02', '03', '04']
        }, {
          type: 'category',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitArea: {
            show: false
          },
          splitLine: {
            show: false
          },
          data: []
        },
        ],
        yAxis: {
          type: 'value',
          name: '单位：件',
          nameGap: 35 + gap,
          nameTextStyle: {
            color: 'red',
            fontSize: 16 * gain,
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
              // color:'rgba(160,160,160,0.3)',
            }
          },
          axisLabel: {
            textStyle: {
              // color: 'rgba(255,255,255,0.8)',
              fontSize: 14 * gain,
            }
          }
        },
        series: [{
          type: 'bar',
          xAxisIndex: 1,
          itemStyle: {
            normal: {
              show: true,
              color: function (params) {
                var num = myBgColor.length;
                return myBgColor[params.dataIndex % num]
              },
              barBorderRadius: 50,
              borderWidth: 0,
              borderColor: '#333',
            }
          },
          label: {
            normal: {
              show: true,
              formatter: function (params) {
                var stuNum = 0;
                data.forEach(function (value, index, array) {
                  if (params.dataIndex == index) {
                    stuNum = value;
                  }
                })
                return stuNum;
              },
              position: 'top',
              textStyle: {
                color: function (params) {
                  var num = myBgColor.length;
                  return myBgColor[params.dataIndex % num]
                },
                fontSize: 25 * gain,
              }
            }
          },
          barWidth: '25%',
          data: [33, 33, 33, 33]
        },
          {
            type: 'bar',
            itemStyle: {
              normal: {
                show: true,
                color: function (params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num]
                },
                barBorderRadius: 50,
                borderWidth: 0,
                borderColor: '#333',
              }
            },
            label: {
              normal: {
                show: false,

              }
            },
            barWidth: '25%',
            data: data
          }
        ]
      }
      demo14.setOption(option)
    },
    demo15: function () {
      var demo15 = this.$echarts.init(document.getElementById('demo15'));
      var option = {
        series: [
          {
            type: 'liquidFill',
            data: [0.42, 0.5, 0.4, 0.3],
            direction: 'left',
            radius: '40%',
            shape: 'arrow',
            center: ['25%', '25%'],
            label: {
              normal: {
                textStyle: {
                  color: 'red',
                  insideColor: 'yellow',
                  fontSize: 26
                },
              },
            },
          },
          {
            type: 'liquidFill',
            data: [0.43, 0.5, 0.4, 0.3],
            radius: '40%',
            shape: 'circle',
            center: ['25%', '75%'],
            label: {
              normal: {
                textStyle: {
                  fontSize: 26
                }
              }
            },
            backgroundStyle: {
              borderColor: '#156ACF',
              borderWidth: 1,
              shadowColor: 'rgba(0, 0, 0, 0.4)',
              shadowBlur: 20
            },
            outline: {
              show: false
            },
            //关闭动画
            waveAnimation: true,
          }]
      }
      demo15.setOption(option)
    },
    demo16: function () {
      var demo16 = this.$echarts.init(document.getElementById('demo16'));
      var leiData = ['三会一课', '远程教育', '党费缴纳', '发展党员', '社会服务'];
      var jdData = ['新碶', '小港', '大碶', '柴桥', '霞浦', '戚家山', '春晓', '梅山', '白峰', '郭巨', '区直机关', '教育局', '卫计局', '公安局', '保税局', '开发区', '市场', '交通', '农林', '发改委', '体育局', '综合行政', '广播电视', '住房', '商务局', '供销社', '分公司', '邮政', '水利局', '粮食公司', '公建中心', '生态湿地']
      var data1 = [100, 80, 30, 120, 90, 98, 99, 99, 110, 140, 89, 100, 80, 30, 120, 90, 98, 99, 99, 110, 140, 89, 100, 80, 30, 120, 90, 98, 99, 99, 110, 140];
      var data2 = [80, 90, 90, 10, 90, 160, 96, 120, 140, 110, 110, 80, 90, 90, 10, 90, 160, 96, 120, 140, 110, 110, 80, 90, 90, 10, 90, 160, 96, 120, 140, 110]
      var data3 = [80, 90, 97, 120, 90, 97, 99, 98, 120, 110, 90, 80, 90, 97, 120, 90, 97, 99, 98, 120, 110, 90, 80, 90, 97, 120, 90, 97, 99, 98, 120, 110]
      var data4 = [90, 160, 130, 120, 100, 98, 80, 90, 110, 140, 90, 90, 160, 130, 120, 100, 98, 80, 90, 110, 140, 90, 90, 160, 130, 120, 100, 98, 80, 90, 110, 140]
      var data5 = [100, 90, 80, 120, 90, 90, 80, 60, 170, 180, 120, 100, 90, 80, 120, 90, 90, 80, 60, 170, 180, 120, 100, 90, 80, 120, 90, 90, 80, 60, 170, 180]
      var option = {
        baseOption: {
          timeline: {
            data: leiData,//第一个数据空白很重要
            axisType: 'category',
            show: true,
            autoPlay: true,
            playInterval: 1500,
          },
          backgroundColor: '#1b1b1b',
          title: {

            'text': '',
            'subtext': '',
            textStyle: {
              color: '#fff'
            },
            left: 'center'
          },
          tooltip: {
            'trigger': 'axis'
          },

          calculable: true,
          grid: {
            left: '2%',
            right: '2%',
            bottom: '12%',
            top: '4%',
            containLabel: true
          },
          label: {
            normal: {
              textStyle: {
                color: '#fff'
              }
            }
          },
          xAxis: [{
            'type': 'category',
            data: jdData,
            nameTextStyle: {
              color: '#fff'
            },
            axisLabel: {
              rotate: 45,
              textStyle: {
                fontSize: 12,
                color: '#56617b',
              },
              interval: 0
            },
            axisLine: {
              lineStyle: {
                color: '#56617b'
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#2e3547'
              }
            },

          }],
          yAxis: [{
            'type': 'value',
            'name': '',
            splitNumber: 8,  //坐标轴的分割段数
            nameTextStyle: {
              color: '#56617b'
            },
            axisLine: {
              lineStyle: {
                color: '#56617b'
              }
            },
            axisLabel: {
              formatter: '{value} '
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#56617b'
              }
            },
          }],
          series: [{
            'name': '',
            'type': 'bar',
            markLine: {
              label: {
                normal: {
                  show: false
                }
              },
              lineStyle: {
                normal: {
                  color: 'red',
                  width: 3
                }
              },
            },
            barWidth: '30%',
            itemStyle: {
              normal: {
                color: function (params) {
                  // build a color map as your need.
                  var colorList = [
                    '#eb4848', '#eb6449', '#eb7f49', '#eb9a49', '#ebb549',
                    '#ebd049', '#ebeb49', '#d0eb49', '#b5eb49', '#9aeb49',
                    '#7feb49', '#64eb49', '#49eb49', '#49eb64', '#49eb7f',

                    '#49eb9a', '#49ebb5', '#49ebd0', '#49ebeb', '#49d0eb',
                    '#49b5eb', '#499aeb', '#497feb', '#4964eb', '#4949eb',
                    '#6449eb', '#7f49eb', '#9a49eb', '#b549eb', '#d049eb',
                    '#eb49eb', '#eb49d0'
                  ];
                  return colorList[params.dataIndex]
                },

              }
            },
          }]
        },
        options: [{
          title: {
            'text': ''
          },
          series: [{
            'data': data1
          }]
        }, {
          title: {
            'text': ''
          },
          series: [{
            'data': data2
          }]
        }, {
          title: {
            'text': ''
          },
          series: [{
            'data': data3
          }]
        }, {
          title: {
            'text': ''
          },
          series: [{
            'data': data4
          }]
        }, {
          title: {
            'text': ''
          },
          series: [{
            'data': data5
          }]
        },]
      }
      demo16.setOption(option)
    }
  }
}
