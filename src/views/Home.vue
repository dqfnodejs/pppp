<template>
  <div class="content">
    <div class="main">
      <div id="img">
      <img src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS84MzY4MTYwYTk5NWQ4OTg4YWNmNmM5NjIxYWJiYzg5My0xODAweDYwMC5qcGc_p_p100_p_3D.jpg">
    </div>
    <div class='one'><div id="four" v-for='i in img'>
      <a href="###"><img :src="i.img"></a>
    </div></div>
    <lianjie a="1" />
    <lianjie a="2" />
    <lianjie a="3" />
    <div class="right">
      
    </div>
    </div>
    <div id="newss"><news></news></div>
    <footer class="footer">
      <p>地产REALSTATE  © 2020 All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
  import news from '../components/news.vue'
import lianjie from '../components/lianjie.vue'
	export default {
		name: 'app',
		components: {
			lianjie,
      news
		},
    data(){
      return{
        img:[]
      }
    },
    created(){
      this.$http.get('http://localhost:8000/img')
            .then(e=>this.img=e.body)
    }
	}
</script>
<style>
.content{
  width: 100%;
}
.main{
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;
  overflow: hidden;
}
#img{
  width: 1800px;
  height: 500px;
  max-width: 100%;
  padding: 0 45px;
  box-sizing: border-box;
}
#img img{
  width: 100%;
  font-size: 0;
  vertical-align: middle;
}
.one{
  width: 71.5%;
  margin-left: 3%;
}
#four{
  vertical-align: middle;
  max-width:49%;
  /*height: 100%;*/
  /*padding: 0 40px;*/
  /*box-sizing: border-box;*/
  margin-bottom: 10px;
  float: left;
  /*width: 75%;*/
}
#four img{
  width: 100%;
  /*width: 50%;*/
}
/*#four img:nth-child(1){
  margin-right: 2%;
}
#four img:nth-child(3){
  margin-right: 2%;
}*/
.right{
  width: 25%;
  padding: 0 40px;
  box-sizing: border-box;
  /* background-color: #000; */
  float: left;
}
#newss{
  width: 20%;
  float: right;
  margin-top: -1810px;
  margin-right: 60px;
}
</style>
