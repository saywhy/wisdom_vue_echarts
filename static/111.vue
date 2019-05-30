<template>
    <!-- 技术管理 -->
    <div class="Technology">
        <iframe :src="url_addr" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" style="width:100%" height="100%"></iframe>
    </div>
</template>
<style  lang="less">
@media screen and (max-width: 1920px) {
  .Technology {
    color: #fff;
    width: 100%;
    height: 830px;
    .technology_left {
      float: left;
      width: 600px;
      height: 100%;
      background: url(../assets/img/3/item_bg.png) no-repeat 0px 0px;
      background-size: 100% 100%;
      -moz-background-size: 100% 100%;
      padding: 25px;
      .technology_left_title {
        // border: 1px solid red;
        position: relative;
        height: 30px;
        .technology_left_title_content {
          position: absolute;
          width: 133px;
          height: 30px;
          line-height: 30px;
          font-size: 17px;
          text-align: center;
          background: url(../assets/img/2/2.png) no-repeat 0px 0px;
          background-size: 100% 100%;
          -moz-background-size: 100% 100%;
        }
        .left {
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        .mid {
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        .right {
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      .technology_left_input_box {
        margin-top: 20px;
        position: relative;
        .technology_left_input {
          padding-left: 10px;
          font-size: 16px;
          color: #fff;
          height: 37px;
          width: 100%;
          border: none;
          background: url(../assets/img/2/3.png) no-repeat 0px 0px;
          background-size: 100% 100%;
          -moz-background-size: 100% 100%;
        }
        input::-webkit-input-placeholder {
          /* placeholder颜色  */
          color: #fff;
          /* placeholder字体大小  */
          font-size: 16px;
          /* placeholder位置  */
          text-align: left;
        }
        .search_icon {
          width: 25px;
          height: 25px;
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
        }
        .search_line {
          position: absolute;
          height: 20px;
          width: 10px;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      .technology_left_bom {
        margin-top: 20px;
        padding-top: 10px;
        height: 680px;
        overflow-y: auto;
        width: 100%;
        background: url(../assets/img/2/6.png) no-repeat 0px 0px;
        background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        // 树形结构自定义
        .vue-tree-list .item-wrapper {
          padding: 5px 0;
          height: 100%;
          line-height: 100%;
          position: relative;
          font-size: 14px;
        }
        .vue-tree-list .item-toggle {
          display: inline-block;
          width: 20px;
          text-align: center;
          overflow: hidden;
          position: absolute;
          right: 20px;
          font-size: 22px;
          top: 2px;
          color: #00ddf2;
        }
        .vue-tree-list .item-checkbox {
          color: #00ddf2;
        }
      }

      .technology_left_bom::-webkit-scrollbar-track-piece {
        //滚动条凹槽的颜色，还可以设置边框属性
        border-radius: 10px;
        background-color: rgba(7, 48, 95, 0.88);
      }
      .technology_left_bom::-webkit-scrollbar {
        /*滚动条整体样式*/
        //滚动条的宽度
        width: 5px;
        height: 1px;
      }
      .technology_left_bom::-webkit-scrollbar-thumb {
        //滚动条的设置
        background-color: rgba(117, 193, 239, 0.73);
        border-radius: 10px;
        height: 24px;
        //   opacity: 0.73;
      }
      .technology_left_bom::-webkit-scrollbar-thumb:hover {
        background-color: #bbb;
      }
    }
    // 右边
    .technology_right {
      float: left;
      width: 1220px;
      margin-left: 33px;
      height: 100%;
      background: url(../assets/img/3/item_bg.png) no-repeat 0px 0px;
      background-size: 100% 100%;
      -moz-background-size: 100% 100%;
      position: relative;
      .full,
      .box,
      .center,
      .left,
      .right,
      .down,
      .up,
      .add,
      .cut,
      .right_box,
      .location,
      .shear,
      .footprint,
      .ruler,
      .cross,
      .info {
        position: absolute;
      }
      .full {
        width: 40px;
        height: 40px;
        right: 20px;
        top: 20px;
      }
      .box {
        width: 135px;
        height: 135px;
        bottom: 40px;
        left: 50px;
      }
      .center {
        width: 43px;
        height: 43px;
        bottom: 85px;
        left: 95px;
      }
      .left {
        width: 27px;
        height: 31px;
        bottom: 90px;
        left: 63px;
      }
      .right {
        width: 27px;
        height: 31px;
        bottom: 90px;
        left: 142px;
      }
      .down {
        width: 31px;
        height: 27px;
        bottom: 55px;
        left: 100px;
      }
      .up {
        width: 31px;
        height: 27px;
        bottom: 130px;
        left: 100px;
      }
      .cut {
        width: 24px;
        height: 24px;
        bottom: 35px;
        left: 40px;
      }
      .add {
        width: 24px;
        height: 24px;
        bottom: 35px;
        left: 170px;
      }
      .right_box {
        right: 20px;
        top: 120px;
        width: 53px;
        height: 600px;
      }
      .location {
        right: 33px;
        top: 150px;
        width: 30px;
        height: 40px;
      }
      .shear {
        right: 33px;
        top: 310px;
        width: 30px;
        height: 30px;
      }
      .footprint {
        right: 33px;
        top: 230px;
        width: 30px;
        height: 40px;
      }
      .ruler {
        right: 33px;
        top: 390px;
        width: 30px;
        height: 30px;
      }
      .cross {
        right: 33px;
        top: 470px;
        width: 30px;
        height: 30px;
      }
      .info {
        right: 33px;
        top: 660px;
        width: 30px;
        height: 30px;
      }
    }
  }
}
@media screen and (min-width: 1930px) {
}
</style>
<script>
// import Tree from './tree.json';
import VueTree from 'vue-simple-tree/src/components/VueTree.vue'
// import html from 'http://www.biaima.com.cn:5005/techmanager'
export default {
    components: {
        // html
    },
    name: 'Technology',
    data() {
        return {
            url_addr: ''
        }
    },
    mounted() {
        this.get_url();
    },
    watch: {

    },
    methods: {
        get_url() {
            $.ajax({
                type: "GET",
                url: "http://62.234.186.99:5115",
                data: { operation: 'gettext', name: 'gs' },
                //  dataType: "json",
                success: function (data) {
                    console.log(data);
                    this.url_addr = data + ':55005'

                }
            });

            // this.$axios.get('http://62.234.186.99:5115/?operation=gettext&name=gs')
            //     .then(response => {
            //         console.log(response);
            //         // this.url_addr

            //     })
            //     .catch(error => {
            //         console.log(error);
            //     })

        }
    }
}
</script>
