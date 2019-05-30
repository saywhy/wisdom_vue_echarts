<template>
    <!-- 设备管理 -->
    <div class="Equipment">
        <!-- 左边 -->
        <div class="equipment_item item_left">
            <div class="item_title">
                <p>吊塔管理</p>
            </div>
            <div class="container">
                <div>
                    <div class="container_title">
                        <span>数据统计</span>
                        <img src="../assets/img/3/2.png" alt="">
                    </div>
                    <div class="left_name">
                        <el-row>
                            <el-col :span="6" :offset="2">
                                <div class="select">
                                    <p class="select_title" @click="select_click" v-text="select_title">专业选择</p>
                                    <div class="select_option" v-if="select_option">
                                        <p v-for="item in tower" class="select_option_item" @click="select_option_choose(item)">
                                            <img src="../assets/img/3/sanjiao.png" alt="">
                                            <span>{{item.name}}</span>
                                        </p>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <span>今日吊次</span>
                                <span class="mid_text">{{tower_item_data.hangTimes}}</span>
                                <span>次</span>
                            </el-col>
                            <el-col :span="6">
                                <span>超载报警</span>
                                <span class="right_text">{{tower_item_data.alertTimes}}</span>
                                <span>次</span>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="left_content">
                        <el-row>
                            <el-col :span="12" class="left_content_left">
                                <div class="left_tadiao">
                                </div>
                            </el-col>
                            <el-col :span="12" class="left_content_right">
                                <div class="left_tadiao_text">
                                    <p v-for="value in tower_item_data.info">
                                        <el-row>
                                            <el-col :span="9" class="left_tadiao_text_left">
                                                <span>{{value.name}}</span>
                                            </el-col>
                                            <el-col :span="8" class="left_tadiao_text_mid">
                                                <span class="">{{value.num | numFilter}}</span>
                                            </el-col>
                                            <el-col :span="6" class="left_tadiao_text_right">
                                                <span>{{value.unit}}</span>
                                            </el-col>
                                        </el-row>
                                    </p>
                                </div>
                            </el-col>
                        </el-row>
                        <div class="left_content_bom"></div>
                    </div>
                    <div class="left_bom">
                        <div class="container_title">
                            <span>吊次力矩统计曲线图</span>
                            <img src="../assets/img/3/2.png" alt="">
                        </div>
                        <!-- 折线图 -->
                        <div class="moment_echarts" id="tower">
                            <span class="echarts_unit">
                                力矩（吨.米）
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 中间 -->
        <div class="equipment_item item_mid">
            <div class="item_title">
                <p>电梯管理</p>
            </div>
            <div class="container">
                <div class="container_title">
                    <span>数据统计</span>
                    <img src="../assets/img/3/2.png" alt="">
                </div>
                <div class="mid_content_item" v-for="item in elevator">
                    <div class="item_bom_left">
                        <img src="../assets/img/5/icon.png" alt="">
                    </div>
                    <div class="item_bom_mid">
                        <el-row>
                            <el-col :span="12" class="item_bom_mid_left">
                                <p class="item_bom_item_title">
                                    <span class="jianbian">{{item.name}}</span>
                                </p>
                                <p>外门监测</p>
                                <p>内门监测</p>
                                <p>重量监测</p>
                                <p>速度监测</p>
                                <p>倾斜度</p>
                            </el-col>
                            <el-col :span="12" class="item_bom_mid_right">
                                <p class="item_bom_item_title">
                                    <span class="jianbian">超载报警</span>
                                    <span class="span_red">{{item.alertTimes}}</span>
                                    <span class="jianbian">次</span>
                                </p>
                                <p>
                                    <span class="span_bg" :class="item.outDoor.color=='green'?'open':'close'">{{item.outDoor.val==false?'关':'开'}}</span>
                                </p>
                                <p>
                                    <span class="span_bg" :class="item.inDoor.color=='green'?'open':'close'">{{item.inDoor.val==false?'关':'开'}}</span>
                                </p>
                                <p>
                                    <span class="span_bg">{{item.wCheck}} Kg</span>
                                </p>
                                <p>
                                    <span class="span_bg">{{item.sCheck}} m/s</span>
                                </p>
                                <p>
                                    <span class="span_bg">{{item.lean}} °</span>
                                </p>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>
        </div>
        <!-- 右边 -->
        <div class="equipment_item item_right">
            <div class="item_title">
                <p>智能安防围挡</p>
            </div>
            <div class="container">
                <div class="item_right_item" v-for="item in rail">
                    <div class="container_title">
                        <span>{{item.name}}</span>
                        <img src="../assets/img/3/2.png" alt="">
                    </div>
                    <div class="item_right_item_content">
                        <el-row>
                            <el-col :span="12" class="item_right_left">
                                <ul>
                                    <li class="item_right_li" v-for="(item_li,index) in item.data" v-if="index<10">
                                        <el-row>
                                            <el-col :span="10" class="li_left">
                                                <span>{{item_li.name}}</span>
                                            </el-col>
                                            <el-col :span="12" class="li_right">
                                                <img src="../assets/img/5/green.png" v-if="item_li.state" class="item_img" alt="">
                                                <img src="../assets/img/5/red.png" v-if="!item_li.state" class="item_img" alt="">
                                                <span :class="item_li.state?'normal':'red'">{{item_li.state?'正常':'拆除'}}</span>
                                            </el-col>
                                        </el-row>
                                    </li>
                                </ul>
                            </el-col>
                            <el-col :span="12" class="item_right_right ul_right">
                                <ul>
                                    <li class="item_right_li" v-for="(item_li_right,index) in item.data" v-if="index>9">
                                        <el-row>
                                            <el-col :span="10" class="li_left">
                                                <span>{{item_li_right.name}}</span>
                                            </el-col>
                                            <el-col :span="12" class="li_right">
                                                <img src="../assets/img/5/green.png" v-if="item_li_right.state" class="item_img" alt="">
                                                <img src="../assets/img/5/red.png" v-if="!item_li_right.state" class="item_img" alt="">
                                                <span :class="item_li_right.state?'normal':'red'">{{item_li_right.state?'正常':'拆除'}}</span>
                                            </el-col>
                                        </el-row>
                                    </li>
                                </ul>
                            </el-col>
                        </el-row>
                        <img src="../assets/img/5/bottom_bg.png" class="bottom_bg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style  lang="less">
