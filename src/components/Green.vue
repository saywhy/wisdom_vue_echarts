<template>
    <!-- 绿色施工 -->
    <div class="Green">
        <!-- 左 -->
        <div class="green_left green_item">
            <div class="item_table">
                <div class="table_top">
                    <p>环境监控</p>
                </div>
            </div>
            <div class="green_left_content">
                <el-row>
                    <el-col :span="8">
                        <img src="../assets/img/6/left/temperature.png" alt="" class="left_top_left">
                        <div class="left_top_right">
                            <p class="p_top">温度</p>
                            <p class="p_bom">
                                <span>{{envMonitor_data.temp+'℃'}}</span>
                            </p>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <img src="../assets/img/6/left/humidity.png" alt="" class="left_top_left">
                        <div class="left_top_right">
                            <p class="p_top">湿度</p>
                            <p class="p_bom">
                                <span>{{envMonitor_data.humi+'%'}}</span>
                            </p>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <img src="../assets/img/6/left/wind.png" alt="" class="left_top_left">
                        <div class="left_top_right">
                            <p class="p_top">风力/风向</p>
                            <p class="p_bom">
                                <span>{{envMonitor_data.windPower}}</span>
                                <span>{{envMonitor_data.windDir}}</span>
                            </p>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="container_title">
                <span>PM2.5/PM10实时监测</span>
                <img src="../assets/img/3/2.png" alt="">
            </div>
            <p class="p_title">{{envMonitor_data.curveTime}}</p>
            <div id="pm_echarts">
            </div>
            <div>
                <el-row class="left_top_info">
                    <el-col :span="12" class="left_top_info_col">
                        <div class="left_top_info_item">
                            <p>
                                <img src="../assets/img/6/left/up.png" v-if="envMonitor_data.pm2d5Cmp_img" alt="">
                                <img src="../assets/img/6/left/down.png" v-if="!envMonitor_data.pm2d5Cmp_img" alt="">
                                <span class="left_top_info_num">
                                    <span>{{envMonitor_data.pm2d5Cmp}}</span>%</span>
                            </p>
                            <p>
                                <span> {{envMonitor_data.pm2d5Rt}}</span>ug/m3</p>
                            <p>PM2.5前周同比</p>
                        </div>
                    </el-col>
                    <el-col :span="12" class="left_top_info_col">
                        <div class="left_top_info_item">
                            <p>
                                <img src="../assets/img/6/left/up.png" v-if="envMonitor_data.pm10Cmp_img" alt="">
                                <img src="../assets/img/6/left/down.png" v-if="!envMonitor_data.pm10Cmp_img" alt="">
                                <span class="left_top_info_num">
                                    <span>{{envMonitor_data.pm10Cmp}}</span>%</span>
                            </p>
                            <p>
                                <span> {{envMonitor_data.pm10Rt}}</span> ug/m3</p>
                            <p>PM10前周同比</p>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <!-- 实时噪音监测 -->
            <div class="container_title">
                <span>实时噪音监测</span>
                <img src="../assets/img/3/2.png" alt="">
            </div>
            <p class="p_title">{{envMonitor_data.curveTime}}</p>
            <div id="db_echarts">
            </div>
            <div>
                <el-row class="left_top_info">
                    <el-col :span="8" class="left_top_info_col">
                        <div class="left_top_info_item">
                            <p>
                                <img src="../assets/img/6/left/up.png" v-if="envMonitor_data.noiseCmp_img" alt="">
                                <img src="../assets/img/6/left/down.png" v-if="!envMonitor_data.noiseCmp_img" alt="">
                                <span class="left_top_info_num">
                                    <span> {{envMonitor_data.noiseCmp}}</span> %</span>
                            </p>
                            <p>
                                <span> {{envMonitor_data.noiseRt}}</span>db</p>
                            <p>噪音前周同比</p>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <!-- 中 -->
        <div class="green_mid green_item">
            <div class="item_table">
                <div class="table_top">
                    <p>节电管理</p>
                </div>
            </div>
            <div class="mid_top">
                <div class="container_title">
                    <span>施工区用电数据</span>
                    <img src="../assets/img/3/2.png" alt="">
                </div>
                <div class="mid_title">
                    <span class="color_text">上个月平均值</span>
                    <span class="mid_title_num">{{eleSave_data.workArea.lastAverVal}}</span>
                    <span class="color_text">度</span>
                    <img src="../assets/img/6/mid/up.png" v-if="eleSave_data.workArea.lastAverCmp_img" alt="">
                    <img src="../assets/img/6/mid/down.png" v-if="!eleSave_data.workArea.lastAverCmp_img" alt="">
                    <span class="mid_title_num">{{eleSave_data.workArea.lastAverCmp}}</span>
                    <span class="color_text">%</span>
                </div>
                <div class="mid_top_echarts" id="mid_echarts">
                </div>
            </div>
            <div class="mid_bom">
                <div class="container_title">
                    <span>寝室实时用电监控</span>
                    <img src="../assets/img/3/2.png" alt="">
                </div>
                <div class="mid_bom_title_dot">
                    <p>
                        <img src="../assets/img/6/mid/dot_red.png" alt="">
                        <span>灯亮</span>
                    </p>
                    <p>
                        <img src="../assets/img/6/mid/white.png" alt="">
                        <span>灯灭</span>
                        <img src="../assets/img/6/mid/dot_white.png" alt="">
                        <span>远程灭</span>
                    </p>
                </div>
                <div class="mid_title">
                    <span class="color_text">上个月平均值</span>
                    <span class="mid_title_num">{{eleSave_data.liveArea.lastAverVal}}</span>
                    <span class="color_text">度</span>
                    <img src="../assets/img/6/mid/up.png" v-if="eleSave_data.liveArea.lastCmp_img" alt="">
                    <img src="../assets/img/6/mid/down.png" v-if="!eleSave_data.liveArea.lastCmp_img" alt="">
                    <span class="mid_title_num">{{eleSave_data.liveArea.lastCmp}}</span>
                    <span class="color_text">%</span>
                </div>
                <div class="mid_bom_content">
                    <div class="mid_bom_item" v-for="(a,b,c) in eleSave_data.liveArea.buildings">
                        <el-row>
                            <el-col :span="3" class="mid_bom_item_col" v-for="(d,e,f) in a">
                                <div class="mid_bom_item_col_top">
                                    <span>{{e}}</span>
                                </div>
                                <div class="mid_bom_item_col_bom">
                                    <img src="../assets/img/6/mid/dot_red.png" v-if="d == 1" alt="">
                                    <img src="../assets/img/6/mid/dot_white.png" v-if="d== 2" alt="">
                                    <img src="../assets/img/6/mid/white.png" v-if="d == 0" alt="">
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>
        </div>
        <!-- 右 -->
        <div class="green_right green_item">
            <div class="item_table">
                <div class="table_top">
                    <p>节水管理</p>
                </div>
            </div>
            <div class="right_content">
                <div class="right_top">
                    <div class="container_title">
                        <span>施工区用水数据</span>
                        <img src="../assets/img/3/2.png" alt="">
                    </div>
                    <div class="right_title">
                        <span class="color_text">上个月平均值</span>
                        <span class="right_title_num">{{waterSave_data.workArea.lastAverVal}}</span>
                        <span class="color_text">m³</span>
                        <img src="../assets/img/6/mid/up.png" v-if="waterSave_data.workArea.lastAverCmp_img" alt="">
                        <img src="../assets/img/6/mid/down.png" v-if="!waterSave_data.workArea.lastAverCmp_img" alt="">
                        <span class="right_title_num">{{waterSave_data.workArea.lastAverCmp}}</span>
                        <span class="color_text">%</span>
                    </div>
                    <div class="right_top_echarts" id="right_top_echarts">
                    </div>
                </div>
                <div class="right_mid">
                    <div class="container_title">
                        <span>生活用水管理</span>
                        <img src="../assets/img/3/2.png" alt="">
                    </div>
                    <div class="right_mid_echarts" id="right_mid_echarts">
                    </div>
                </div>
                <div class="right_bom">
                    <div class="container_title">
                        <span>雨水收集管理</span>
                        <img src="../assets/img/3/2.png" alt="">
                    </div>
                    <div class="right_bom_content">
                        <img src="../assets/img/6/right/rain_icon.png" alt="">
                        <p>
                            <span class="jianbian">累计使用量</span>
                            <span class="right_bom_text">{{waterSave_data.rainArea.total}}</span>
                            <span class="jianbian">m³</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style  lang="less">
