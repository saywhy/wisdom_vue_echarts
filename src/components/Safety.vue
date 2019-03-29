<template>
    <!-- 安全管理 -->
    <div class="Safety">
        <div class="safety_left safety_item">
            <div class="item_table">
                <div class="table_top">
                    <p>安全交底</p>
                </div>
                <div class="table_content">
                    <table align="center" border=1 cellspacing=0>
                        <tr>
                            <th>序号</th>
                            <th>交底名称</th>
                            <th>专业</th>
                            <th>交底状态</th>
                            <th>已接受交底人</th>
                            <th>未接受交底人</th>
                        </tr>
                        <tr v-for="(item,index) in DiscloseData" class="tbody_tr" :class="tableRowClassName(index)">
                            <td>{{index+1}}</td>
                            <td>{{item.name}}</td>
                            <td>{{item.profession}}</td>
                            <td>{{item.state}}</td>
                            <td>{{item.accepted}}</td>
                            <td>{{item.unaccepted}}</td>
                        </tr>
                    </table>
                </div>
                <div class="table_top">
                    <p>数据分析</p>
                </div>
                <div class="item_bom">
                    <div class="safety_left_left">
                        <div class="safety_left_title">
                            <span>各工种交底次数统计</span>
                            <img src="../assets/img/3/1.png" alt="">
                        </div>
                        <!-- 柱状图 -->
                        <div class="echarts_title">
                            <span class="echarts_title_left">单位：XXXX</span>
                            <span class="echarts_title_right">
                                <span class="echarts_title_right_left"></span>
                                <span class="echarts_title_right_right">XXXX</span>
                            </span>
                        </div>
                        <div id="count">
                        </div>
                    </div>
                    <div class="safety_left_right">
                        <div class="safety_left_title">
                            <span>接受交底率统计</span>
                            <img src="../assets/img/3/1.png" alt="">
                        </div>
                        <!-- 雷达图 -->
                        <div id="radar">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 中间 -->
        <div class="safety_mid safety_item">
            <div class="item_table">
                <div class="table_top">
                    <p>安全整改</p>
                </div>
                <div class="table_content">
                    <table align="center" border=1 cellspacing=0>
                        <tr>
                            <th>序号</th>
                            <th>整改单名称</th>
                            <th>整改状态</th>
                            <th>整改时间</th>
                            <th>问题类型</th>
                        </tr>
                        <tr v-for="(item,index) in RectificationData" class="tbody_tr" :class="tableRowClassName(index)">
                            <td>{{index+1}}</td>
                            <td>{{item.name}}</td>
                            <td>{{item.state}}</td>
                            <td>{{item.time}}</td>
                            <td>{{item.type}}</td>
                        </tr>
                    </table>
                </div>
                <div class="table_top">
                    <p>数据统计</p>
                </div>
                <div class="item_bom">
                    <div class="safety_mid_top">
                        <div class="safety_left_title">
                            <span>问题类型统计</span>
                            <img src="../assets/img/3/2.png" alt="">
                        </div>
                        <!-- 中下-柱状图 -->
                        <div class="safety_mid_top_echarts" id="question_type">
                        </div>
                    </div>
                    <div class="safety_mid_bom">
                        <div class="safety_left_title safety_mid_bom_left">
                            <span>执行效果数据统计</span>
                            <img src="../assets/img/3/1.png" alt="">
                        </div>
                        <div class="safety_left_title safety_mid_bom_left">
                            <span>各类安全问题占比</span>
                            <img src="../assets/img/3/1.png" alt="">
                        </div>
                        <!-- 中下-左边饼图-执行效果 -->
                        <div class="safety_mid_bom_left left" id="execution_effect">
                        </div>
                        <!-- 中下-右边饼图-安全问题 -->
                        <div class="safety_mid_bom_left right" id="safety_problem">
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!-- 右边 -->
        <div class="safety_right safety_item">
            <div class="table_top">
                <p>安全监测数据</p>
            </div>
            <div class="safety_right_content">
                <div class="safety_right_item" v-for="item in safetyRightData">
                    <div class="safety_right_title">
                        <span>{{item.name}}</span>
                        <img src="../assets/img/3/2.png" alt="">
                    </div>
                    <!-- 横向柱状图 -->
                    <div class="safety_right_item_echarts" :id="item.id">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style  lang="less">
