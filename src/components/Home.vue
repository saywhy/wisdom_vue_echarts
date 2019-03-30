<template>
    <div class="home">
        <div class="home_top">
            <div class="home_top_left item">
                <div class="container">
                    <div class="title">
                        <span>工程简介</span>
                    </div>
                    <div class="table_container_left">
                        <table>
                            <tbody>
                                <tr v-for="item in abstract">
                                    <td class="td_title">{{item.name}}</td>
                                    <td class="td_content">{{item.content}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="home_top_mid item">
                <!-- <img src="../assets/img/1/mid_bg.jpeg" alt=""> -->
                <img :src="picUrl" alt="">
                <!-- <div class="img_box"> -->
                <!-- <img class="img_box" src="www.biaima.com.cn/bs_test/index/picture/Building.png" alt=""> -->
                <!-- </div> -->
            </div>
            <div class="home_top_right item">
                <div class="container">
                    <div class="title">
                        <span>工程动态</span>
                    </div>
                    <div class="table_container_right">
                        <table>
                            <tbody>
                                <tr v-for="item in dynamic">
                                    <td class="td_title">{{item.title}}</td>
                                    <td class="td_content">{{item.date}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="home_bom">
            <div class="home_bom_left home_bom_item">
                <div class="home_bom_title">环境监测</div>
                <div class="home_bom_content">
                    <div class="home_bom_content_left">
                        <div class="home_bom_left_top">
                            <div class="content_left">
                                <img src="../assets/img/1/weather.png" alt="">
                                <div class="content_left_text">
                                    <p class="text_top">天气</p>
                                    <span class="text_bom">{{environment.weather}}</span>
                                </div>
                            </div>
                            <div class="content_mid">
                                <img src="../assets/img/1/db.png" alt="">
                                <div class="content_left_text">
                                    <p class="text_top">PM2.5/PM10</p>
                                    <span class="text_bom">
                                        <span>{{environment.pm2d5}}</span>
                                        ug/m3
                                    </span>
                                    <span class="text_bom">
                                        <span>{{environment.pm10}}</span>
                                        ug/m3</span>
                                </div>
                            </div>
                            <div class="content_right">
                                <img src="../assets/img/1/pm.png" alt="">
                                <div class="content_left_text">
                                    <p class="text_top">噪声</p>
                                    <span class="text_bom">
                                        <span>{{environment.noise}}</span> db℃</span>
                                </div>
                            </div>
                        </div>
                        <div class="line">
                            <img src="../assets/img/1/line.png" alt="">
                        </div>
                        <!-- 折线图-环境监测 -->
                        <div id="environment">
                        </div>
                    </div>
                </div>

            </div>
            <div class="home_bom_mid home_bom_item">
                <div class="home_bom_title">劳动力情况</div>
                <div class="home_bom_content">
                    <div class="home_bom_content_mid">
                        <div class="home_bom_mid_top">
                            <div class="content_mid">
                                <img src="../assets/img/1/attendance.png" alt="">
                                <div class="content_mid_text">
                                    <p class="text_top">员工考勤</p>
                                    <span class="text_bom">
                                        <span> {{members.actualNumsTotal}}</span>
                                        /
                                        <span>{{members.objNumsTotal}}</span>
                                        人</span>
                                    <span class="text_bom">
                                        <span>{{members.attendance | numFilter}}</span>
                                        % 到勤率</span>
                                </div>
                            </div>
                            <div class="content_right">
                                <p>
                                    <span class="span_color span_color_top"></span>
                                    <span class="span_text">
                                        应到人数
                                    </span>
                                </p>
                                <p>
                                    <span class="span_color span_color_bom"></span>
                                    <span class="span_text">
                                        实到人数
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
            </div>
            <div class="home_bom_right home_bom_item">
                <div class="home_bom_title">安全数据</div>
                <div class="home_bom_content">
                    <div class="home_bom_content_right">
                        <div class="content_right_item" v-for="item in safe">
                            <div class="content_right_item_top">
                                <p>{{item.name}}</p>
                                <img src="../assets/img/1/dt_line.png" alt="">
                            </div>
                            <div class="content_right_item_bom">
                                <div class="item_bom_left">
                                    <img src="../assets/img/1/dt_icon.png" alt="">
                                </div>
                                <div class="item_bom_mid">
                                    <div class="item_bom_mid_left">
                                        <p>高度</p>
                                        <p>重量</p>
                                        <p>中心距</p>
                                        <p>力矩</p>
                                        <p>风力</p>
                                        <p>倾斜</p>
                                    </div>
                                    <div class="item_bom_mid_mid">
                                        <p>{{item.height}}</p>
                                        <p>{{item.weight}}</p>
                                        <p>{{item.cenSpacing}}</p>
                                        <p>{{item.momentForce}}</p>
                                        <p>{{item.windForce}}</p>
                                        <p>{{item.lean}}</p>
                                    </div>
                                    <div class="item_bom_mid_right">
                                        <p>米</p>
                                        <p>吨</p>
                                        <p>米</p>
                                        <p>吨，米</p>
                                        <p>级</p>
                                        <p>mm</p>
                                    </div>
                                </div>
                                <div class="item_bom_right">
                                    <!-- 折线图 -->
                                    <p>违规操作
                                        <span>{{item.momentForceAlertTimes}}</span>
                                        次数
                                    </p>
                                    <div :id="item.id" class="item_bom_right_echarts">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <img src="www.biaima.com.cn/bs_test/index/picture/Building.png" width="200" height="200" alt=""> -->
    </div>
</template>
<style  lang="less">
@media screen and (min-width: 1930px) {
  @import "../common/css/home/homebg.less";
}
@media screen and (max-width: 1920px) {
  @import "../common/css/home/home.less";
}
</style>

<script>
var echarts = require('echarts');
// import 'www.biaima.com.cn/bs_test/index/picture/Building.png';
export default {
    components: {
        // Vue.component('cdn-img', {
        //   props: ['src'],
        //   template: `<img :src="'http://awesome.cdn.com/' + src" /> `
        // })
    },
    name: 'home',
    data() {
        return {
            abstract: [],
            environment: {},
            members: [],
            dynamic: [],
            safe: [],
            picUrl: ""
        }
    },
    mounted() {
        // 获取工程简介
        this.abstract_getData();
        // 环境监测
        this.environment_getData();
        // 劳动力情况
        this.members_getData();
        // 主图片
        this.mainPicture_getData();
        // 工程动态
        this.dynamic_getData();
        // 安全数据
        this.safe_getData();
    },
    filters: {
        numFilter(value) {
            // 截取当前数据到小数点后两位
            let realVal = parseFloat(value).toFixed(2)
            // num.toFixed(2)获取的是字符串
            return parseFloat(realVal)
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        // 折线图-环境监测
        environment_echarts() {
            var mychart = echarts.init(document.getElementById("environment"));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    icon: 'circle',
                    data: ['PM2.5', 'PM10'],
                    right: '60',
                    textStyle: {
                        fontSize: 14,
                        color: '#7C97AD'
                    }
                },
                color: ['#69E988', '#FEDB37'],
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
                        interval: 0,
                        rotate: -40,
                        margin: 25,
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
                    data: this.environment.timeAxis
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
                        data: this.environment.pm2d5Curve
                    },
                    {
                        name: 'PM10',
                        type: 'line',
                        data: this.environment.pm10Curve
                    }
                ]
            };
            mychart.setOption(option, true);
            window.onresize = function () {
                mychart.resize();
                console.log(' attendance');
            }
        },
        // 柱状图-考勤
        attendance_echarts() {
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
                        data: this.members.workerTypes
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
                        data: this.members.objNums
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
                        data: this.members.actualNums
                    }
                ]
            };
            mychart.setOption(option, true);
            window.onresize = function () {
                mychart.resize();
                console.log('environment');
            }
        },
        // 折线图-力距
        safe_echarts() {
            this.safe.forEach(item => {
                this.$nextTick(() => {
                    var mychart = echarts.init(document.getElementById(item.id));
                    var option = {
                        tooltip: {
                            trigger: 'axis'
                        },
                        color: ['#FFF79A'],
                        grid: {
                            left: '3%',
                            right: '3%',
                            bottom: -15,
                            top: 5,
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
                                rotate: 60,
                                margin: 15,
                                textStyle: {
                                    align: 'center',
                                    fontSize: 8,
                                    baseline: 'middle'
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    // 设置x轴颜色
                                    color: '#7C97AD'
                                },
                            },
                            data: item.timeAxis
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
                                name: '#1吊塔',
                                type: 'line',
                                symbol: 'circle',     //设定为实心点
                                hoverAnimation: false,
                                areaStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: 'rgba(255,247,154,.98)'
                                        }, {
                                            offset: 1,
                                            color: 'rgba(255,247,154,.25)'
                                        }], false)
                                    }
                                },
                                animation: false,
                                symbolSize: 0,   //设定实心点的大小
                                data: item.momentForceList
                            }
                        ]
                    };
                    mychart.setOption(option, true);
                    window.onresize = function () {
                        mychart.resize();
                    }
                })
            });
        },
        // 获取工程简介
        abstract_getData() {
            this.$axios.get('/index/abstract')
                .then(response => {
                    if (response.data.res == 'SUCCESS') {
                        this.abstract = [
                            { 'name': '建筑总面积', 'content': response.data.data.totalArea },
                            { 'name': '结构形式', 'content': response.data.data.structType },
                            { 'name': '总层数', 'content': response.data.data.totalFloors },
                            { 'name': '建设单位', 'content': response.data.data.devOrg },
                            { 'name': '监理单位', 'content': response.data.data.superOrg },
                            { 'name': '安质监站', 'content': response.data.data.safeOrg },
                            { 'name': '总承建单位', 'content': response.data.data.mainOrg }
                        ]
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        },
        // 环境监测
        environment_getData() {
            this.$axios.get('/index/environment')
                .then(response => {
                    if (response.data.res == 'SUCCESS') {
                        this.environment = response.data.data;
                        this.environment_echarts();
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        },
        // 劳动力情况
        members_getData() {
            this.$axios.get('/index/members')
                .then(response => {
                    if (response.data.res == 'SUCCESS') {
                        // console.log(response.data.data);
                        this.members = response.data.data;
                        this.attendance_echarts();
                        var objNumsTotal = 0;
                        var actualNumsTotal = 0;
                        this.members.objNums.map(item => {
                            objNumsTotal += item;
                        })
                        this.members.actualNums.map(item => {
                            actualNumsTotal += item;
                        })
                        this.members.objNumsTotal = objNumsTotal;
                        this.members.actualNumsTotal = actualNumsTotal;
                        this.members.attendance = (actualNumsTotal / objNumsTotal) * 100;
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        },
        // 主图片
        mainPicture_getData() {
            this.$axios({
                method: "get",
                url: '/index/mainPicture',
            })
                .then(response => {
                    if (response.data.res == 'SUCCESS') {
                        console.log(response.data.data);
                        this.picUrl = 'data:image/png;base64,' + response.data.data.picB64;
                        console.log(this.picUrl);
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        },
        // 工程动态
        dynamic_getData() {
            this.$axios.get('/index/dynamic')
                .then(response => {
                    if (response.data.res == 'SUCCESS') {
                        this.dynamic = response.data.data;
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        },
        // 安全数据
        safe_getData() {
            this.$axios.get('/index/safe')
                .then(response => {
                    if (response.data.res == 'SUCCESS') {
                        this.safe = response.data.data;
                        this.safe.map((item, index) => {
                            item.id = 'dt' + index;
                        })
                        // console.log(response.data.data);
                        this.safe_echarts();
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        },

    }
}
</script>



