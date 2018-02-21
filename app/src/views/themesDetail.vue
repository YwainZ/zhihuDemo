<template>
  <div>
    <nav-head></nav-head>
    <div v-for="(item, index) in list" :key="index">
      <div @click="showInfo(item.id)" class="info">
        <img :src="getImg(item.images)">
        <span>{{item.title}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from '../../node_modules/axios'
import api from '../api/index'
export default {
  data() {
    return {
      list:[]
    }
  },
  created() {
    this.get();
  },
  methods: {
    get() {
      axios.get('/api/4/theme/'+localStorage.getItem('themesId')).then(res => {
        this.list = res.data.stories
      }).catch(e =>{
         console.log(e)})
    },
    getImg(url){
      if(url !== undefined ){
        return url[0].replace(/http\w{0,1}:\/\/p/g,'https://images.weserv.nl/?url=p')
      }else{
        return 'http://upload-images.jianshu.io/upload_images/9381131-e140fc5d87a3bb2b.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240'
      }
    },
    showInfo(id){
      console.log(id)
      this.$router.push({name :'themeInfo'})
      localStorage.setItem('infoId',id)

    }
  }
};
</script>
<style>
.info{
  color: #000000;
  font-size: 17px;
  background-color: #fff;
  margin-bottom: 20px;
  padding: 8px

  }
  .info span{
    display: block;
    text-align: left;
    padding-left: 10px;
  }
  .info img{
   width: 25rem;
   height: 15rem;
  }

</style>


