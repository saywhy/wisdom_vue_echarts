<template>
    <!-- 监控管理 -->
    <div class="Monitor">
        <div class="Monitor_box">
            <div class="Monitor_item_box">
                <li class="Monitor_left Monitor_item" v-for="item in Monitors_data">
                    <div class="Monitor_item_content">
                        <video id="myPlayer" controls playsInline webkit-playsinline autoplay>
                            <source :src="item.HdAddress" type="" />
                        </video>
                    </div>
                    <div class="title_box">
                        <div class="title">
                            <p>
                                <span>{{item.Name}}</span>
                            </p>
                        </div>
                    </div>
                </li>
                <!-- <div class="Monitor_mid Monitor_item">
                    <div class="Monitor_item_content">
                    </div>
                    <div class="title_box">
                        <div class="title">
                            <p>
                                <span>xxxx</span>位置监控
                            </p>
                        </div>
                    </div>
                </div>
                <div class="Monitor_right Monitor_item">
                    <div class="Monitor_item_content">
                    </div>
                    <div class="title_box">
                        <div class="title">
                            <p>
                                <span>xxxx</span>位置监控
                            </p>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>
<style  lang="less">
@media screen and (max-width: 1920px) {
  .Monitor {
    color: #fff;
    .Monitor_box {
      height: 840px;
      width: 100%;
      overflow-y: auto;
      .Monitor_item_box {
        // height: 840px;
        // width: 100%;
        // border: 1px solid green;
        // overflow: hidden;
        .Monitor_item {
          float: left;
          width: 595px;
          height: 100%;
          .Monitor_item_content {
            width: 100%;
            height: 350px;
            background: url(../assets/img/3/item_bg.png) no-repeat 0px 0px;
            background-size: 100% 100%;
            -moz-background-size: 100% 100%;
            padding: 10px;
            #myPlayer {
              width: 580px;
              margin-left: -2px;
              height: 330px;
              //   height: 350px;
            }
          }
          .title_box {
            width: 100%;
            height: 60px;
            position: relative;
            .title {
              width: 240px;
              height: 40px;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              background: url(../assets/img/7/title_bg.png) no-repeat 0px 0px;
              background-size: 100% 100%;
              -moz-background-size: 100% 100%;
              p {
                text-align: center;
                width: 100%;
                font-size: 16px;
                height: 40px;
                font-family: SourceHanSansCN-Bold;
                letter-spacing: 1px;
                color: #fff;
                line-height: 40px;
                font-weight: 700;
              }
            }
          }
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
        .Monitor_left {
          width: 595px;
          margin-bottom: 20px;
        }
        li:nth-child(2) {
          margin: 0 30px;
        }
        li:nth-child(3n + 2) {
          margin: 0 30px;
        }
        .Monitor_mid {
          width: 595px;
          margin: 0 30px;
        }
        .Monitor_right {
          width: 595px;
        }
      }
    }
    .Monitor_box::-webkit-scrollbar-track-piece {
      //滚动条凹槽的颜色，还可以设置边框属性
      border-radius: 10px;
      background-color: rgba(7, 48, 95, 0.88);
    }
    .Monitor_box::-webkit-scrollbar {
      /*滚动条整体样式*/
      //滚动条的宽度
      width: 5px;
      height: 1px;
    }
    .Monitor_box::-webkit-scrollbar-thumb {
      //滚动条的设置
      background-color: rgba(117, 193, 239, 0.73);
      border-radius: 10px;
      height: 24px;
      //   opacity: 0.73;
    }
    .Monitor_box::-webkit-scrollbar-thumb:hover {
      background-color: #bbb;
    }
  }
}
@media screen and (min-width: 1930px) {
}
</style>
<script>
// import '../../static/ezuikit.js';
// import '../../static/ezuikit.js';

// var EZUIPlayer = require('ezuikit');

export default {
    components: {
    },
    name: 'Monitor',
    data() {
        return {
            items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            Monitors_data: []
        }
    },
    mounted() {
        this.MonitorManager();
    },
    methods: {
        MonitorManager() {
            this.$axios.get('/MonitorManager/Monitors')
                .then(response => {
                    if (response.data.res == 'SUCCESS') {
                        console.log(response.data);
                        this.Monitors_data = response.data.data;
                        this.$nextTick(function () {
                            var player = new EZUIPlayer('myPlayer');
                        })
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }

    }
}
</script>
