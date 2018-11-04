<template>
    <div id="box">
      <div class="navDiv">
          <ul class="nav container col-md-12 ">
            <li v-for="item in list" class="col-md-3 col-xs-12 "><a href="#">{{item.bcategory}}</a></li>      
          </ul>           
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
                    <span class="col-md-12 col-xs-12 context" style="text-align: left;">实现数据交互</span>  
                    <span class="col-md-12 footer" style="text-align:left">
                          <a href="#"><i class="glyphicon glyphicon-eye-open"></i>45</a> 
                          <a href="#"><i class="glyphicon glyphicon-star-empty"></i></a>
                          <a href="#">2018-11-14</a>
                    </span>    
               </div>
              </div>           
          </div>
          <div class="rightDiv col-md-4">
              <h4 style="text-align:left;color:gray">关注我</h4>
              <div class="col-md-12">
                asdas 
              </div>
               <h4 style="text-align:left;color:gray">最新文章</h4>
               
          </div>
      </div>
      <div class="footer col-md-12" style="background:gray;color:white;height:20px">
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
      list: []
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
    }
  },
  mounted: function() {
    this.GetNav();
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
html {
  color: aliceblue;
}
.nav {
  list-style: none;
  background-color: dimgray;
}
.nav li {
  float: left;
}
.nav li a:hover {
  color: black;
}
.contextDiv .leftDiv {
  padding: 0px;
  margin: 0px;
  border-right: 1px solid gray;
}
.contextDiv .leftDiv .content {
  padding: 0px;
  margin: 0px;
  margin-bottom: 10px;
  border-bottom: 1px solid goldenrod;
}
.contextDiv .leftDiv .content .imgDiv{
  padding: 10px
}
.contextDiv .leftDiv .footer a {
  color: darkgray;
  margin-right: 10px;
}
.contextDiv .rightDiv {
  
  padding: 0px;
  margin: 0px;
}
</style>

