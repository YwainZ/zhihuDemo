<template>
  <div class="about">
   <nav-head></nav-head>
   <div class="hot-body" v-for="(item, index) in list" :key="index">
     <div @click="showHot(item.news_id)" class="hot-inner">
       <span>{{item.title}}</span>
       <img :src="getImg(item.thumbnail)">
     </div>

   </div>
  </div>
</template>
<script>
import axios from "../../node_modules/axios";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.get();
  },
  methods: {
    get() {
      axios
        .get("/api/3/news/hot")
        .then(res => {
          this.list = res.data.recent;
        })
        .catch(e => {
          console.log(e);
        });
    },
    getImg(url){
       if(url !== undefined){
        return url.replace(/http\w{0,1}:\/\/p/g,'https://images.weserv.nl/?url=p')
       }
   },
   showHot(id){
       localStorage.setItem('hotId', id)
       this.$router.push({name: 'hotDetail'})
   }
 }
}
</script>
<style>
.hot-inner{
  background-color: #fff;
  margin-bottom: 15px;
  color: #000;
  font-size: 17px;
  display: flex;
  justify-content: space-between;
  padding: 10px
}
.hot-inner span{
  display: block;
  width: 75%
}
.hot-inner img{
  width: 6rem;
  height: 6rem
}
</style>


