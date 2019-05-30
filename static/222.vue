<template>
    <!-- 技术管理 -->
    <div class="Technology">
        <!-- <iframe src="http://www.biaima.com.cn:5005/techmanager" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" style="width:100%" height="100%"></iframe> -->
        <!-- <v-html-panel :url.asyc="url1"></v-html-panel> -->
        <div class="technology_left">
            <el-row :gutter="0">
                <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                    <div class="technology_left_title">
                        <div class="technology_left_title_content left">
                            <p>模型管理</p>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                    <div class="technology_left_title">
                        <div class="technology_left_title_content mid">
                            <p> 图纸管理</p>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                    <div class="technology_left_title">
                        <div class="technology_left_title_content right">
                            <p> 变更管理</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <div class="technology_left_input_box">
                <input type="text" class="technology_left_input" placeholder="输入楼层或构件id">
                <img src="../assets/img/2/5.png" class="search_icon" alt="">
                <img src="../assets/img/2/4.png" class="search_line" alt="">
            </div>
            <div class="technology_left_bom">
                <vue-tree v-model="checkedIds" :tree-data="treeData" :options="options" @handle="someActions" />
            </div>
        </div>
        <div class="technology_right">
            <img src="../assets/img/2/right/1.png" class="full" alt="">
            <img src="../assets/img/2/right/5.png" class="box" alt="">
            <img src="../assets/img/2/right/2.png" class="center" alt="">
            <img src="../assets/img/2/right/6.png" class="left" alt="">
            <img src="../assets/img/2/right/7.png" class="right" alt="">
            <img src="../assets/img/2/right/8.png" class="down" alt="">
            <img src="../assets/img/2/right/9.png" class="up" alt="">
            <img src="../assets/img/2/right/3.png" class="add" alt="">
            <img src="../assets/img/2/right/4.png" class="cut" alt="">
            <img src="../assets/img/2/right/10.png" class="right_box" alt="">
            <img src="../assets/img/2/right/11.png" class="location" alt="">
            <img src="../assets/img/2/right/14.png" class="footprint" alt="">
            <img src="../assets/img/2/right/13.png" class="shear" alt="">
            <img src="../assets/img/2/right/12.png" class="ruler" alt="">
            <img src="../assets/img/2/right/15.png" class="cross" alt="">
            <img src="../assets/img/2/right/16.png" class="info" alt="">
        </div>
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
            url1: 'http://www.biaima.com.cn:5005/techmanager',
            //复选ids,可传入id数组作为初始选中状态,如[3,4,8]
            checkedIds: [],
            // tree数据
            treeData: [{
                "id": "1",
                "label": "1栋",
                "children": [
                    {
                        "id": "2",
                        "label": "1F"
                    },
                    {
                        "id": "3",
                        "label": "零标高"
                    },
                    {
                        "id": "4",
                        "label": "2F",
                    }, {
                        "id": "6",
                        "label": "3F",
                        "children": [
                            {
                                "id": "5",
                                "label": "混凝土_C35_框架梁",
                                "children": [
                                    {
                                        "id": "10",
                                        "label": "1000*400mm"
                                    },
                                    {
                                        "id": "7",
                                        "label": "350*500mm"
                                    },
                                    {
                                        "id": "8",
                                        "label": "200*300mm",
                                        children: [{
                                            "id": "9",
                                            "label": "混凝土_C35_框架梁_6779655"
                                        }]

                                    },
                                ]
                            }
                        ]
                    }
                ],
            }, {
                "id": "11",
                "label": "2栋",
                "children": [
                    {
                        "id": "12",
                        "label": "1F"
                    },
                    {
                        "id": "13",
                        "label": "零标高"
                    },
                    {
                        "id": "14",
                        "label": "2F",
                    }, {
                        "id": "16",
                        "label": "3F",
                        "children": [
                            {
                                "id": "15",
                                "label": "混凝土_C35_框架梁",
                                "children": [
                                    {
                                        "id": "110",
                                        "label": "1000*400mm"
                                    },
                                    {
                                        "id": "17",
                                        "label": "350*500mm"
                                    },
                                    {
                                        "id": "18",
                                        "label": "200*300mm",
                                        children: [{
                                            "id": "19",
                                            "label": "混凝土_C35_框架梁_6779655"
                                        }]

                                    },
                                ]
                            }
                        ]
                    }
                ],
            }, {
                "id": "21",
                "label": "3栋",
                "children": [
                    {
                        "id": "22",
                        "label": "1F"
                    },
                    {
                        "id": "23",
                        "label": "零标高"
                    },
                    {
                        "id": "24",
                        "label": "2F",
                    }, {
                        "id": "26",
                        "label": "3F",
                        "children": [
                            {
                                "id": "25",
                                "label": "混凝土_C35_框架梁",
                                "children": [
                                    {
                                        "id": "210",
                                        "label": "1000*400mm"
                                    },
                                    {
                                        "id": "27",
                                        "label": "350*500mm"
                                    },
                                    {
                                        "id": "28",
                                        "label": "200*300mm",
                                        children: [{
                                            "id": "29",
                                            "label": "混凝土_C35_框架梁_6779655"
                                        }]

                                    },
                                ]
                            }
                        ]
                    }
                ],
            }
            ],
            // 设置项
            options: {
                // String,节点显示字段
                itemName: 'name',
                // Boolean,是否显示添加子节点按钮
                addItem: true,
                // Boolean,是否显示选择框
                checkbox: true,
                // Array,初始化时选中id (v2.1以后不推荐使用，v3.0将废弃),替代方法见'#使用示例'章节
                checkedIds: [],
                // Boolean,选中时是否展开节点
                checkedOpen: true,
                // Boolean,目录是否加粗显示
                folderBold: false,
                // String,展开按钮(默认依赖font-awesome)
                openClass: 'fa fa-plus-square text-info',
                // String,收缩按钮(默认依赖font-awesome)
                closeClass: 'fa fa-minus-square text-danger',
                // String,添加节点按钮(默认依赖font-awesome)
                addClass: 'fa fa-plus text-danger',
                // Boolean,是否显示编辑按钮
                showEdit: false,
                // Boolean,是否显示删除按钮
                showDelete: false,
                // String,编辑按钮(默认依赖font-awesome)
                editClass: 'fa fa-edit',
                // String,删除按钮(默认依赖font-awesome)
                deleteClass: 'fa fa-trash-o',
                // (v2.1新增) Boolean,获取复选项目是否包含目录,默认`true`,如果只获取叶子节点设置为`false`
                idsWithParent: true,
                // (v2.1新增) Number,初始化时展开层级,根节点为0,默认0
                depthOpen: 0
            }
        }
    },
    mounted() {
    },
    watch: {
        checkedIds(val) {
            console.log(this.checkedIds);
        }
    },
    methods: {
        someActions(item) {
            // this.message.push(`节点 ${JSON.stringify(item)} 'handle' 事件`)
            console.log(item);
        }
    }
}
</script>
