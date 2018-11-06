<template>
    <div id="box">
      <div class="navDiv">
          <ul :class="{'nav':isNva, 'container':isContainer,'col-md-12':isColMd12}" v-show="true">
            <li v-for="item in list" class="col-md-3 col-xs-12"><a href="#">{{item.bcategory}}</a></li>      
          </ul> 
          <div class="mark  col-xs-12"><button class="glyphicon glyphicon-list" @click="ShowUl()"></button></div>          
      </div>
      <div class="contextDiv col-md-12 container-fluid">
          <div class="leftDiv col-md-8">
              <div class="content col-md-12">
                <div class="imgDiv col-md-4 ">
                    <img src="../img/下载.jpg" class="img-responsive" alt="">
                </div>
                <div class="contextDiv col-md-8">
                    <h3 style="text-align: left;" class="title col-md-12 col-xs-12 "><a href="#">Axios</a></h3>
                    <span class="col-md-12 col-xs-12 context" style="text-align: left;">实现数据交互</span>  
                    <span class="col-md-12 footer" style="text-align:left">
                          <a href="#"><i class="glyphicon glyphicon-eye-open"></i>45</a> 
                          <a href="#"><i class="glyphicon glyphicon-star-empty"></i></a>
                          <a href="#">2018-11-14</a>
                    </span>    
                </div>
              </div>             
              <hr>
               <div class="content col-md-12">
                  <div class="imgDiv col-md-4 ">
                    <img src="../img/下载.jpg" class="img-responsive" alt="">
                  </div>
               <div class="contextDiv col-md-8">
                    <h3 style="text-align: left;" class="title col-md-12 col-xs-12 "><a href="#">Axios</a></h3>
                    <span class="col-md-12 col-xs-12 context" style="text-align: left;">实现数据交互</span>  
                    <span class="col-md-12 footer" style="text-align:left">
                          <a href="#"><i class="glyphicon glyphicon-eye-open"></i>45</a> 
                          <a href="#"><i class="glyphicon glyphicon-star-empty"></i></a>
                          <a href="#">2018-11-14</a>
                    </span>    
               </div>
              </div>           
              <hr>
               <div class="content col-md-12">
                         <div class="imgDiv col-md-4 ">
                        <img src="../img/下载.jpg" class="img-responsive" alt="">
               </div>
               <div class="contextDiv col-md-8">
                    <h3 style="text-align: left;" class="title col-md-12 col-xs-12 "><a href="#">Axios</a></h3>
                    <span class="col-md-12 col-xs-12 context" style="display:block;text-align: left;">实现数据交互</span>  
                    <span class="col-md-12 footer" style="text-align:left">
                          <a href="#"><i class="glyphicon glyphicon-eye-open"></i>45</a> 
                          <a href="#"><i class="glyphicon glyphicon-star-empty"></i></a>
                          <a href="#">2018-11-14</a>
                    </span>    
               </div>
              </div>           
          </div>
          <div class="rightDiv col-md-4">
              <h4 style="text-align:left;color:gray" class="newTitle col-md-12 container">最新文章</h4>
              <div class="col-md-12 newStore container">

                <div class="content col-md-12">
                    <div class="imgDiv col-md-4 ">
                        <img src="../img/下载.jpg" class="img-responsive" alt="">
                    </div>
                    <div class="contextDiv col-md-8">
                        <h4 style="text-align: left;" class="title col-md-12 col-xs-12 "><a href="#">Axios</a></h4>
                        <span class="col-md-12 col-xs-12 context" style="text-align: left;">实现数据交互</span>  
                         <span class="col-md-12 footer" style="text-align:left">
                              <a href="#"><i class="glyphicon glyphicon-eye-open"></i>45</a> 
                              <a href="#"><i class="glyphicon glyphicon-star-empty"></i></a>
                              <a href="#">2018-11-14</a>
                        </span>    
                    </div>
               </div>    

               <div class="content col-md-12">
                    <div class="imgDiv col-md-4 ">
                        <img src="../img/下载.jpg" class="img-responsive" alt="">
                    </div>
                    <div class="contextDiv col-md-8">
                      <h4 style="text-align: left;" class="title col-md-12 col-xs-12 "><a href="#">Axios</a></h4>
                      <span class="col-md-12 col-xs-12 context" style="text-align: left;">实现数据交互</span>  
                      <span class="col-md-12 footer" style="text-align:left">
                            <a href="#"><i class="glyphicon glyphicon-eye-open"></i>45</a> 
                            <a href="#"><i class="glyphicon glyphicon-star-empty"></i></a>
                            <a href="#">2018-11-14</a>
                      </span>    
                    </div>
              </div>      

               <div class="content col-md-12">
                    <div class="imgDiv col-md-4 ">
                        <img src="../img/下载.jpg" class="img-responsive" alt="">
                    </div>
                    <div class="contextDiv col-md-8">
                      <h4 style="text-align: left;" class="title col-md-12 col-xs-12 "><a href="#">Axios</a></h4>
                      <span class="col-md-12 col-xs-12 context" style="text-align: left;">实现数据交互</span>  
                      <span class="col-md-12 footer" style="text-align:left">
                            <a href="#"><i class="glyphicon glyphicon-eye-open"></i>45</a> 
                            <a href="#"><i class="glyphicon glyphicon-star-empty"></i></a>
                            <a href="#">2018-11-14</a>
                      </span>    
                    </div>
              </div>      

              <h4 style="text-align:left;color:gray" class="newTitle col-md-12 container">其他</h4>
              <div class="col-md-12  container">
                  <div class="imgDiv col-md-4" style="padding-left:30px" >
                       <a href="https://www.cnblogs.com/biao-123/"><img class="img-responsive" src="../img/timg.jpg" alt=""></a> 
                  </div>   
                  <div class="imgDiv col-md-5 " >
                       <a href="https://github.com/msChenzhijia"><img class="img-responsive" src="../img/timg1.jpg" alt=""></a> 
                  </div>                 
              </div>
              </div>
          </div>
      </div>
      <div class="footer col-md-12" style="background:gray;color:white;">
            2014-2018
      </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      list: [],
      isNva:true,
      isContainer:true,
      isColMd12:true,
      imgData:[
        {imgUrl:'../img/timg.jpg'},
        {imgUrl:'../img/timers.jpg'}
      ]
    };
  },
  methods: {
    //获取导航栏
    GetNav() {
      var that = this;
      axios
        .get("http://localhost:64493/api/Blog/GetBlogs")
        .then(function(reponse) {
          that.list = reponse.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    ShowUl(){
        var that=this;
        that.isNva=false;
           console.log("ok");
    }
  },
  mounted: function() {
    this.GetNav();
  }
};
</script>