@media screen and (max-width: 1920px) {
  .Equipment {
    width: 100%;
    height: 830px;
    // 公共部分
    .equipment_item {
      float: left;
      width: 595px;
      height: 830px;
      padding: 20px 15px 15px 20px;
      background: url(../assets/img/3/item_bg.png) no-repeat 0px 0px;
      background-size: 100% 100%;
      -moz-background-size: 100% 100%;
      .item_title {
        height: 30px;
        width: 145px;
        margin-bottom: 15px;
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
      .container {
        height: 745px;
        overflow-y: auto;
        padding-right: 10px;
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
      .container::-webkit-scrollbar-track-piece {
        border-radius: 10px;
        background-color: rgba(7, 48, 95, 0.88);
      }
      .container::-webkit-scrollbar {
        width: 5px;
        height: 1px;
      }
      .container::-webkit-scrollbar-thumb {
        background-color: rgba(117, 193, 239, 0.73);
        border-radius: 10px;
        height: 24px;
      }
      .container::-webkit-scrollbar-thumb:hover {
        background-color: #bbb;
      }
    }
    //  左边
    .item_left {
      .el-row {
        margin: 0 !important;
      }
      .left_name {
        height: 40px;
        width: 100%;
        line-height: 40px;
        text-align: center;
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
        .left_text {
          font-size: 14px;
          background-image: linear-gradient(#fff, #8ae1fd);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .mid_text,
        .right_text {
          background: url(../assets/img/5/left_text.png) no-repeat 0px 0px;
          background-size: 100% 100%;
          -moz-background-size: 100% 100%;
          padding: 0 5px;
          font-size: 12px;
        }
        .right_text {
          color: red;
        }
      }
      .left_content {
        height: 350px;
        position: relative;
        .left_content_left {
          position: relative;
          height: 350px;
          .left_tadiao {
            position: absolute;
            left: 60%;
            bottom: 20px;
            transform: translateX(-50%);
            height: 300px;
            width: 70%;
            background: url(../assets/img/5/tadiao.png) no-repeat 0px 0px;
            background-size: 100% 100%;
            -moz-background-size: 100% 100%;
          }
        }
        .left_content_right {
          position: relative;
          height: 350px;
          .left_tadiao_text {
            position: absolute;
            left: 40%;
            bottom: 40px;
            transform: translateX(-50%);
            padding: 10px 5px 10px 10px;
            height: 195px;
            width: 70%;
            background: url(../assets/img/5/left_bg.png) no-repeat 0px 0px;
            background-size: 100% 100%;
            -moz-background-size: 100% 100%;
            p {
              height: 25px;
              font-size: 12px;
              padding: 3px;
            }
            .left_tadiao_text_left {
              text-align: right;
            }
            .left_tadiao_text_mid {
              background: url(../assets/img/5/left_text.png) no-repeat 0px 0px;
              background-size: 100% 100%;
              -moz-background-size: 100% 100%;
              height: 15px;
              padding: 0 5px;
              margin: 0 3px;
              font-size: 12px;
              text-align: center;
              color: #a6f4fc;
            }
            .left_tadiao_text_right {
              text-align: left;
            }
          }
        }
        .left_content_bom {
          width: 100%;
          height: 80px;
          position: absolute;
          bottom: 0;
          left: 0;
          background: url(../assets/img/5/dizuo.png) no-repeat 0px 0px;
          background-size: 100% 100%;
          -moz-background-size: 100% 100%;
        }
      }
      .left_bom {
        .moment_echarts {
          width: 100%;
          height: 270px;
        }
      }
    }
    // 中间
    .item_mid {
      margin: 0 33px;
      .mid_content_item {
        margin: 20px 40px;
        height: 200px;
        background: url(../assets/img/5/5_item_bg.png) no-repeat 0px 0px;
        background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        .item_bom_left {
          float: left;
          width: 130px;
          height: 100%;
          position: relative;
          img {
            width: 90px;
            height: 90px;
            position: absolute;
            left: 30%;
            top: 50%;
            transform: translateX(-50%);
            transform: translateY(-50%);
          }
        }
        .item_bom_mid {
          float: left;
          width: 310px;
          height: 100%;
          padding-top: 20px;
          margin-left: 20px;
          p {
            font-size: 14px;
            margin-bottom: 3px;
            height: 16px;
            line-height: 16px;
            margin: 10px 0;
          }
          .item_bom_item_title {
            .jianbian {
              font-size: 18px;
              margin-bottom: 20px;
              height: 20px;
              line-height: 20px;
              font-weight: 500;
              background-image: linear-gradient(#fff, #8ae1fd);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
          .item_bom_mid_left {
            text-align: right;
            padding-right: 5px;
          }
          .item_bom_mid_right {
            padding-left: 5px;
            .span_red {
              border-radius: 5px;
              font-size: 16px;
              background: url(../assets/img/5/num_bg.png) no-repeat 0px 0px;
              background-size: 100% 100%;
              -moz-background-size: 100% 100%;
              padding: 0 10px;
              color: red;
            }
            .span_bg {
              display: inline-block;
              text-align: center;
              width: 75px;
              background: url(../assets/img/5/num_bg.png) no-repeat 0px 0px;
              background-size: 100% 100%;
              -moz-background-size: 100% 100%;
              padding: 0 10px;
            }
            .open {
              color: #06ea3a;
              font-weight: 500;
            }
            .close {
              color: #f03344;
              font-weight: 500;
            }
          }
        }
      }
    }
    // 右边
    .item_right {
      .item_right_item {
        height: 540px;
        .item_right_item_content {
          height: 500px;
          padding: 10px 15px;
          position: relative;
          .bottom_bg {
            width: 200px;
            height: 20px;
            position: absolute;
            bottom: 55px;
            left: 50%;
            transform: translateX(-50%);
          }
          ul {
            border: 1px solid #2ac4ed;
          }

          .item_right_li {
            height: 40px;
            border-bottom: 1px solid #2ac4ed;
            font-size: 16px;
            text-align: center;
            .normal {
              color: #fff;
            }
            .red {
              color: #f03344;
            }
            .li_left {
              height: 40px;
              width: 40%;
              line-height: 40px;
              border-right: 1px solid #2ac4ed;
            }
            .li_right {
              height: 40px;
              width: 60%;
              line-height: 40px;
            }
            .item_img {
              width: 36px;
              height: 36px;
              margin-bottom: 4px;
              vertical-align: middle;
            }
          }
          li:nth-last-child(1) {
            border: 0;
          }
          .item_right_left {
            height: 480px;
            padding-right: 10px;
          }
          .item_right_right {
            height: 480px;
            padding-left: 10px;
          }
        }
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
    name: 'Equipment',
    data() {
        return {
            tower: {},
            elevator: [],
            rail: [],
            left_data: [
                {
                    name: '风力',
                    num: '5',
                    unit: '级'
                },
                {
                    name: '高度',
                    num: '50',
                    unit: '米'
                },
                {
                    name: '幅度',
                    num: '30',
                    unit: '度'
                },
                {
                    name: '载重',
                    num: '45',
                    unit: '吨'
                },
                {
                    name: '力矩',
                    num: '5',
                    unit: '吨.米'
                },
                {
                    name: '转动角度',
                    num: '30',
                    unit: '度'
                },
                {
                    name: '倾斜角度',
                    num: '30',
                    unit: '度'
                },
            ],
            lift: [
                {
                    name: '#1施工电梯',
                    num: 3,
                    outerdoor: true,
                    innerdoor: false,
                    weight: 100,
                    speed: 50,
                    slope: 20,
                }, {
                    name: '#2施工电梯',
                    num: 5,
                    outerdoor: false,
                    innerdoor: true,
                    weight: 100,
                    speed: 50,
                    slope: 20,
                }, {
                    name: '#3施工电梯',
                    num: 3,
                    outerdoor: false,
                    innerdoor: false,
                    weight: 210,
                    speed: 52,
                    slope: 50,
                }

            ],
            select_title: '吊塔选择',
            select_option: false,
            tower_item_data: {}
        }
    },
    mounted() {
        // 吊塔管理
        this.tower_data();
        // 电梯管理
        this.elevator_data();
        // 智能安防围墙
        this.rail_data();
    },
    filters: {
        numFilter(value) {
            if (value.toString().length > 7) {
                let tempVal = parseFloat(value).toFixed(6)
                let realVal = tempVal.substring(0, tempVal.length - 1)
                return realVal
            } else {
                return value
            }
        }
    },
    methods: {
        select_click() {
            this.select_option = true;
        },
        select_option_choose(item) {
            this.select_title = item.name;
            this.select_option = false;
            this.tower_item_data = item;
            this.moment_echarts()
        },
        change_select(item) {
        },
        // 折线图
        moment_echarts() {
            var mychart = echarts.init(document.getElementById('tower'));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                title: {
                    text: '力\n矩\n︵\n吨\n . \n米\n︶',
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
                    data: ['PM2.5', 'PM10'],
                    right: '60',
                    textStyle: {
                        fontSize: 8,
                        color: '#7C97AD'
                    }
                },
                color: ['#78faff'],
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
                        interval: 0,
                        rotate: -60,
                        margin: 10,
                        textStyle: {
                            align: 'left',
                            baseline: 'bottom'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            // 设置x轴颜色
                            color: '#fff'
                        },
                    },
                    data: this.tower_item_data.timeAxis
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
                        name: '',
                        type: 'line',
                        data: this.tower_item_data.momentForceList,
                        areaStyle: {
                            normal: {
                                color: {
                                    colorStops: [{
                                        offset: 0, color: 'rgba(120,250,255, .3)' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: 'rgba(120,250,255,.1)' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }
                            }
                        },
                    }
                ]
            };
            mychart.setOption(option, true);
            window.onresize = function () {
                mychart.resize();
            }
        },
        // 吊塔管理
        tower_data() {
            this.$axios.get('/devManager/tower')
                .then(response => {
                    if (response.data.res == 'SUCCESS') {
                        this.tower = response.data.data;
                        this.tower.map((item, index) => {
                            item.info = [
                                { name: '风力', num: item.windForces, unit: '级' },
                                { name: '高度', num: item.height, unit: '米' },
                                { name: '幅度', num: item.range, unit: '度' },
                                { name: '载重', num: item.weight, unit: '吨' },
                                { name: '力矩', num: item.momentForce, unit: '吨.米' },
                                { name: '转动角度', num: item.turnAngle, unit: '度' },
                                { name: '倾斜角度', num: item.leanAngle, unit: '度' }
                            ];
                            item.id = 'tower' + index
                        })
                        this.tower_item_data = this.tower[0];
                        this.select_title = this.tower[0].name;
                        this.moment_echarts();
                        setTimeout(() => {
                            this.tower_data();
                        }, 60000)
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        },
        // 电梯管理
        elevator_data() {
            this.$axios.get('/devManager/elevator')
                .then(response => {
                    if (response.data.res == 'SUCCESS') {
                        this.elevator = response.data.data;
                        setTimeout(() => {
                            this.elevator_data();
                        }, 60000)
                    }
                })
                .catch(error => {
                    console.log(error);
                })

        },
        // 智能安防围墙
        rail_data() {
            this.$axios.get('/devManager/rail')
                .then(response => {
                    if (response.data.res == 'SUCCESS') {
                        this.rail = response.data.data;
                        setTimeout(() => {
                            this.rail_data();
                        }, 60000)
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        },
    }
}
</script>
