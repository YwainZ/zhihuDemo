<template>
  <div class="container">
    <div class="header">
    <nav class="nav">
      <div class="tab-nav" @click="navRoute('index')">首页</div>
       <div class="tab-nav" @click="navRoute('theme')">主题日报</div>
        <div class="tab-nav" @click="navRoute('hot')">热门消息</div>

    </nav>
    </div>
  </div>
</template>
<script>
export default {
 methods: {
   navRoute (name){
    this.$router.push({name:name})
   },

 }
}
</script>
<style>
html{
    font-size: 15px;
    font-family: Hiragino Sans GB,Helvetica,Arial,STHeiti,WenQuanYi Micro Hei,sans-serif;
}
body{
  background-color: #F5F5F5;
}
*{
  padding: 0;
  margin: 0;
}

.container .nav{
  display: flex;
  justify-content: space-around;
  height: 6rem;
  border: 1px solid black;
  background: #252e39;
  color: #ffffff;
  text-align: center;
  line-height: 6rem;
}

</style>

