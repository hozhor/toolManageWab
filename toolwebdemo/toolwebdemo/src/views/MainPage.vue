<template>
  <div class="mainpage">
    <div class="header-div">
      <div class="header-top">
        <div class="header-logo">
          <div class="header-logo-img">
            <img src="../assets/img/logo.png">
          </div>
          <div class="header-logo-text">宇信科技工具管理平台</div>
        </div>
        <div class="header-search-div">
          <div class="header-search-ipt">
            <input type="text" placeholder="请输入信息">
          </div>
          <div class="header-search-btn">
            <button>
              <i class="el-icon-search"></i>
            </button>
          </div>
        </div>
        <div class="header-words">
          <ul class="header-words-ul">
            <li>开发工具</li>
            <li>数据库工具</li>
            <li>脚本工具</li>
            <li>公司竞争力类课程</li>
            <li>技术类课程</li>
          </ul>
        </div>
        <div class="header-suggest">
          <div>我要反馈</div>
        </div>
      </div>
    </div>
    <div class="index-container">
      <div class="container-line">
        <div class="container-left">
          <img src="../assets/img/banner_940_01.png">
        </div>
        <div class="container-right">
          <div class="index-login">
            <div class="login-img">
              <img src="../assets/img/icon_40_xiaoyu.png">
            </div>
            <div class="login-text">{{userName}}</div>
            <div class="login-reg-btn" v-if="userName != '游客'" @click="logoutFn">注销</div>
            <div class="login-btn" v-else @click="openLoginBoxFn">立即登录</div>
          </div>
        </div>
      </div>
      <div class="container-line">
        <div class="container-left">
          <div class="con-box con-box1">
            <img src="../assets/img/banner_360_sygz.png">
          </div>
          <div class="con-box con-box2">
            <img src="../assets/img/pic_360_spkc.png">
          </div>
          <div class="con-box con-box3">
            <img src="../assets/img/pic_180_rm.png">
          </div>
        </div>
        <div class="container-right">
          <div class="index-notice">
            <div class="index-notice-tit">通知</div>
            <div class="index-notice-div">
              <ul class="index-notice-ul">
                <li>通知文字</li>
                <li>通知文字</li>
                <li>通知文字</li>
                <li>通知文字</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container-line">
        <div class="container-box">
          <div class="container-box-tit">
            <div class="tit">实用工具</div>
            <div class="tit-tag">
              <ul class="tit-tag-ul">
                <li>开发工具</li>
                <li>脚本工具</li>
                <li>数据库工具</li>
              </ul>
            </div>
            <div class="tit-more">全部</div>
          </div>
          <div class="container-box-list">
            <ul class="container-box-list-ul">
              <li>
                <div class="pic">
                  <img src="../assets/img/pic_170_02.png">
                </div>
                <div class="tit">L/SQL</div>
              </li>
              <li>
                <div class="pic">
                  <img src="../assets/img/pic_170_02.png">
                </div>
                <div class="tit">L/SQL</div>
              </li>
              <li>
                <div class="pic">
                  <img src="../assets/img/pic_170_02.png">
                </div>
                <div class="tit">L/SQL</div>
              </li>
              <li>
                <div class="pic">
                  <img src="../assets/img/pic_170_02.png">
                </div>
                <div class="tit">L/SQL</div>
              </li>
              <li>
                <div class="pic">
                  <img src="../assets/img/pic_170_02.png">
                </div>
                <div class="tit">L/SQL</div>
              </li>
              <li>
                <div class="pic">
                  <img src="../assets/img/pic_170_02.png">
                </div>
                <div class="tit">L/SQL</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="container-box container-box-right">
          <div class="container-box-tit">
            <div class="tit">实用工具</div>
            <div class="tit-tag">
              <ul class="tit-tag-ul">
                <li>开发工具</li>
                <li>脚本工具</li>
                <li>数据库工具</li>
              </ul>
            </div>
            <div class="tit-more">全部</div>
          </div>
          <div class="container-box-list">
            <ul class="container-box-list-ul">
              <li>
                <div class="pic">
                  <img src="../assets/img/pic_170_02.png">
                </div>
                <div class="tit">L/SQL</div>
              </li>
              <li>
                <div class="pic">
                  <img src="../assets/img/pic_170_02.png">
                </div>
                <div class="tit">L/SQL</div>
              </li>
              <li>
                <div class="pic">
                  <img src="../assets/img/pic_170_02.png">
                </div>
                <div class="tit">L/SQL</div>
              </li>
              <li>
                <div class="pic">
                  <img src="../assets/img/pic_170_02.png">
                </div>
                <div class="tit">L/SQL</div>
              </li>
              <li>
                <div class="pic">
                  <img src="../assets/img/pic_170_02.png">
                </div>
                <div class="tit">L/SQL</div>
              </li>
              <li>
                <div class="pic">
                  <img src="../assets/img/pic_170_02.png">
                </div>
                <div class="tit">L/SQL</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import API from "../api/api";
export default {
  name: "mainpage",
  data() {
    return {
      userName: this.$store.getters.GET_USER_INFO
        ? JSON.parse(this.$store.getters.GET_USER_INFO).userName
        : "游客"
    };
  },
  mounted() {
    console.log("...mainpage");
    console.log("plugin-version", this.$YUPlugin.utils.version);
    console.log("userinfo", JSON.parse(this.$store.getters.GET_USER_INFO));
  },
  methods: {
    /* 
    打开登录框
    */
    openLoginBoxFn() {
      this.$store.commit("SET_LoginPop", true);
    },
    /* 
    注销
    */
    async logoutFn() {
      const params = {
        username: this.username,
        password: this.password
      };
      let res = await API.logoutParam(params);
       console.log('注销失败:'+  JSON.stringify(res) )
      if (res.logout.code == "0000") {
        window.sessionStorage.removeItem("ytf-userInfo");
        window.sessionStorage.removeItem("ytf-toke");
        this.$router.go(0);
      } else {
        console.log('注销失败')
      }
    }
  }
};
</script>

<style>
@import "../assets/css/index.css";
</style>