@media screen and (max-width: 1920px) {
  .Safety {
    color: #000;
    width: 100%;
    height: 830px;
    .safety_item {
      float: left;
      width: 595px;
      height: 100%;
      background: url(../assets/img/3/item_bg.png) no-repeat 0px 0px;
      background-size: 100% 100%;
      -moz-background-size: 100% 100%;
      padding: 25px;
      .item_table {
        height: 355px;
        .table_top {
          height: 30px;
          width: 145px;
          margin-bottom: 17px;
          background: url(../assets/img/1/title_erji.png) no-repeat 0px 0px;
          background-size: 100% 100%;
          -moz-background-size: 100% 100%;
          p {
            font-size: 16px;
            color: #fff;
            text-align: center;
            line-height: 30px;
          }
        }
        .table_content {
          height: 308px;
          padding-right: 10px;
          margin-bottom: 40px;
          overflow-y: auto;
          table,
          td,
          th,
          tr {
            font-size: 14px;
            color: #fff;
          }
          tr {
            height: 37px;
          }
          td,
          tr,
          th {
            text-align: center;
            height: 37px;
            line-height: 37px;
          }
          table {
            width: 100%;
            border: 1px solid rgba(42, 196, 237, 0.5);
            background-color: rgba(36, 211, 253, 0.1);
            text-align: center;
            border-radius: 3px;
          }
          .warning-row {
            background: rgba(36, 211, 253, 0.1);
          }
          .success-row {
            background: rgba(42, 196, 237, 0.5);
          }
        }
        .table_content::-webkit-scrollbar-track-piece {
          //滚动条凹槽的颜色，还可以设置边框属性
          border-radius: 10px;
          background-color: rgba(7, 48, 95, 0.88);
        }
        .table_content::-webkit-scrollbar {
          /*滚动条整体样式*/
          //滚动条的宽度
          width: 5px;
          height: 1px;
        }
        .table_content::-webkit-scrollbar-thumb {
          //滚动条的设置
          background-color: rgba(117, 193, 239, 0.73);
          border-radius: 10px;
          height: 24px;
          //   opacity: 0.73;
        }
        .table_content::-webkit-scrollbar-thumb:hover {
          background-color: #bbb;
        }
        .item_bom {
          height: 345px;
          div {
            font-size: 14px;
            color: #fff;
          }
          .safety_left_title {
            height: 40px;
            position: relative;
            span {
              color: #ffffff;
              font-size: 14px;
              line-height: 30px;
              background: linear-gradient(
                to bottom,
                rgba(255, 255, 255, 1) 0%,
                rgba(134, 134, 134, 0.65) 100%
              );
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
              text-fill-color: transparent;
            }
            img {
              width: 100%;
              height: 20px;
              position: absolute;
              left: -7px;
              bottom: 0px;
            }
          }
        }
      }
    }
    // 左边
    .safety_left {
      width: 595px;
      .safety_left_left {
        height: 100%;
        float: left;
        width: 50%;
        .echarts_title {
          height: 25px;
          .echarts_title_left {
            float: left;
            height: 100%;
            font-size: 8px;
          }
          .echarts_title_right {
            float: right;
            .echarts_title_right_left {
              display: inline-block;
              margin-right: 10px;
              line-height: 25px;
              width: 10px;
              height: 10px;
              background-color: #80f4fe;
            }
            .echarts_title_right_right {
              height: 100%;
              font-size: 8px;
              color: #fff;
            }
          }
        }
        #count {
          height: 280px;
          width: 100%;
        }
      }
      .safety_left_right {
        height: 100%;
        float: right;
        width: 50%;
        #radar {
          height: 305px;
          width: 100%;
        }
      }
    }
    // 中间
    .safety_mid {
      width: 595px;
      margin: 0 33px;
      .safety_mid_top {
        height: 160px;
        margin-bottom: 5px;
        .safety_mid_top_echarts {
          height: 120px;
        }
      }
      .safety_mid_bom {
        height: 180px;
        .safety_mid_bom_left {
          width: 50%;
          float: left;
        }
        .left,
        .right {
          height: 140px;
        }
      }
    }
    // 右边
    .safety_right {
      width: 595px;
      .table_top {
        height: 30px;
        width: 145px;
        margin-bottom: 17px;
        background: url(../assets/img/1/title_erji.png) no-repeat 0px 0px;
        background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        p {
          font-size: 16px;
          color: #fff;
          text-align: center;
          line-height: 30px;
        }
      }
      .safety_right_content {
        height: 740px;
        overflow-y: auto;
        .safety_right_item {
          height: 246px;
          .safety_right_title {
            height: 40px;
            position: relative;
            span {
              color: #ffffff;
              font-size: 14px;
              line-height: 30px;
              background: linear-gradient(
                to bottom,
                rgba(255, 255, 255, 1) 0%,
                rgba(134, 134, 134, 0.65) 100%
              );
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
              text-fill-color: transparent;
            }
            img {
              width: 100%;
              height: 20px;
              position: absolute;
              left: -7px;
              bottom: 0px;
            }
          }
          .safety_right_item_echarts {
            height: 206px;
          }
        }
      }
      .safety_right_content::-webkit-scrollbar-track-piece {
        //滚动条凹槽的颜色，还可以设置边框属性
        border-radius: 10px;
        background-color: rgba(7, 48, 95, 0.88);
      }
      .safety_right_content::-webkit-scrollbar {
        /*滚动条整体样式*/
        //滚动条的宽度
        width: 5px;
        height: 1px;
      }
      .safety_right_content::-webkit-scrollbar-thumb {
        //滚动条的设置
        background-color: rgba(117, 193, 239, 0.73);
        border-radius: 10px;
        height: 24px;
        //   opacity: 0.73;
      }
      .safety_right_content::-webkit-scrollbar-thumb:hover {
        background-color: #bbb;
      }
    }
  }
}
@media screen and (min-width: 1930px) {
}
</style>
<script>
var echarts = require('echarts');
export default {
    components: {
    },
    name: 'Safety',
    data() {
        return {
            activeIndex: '1',
            DiscloseData: [
                {
                    index: '1',
                    name: '交底名称',
                    profession: '专业',
                    state: '交底状态',
                    accepted: '已接受交底人',
                    unaccepted: '未接受交底人',
                }, {
                    index: '2',
                    name: '交底名称',
                    profession: '专业',
                    state: '交底状态',
                    accepted: '已接受交底人',
                    unaccepted: '未接受交底人',
                }, {
                    index: '3',
                    name: '交底名称',
                    profession: '专业',
                    state: '交底状态',
                    accepted: '已接受交底人',
                    unaccepted: '未接受交底人',
                }, {
                    index: '4',
                    name: '交底名称',
                    profession: '专业',
                    state: '交底状态',
                    accepted: '已接受交底人',
                    unaccepted: '未接受交底人',
                }, {
                    index: '5',
                    name: '交底名称',
                    profession: '专业',
                    state: '交底状态',
                    accepted: '已接受交底人',
                    unaccepted: '未接受交底人',
                }, {
                    index: '6',
                    name: '交底名称',
                    profession: '专业',
                    state: '交底状态',
                    accepted: '已接受交底人',
                    unaccepted: '未接受交底人',
                }, {
                    index: '7',
                    name: '交底名称',
                    profession: '专业',
                    state: '交底状态',
                    accepted: '已接受交底人',
                    unaccepted: '未接受交底人',
                }, {
                    index: '8',
                    name: '交底名称',
                    profession: '专业',
                    state: '交底状态',
                    accepted: '已接受交底人',
                    unaccepted: '未接受交底人',
                }, {
                    index: '9',
                    name: '交底名称',
                    profession: '专业',
                    state: '交底状态',
                    accepted: '已接受交底人',
                    unaccepted: '未接受交底人',
                },
            ],
            RectificationData: [
                {
                    index: '1',
                    name: '整改单名称',
                    state: '整改状态',
                    time: '整改时间',
                    type: '问题类型',
                }, {
                    index: '2',
                    name: '整改单名称',
                    state: '整改状态',
                    time: '整改时间',
                    type: '问题类型',
                }, {
                    index: '3',
                    name: '整改单名称',
                    state: '整改状态',
                    time: '整改时间',
                    type: '问题类型',
                }, {
                    index: '4',
                    name: '整改单名称',
                    state: '整改状态',
                    time: '整改时间',
                    type: '问题类型',
                }, {
                    index: '5',
                    name: '整改单名称',
                    state: '整改状态',
                    time: '整改时间',
                    type: '问题类型',
                }, {
                    index: '6',
                    name: '整改单名称',
                    state: '整改状态',
                    time: '整改时间',
                    type: '问题类型',
                }, {
                    index: '7',
                    name: '整改单名称',
                    state: '整改状态',
                    time: '整改时间',
                    type: '问题类型',
                }, {
                    index: '8',
                    name: '整改单名称',
                    state: '整改状态',
                    time: '整改时间',
                    type: '问题类型',
                }, {
                    index: '9',
                    name: '整改单名称',
                    state: '整改状态',
                    time: '整改时间',
                    type: '问题类型',
                },
            ],
            safetyRightData: [
                {
                    id: 'safety1',
                    name: '外架荷载数据（超载报警发短信）',
                    time: ['02-14', '02-15', '02-16', '02-17', '02-18', '02-19', '02-20'],
                    value: [73, 68, 10, 30, 30, 20, 10]
                },
                {
                    id: 'safety2',
                    name: '高支模架子荷载（超载报警）',
                    time: ['02-14', '02-15', '02-16', '02-17', '02-18', '02-19', '02-20'],
                    value: [20, 10, 68, 73, 68, 10, 30]

                },
                {
                    id: 'safety3',
                    name: '卸料平台荷载（超载报警）',
                    time: ['02-14', '02-15', '02-16', '02-17', '02-18', '02-19', '02-20'],
                    value: [10, 30, 73, 20, 10, 68, 10,]

                },
                {
                    id: 'safety4',
                    name: '高支模架子荷载（超载报警）',
                    time: ['02-14', '02-15', '02-16', '02-17', '02-18', '02-19', '02-20'],
                    value: [68, 30, 73, 30, 10, 73, 68]
                },
            ]
        }
    },
    mounted() {
        this.count_echarts();
        this.radar_echarts();
        // 中下
        this.radar_echarts();
        this.question_type_echarts();
        this.execution_effect_echarts();
        this.safety_problem_echarts();
        // 右边
        this.safety_right_bar_echarts();
    },
    methods: {
        tableRowClassName(index) {
            if (index % 2 == 0) {
                return 'warning-row';
            } else {
                return 'success-row';
            }
            return '';
        },
        count_echarts() {
            var mychart = echarts.init(document.getElementById("count"));
            var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    top: '5%',
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: false,
                        },
                        axisLabel: {
                            color: '#7C97AD',
                            interval: 0,
                            textStyle: {
                                align: 'center',
                                baseline: 'middle'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                // 设置x轴颜色
                                color: '#7C97AD'
                            },
                        },
                        data: ['02-14', '02-15', '02-16', '02-17', '02-18'],
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false,
                        },
                        splitLine: {
                            show: true,
                            interval: 'auto', //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                            maxInterval: 3600 * 24 * 1000,
                            lineStyle: {
                                color: '#204D79'
                            }
                        },
                        axisLabel: {
                            color: '#426587'
                        }
                    }
                ],
                series: [
                    {
                        name: '交底次数',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: '#80f4fe',
                            }
                        },
                        data: [73, 68, 10, 30, 20]
                    }
                ]
            };
            mychart.setOption(option, true);
        },
        // 雷达图
        radar_echarts() {
            var mychart = echarts.init(document.getElementById("radar"));
            var option = {
                tooltip: {},
                grid: {
                    top: '5%',
                    left: '5%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },

                radar: {
                    // shape: 'circle',
                    radius: "60%",
                    splitNumber: 4, // 雷达图圈数设置
                    splitArea: {
                        areaStyle: {
                            color: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)'],
                            shadowColor: 'rgba(0, 100, 0, 0.3)'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(47,230,255,.4)',
                            opacity: 1,
                            width: 1
                        },
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#6c6c6c',
                            type: "solid",
                        }
                    },
                    indicator: [
                        { name: 'ales', max: 6500, },
                        { name: 'Administration', max: 16000 },
                        { name: 'Information', max: 30000 },
                        { name: 'Customer', max: 38000 },
                        { name: 'Development', max: 52000 },
                        { name: 'Marketing', max: 25000 }
                    ],

                },
                series: [{
                    name: '预算',
                    type: 'radar',
                    symbolSize: 2, // 拐点的大小
                    areaStyle: {
                        normal: {
                            color: {
                                colorStops: [{
                                    offset: 0, color: 'rgba(255, 229, 126, .8)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(255, 229, 126,.14)' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        }
                    },
                    label: {
                        // show: true
                    },
                    itemStyle: {
                        color: '',
                        borderColor: '#2fe6ff'
                    },
                    lineStyle: {
                        color: 'rgba(255, 229, 126, 1)'
                    },
                    data: [
                        {
                            value: [4300, 10000, 28000, 35000, 50000, 19000],
                            name: '预算分配（Allocated Budget）'
                        }
                    ]
                }]
            };
            mychart.setOption(option, true);
        },
        // 中下-柱状图-问题类型
        question_type_echarts() {
            var mychart = echarts.init(document.getElementById("question_type"));
            var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    top: '5%',
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: false,
                        },
                        axisLabel: {
                            color: '#7C97AD',
                            interval: 0,
                            textStyle: {
                                align: 'center',
                                baseline: 'middle'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                // 设置x轴颜色
                                color: '#7C97AD'
                            },
                        },
                        data: ['02-14', '02-15', '02-16', '02-17', '02-18', '02-19', '02-20', '02-21', '02-22', '02-23', '02-24'],
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false,
                        },
                        splitLine: {
                            show: true,
                            interval: 'auto', //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                            maxInterval: 3600 * 24 * 1000,
                            lineStyle: {
                                color: 'rgba(32,77,121,.3)'
                            }
                        },
                        axisLabel: {
                            color: '#426587'
                        }
                    }
                ],
                series: [
                    {
                        name: '交底次数',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: '#80f4fe',
                            }
                        },
                        data: [73, 68, 73, 68, 10, 30, 20, 10, 30, 20, 10]
                    }
                ]
            };
            mychart.setOption(option, true);

        },
        // 中下-左边饼图-执行效果
        execution_effect_echarts() {
            var mychart = echarts.init(document.getElementById("execution_effect"));
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                grid: {
                    top: '5%',
                    left: '3%',
                    right: '10%',
                    bottom: '3%',
                    containLabel: true
                },
                legend: {
                    orient: 'vertical',
                    top: 5,
                    right: 0,
                    itemWidth: 10,
                    itemHeight: 10,
                    padding: 5,
                    backgroundColor: 'rgba(9,33,70,.3)',
                    borderColor: '#127cad',
                    borderWidth: 1,
                    textStyle: {
                        fontStyle: 'normal',
                        color: '#fff',
                        fontSize: 8

                    },
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                color: ['#35ddf7', '#31cb9a', '#f4de48', '#ea6c6c', '#e68060', '#4877e2', '#ea6c6c', '#2ebf97'],
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['35%', '50%'],
                        data: [
                            { value: 335, name: '直接访问' },
                            { value: 310, name: '邮件营销' },
                            { value: 234, name: '联盟广告' },
                            { value: 135, name: '视频广告' },
                            { value: 1548, name: '搜索引擎' }
                        ],
                        label: {
                            fontSize: 8,
                        },
                        //此处是改变折线的长度
                        labelLine: {
                            normal: {
                                smooth: .1,
                                length: 8,
                                length2: 5
                            },
                        },
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            mychart.setOption(option, true);
        },
        // 中下-右边饼图-安全问题
        safety_problem_echarts() {
            var mychart = echarts.init(document.getElementById("safety_problem"));
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                grid: {
                    top: '5%',
                    left: '3%',
                    right: '10%',
                    bottom: '3%',
                    containLabel: true
                },
                legend: {
                    orient: 'vertical',
                    top: 5,
                    right: 0,
                    itemWidth: 10,
                    itemHeight: 10,
                    padding: 5,
                    backgroundColor: 'rgba(9,33,70,.3)',
                    borderColor: '#127cad',
                    borderWidth: 1,
                    textStyle: {
                        fontStyle: 'normal',
                        color: '#fff',
                        fontSize: 8

                    },
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                color: ['#35ddf7', '#31cb9a', '#f4de48', '#ea6c6c', '#e68060', '#4877e2', '#ea6c6c', '#2ebf97'],
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['35%', '50%'],
                        data: [
                            { value: 335, name: '直接访问' },
                            { value: 310, name: '邮件营销' },
                            { value: 234, name: '联盟广告' },
                            { value: 135, name: '视频广告' },
                            { value: 1548, name: '搜索引擎' }
                        ],
                        label: {
                            fontSize: 8,
                        },
                        //此处是改变折线的长度
                        labelLine: {
                            normal: {
                                smooth: .1,
                                length: 8,
                                length2: 5
                            },
                        },
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            mychart.setOption(option, true);
        },
        // 右边-横向柱状图
        safety_right_bar_echarts() {
            this.safetyRightData.map(function (item) {
                console.log(item);
                var mychart = echarts.init(document.getElementById(item.id));
                var option = {
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '10%',
                        top: '3%',
                        containLabel: true
                    },
                    tooltip: {
                        show: "true",
                        trigger: 'axis',
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    xAxis: {
                        type: 'value',
                        axisTick: { show: false },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: 'rgba(255,255,255,.2)',
                            }
                        },
                        axisLabel: {
                            color: '#fff',
                        },
                        splitLine: {
                            show: true,
                            interval: 'auto', //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                            maxInterval: 3600 * 24 * 1000,
                            lineStyle: {
                                color: '#204D79'
                            }
                        },
                    },
                    yAxis: [
                        {
                            type: 'category',
                            axisTick: { show: false },
                            axisLine: {
                                show: true,

                                lineStyle: {
                                    color: 'rgba(255,255,255,.2)',
                                }
                            },
                            axisLabel: {
                                color: '#fff',
                            },
                            data: item.time
                        }
                    ],
                    series: [
                        {
                            name: item.name,
                            type: 'bar',
                            yAxisIndex: 0,
                            itemStyle: {
                                normal: {
                                    show: true,
                                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#6621d7'
                                    }, {
                                        offset: 0.8,
                                        color: '#26defd'
                                    }], false),
                                    barBorderRadius: 50,
                                    borderWidth: 0,
                                    borderColor: '#333',
                                    label: {
                                        show: true,
                                        position: 'right',
                                        textStyle: {
                                            color: 'white'
                                        }
                                    }
                                }
                            },
                            barGap: '0%',
                            barCategoryGap: '50%',
                            data: item.value
                        }
                    ]
                };
                mychart.setOption(option, true);
            })
        }
    }
}
</script>
