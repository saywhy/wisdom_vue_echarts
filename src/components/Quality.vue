<template>
    <!-- 质量管理 -->
    <div class="Quality">
        <!-- 左边 -->
        <div class="quality_left quality_item">
            <div class="item_table">
                <div class="table_top">
                    <p>质量交底</p>
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
                        <tr v-for="(item,index) in qualityTell" class="tbody_tr" :class="tableRowClassName(index)">
                            <td>{{index+1}}</td>
                            <td>{{item.name}}</td>
                            <td>{{item.major}}</td>
                            <td>{{item.state}}</td>
                            <td>{{item.completeNum}}</td>
                            <td>{{item.unfinishedNum}}</td>
                        </tr>
                    </table>
                </div>
                <div class="table_top">
                    <p>质量交底数据分析</p>
                </div>
                <div class="item_bom">
                    <div class="safety_left_left">
                        <div class="safety_left_title">
                            <span>各工种交底次数统计</span>
                            <img src="../assets/img/3/1.png" alt="">
                        </div>
                        <!-- 柱状图 -->
                        <div class="echarts_title">
                            <span class="echarts_title_left">单位：次</span>
                            <span class="echarts_title_right">
                                <span class="echarts_title_right_left"></span>
                                <span class="echarts_title_right_right">交底次数</span>
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
        <div class="quality_mid quality_item">
            <div class="item_table">
                <div class="table_top">
                    <p>质量整改</p>
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
                        <tr v-for="(item,index) in qualityReform" class="tbody_tr" :class="tableRowClassName(index)">
                            <td style="min-width:50px;">{{index+1}}</td>
                            <td style="min-width:80px;">{{item.name}}</td>
                            <td style="min-width:80px;">{{item.state}}</td>
                            <td style="min-width:100px;">{{item.time}}</td>
                            <td style="min-width:80px;">{{item.type}}</td>
                        </tr>
                    </table>
                </div>
                <div class="mid_bom_content">
                    <div class="select">
                        <p class="select_title" @click="select_click" v-text="select_title">专业选择</p>
                        <div class="select_option" v-if="select_option">
                            <p v-for="item in qualityReformDataAna.select_array" class="select_option_item" @click="select_option_choose(item)">
                                <img src="../assets/img/3/sanjiao.png" alt="">
                                <span>{{item.name}}</span>
                            </p>
                        </div>
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
                                <span>各类质量问题占比</span>
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
        </div>
        <!-- 右边 -->
        <div class="quality_right quality_item">
            <div class="table_top">
                <p>质量监测数据</p>
            </div>
            <div class="safety_right_content">
                <div class="safety_right_item">
                    <div class="safety_right_title">
                        <span>{{safeMonitor.concreteTemp.name}}</span>
                        <span>(
                            <span>{{safeMonitor.concreteTemp.actMethod}}</span> )</span>
                        <img src="../assets/img/3/2.png" alt="">
                    </div>
                    <!-- 横向柱状图 -->
                    <div class="safety_right_item_echarts" id="right_top">

                    </div>
                    <div class="safety_right_title">
                        <span>{{safeMonitor.labCurve.name}}</span>
                        <img src="../assets/img/3/2.png" alt="">
                    </div>
                    <!-- 折线图 -->
                    <div class="safety_right_item_echarts" id="right_mid">

                    </div>
                    <div class="safety_right_title">
                        <span>试块送检到期提醒</span>
                        <img src="../assets/img/3/2.png" alt="">
                    </div>
                    <!-- 柱状图 -->
                    <div class="safety_right_item_echarts" id="right_bom">

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<style  lang="less">
@media screen and (max-width: 1920px) {
  .Quality {
    color: #000;
    width: 100%;
    height: 830px;
    .quality_item {
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
          border-radius: 10px;
          background-color: rgba(7, 48, 95, 0.88);
        }
        .table_content::-webkit-scrollbar {
          width: 5px;
          height: 1px;
        }
        .table_content::-webkit-scrollbar-thumb {
          background-color: rgba(117, 193, 239, 0.73);
          border-radius: 10px;
          height: 24px;
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
    .quality_left {
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
    .quality_mid {
      width: 595px;
      margin: 0 33px;
      .mid_bom_content {
        position: relative;
        .select {
          color: #fff;
          width: 80px;
          height: 24px;
          background: url(../assets/img/3/zhuanye.png) no-repeat 0px 0px;
          background-size: 100% 100%;
          -moz-background-size: 100% 100%;
          position: absolute;
          top: 5px;
          right: 5px;
          cursor: pointer;
          .select_title {
            font-size: 14px;
            line-height: 24px;
            text-align: center;
          }
          .select_option {
            width: 80px;
            position: absolute;
            top: 25px;
            left: 0;
            background: url(../assets/img/3/xiala.png) no-repeat 0px 0px;
            background-size: 100% 100%;
            -moz-background-size: 100% 100%;
            padding: 10px;
            z-index: 10;
            .select_option_item {
              img {
                height: 10px;
                width: 10px;
                margin-right: 5px;
              }
              cursor: pointer;
              border-bottom: 1px solid #4e86b3;
            }
          }
        }
      }
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
    .quality_right {
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
            height: 210px;
          }
        }
      }
      .safety_right_content::-webkit-scrollbar-track-piece {
        border-radius: 10px;
        background-color: rgba(7, 48, 95, 0.88);
      }
      .safety_right_content::-webkit-scrollbar {
        width: 5px;
        height: 1px;
      }
      .safety_right_content::-webkit-scrollbar-thumb {
        background-color: rgba(117, 193, 239, 0.73);
        border-radius: 10px;
        height: 24px;
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
    name: 'Quality',
    data() {
        return {
            qualityTell: [],
            qualityTellDataAna: {},
            // 质量整改
            qualityReform: [],
            couponSelected: '',
            options: [
                {
                    id: 'A',
                    name: '模版'
                },
                {
                    id: '1',
                    name: '钢筋'
                },
                {
                    id: '2',
                    name: '混凝土'
                },
                {
                    id: '3',
                    name: '砌筑'
                },
                {
                    id: '4',
                    name: '抹灰'
                },
                {
                    id: '5',
                    name: '楼地面'
                }
            ],
            select_title: '专业选择',
            select_option: false,
            // 中下柱状图
            mid_echarts_bar_times: [],
            mid_echarts_bar_value: [],
            // 中下右饼图
            mid_echarts_pie_times: [],
            mid_echarts_pie_value: [],
            safeMonitor: {
                concreteTemp: {},
                endTime: {},
                labCurve: {},
            },
        }
    },
    mounted() {

        // 质量交底
        this.qualityTell_data();
        //质量交底-数据分析
        this.qualityTellDataAna_data();
        //质量整改
        this.qualityReform_data();
        //质量整改-数据统计
        this.qualityReformDataAna_data();
        // 质量监测数据
        this.safeMonitor_data();


    },
    created() {

    },
    methods: {
        select_click() {
            this.select_option = true;
        },
        select_option_choose(item) {
            console.log(item);
            this.select_title = item.name;
            this.select_option = false;
            // 中下柱状图
            this.mid_echarts_bar_times = item.value_name;
            this.mid_echarts_bar_value = item.value;
            this.question_type_echarts();
            // 中下饼图
            this.mid_echarts_pie_times = item.value_name;
            this.mid_echarts_pie_value = item.value;
            this.safety_problem_echarts();

        },
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
                                color: '#7C97AD'
                            },
                        },
                        data: this.qualityTellDataAna.workerList
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
                            interval: 'auto',
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
                        name: '',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: '#80f4fe',
                            }
                        },
                        data: this.qualityTellDataAna.tellTimesList
                    }
                ]
            };
            mychart.setOption(option, true);
        },
        // 雷达图
        radar_echarts() {
            var radar_name_list = [];
            this.qualityTellDataAna.workerList.map(item => {
                var obj = {};
                obj.name = item;
                obj.max = 100;
                radar_name_list.push(obj);
            })
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
                    radius: "60%",
                    splitNumber: 4,
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
                    indicator: radar_name_list,

                },
                series: [{
                    name: '交底率',
                    type: 'radar',
                    symbolSize: 2,
                    areaStyle: {
                        normal: {
                            color: {
                                colorStops: [{
                                    offset: 0, color: 'rgba(255, 229, 126, .8)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(255, 229, 126,.14)' // 100% 处的颜色
                                }],
                                global: false
                            }
                        }
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
                            value: this.qualityTellDataAna.tellPercentList,
                            name: '交底率'
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
                                color: '#7C97AD'
                            },
                        },
                        data: this.mid_echarts_bar_times

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
                        name: '',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: '#80f4fe',
                            }
                        },
                        data: this.mid_echarts_bar_value
                    }
                ]
            };
            mychart.setOption(option, true);
        },
        // 中下-左边饼图-执行效果
        execution_effect_echarts() {
            var stateNumList = [];
            this.qualityReformDataAna.stateList.map((item, index) => {
                var obj = {
                    name: item,
                    value: this.qualityReformDataAna.stateNumList[index],
                };
                stateNumList.push(obj)
            });
            var mychart = echarts.init(document.getElementById("execution_effect"));
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)"
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
                    data: this.qualityReformDataAna.stateList
                },
                color: ['#35ddf7', '#31cb9a', '#f4de48', '#ea6c6c', '#e68060', '#4877e2', '#ea6c6c', '#2ebf97'],
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['35%', '50%'],
                        data: stateNumList,
                        label: {
                            fontSize: 8,
                        },
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
            var typeTimesList = [];
            this.mid_echarts_pie_times.map((item, index) => {
                var obj = {
                    name: item,
                };
                typeTimesList.push(obj)
            });
            this.mid_echarts_pie_value.map((item, index) => {
                typeTimesList.map((key, value) => {
                    if (index == value) {
                        key.value = item
                    }
                });
            });
            var mychart = echarts.init(document.getElementById("safety_problem"));
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)"
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
                    data: this.mid_echarts_pie_times
                },
                color: ['#35ddf7', '#31cb9a', '#f4de48', '#ea6c6c', '#e68060', '#4877e2', '#ea6c6c', '#2ebf97'],
                series: [
                    {
                        name: '',
                        type: 'pie',
                        radius: '55%',
                        center: ['35%', '50%'],
                        data: typeTimesList,
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
        right_top_echarts() {
            var mychart = echarts.init(document.getElementById('right_top'));
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
                        data: this.safeMonitor.concreteTemp.pointList

                    }
                ],
                series: [
                    {
                        name: '温度',
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
                        data: this.safeMonitor.concreteTemp.tempList,
                        markLine: {
                            itemStyle: {
                                normal: {
                                    color: 'red',
                                    label: {
                                        formatter: '{c}'
                                    }
                                }
                            },
                            data: [{ type: 'min', xAxis: 25, name: '预警线' },
                            ]
                        }
                    },

                ]
            };
            mychart.setOption(option, true);
        },
        right_mid_echarts() {
            var mychart = echarts.init(document.getElementById('right_mid'));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '5%',
                    right: '10%',
                    bottom: '3%',
                    top: '15%',
                    containLabel: true
                },
                legend: {
                    icon: 'circle',
                    data: ['温度', '湿度'],
                    right: '60',
                    textStyle: {
                        fontSize: 14,
                        color: '#7C97AD'
                    }
                },
                color: ['#8CF089', '#DEC54F'],
                xAxis: {
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
                        interval: 'auto',
                    },
                    axisLine: {
                        lineStyle: {
                            // 设置x轴颜色
                            color: '#fff'
                        },
                    },
                    data: this.safeMonitor.labCurve.timeAixs
                },
                yAxis: [
                    {
                        name: '湿度',
                        position: 'left',
                        type: 'value',
                        splitNumber: 6,
                        min: 50,
                        max: 100,
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false,
                        },
                        splitLine: {
                            show: true,
                            interval: 'auto', //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                            lineStyle: {
                                color: '#204D79'
                            }
                        },
                        axisLabel: {
                            color: '#426587'
                        }
                    }, {
                        name: '温度',
                        type: 'value',
                        position: 'right',
                        splitNumber: 6,
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false,
                        },
                        splitLine: {
                            show: true,
                            interval: 'auto', //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                            lineStyle: {
                                color: '#204D79'
                            }
                        },
                        axisLabel: {
                            color: '#426587'
                        }
                    },
                ],
                series: [
                    {
                        name: '湿度',
                        type: 'line',
                        yAxisIndex: '0',
                        symbol: 'circle',
                        symbolSize: 3,
                        lineStyle: {
                            color: '#8CF089'
                        },
                        data: this.safeMonitor.labCurve.humiCurve
                    },
                    {
                        name: '温度',
                        type: 'line',
                        yAxisIndex: '1',
                        symbol: 'circle',
                        symbolSize: 3,
                        lineStyle: {
                            color: '#DEC54F'
                        },
                        data: this.safeMonitor.labCurve.tempCurve
                    }

                ]
            };
            mychart.setOption(option, true);
        },
        right_bom_echarts() {
            var mychart = echarts.init(document.getElementById("right_bom"));
            var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    top: '8%',
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
                        data: this.safeMonitor.endTime.pointList
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
                        name: '试块送检到期提醒',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                barBorderRadius: [5, 5, 5, 5], //柱形图圆角，初始化效果
                                color: '#80f4fe',
                                label: {
                                    show: true,
                                    position: 'top',
                                    textStyle: {
                                        color: 'white'
                                    }
                                }
                            }
                        },
                        data: this.safeMonitor.endTime.timeList
                    }
                ]
            };
            mychart.setOption(option, true);
        },
        // 质量交底
        qualityTell_data() {
            this.$axios.get('/qualityManager/qualityTell')
                .then(response => {
                    if (response.data.res == 'SUCCESS') {
                        this.qualityTell = response.data.data;
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        },
        //质量交底-数据分析
        qualityTellDataAna_data() {
            this.$axios.get('/qualityManager/qualityTellDataAna')
                .then(response => {
                    if (response.data.res == 'SUCCESS') {
                        this.qualityTellDataAna = response.data.data;
                        this.count_echarts();
                        this.radar_echarts();
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        },
        //质量整改
        qualityReform_data() {
            this.$axios.get('/qualityManager/qualityReform')
                .then(response => {
                    if (response.data.res == 'SUCCESS') {
                        this.qualityReform = response.data.data;
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        },
        //质量整改-数据统计
        qualityReformDataAna_data() {
            this.$axios.get('/qualityManager/qualityReformDataAna')
                .then(response => {
                    if (response.data.res == 'SUCCESS') {
                        this.qualityReformDataAna = response.data.data;
                        this.qualityReformDataAna.select_array = [];
                        for (var key in this.qualityReformDataAna.stateData) {
                            var obj = {
                                name: '',
                                value: [],
                                value_name: []
                            };
                            obj.name = key;
                            for (var item in this.qualityReformDataAna.stateData[key]) {
                                obj.value_name.push(item);
                                obj.value.push(this.qualityReformDataAna.stateData[key][item]);
                            }
                            this.qualityReformDataAna.select_array.push(obj);
                        }
                        this.mid_echarts_bar_times = this.qualityReformDataAna.select_array[0].value_name;
                        this.mid_echarts_pie_times = this.qualityReformDataAna.select_array[0].value_name;
                        this.mid_echarts_bar_value = this.qualityReformDataAna.select_array[0].value;
                        this.mid_echarts_pie_value = this.qualityReformDataAna.select_array[0].value;
                        // 中下右饼图
                        this.question_type_echarts();
                        this.execution_effect_echarts();
                        this.safety_problem_echarts();
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        },
        // 质量监测数据
        safeMonitor_data() {
            this.$axios.get('/qualityManager/safeMonitor')
                .then(response => {
                    if (response.data.res == 'SUCCESS') {
                        this.safeMonitor = response.data.data;
                        this.right_top_echarts()
                        this.right_mid_echarts()
                        this.right_bom_echarts()
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        },

    }
}
</script>
