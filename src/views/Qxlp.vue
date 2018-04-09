<template>
  <div id='t'>
  <div class="box">
    
    <div id="write">
      <p>首页>{{b}}</p>
    </div>
    <div class="tit">
      <div class="zheng"></div>
      <h3>{{b}}{{c}}</h3>
    </div>
    <div class="dee">
      <div class="conn" v-for="i in arr">
        <router-link :to="'../Dd/'+i.id">
        <img :src="i.img">
        <div><h3 style="font-weight='blod';">{{i.name}}</h3></div>
        <div>地区：{{i.diqu}}</div>
        <div>户型：{{i.huxing}}</div>
        <div>价格：{{i.price}}</div>
        </router-link>
      </div>
    </div>
    <div id="newss"><news></news></div> 



    <footer class="footer">
      <p>地产REALSTATE  © 2020 All Rights Reserved.</p>
    </footer>
  </div>
</div>
</template>
<script>
import news from '../components/news.vue'

export default {
  components:{
    news
  },
  data(){
    return{
      arr:[],
      b:"",
      c:""
    }
  },
  watch:{
     '$route'(){
       if(this.$route.params.fenlei==1){
         this.b="全新楼盘"
         this.c="/New Apartment"
       }else if(this.$route.params.fenlei==2){
         this.b="二手楼盘"
         this.c="/New Shops"
       }else if(this.$route.params.fenlei==3){
         this.b="全新商铺"
         this.c="/Second Hand"
       }
       this.$http.post('http://localhost:8000',{fenlei:this.$route.params.fenlei,one:0,two:9},{emulateJSON:true}).then(e=>this.arr=e.body)
     }
   },
  created(){
      if(this.$route.params.fenlei==1){
         this.b="全新楼盘"
         this.c="/New Apartment"
       }else if(this.$route.params.fenlei==2){
         this.b="二手楼盘"
         this.c="/New Shops"
       }else if(this.$route.params.fenlei==3){
         this.b="全新商铺"
         this.c="/Second Hand"
       }
      this.$http.post('http://localhost:8000',{fenlei:this.$route.params.fenlei,one:0,two:9},{emulateJSON:true}).then(e=>this.arr=e.body)
  }
}
</script>

<style>
a{
  color: #262626;
}
.box{
  width: 100%;
  overflow: hidden;
}
.conn{
  width: 30%;
  margin-right: 20px;
  margin-bottom: 40px;
  float: left;
}
.conn img{
  width: 100%;
  font-size: 0;
  vertical-align: middle;
}
.dee{
  width: 70%;
  padding-left: 100px;
}
#write{
  width: 100%;
  line-height: 70px;
  color: #000000;
  font-size: 13px;
  padding-left: 100px;
  box-sizing: border-box;
  background-color: #ccc;
}
.tit{
  width: 100%;
  line-height: 60px;
  font-size: 12px;
  margin-left: 100px;
  overflow: hidden;
}
.zheng{
  width: 20px;
  height: 20px;
  margin-top:  20px;
  background-color: #000;
  float: left;
}
.tit h3{
  margin-left: 10px;
  font-weight: bold;
  float: left;
}
.footer{
  width: 100%;
  line-height: 80px;
  color: #8d9095;
  text-align: center;
  font-size: 12px;
  margin-top: 80px;
  background-color: #262626;
  float: left;
}
#newss{
  width: 20%;
  float: right;
  margin-top: -310px;
}
</style>