@media screen and (max-width: 1920px) {
  .Green {
    color: #000;
    width: 100%;
    height: 830px;
    .green_item {
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
    .green_left {
      width: 595px;
      .green_left_content {
        height: 50px;
        margin-bottom: 20px;
        .left_top_left {
          float: left;
          height: 50px;
          width: 50px;
        }
        .left_top_right {
          float: left;
          margin-left: 20px;
          .p_top {
            color: #fff;
            font-size: 18px;
            height: 30px;
            line-height: 30px;
            margin: 0;
            padding: 0;
            background: linear-gradient(to bottom, #fff 0%, #8ae1fd 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            text-fill-color: transparent;
          }
          .p_bom {
            height: 20px;
            line-height: 20px;
            color: #fff;
            span {
              background: url(../assets/img/5/left_text.png) no-repeat 0px 0px;
              background-size: 100% 100%;
              -moz-background-size: 100% 100%;
              padding: 0 10px;
              margin-right: 5px;
            }
          }
        }
      }
      .p_title {
        text-align: center;
        font-size: 14px;
        color: #fff;
      }
      #pm_echarts,
      #db_echarts {
        height: 200px;
        width: 100%;
      }
      .left_top_info {
        margin: 10px 0;
        height: 50px;
        text-align: center;
        .left_top_info_col {
          position: relative;
          height: 50px;
          .left_top_info_item {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 55px;
            padding: 2px 5px;
            background: url(../assets/img/6/left/bg.png) no-repeat 0px 0px;
            background-size: 100% 100%;
            -moz-background-size: 100% 100%;
            p {
              font-size: 10px;
              margin: 0;
              padding: 0;
              color: #fff;
              img {
                width: 10px;
                height: 10px;
              }
              .left_top_info_num {
                color: #3cee34;
              }
            }
          }
        }
      }
    }
    // 中
    .green_mid {
      width: 595px;
      margin: 0 33px;
      .color_text {
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 1) 0%,
          #8ae1fd 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-fill-color: transparent;
      }
      .mid_title {
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        text-align: center;

        img {
          margin-left: 20px;
          vertical-align: middle;
          width: 18px;
          height: 25px;
        }
        .mid_title_num {
          display: inline-block;
          vertical-align: middle;
          color: #fff;
          height: 18px;
          line-height: 17px;
          background: url(../assets/img/6/mid/num_bg.png) no-repeat 0px 0px;
          background-size: 100% 100%;
          -moz-background-size: 100% 100%;
          padding: 2px 15px;
        }
      }
      .mid_top {
        height: 360px;
        margin-bottom: 20px;
        .mid_top_echarts {
          height: 279px;
          background: url(../assets/img/6/right/bg.png) no-repeat 0px 0px;
          background-size: 100% 100%;
          -moz-background-size: 100% 100%;
        }
      }
      .mid_bom {
        height: 360px;
        box-sizing: border-box;
        position: relative;
        .mid_bom_title_dot {
          position: absolute;
          right: 0px;
          top: 38px;
          color: #fff;
          img {
            margin-left: 20px;
            vertical-align: middle;
            width: 18px;
            height: 18px;
          }
        }

        .mid_bom_content {
          height: 279px;
          overflow-y: auto;
          padding-right: 10px;
          .mid_bom_item {
            height: 120px;
            margin-top: 30px;
            .mid_bom_item_col {
              height: 60px;
              border-top: 1px solid #2ac4ed;
              border-left: 1px solid #2ac4ed;
              .mid_bom_item_col_top {
                height: 25px;
                font-size: 16px;
                text-align: center;
                line-height: 25px;
                font-weight: 500;
                background-color: #0071a2;
                color: #fff;
                border-bottom: 1px solid #2ac4ed;
              }
              .mid_bom_item_col_bom {
                border-bottom: 1px solid #2ac4ed;
                height: 35px;
                background-color: #004c7f;
                margin: 0;
                padding: 0;
                position: relative;
                img {
                  position: absolute;
                  height: 33px;
                  width: 33px;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);
                }
              }
            }
            .mid_bom_item_col:nth-child(8n) {
              border-right: 1px solid #2ac4ed;
            }
            .mid_bom_item_col:nth-last-child(1) {
              border-right: 1px solid #2ac4ed;
            }
          }
        }
        .mid_bom_content::-webkit-scrollbar-track-piece {
          border-radius: 10px;
          background-color: rgba(7, 48, 95, 0.88);
        }
        .mid_bom_content::-webkit-scrollbar {
          width: 5px;
          height: 1px;
        }
        .mid_bom_content::-webkit-scrollbar-thumb {
          background-color: rgba(117, 193, 239, 0.73);
          border-radius: 10px;
          height: 24px;
        }
        .mid_bom_content::-webkit-scrollbar-thumb:hover {
          background-color: #bbb;
        }
      }
    }
    // 右
    .green_right {
      width: 595px;
      .right_content {
        height: 740px;
        overflow-y: auto;
        padding-right: 10px;
        .right_top_echarts,
        .right_mid_echarts {
          height: 279px;
          background: url(../assets/img/6/right/bg.png) no-repeat 0px 0px;
          background-size: 100% 100%;
          -moz-background-size: 100% 100%;
        }
        .right_top {
          margin-bottom: 20px;
          .right_title {
            height: 40px;
            line-height: 40px;
            color: #fff;
            font-size: 16px;
            text-align: center;
            img {
              margin-left: 20px;
              vertical-align: middle;
              width: 18px;
              height: 25px;
            }
            .right_title_num {
              display: inline-block;
              vertical-align: middle;
              color: #fff;
              height: 18px;
              line-height: 17px;
              background: url(../assets/img/6/mid/num_bg.png) no-repeat 0px 0px;
              background-size: 100% 100%;
              -moz-background-size: 100% 100%;
              padding: 2px 15px;
            }
          }
          .color_text {
            background: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 1) 0%,
              #8ae1fd 100%
            );
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            text-fill-color: transparent;
          }
        }
        .right_mid {
          margin-bottom: 20px;
        }
        .right_bom {
          position: relative;
          .right_bom_content {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 378px;
            height: 60px;
            margin: 20px 0px;
            background: url(../assets/img/6/right/rain_bg.png) no-repeat 0px 0px;
            background-size: 100% 100%;
            -moz-background-size: 100% 100%;
            position: relative;
            p {
              height: 60px;
              line-height: 60px;
              padding-left: 100px;
              .jianbian {
                font-size: 16px;
                background: linear-gradient(
                  to bottom,
                  rgba(255, 255, 255, 1) 0%,
                  #8ae1fd 100%
                );
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                text-fill-color: transparent;
              }
              .right_bom_text {
                color: #fff;
                padding: 0 10px;
                background: url(../assets/img/6/mid/num_bg.png) no-repeat 0px
                  0px;
                background-size: 100% 100%;
                -moz-background-size: 100% 100%;
              }
            }
            img {
              width: 64px;
              height: 60px;
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }
      }
      .right_content::-webkit-scrollbar-track-piece {
        border-radius: 10px;
        background-color: rgba(7, 48, 95, 0.88);
      }
      .right_content::-webkit-scrollbar {
        width: 5px;
        height: 1px;
      }
      .right_content::-webkit-scrollbar-thumb {
        background-color: rgba(117, 193, 239, 0.73);
        border-radius: 10px;
        height: 24px;
      }
      .right_content::-webkit-scrollbar-thumb:hover {
        background-color: #bbb;
      }
    }
  }
}
</style>
<script>
var echarts = require('echarts');
export default {
    components: {
    },
    name: 'Green',
    data() {
        return {
            activeIndex: '1',
            electric: [1, 2, 3, 4, 5],
            envMonitor_data: {},
            eleSave_data: {
                workArea: {},
                liveArea: {}
            },
            waterSave_data: {
                workArea: {},
                rainArea: {},
                liveArea: {}
            },
        }
    },
    mounted() {
        // 环境监控
        this.envMonitor();
        // 节电管理
        this.eleSave();
        //   节水管理
        this.waterSave();
    },
    methods: {
        // 折线图
        pm_echarts() {
            var mychart = echarts.init(document.getElementById("pm_echarts"));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '5%',
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
                    },
                    axisLine: {
                        lineStyle: {
                            // 设置x轴颜色
                            color: '#fff'
                        },
                    },
                    data: this.envMonitor_data.timeAxis
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
                series: [
                    {
                        name: 'PM2.5',
                        type: 'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 5,
                        showSymbol: false,
                        lineStyle: {
                            color: 'rgba(37,216,253,0.7)'
                        },
                        data: this.envMonitor_data.pm2d5Curve
                    },
                    {
                        name: 'PM10',
                        type: 'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 5,
                        showSymbol: false,
                        lineStyle: {
                            color: '#ff6a6a'
                        },
                        data: this.envMonitor_data.pm10Curve
                    }
                ]
            };
            mychart.setOption(option, true);
        },
        // 折线图
        db_echarts() {
            var mychart = echarts.init(document.getElementById("db_echarts"));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '5%',
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
                    },
                    axisLine: {
                        lineStyle: {
                            // 设置x轴颜色
                            color: '#fff'
                        },
                    },
                    data: this.envMonitor_data.timeAxis
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
                series: [
                    {
                        name: 'DB',
                        type: 'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 5,
                        showSymbol: false,
                        lineStyle: {
                            color: 'rgba(37,216,253,0.7)'
                        },
                        data: this.envMonitor_data.noiseCurve
                    }
                ]
            };
            mychart.setOption(option, true);
        },
        // 节电管理-施工用电
        eleSave_workArea_echarts() {
            var mychart = echarts.init(document.getElementById("mid_echarts"));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '5%',
                    right: '3%',
                    bottom: '3%',
                    top: '15%',
                    containLabel: true
                },
                title: {
                    text: ' ︵ \n 用 \n 电 \n 量 \n  /  \n 度 \n ︶',
                    left: '0',
                    top: '20%',
                    textStyle: {
                        fontSize: 12,
                        color: '#fff'
                    },
                    textVerticalAlign: 'middle'
                },
                legend: {
                    icon: 'circle',
                    data: ['用电量'],
                    right: '60',
                    textStyle: {
                        fontSize: 14,
                        color: '#7C97AD'
                    }
                },
                color: ['#fed730'],
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
                        interval: 'auto', //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        },
                    },
                    data: this.eleSave_data.workArea.timeAxis.reverse()
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
                        lineStyle: {
                            color: '#204D79'
                        }
                    },
                    axisLabel: {
                        color: '#426587'
                    }
                },
                series: [
                    {
                        name: '用电量',
                        type: 'line',
                        symbol: 'circle',
                        symbolSize: 3,
                        lineStyle: {
                            color: '#fed730'
                        },
                        data: this.eleSave_data.workArea.last30Curve.reverse()
                    }

                ]
            };
            mychart.setOption(option, true);
        },
        // 节水管理-施工管理 -折线图
        right_top_echarts() {
            var mychart = echarts.init(document.getElementById("right_top_echarts"));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '5%',
                    right: '3%',
                    bottom: '3%',
                    top: '15%',
                    containLabel: true
                },
                title: {
                    text: ' ︵ \n 用 \n 水 \n 量 \n  /  \n 立 \n 方 \n 米 \n ︶',
                    left: '0',
                    top: '20%',
                    textStyle: {
                        fontSize: 12,
                        color: '#fff'
                    },
                    textVerticalAlign: 'middle'
                },
                legend: {
                    icon: 'circle',
                    data: ['用水量'],
                    right: '60',
                    textStyle: {
                        fontSize: 14,
                        color: '#7C97AD'
                    }
                },
                color: ['#69fd82'],
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
                            color: '#fff'
                        },
                    },
                    data: this.waterSave_data.workArea.timeAxis.reverse()
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
                series: [
                    {
                        name: '用水量',
                        type: 'line',
                        symbol: 'circle',
                        symbolSize: 3,
                        lineStyle: {
                            color: '#69fd82'
                        },
                        data: this.waterSave_data.workArea.last30Curve.reverse()
                    }

                ]
            };
            mychart.setOption(option, true);
        },
        // 节水管理-寝室 -折线图
        right_mid_echarts() {
            var mychart = echarts.init(document.getElementById("right_mid_echarts"));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '5%',
                    right: '3%',
                    bottom: '3%',
                    top: '15%',
                    containLabel: true
                },
                title: {
                    text: ' ︵ \n 用 \n 水 \n 量 \n  /  \n 立 \n 方 \n 米 \n ︶',
                    left: '0',
                    top: '20%',
                    textStyle: {
                        fontSize: 12,
                        color: '#fff'
                    },
                    textVerticalAlign: 'middle'
                },
                legend: {
                    icon: 'circle',
                    data: ['用水量'],
                    right: '60',
                    textStyle: {
                        fontSize: 14,
                        color: '#7C97AD'
                    }
                },
                color: ['#69fd82'],
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
                            color: '#fff'
                        },
                    },
                    data: this.waterSave_data.liveArea.timeAxis.reverse()
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
                series: [
                    {
                        name: '用水量',
                        type: 'line',
                        symbol: 'circle',
                        symbolSize: 3,
                        lineStyle: {
                            color: '#69fd82'
                        },
                        data: this.waterSave_data.liveArea.last30Curve.reverse()
                    }
                ]
            };
            mychart.setOption(option, true);
        },
        // 环境监控
        envMonitor() {
            this.$axios.get('/greenWork/envMonitor')
                .then(response => {
                    if (response.data.res == 'SUCCESS') {
                        this.envMonitor_data = response.data.data
                        // pm2.5
                        if (this.envMonitor_data.pm2d5Cmp > 0) {
                            this.envMonitor_data.pm2d5Cmp_img = true;
                        } else {
                            this.envMonitor_data.pm2d5Cmp_img = false;
                        }
                        if (this.envMonitor_data.pm10Cmp > 0) {
                            this.envMonitor_data.pm10Cmp_img = true;
                        } else {
                            this.envMonitor_data.pm10Cmp_img = false;
                        }
                        if (this.envMonitor_data.noiseCmp > 0) {
                            this.envMonitor_data.noiseCmp_img = true;
                        } else {
                            this.envMonitor_data.noiseCmp_img = false;
                        }
                        this.pm_echarts();
                        this.db_echarts();
                    }
                    setTimeout(() => {
                        this.envMonitor();
                    }, 60000)
                })
                .catch(error => {
                    console.log(error);
                })
        },
        // 节电管理
        eleSave() {
            this.$axios.get('/greenWork/eleSave')
                .then(response => {
                    if (response.data.res == 'SUCCESS') {
                        this.eleSave_data = response.data.data;
                        console.log(this.eleSave_data);

                        if (this.eleSave_data.workArea.lastAverCmp > 0) {
                            this.eleSave_data.workArea.lastAverCmp_img = true;
                        } else {
                            this.eleSave_data.workArea.lastAverCmp_img = false;
                        }
                        if (this.eleSave_data.liveArea.lastCmp > 0) {
                            this.eleSave_data.liveArea.lastCmp_img = true;
                        } else {
                            this.eleSave_data.liveArea.lastCmp_img = false;
                        }
                        this.eleSave_workArea_echarts();
                    }
                    setTimeout(() => {
                        this.eleSave();
                    }, 60000)
                })
                .catch(error => {
                    console.log(error);
                })
        },
        // 节水管理
        waterSave() {
            this.$axios.get('/greenWork/waterSave')
                .then(response => {
                    if (response.data.res == 'SUCCESS') {
                        this.waterSave_data = response.data.data
                        if (this.waterSave_data.workArea.lastAverCmp > 0) {
                            this.waterSave_data.workArea.lastAverCmp_img = true;
                        } else {
                            this.waterSave_data.workArea.lastAverCmp_img = false;
                        }
                        this.right_top_echarts();
                        this.right_mid_echarts();
                    }
                    setTimeout(() => {
                        this.waterSave();
                    }, 60000)
                })
                .catch(error => {
                    console.log(error);
                })
        },
    }
}
</script>
