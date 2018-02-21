<template>
  <div class="container">
    <nav-head></nav-head>
    <div class="con-body">
      <div class="time">
        <span >{{this.date}}</span></div>
      <div v-for="(item,index) in array " :key="index" >
        <div @click="getNews(item.id)"  class="article">
       <div class="title">{{item.title}}</div>
       <img :src="getImg(item.images[0])">
       </div>
      </div>
    </div>

  </div>
</template>
<script>
import api from '../api/index'
import axios from '../../node_modules/axios'
export default {
  data(){
    return{
      date: '',
      array: []
      }
  },
 created () {
   this.get();
 },
 methods: {
   get(){
     axios.get('/api/4/news/latest').then(res => {
       var year  = res.data.date.substring(0,4)
       var month = res.data.date.substring(4,6)
       var day  = res.data.date.substring(6,8)
       this.date= year+'-'+month+'-'+day
       this.array = res.data.stories
     }).catch(e => {
       console.log(e)
     })
   },
   getImg(url){
    // 把现在的图片连接传进来，返回一个不受限制的路径
    if(url !== undefined){
        return url.replace(/http\w{0,1}:\/\/p/g,'https://images.weserv.nl/?url=p');
    }
   },
   getNews(id){
     console.log(id)
     localStorage.setItem('newId', id)
     this.$router.push({name: 'news'})
   }
 }

}
</script>
<style>
*{
  box-sizing: border-box
}
html{
  padding: 0;
  margin: 0;
}
.time{
  font-size: 20px;
  color: #a7b0b9;
  padding-top: 20px;
  text-align: left;
  padding-left: 10px
}
.article{
 width: 100%;
 background: #ffffff;
 margin-top: 10px;
 display: flex;
 justify-content: space-between;
 padding: 10px
}
.title{
  color: #000000;
  width: 75%;
  padding-top: 10px;
  font-size: 17px
}
.article img {
  width: 6rem;
  height: 6rem;
}
</style>

