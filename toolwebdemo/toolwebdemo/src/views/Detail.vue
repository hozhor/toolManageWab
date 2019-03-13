<template>
	<div class="detail">
		<div class="detail-header-bg">
			<div class="detail-header">
				<div class="tool-pic">
					<img src="../assets/img/pic_246_xqtp.png"/>
				</div>
				<div class="tool-title">L/SQL</div>
				<div class="tool-oper">
					<button class="tool-btn tool-comment">评分</button>
					<button class="tool-btn tool-download">下载</button>
				</div>
				<div class="tool-info">
					<div class="tool-info-box">
						<div class="tool-info-box-tit">用户评分</div>
						<div class="tool-info-box-con">
							<div class="tool-info-num">9.8</div>
							<div class="tool-info-star">
								<ul class="tool-info-star-ul">
									<li class="all"></li>
									<li class="all"></li>
									<li class="all"></li>
									<li class="all"></li>
									<li class="half"></li>
								</ul>
								<div class="tool-info-star-text">74人评分</div>
							</div>
						</div>
					</div>
					<div class="tool-info-box">
						<div class="tool-info-box-tit">累计下载量</div>
						<div class="tool-info-box-con">
							<span class="download-total-num">188</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="detail-tabs-bg">
			<div class="detail-tabs">
				<ul class="detail-tabs-ul">
					<li class="actived">介绍</li>
					<li>用户评论</li>
				</ul>
			</div>
		</div>
		<div class="tool-detail">
			<div class="tool-detail-tit">工具简介</div>
			<div class="tool-detail-text">文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字</div>
		</div>
		<div class="tool-detail">
			<div class="tool-detail-tit">热门短评</div>
			<div class="comment-oper">
				<button class="comment-btn">写短评</button>
			</div>
		</div>
		<div class="hot-comment">
			<div class="hot-comment-list">
				<div class="hot-comment-line">
					<div class="comment-user-info">
						<div class="pic"><img src="../assets/img/Profile Image.png"/></div>
						<div class="name">Lina</div>
						<div class="other">
							<ul class="other-ul">
								<li class="other-date">12-09</li>
								<li class="other-star">
									<ul class="other-star-ul">
										<li class="all"></li>
										<li class="all" ></li>
										<li class="all"></li>
										<li class="all"></li>
										<li class="all"></li>
									</ul>
								</li>
							</ul>
						</div>
						<div class="like-num">112</div>
					</div>
					<div class="comment-text">
						文字
					</div>
				</div>
				<div class="hot-comment-line">
					<div class="comment-user-info">
						<div class="pic"><img src="../assets/img/Profile Image.png"/></div>
						<div class="name">Lina</div>
						<div class="other">
							<ul class="other-ul">
								<li class="other-date">12-09</li>
								<li class="other-star">
									<ul class="other-star-ul">
										<li></li>
										<li></li>
										<li></li>
										<li></li>
										<li></li>
									</ul>
								</li>
							</ul>
						</div>
						<div class="like-num">112</div>
					</div>
					<div class="comment-text">
						文字
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'detail',
	mounted () {
		console.log('params-id', this.$route.params);
	}
}
</script>

<style>
  @import '../assets/css/detail.css';
</style>