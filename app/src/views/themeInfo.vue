<template>
  <div>
    <nav-head></nav-head>
    <div id="info-body"></div>
  </div>
</template>
<script>
import axios from '../../node_modules/axios'
export default {
 data(){
   return {

   }
 },
 created () {
   this.get()
 },
 methods: {
   get(){
     axios.get('/api/4/news/'+localStorage.getItem('infoId')).then(res => {
       document.getElementById('info-body').innerHTML = res.data.body
       for(var i = 0; i<document.getElementsByClassName('avatar').length; i++){
            document.getElementsByClassName('avatar')[i].src = document.getElementsByClassName('avatar')[i].src.replace(/http\w{0,1}:\/\/p/g,'https://images.weserv.nl/?url=p')
        }
       for(var i = 0; i<document.getElementsByClassName('content-image').length; i++){
           document.getElementsByClassName('content-image')[i].src = document.getElementsByClassName('content-image')[i].src.replace(/http\w{0,1}:\/\/p/g,'https://images.weserv.nl/?url=p')
       }
     }).catch(e => {
       console.log(e)})
   }
 }
}
</script>
<style>
@import '../assets/style.css'
</style>


