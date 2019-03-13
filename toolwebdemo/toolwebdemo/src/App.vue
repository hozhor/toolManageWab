<template>
  <div id="app">
    <!-- <div>{{ loginPop }}</div> -->
    <el-dialog
      :visible.sync="loginPop"
      custom-class="loginDialog"
      width="500px"
      @close="closeLoginfn"
    >
      <div class="yu-loginBox" style="width: 80%;display:block;margin: auto;">
        <div class="login-header">
          <h1>用户登录</h1>
        </div>
        <div style="display:block;margin: 15px auto;">
          <el-input placeholder="请输入账号" v-model="username" ref="username">
            <template slot="prepend">账号</template>
          </el-input>
        </div>
        <div style="display:block;margin: 15px auto;">
          <el-input placeholder="请输入密码" v-model="password" type="password" ref="password">
            <template slot="prepend">密码</template>
          </el-input>
        </div>
        <div class="login-button-box">
          <el-button type="primary" @click="submit">登录</el-button>
        </div>
        <span class="yu-loginMsg el-icon-yx-warning" id="msg" v-show="msgShow">{{message}}</span>
      </div>
    </el-dialog>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
import API from "./api/api";

export default {
  name: "app",
  data() {
    return {
      username: "",
      password: "",
      msgShow: false,
      message: null
    };
  },
  components: {},
  mounted() {
    console.log("app start...", this.$store.getters.GET_LoginPop);
  },
  computed: {
    ...mapState(["loginPop"])
  },
  methods: {
    closeLoginfn() {
      this.$store.commit("SET_LoginPop", false);
    },

    /*
     * 登录校验
     */
    submit() {
      if (this.username == "") {
        this.message = "请输入用户名!";
        this.msgShow = true;
        this.$refs.username.focus();
        return;
      }
      if (this.password == "") {
        this.message = "请输入密码!";
        this.msgShow = true;
        this.$refs.password.focus();
        return;
      }
      this.msgShow = false;
      this.loginFn();
    },
    /* 
    登录方法
    */
    loginFn() {
      console.log('login start')
      this.getTokenInfo();
      this.closeLoginfn();
      // this.$message({
      //   message: "这是一条消息提示"
      // });
      this.$router.go(0);
    },
    async getTokenInfo() {
      const params = {
        username: this.username,
        password: this.password
      };
      let res = await API.getTokenInfoParam(params);
      /* 
      处理登录了状态
      */
      console.log(res);
      this.$store.commit("SET_TOKEN", res.token.access_token);
      this.getUserInfo();
    },
    async getUserInfo() {
      const params = {
        id: "222"
      };
      let res = await API.getUserInfoParam(params);
      console.log(res);
      this.$store.commit("SET_USER_INFO", JSON.stringify(res.userInfo));
    }
  }
};
</script>

<style>
@import "./assets/css/common.css";
</style>
