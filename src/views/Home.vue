<template>
    <ul class="nav container col-md-12 ">
      <li v-for="item in list" class="col-md-3"><a href="#">{{item.bcategory}}</a></li>      
    </ul>
</template>

<script>

import axios from 'axios';
export default {
  name: 'home',
  data(){
    return {
       list:[]
    }
  }, methods:{
       GetLogin(){
            var that=this;
            axios.get('http://localhost:64493/api/Blog/GetBlogs').then(function(reponse){             
              that.list=reponse.data;  
            }).catch(function(error){
                console.log(error);
            })      
            console.log(that.list);
       }
   },mounted:function(){
     this.GetLogin();
   }   
  
}
</script>
<style>
 *{
   margin: 0
 }
 html{
   color: aliceblue
 }
 .nav{
   list-style: none;   
   background-color: dimgray
 }
 .nav li{
  float: left
 }
 .nav li a:hover{
  color: black  
 }

</style>

