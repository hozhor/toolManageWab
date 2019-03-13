<template>
	<div class="toollist">
		<div class="pos-div"><span class="pos-icon">宇信科技管理后台首页 > </span><span>实用工具</span></div>
		<div class="cls-div-bg">
				<div class="cls-div">
				<div class="cls-div-tit">分类：</div>
				<div class="cls-div-con">
					<ul class="cls-div-ul">
						<li>开发工具</li>
						<li>脚本工具</li>
						<li>数据库工具</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="sort-div-bg">
			<div class="sort-div">
				<ul class="sort-div-ul">
					<li class="actived">综合</li>
					<li>下载量</li>
					<li>好评率</li>
				</ul>
			</div>
		</div>
		<div class="list-content-bg">
			<div class="list-content">
				<div class="list-box">
					<div class="list-box-pic"><img src="../assets/img/pic_170_01.png"/></div>
					<div class="list-box-con">
						<div class="list-box-con-tit">L/SQL</div>
						<div class="list-box-con-text">
							<ul class="list-box-con-ul">
								<li class="download-num"><span>下载量：</span><span>632</span></li>
								<li class="comment-num"><span>好评率：</span><span>100%</span></li>
							</ul>
						</div>
					</div>
					<div class="list-box-oper">
						<button @click="goDetail()" class="oper-detail">查看详情</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'toollist',
  mounted () {
		console.log('...tool-list');
  },
  methods: {
		goDetail() {
			this.$router.push({name:'detail', params:{id:1}});//类似post传参
		}
  }
}
</script>

<style>
  @import '../assets/css/toollist.css';
</style>