<template>
  <div>
    <nav-head></nav-head>
    <div class="container" id='content'>{{this.content}}</div>
  </div>
</template>
<script>
import axios from '../../node_modules/axios'
  export default{
    data(){
      return{
        content: ''
      }
    },
    created () {
      this.get()
    },
    methods: {
      get(){
      axios.get('/api/4/news/'+localStorage.getItem('newId')).then(res => {
        document.getElementById('content').innerHTML = res.data.body
        for(var i = 0; i<document.getElementsByClassName('avatar').length; i++){
            document.getElementsByClassName('avatar')[i].src = document.getElementsByClassName('avatar')[i].src.replace(/http\w{0,1}:\/\/p/g,'https://images.weserv.nl/?url=p');
        }
      }).catch(e =>{
        console.log(e)
      })
      }
    }
  }
</script>
<style>
@import '../assets/style.css'
</style>
