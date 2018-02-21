<template>
  <div>
    <nav-head></nav-head>
    <div class="themes-body" v-for="(item, index) in list" :key="index">
      <div @click="getThemes(item.id)">
        <img :src="getImg(item.thumbnail)">
        <span class="name">{{item.name}}</span>
        <span class="descript">{{item.description}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import api from '../api/index'
import axios from '../../node_modules/axios'
export default {
  data(){
    return {
      list:[]
    }
  },
  created () {
    this.get();
  },
  methods: {
    get(){
      axios.get('/api/4/themes').then(res => {
        this.list = res.data.others
        console.log(res.data.others)
      }).catch(e => {
        console.log('error'+e)
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
        console.log(error.request)
        console.log(error.config)
      })
    },
    getThemes(id){
      localStorage.setItem('themesId', id)
      this.$router.push({name: 'themeDetail'})
    },
   getImg(url){
     try {
        if(url !== undefined){
        return url.replace(/http\w{0,1}:\/\/p/g,'https://images.weserv.nl/?url=p')
     }
     } catch (error) {
       console.log('error'+error.message)
     }
   }
  }
}
</script>
<style>
body{
 background-color: #F5F5F5;
 font-size: 17px;
 color: #000000;
}

.themes-body{
  padding: 8px;
  margin-bottom: 20px;
  background-color: #fff;
}

.themes-body img{
  width: 25rem;
  height: 15rem;
}

.themes-body span{
  display: block;
  text-align: left;
  padding-left: 10px
}

.themes-body .name{
  font-size: 20px;
}

.themes-body .descript{
  font-size: 15px;
  font-weight: 300;
}
</style>


