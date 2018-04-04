<template>
  <div class="box">
    
    <div id="write">
      <p>首页>{{b}}</p>
    </div>
    <div class="tit">
      <div class="zheng"></div>
      <h3>{{b}}</h3>
    </div>
    <div class="de">
      <div class="con" v-for="i in arr">
        <img :src="i.img">
        <div><h3 style="font-weight='blod';">{{i.name}}</h3></div>
        <div>地区：{{i.diqu}}</div>
        <div>户型：{{i.huxing}}</div>
        <div>价格：{{i.price}}</div>
      </div>
    </div>
    



    <footer class="footer">
      <p>地产REALSTATE  © 2020 All Rights Reserved.</p>
    </footer>
  </div>
</template>
<script>
export default {
  data(){
    return{
      arr:[],
      b:""
    }
  },
  watch:{
     '$route'(){
       if(this.$route.params.fenlei==1){
         this.b="全新楼盘"
       }else if(this.$route.params.fenlei==2){
         this.b="二手楼盘"
       }else if(this.$route.params.fenlei==3){
         this.b="全新商铺"
       }
       this.$http.post('http://localhost:8000',{fenlei:this.$route.params.fenlei},{emulateJSON:true}).then(e=>this.arr=e.body)
     }
   },
  created(){
      if(this.$route.params.fenlei==1){
         this.b="全新楼盘"
       }else if(this.$route.params.fenlei==2){
         this.b="二手楼盘"
       }else if(this.$route.params.fenlei==3){
         this.b="全新商铺"
       }
      this.$http.post('http://localhost:8000',{fenlei:this.$route.params.fenlei},{emulateJSON:true}).then(e=>this.arr=e.body)
  }
}
</script>

<style>
.box{
  width: 100%;
  overflow: hidden;
}
.con{
  width: 24%;
  float: left;
}
.de{
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
  background-color: #262626;
  float: left;
}
</style>