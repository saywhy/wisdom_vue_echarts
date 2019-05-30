<template>
    <!-- 实名制管理 -->
    <div class="RealName ">
        <!-- 左 -->
        <div class="real_left real_item">
            <div class="item_table">
                <div class="table_top">
                    <p>劳动力情况</p>
                </div>
            </div>
            <div class="home_bom_content">
                <div class="home_bom_content_mid">
                    <div class="home_bom_mid_top">
                        <div class="content_mid">
                            <img src="../assets/img/1/attendance.png" alt="">
                            <div class="content_mid_text">
                                <p class="text_top">员工考勤</p>
                                <span class="text_bom">
                                    <span> {{BSAttendanceByWorkType.actualNumber}}</span>
                                    /
                                    <span>{{BSAttendanceByWorkType.number}}</span>
                                    人</span>
                                <span class="text_bom">
                                    <span>{{BSAttendanceByWorkType.percent}}</span>
                                    % 到勤率</span>
                            </div>
                        </div>
                        <div class="content_right">
                            <p>
                                <span class="span_color span_color_top"></span>
                                <span class="span_text">
                                    计划人数
                                </span>
                            </p>
                            <p>
                                <span class="span_color span_color_bom"></span>
                                <span class="span_text">
                                    实际出勤
                                </span>
                            </p>
                        </div>
                    </div>
                    <!-- 柱状图-考勤 -->
                    <div class="attendance">
                        <div id="attendance">
                        </div>
                    </div>
                </div>

            </div>
            <div class="item_table item_title">
                <div class="table_top">
                    <p>近一个月劳动力曲线</p>
                </div>
            </div>
            <div class="real_left_bom">
                <div id="labor">

                </div>

            </div>
        </div>
        <!-- 中 -->
        <div class="real_mid real_item">
            <div class="item_table">
                <div class="table_top">
                    <p>未出勤人员统计</p>
                </div>
            </div>
            <div class="mid_top">
                <div class="table_content">
                    <table align="center" border=1 cellspacing=0>
                        <tr>
                            <th>姓名</th>
                            <th>进场日期</th>
                            <th>工种</th>
                            <th>班组</th>
                            <th>联系方式</th>
                        </tr>
                        <tr v-for="(item,index) in BSAttendanceNot" class="tbody_tr" :class="tableRowClassName(index)">
                            <td>{{item.name}}</td>
                            <td>{{item.createTime}}</td>
                            <td>{{item.workType}}</td>
                            <td>{{item.sex}}</td>
                            <td>{{item.phoneNumber}}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="item_table item_title">
                <div class="table_top">
                    <p>近一个月出勤率统计</p>
                </div>
            </div>
            <div class="mid_bom" id="attendance_rate">

            </div>

        </div>

        <!-- 右 -->
        <div class="real_right real_item">
            <div class="item_table">
                <div class="table_top">
                    <p>近10天新进场人数统计</p>
                </div>
            </div>
            <div class="right_top">
                <div class="table_content">
                    <table align="center" border=1 cellspacing=0>
                        <tr>
                            <th>姓名</th>
                            <th>进场日期</th>
                            <th>工种</th>
                            <th>班组</th>
                            <th>联系方式</th>
                        </tr>
                        <tr v-for="(item,index) in BSNetEmployee10" class="tbody_tr" :class="tableRowClassName(index)">
                            <td>{{item.name}}</td>
                            <td>{{item.createTime}}</td>
                            <td>{{item.workType}}</td>
                            <td>{{item.sex}}</td>
                            <td>{{item.phoneNumber}}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="item_table item_title">
                <div class="table_top">
                    <p>疑似退场人员列表</p>
                </div>
            </div>
            <div class="right_bom">
                <div class="table_content" style="height:300px">
                    <table align="center" border=1 cellspacing=0>
                        <tr>
                            <th>姓名</th>
                            <th>累计缺勤天数</th>
                            <th>工种</th>
                            <th>班组</th>
                            <th>联系方式</th>
                        </tr>
                        <tr v-for="(item,index) in BSMayExit" class="tbody_tr" :class="tableRowClassName(index)">
                            <td>{{item.name}}</td>
                            <td>{{item.attendanceNotNumber}}</td>
                            <td>{{item.workType}}</td>
                            <td>{{item.workGroupId}}</td>
                            <td>{{item.phoneNumber}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

    </div>
</template>
<style  lang="less">
@media screen and (max-width: 1920px) {
  .RealName {
    color: #fff;
    width: 100%;
    height: 830px;
    .item_title {
      margin-top: 30px;
    }
    .real_item {
      float: left;
      width: 595px;
      height: 100%;
      background: url(../assets/img/3/item_bg.png) no-repeat 0px 0px;
      background-size: 100% 100%;
      -moz-background-size: 100% 100%;
      padding: 25px;
      .item_table {
        .table_top {
          height: 30px;
          width: 180px;
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
      .table_content {
        height: 345px;
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
      .container_title {
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
    // 左
    .real_left {
      .home_bom_content_mid {
        .home_bom_mid_top {
          height: 50px;
          img {
            width: 50px;
            height: 50px;
            margin-right: 6px;
            float: left;
          }
          .content_mid_text {
            float: left;
            .text_top {
              font-size: 18px;
              background: linear-gradient(to bottom, #fff 0%, #8ae1fd 100%);
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
              text-fill-color: transparent;
              text-align: center;
            }
            .text_bom {
              margin-right: 5px;
              border: 1px solid rgba(46, 241, 253, 0.5);
              border-radius: 3px;
              font-size: 12px;
              padding: 0px 5px;
              span {
                font-size: 12px;
              }
            }
          }
          .content_left {
            float: left;
          }
          .content_right {
            float: right;
            height: 50px;
            p {
              width: 100%;
              height: 50%;
              padding: 4px;
              .span_color {
                display: inline-block;
                width: 30px;
                height: 16px;
                margin-right: 10px;
                border-radius: 2px;
              }
              .span_color_top {
                background-color: #80f4fe;
              }
              .span_color_bom {
                background-color: #feeb90;
              }
              .span_text {
                line-height: 25px;
                font-size: 12px;
                vertical-align: bottom;
                color: #fff;
              }
            }
          }
        }

        .attendance {
          //   柱状图-考勤
          overflow-x: auto;
          #attendance {
            width: 1000px;
            height: 300px;
          }
        }

        .attendance::-webkit-scrollbar-track-piece {
          //滚动条凹槽的颜色，还可以设置边框属性
          border-radius: 10px;
          background-color: rgba(7, 48, 95, 0.88);
        }

        .attendance::-webkit-scrollbar {
          /*滚动条整体样式*/
          //滚动条的宽度
          width: 5px;
          height: 1px;
        }

        .attendance::-webkit-scrollbar-thumb {
          //滚动条的设置
          background-color: #75c1ef;
          border-radius: 10px;
          height: 24px;
          opacity: 0.73;
        }

        .attendance::-webkit-scrollbar-thumb:hover {
          background-color: #bbb;
        }
      }

      .real_left_bom {
        // height: 300px;
        overflow-x: auto;
        #labor {
          width: 1500px;
          height: 290px;
        }
      }

      .real_left_bom::-webkit-scrollbar-track-piece {
        //滚动条凹槽的颜色，还可以设置边框属性
        border-radius: 10px;
        background-color: rgba(7, 48, 95, 0.88);
      }

      .real_left_bom::-webkit-scrollbar {
        /*滚动条整体样式*/
        //滚动条的宽度
        width: 5px;
        height: 1px;
      }

      .real_left_bom::-webkit-scrollbar-thumb {
        //滚动条的设置
        background-color: #75c1ef;
        border-radius: 10px;
        height: 24px;
        opacity: 0.73;
      }

      .real_left_bom::-webkit-scrollbar-thumb:hover {
        background-color: #bbb;
      }
    }
    // 中
    .real_mid {
      margin: 0 33px;
      .mid_top {
        height: 350px;
      }
      .mid_bom {
        height: 300px;
      }
    }
    // 右
    .real_right {
      .right_top {
        height: 350px;
      }
      .right_bom {
        height: 300px;
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
    name: 'RealName',
    data() {
        return {
            activeIndex: '1',
            BSAttendanceByWorkType: {},
            BSAttendanceByWorkType30: {},
            BSAttendanceNot: {},
            BSAttendancePercent30: {},
            BSNetEmployee10: {},
            BSMayExit: {},
        }
    },
    mounted() {
        // 劳动力情况
        this.BSAttendanceByWorkType_data()
        // 劳动力情况
        this.BSAttendanceByWorkType30_data()
        // 当日未出勤人员统计
        this.BSAttendanceNot_data();
        // 近一个月出勤率
        this.BSAttendancePercent30_data();
        // 近10天新进场人数
        this.BSNetEmployee10_data();
        // 近10天新进场人数
        this.BSMayExit_data();
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
        // 柱状图-考勤
        attendance_echarts() {
            var timelist = [];
            var actualNumber = [];
            var number = [];
            this.BSAttendanceByWorkType.attendances.forEach(item => {

                timelist.push(item.workType);
                actualNumber.push(item.actualNumber);
                number.push(item.number);
            });
            var mychart = echarts.init(document.getElementById("attendance"));
            var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
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
                        data: timelist

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
                        name: '',
                        type: 'bar',
                        itemStyle: {
                            normal: {
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
                        data: number
                    },
                    {
                        name: '',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: '#feeb90',
                                label: {
                                    show: true,
                                    position: 'top',
                                    textStyle: {
                                        color: 'white'
                                    }
                                }
                            }
                        },
                        data: actualNumber
                    }
                ]
            };
            mychart.setOption(option, true);
            window.onresize = function () {
                mychart.resize();
            }
        },
        // 折线图-劳动力曲线
        labor_echarts() {
            var time_list = [];
            var workType_legend = []
            var series_list = []


            var time_list = [];

            this.BSAttendanceByWorkType30.forEach(item => {
                time_list.push(item.time);
            })
            this.BSAttendanceByWorkType30[0].attendances.forEach(item => {
                var obj = {
                    name: item.workType,
                    type: 'line',
                    data: []
                };
                series_list.push(obj);
            })
            this.BSAttendanceByWorkType30.forEach(item => {
                item.attendances.forEach(key => {
                    series_list.forEach(oem => {
                        if (oem.name == key.workType) {
                            oem.data.push(key.actualNumber)
                        }
                    })
                })

            })
            series_list.forEach(item => {
                workType_legend.push(item.name)
            })
            var mychart = echarts.init(document.getElementById("labor"));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    icon: 'circle',
                    data: workType_legend,
                    right: '60',
                    textStyle: {
                        fontSize: 14,
                        color: '#7C97AD'
                    }
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    top: '15%',
                    containLabel: true
                },
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
                        // margin: 25,
                        textStyle: {
                            align: 'left',
                            // baseline: 'middle'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            // 设置x轴颜色
                            color: '#7C97AD'
                        },
                    },
                    data: time_list
                },
                yAxis: {
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

                },
                series: series_list
            };
            mychart.setOption(option, true);
            window.onresize = function () {
                mychart.resize();
                console.log(' attendance');
            }
        },
        // 近一个月出勤率统计
        attendance_rate() {
            var timelist = [];
            var series_data = [];
            this.BSAttendancePercent30.forEach(item => {
                timelist.push(item.title);
                series_data.push(item.number);

            })
            var mychart = echarts.init(document.getElementById("attendance_rate"));
            var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
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
                        data: timelist
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
                        name: '',
                        type: 'bar',
                        itemStyle: {
                            normal: {
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
                        data: series_data
                    },
                ]
            };
            mychart.setOption(option, true);
            window.onresize = function () {
                mychart.resize();
            }

        },
        // 劳动力情况
        BSAttendanceByWorkType_data() {
            this.$axios.get('/TechManager/RealName/BSAttendanceByWorkType')
                .then(response => {
                    this.BSAttendanceByWorkType = response.data;
                    this.attendance_echarts();
                })
                .catch(error => {
                    console.log(error);
                })
        },
        // 一个月劳动力
        BSAttendanceByWorkType30_data() {
            this.$axios.get('/TechManager/RealName/BSAttendanceByWorkType30')
                .then(response => {
                    this.BSAttendanceByWorkType30 = response.data;
                    this.labor_echarts();
                })
                .catch(error => {
                    console.log(error);
                })
        },
        // 当日为出勤人员统计
        BSAttendanceNot_data() {
            this.$axios.get('/TechManager/RealName/BSAttendanceNot')
                .then(response => {
                    this.BSAttendanceNot = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
        },
        // 近一个月出勤率统计
        BSAttendancePercent30_data() {
            this.$axios.get('/TechManager/RealName/BSAttendancePercent30')
                .then(response => {
                    this.BSAttendancePercent30 = response.data;
                    this.attendance_rate()
                })
                .catch(error => {
                    console.log(error);
                })
        },
        // 近10天新进场人数统计
        BSNetEmployee10_data() {
            this.$axios.get('/TechManager/RealName/BSNetEmployee10')
                .then(response => {
                    console.log(response.data);

                    this.BSNetEmployee10 = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
        },
        // 疑似退场人员统计
        BSMayExit_data() {
            this.$axios.get('/TechManager/RealName/BSMayExit')
                .then(response => {
                    console.log(response.data);

                    this.BSMayExit = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
        }

    }
}
</script>
