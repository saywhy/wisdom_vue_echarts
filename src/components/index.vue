<template>
    <div id="index">
        <div class="index">
            <span class="icon_full" @click="getFullCreeen">
                <img v-if="full_if" src="../assets/img/full.png" alt="">
                <img v-else src="../assets/img/outfull.png" alt="">
            </span>
            <div class="title">
                <p>
                    智慧工地管理平台
                    <img class="up" src="../assets/img/1/title_up_line.png" alt="">
                    <img class="down" src="../assets/img/1/title_down_line.png" alt="">
                </p>
            </div>
            <!-- 导航 -->
            <div class="nav">
                <div class="nav_top">
                    <p class="nav_top_left">{{Common.Title}}</p>
                    <p class="nav_top_right">苏州比爱玛信息科技有限公司</p>
                </div>
                <div>
                    <div class="item">
                        <router-link to="Home">
                            <li :class="[state.isActive ? 'enterClass' : 'leaveClass']" @mouseenter="enter" @mouseleave="leave">
                                总览
                                <img src="../assets/img/1/down_crow.png" alt="" v-if="state.isActive">
                            </li>
                        </router-link>
                        <router-link to="Technology">
                            <li :class="[state.isActive2 ? 'enterClass2' : 'leaveClass2']" @mouseenter="enter2" @mouseleave="leave2">
                                技术管理
                                <img src="../assets/img/1/down_crow.png" alt="" v-if="state.isActive2">
                            </li>
                        </router-link>
                        <router-link to="Safety">
                            <li :class="[state.isActive3 ? 'enterClass3' : 'leaveClass3']" @mouseenter="enter3" @mouseleave="leave3">
                                安全管理
                                <img src="../assets/img/1/down_crow.png" alt="" v-if="state.isActive3">
                            </li>
                        </router-link>
                        <router-link to="Quality">
                            <li :class="[state.isActive4 ? 'enterClass4' : 'leaveClass4']" @mouseenter="enter4" @mouseleave="leave4">
                                质量管理
                                <img src="../assets/img/1/down_crow.png" alt="" v-if="state.isActive4">
                            </li>
                        </router-link>
                    </div>
                    <div class="item">
                        <div class="item_mid" v-if="state.active_item">
                            <p>项目效果展示</p>
                        </div>
                    </div>
                    <div class="item item_r">
                        <router-link to="Green">
                            <li :class="[state.isActive5 ? 'enterClass5' : 'leaveClass5']" @mouseenter="enter5" @mouseleave="leave5">
                                绿色施工
                                <img src="../assets/img/1/down_crow.png" alt="" v-if="state.isActive5">
                            </li>
                        </router-link>
                        <router-link to="Equipment">
                            <li :class="[state.isActive6 ? 'enterClass6' : 'leaveClass6']" @mouseenter="enter6" @mouseleave="leave6">
                                设备管理
                                <img src="../assets/img/1/down_crow.png" alt="" v-if="state.isActive6">
                            </li>
                        </router-link>
                        <router-link to="Monitor">
                            <li :class="[state.isActive7 ? 'enterClass7' : 'leaveClass7']" @mouseenter="enter7" @mouseleave="leave7">
                                监控管理
                                <img src="../assets/img/1/down_crow.png" alt="" v-if="state.isActive7">
                            </li>
                        </router-link>
                        <router-link to="RealName">
                            <li :class="[state.isActive8 ? 'enterClass8' : 'leaveClass8']" @mouseenter="enter8" @mouseleave="leave8">
                                实名制管理
                                <img src="../assets/img/1/down_crow.png" alt="" v-if="state.isActive8">
                            </li>
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- 路由匹配到的组件将渲染在这里 -->
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Home from "components/Home";
export default {
    name: 'index',
    components: {
        Home,
    },
    data() {
        return {
            state: {
                isActive: true, isActive2: false, isActive3: false, isActive4: false,
                isActive5: false, isActive6: false, isActive7: false, isActive8: false,
                active_item: true, active_item2: false, active_item3: false, active_item4: false,
                active_item5: false, active_item6: false, active_item7: false, active_item8: false,
            },
            full_if: true,
            n: 0,
            Common: {}
        }

    },
    created() {
        console.log(this.$route);
        switch (this.$route.name) {
            case 'index':
                this.state = {
                    isActive: true, isActive2: false, isActive3: false, isActive4: false,
                    isActive5: false, isActive6: false, isActive7: false, isActive8: false,
                    active_item: true, active_item2: false, active_item3: false, active_item4: false,
                    active_item5: false, active_item6: false, active_item7: false, active_item8: false,
                }
                this.$router.push({
                    path: '/home'
                });
                break;
            case 'Home':
                this.state = {
                    isActive: true, isActive2: false, isActive3: false, isActive4: false,
                    isActive5: false, isActive6: false, isActive7: false, isActive8: false,
                    active_item: true, active_item2: false, active_item3: false, active_item4: false,
                    active_item5: false, active_item6: false, active_item7: false, active_item8: false,
                }
                this.$router.push({
                    path: '/home'
                });
                break;
            case 'Technology':
                this.state = {
                    isActive: false, isActive2: true, isActive3: false, isActive4: false,
                    isActive5: false, isActive6: false, isActive7: false, isActive8: false,
                    active_item: false, active_item2: true, active_item3: false, active_item4: false,
                    active_item5: false, active_item6: false, active_item7: false, active_item8: false,
                }
                break;
            case 'Techhology_Blueprint':
                this.state = {
                    isActive: false, isActive2: true, isActive3: false, isActive4: false,
                    isActive5: false, isActive6: false, isActive7: false, isActive8: false,
                    active_item: false, active_item2: true, active_item3: false, active_item4: false,
                    active_item5: false, active_item6: false, active_item7: false, active_item8: false,
                }
                break;
            case 'Safety':
                this.state = {
                    isActive: false, isActive2: false, isActive3: true, isActive4: false,
                    isActive5: false, isActive6: false, isActive7: false, isActive8: false,
                    active_item: false, active_item2: false, active_item3: true, active_item4: false,
                    active_item5: false, active_item6: false, active_item7: false, active_item8: false,
                }
                break;
            case 'Quality':
                this.state = {
                    isActive: false, isActive2: false, isActive3: false, isActive4: true,
                    isActive5: false, isActive6: false, isActive7: false, isActive8: false,
                    active_item: false, active_item2: false, active_item3: false, active_item4: true,
                    active_item5: false, active_item6: false, active_item7: false, active_item8: false,
                }
                break;
            case 'Green':
                this.state = {
                    isActive: false, isActive2: false, isActive3: false, isActive4: false,
                    isActive5: true, isActive6: false, isActive7: false, isActive8: false,
                    active_item: false, active_item2: false, active_item3: false, active_item4: false,
                    active_item5: true, active_item6: false, active_item7: false, active_item8: false,
                }
                break;
            case 'Equipment':
                this.state = {
                    isActive: false, isActive2: false, isActive3: false, isActive4: false,
                    isActive5: false, isActive6: true, isActive7: false, isActive8: false,
                    active_item: false, active_item2: false, active_item3: false, active_item4: false,
                    active_item5: false, active_item6: true, active_item7: false, active_item8: false,
                }
                break;
            case 'Monitor':
                this.state = {
                    isActive: false, isActive2: false, isActive3: false, isActive4: false,
                    isActive5: false, isActive6: false, isActive7: true, isActive8: false,
                    active_item: false, active_item2: false, active_item3: false, active_item4: false,
                    active_item5: false, active_item6: false, active_item7: true, active_item8: false,
                }
                break;
            case 'RealName':
                this.state = {
                    isActive: false, isActive2: false, isActive3: false, isActive4: false,
                    isActive5: false, isActive6: false, isActive7: false, isActive8: true,
                    active_item: false, active_item2: false, active_item3: false, active_item4: false,
                    active_item5: false, active_item6: false, active_item7: false, active_item8: true,
                }
                break;
            default:
                this.state = {
                    isActive: true, isActive2: false, isActive3: false, isActive4: false,
                    isActive5: false, isActive6: false, isActive7: false, isActive8: false,
                    active_item: true, active_item2: false, active_item3: false, active_item4: false,
                    active_item5: false, active_item6: false, active_item7: false, active_item8: false,
                }
                break;
        }
    },
    watch: {
        $route(to, from) {
            switch (to.name) {
                case 'index':
                    this.state = {
                        isActive: true, isActive2: false, isActive3: false, isActive4: false,
                        isActive5: false, isActive6: false, isActive7: false, isActive8: false,
                        active_item: true, active_item2: false, active_item3: false, active_item4: false,
                        active_item5: false, active_item6: false, active_item7: false, active_item8: false,
                    }
                    break;
                case 'Home':
                    this.state = {
                        isActive: true, isActive2: false, isActive3: false, isActive4: false,
                        isActive5: false, isActive6: false, isActive7: false, isActive8: false,
                        active_item: true, active_item2: false, active_item3: false, active_item4: false,
                        active_item5: false, active_item6: false, active_item7: false, active_item8: false,
                    }
                    break;
                case 'Technology':
                    this.state = {
                        isActive: false, isActive2: true, isActive3: false, isActive4: false,
                        isActive5: false, isActive6: false, isActive7: false, isActive8: false,
                        active_item: false, active_item2: true, active_item3: false, active_item4: false,
                        active_item5: false, active_item6: false, active_item7: false, active_item8: false,
                    }
                    break;
                case 'Techhology_Blueprint':
                    this.state = {
                        isActive: false, isActive2: true, isActive3: false, isActive4: false,
                        isActive5: false, isActive6: false, isActive7: false, isActive8: false,
                        active_item: false, active_item2: true, active_item3: false, active_item4: false,
                        active_item5: false, active_item6: false, active_item7: false, active_item8: false,
                    }
                    break;
                case 'Safety':
                    this.state = {
                        isActive: false, isActive2: false, isActive3: true, isActive4: false,
                        isActive5: false, isActive6: false, isActive7: false, isActive8: false,
                        active_item: false, active_item2: false, active_item3: true, active_item4: false,
                        active_item5: false, active_item6: false, active_item7: false, active_item8: false,
                    }
                    break;
                case 'Quality':
                    this.state = {
                        isActive: false, isActive2: false, isActive3: false, isActive4: true,
                        isActive5: false, isActive6: false, isActive7: false, isActive8: false,
                        active_item: false, active_item2: false, active_item3: false, active_item4: true,
                        active_item5: false, active_item6: false, active_item7: false, active_item8: false,
                    }
                    break;
                case 'Green':
                    this.state = {
                        isActive: false, isActive2: false, isActive3: false, isActive4: false,
                        isActive5: true, isActive6: false, isActive7: false, isActive8: false,
                        active_item: false, active_item2: false, active_item3: false, active_item4: false,
                        active_item5: true, active_item6: false, active_item7: false, active_item8: false,
                    }
                    break;
                case 'Equipment':
                    this.state = {
                        isActive: false, isActive2: false, isActive3: false, isActive4: false,
                        isActive5: false, isActive6: true, isActive7: false, isActive8: false,
                        active_item: false, active_item2: false, active_item3: false, active_item4: false,
                        active_item5: false, active_item6: true, active_item7: false, active_item8: false,
                    }
                    break;
                case 'Monitor':
                    this.state = {
                        isActive: false, isActive2: false, isActive3: false, isActive4: false,
                        isActive5: false, isActive6: false, isActive7: true, isActive8: false,
                        active_item: false, active_item2: false, active_item3: false, active_item4: false,
                        active_item5: false, active_item6: false, active_item7: true, active_item8: false,
                    }
                    break;
                case 'RealName':
                    this.state = {
                        isActive: false, isActive2: false, isActive3: false, isActive4: false,
                        isActive5: false, isActive6: false, isActive7: false, isActive8: true,
                        active_item: false, active_item2: false, active_item3: false, active_item4: false,
                        active_item5: false, active_item6: false, active_item7: false, active_item8: true,
                    }
                    break;
                default:
                    this.state = {
                        isActive: true, isActive2: false, isActive3: false, isActive4: false,
                        isActive5: false, isActive6: false, isActive7: false, isActive8: false,
                        active_item: true, active_item2: false, active_item3: false, active_item4: false,
                        active_item5: false, active_item6: false, active_item7: false, active_item8: false,
                    }
                    break;
            }
        }
    },
    mounted() {
        this.Common_data()
    },
    methods: {
        enter: function () {
            this.state.isActive = true;
        },
        leave: function () {
            if (!this.state.active_item) {
                this.state.isActive = false;
            }
        },
        enter2: function () {
            this.state.isActive2 = true;
        },
        leave2: function () {
            if (!this.state.active_item2) {
                this.state.isActive2 = false;
            }

        },
        enter3: function () {
            this.state.isActive3 = true;
        },
        leave3: function () {
            if (!this.state.active_item3) {
                this.state.isActive3 = false;
            }

        },
        enter4: function () {
            this.state.isActive4 = true;
        },
        leave4: function () {
            if (!this.state.active_item4) {
                this.state.isActive4 = false;
            }
        },
        enter5: function () {
            this.state.isActive5 = true;
        },
        leave5: function () {
            if (!this.state.active_item5) {
                this.state.isActive5 = false;
            }
        },
        enter6: function () {
            this.isActive6 = true;
        },
        leave6: function () {
            if (!this.state.active_item6) {
                this.state.isActive6 = false;
            }
        },
        enter7: function () {
            this.state.isActive7 = true;
        },
        leave7: function () {
            if (!this.state.active_item7) {
                this.state.isActive7 = false;
            }
        },
        enter8: function () {
            this.isActive8 = true;
        },
        leave8: function () {
            if (!this.state.active_item8) {
                this.state.isActive8 = false;
            }
        },
        getFullCreeen() {
            this.n++;
            console.log(this.n);
            this.n % 2 == 0 ? this.outFullCreeen(document) : this.inFullCreeen(document.documentElement);
            this.n % 2 == 0 ? this.fun_text = '全屏' : this.fun_text = '退出';
            this.n % 2 == 0 ? this.full_if = true : this.full_if = false;
        },
        inFullCreeen(element) {
            let el = element;
            let rfs = el.requestFullScreen || el.webkitRequestFullScreen ||
                el.mozRequestFullScreen || el.msRequestFullScreen;
            if (typeof rfs != "undefined" && rfs) {
                rfs.call(el);
            } else if (typeof window.ActiveXObject != "undefined") {
                let wscript = new ActiveXObject("WScript.Shell");
                if (wscript != null) {
                    wscript.SendKeys("{F11}");
                }
            }
        },
        outFullCreeen(element) {
            let el = element;
            let cfs = el.cancelFullScreen || el.webkitCancelFullScreen ||
                el.mozCancelFullScreen || el.exitFullScreen;
            if (typeof cfs != "undefined" && cfs) {
                cfs.call(el);
            } else if (typeof window.ActiveXObject != "undefined") {
                let wscript = new ActiveXObject("WScript.Shell");
                if (wscript != null) {
                    wscript.SendKeys("{F11}");
                }
            }
        },
        Common_data() {
            this.$axios.get('/Index/Common')
                .then(response => {
                    if (response.data.res == 'SUCCESS') {
                        console.log(response);
                        this.Common = response.data
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }


    }
}
</script>

<style lang="less">
@media screen and (max-width: 1920px) {
  @import "../common/css/app/app.less";
  .icon_full {
    width: 100px;
    height: 37px;
    position: absolute;
    cursor: pointer;
    right: 35px;
    top: 7px;
    line-height: 37px;
    z-index: 999;
    img {
      vertical-align: middle;
    }
  }
}

@media screen and (min-width: 1930px) {
  //   @import "common/css/app/appbg.less";
}
</style>
