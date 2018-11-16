<template>
    <div id="BackBox" class="col-md-12">
        <div class="leftDiv col-md-2 row">
            <div class="imgDiv col-md-12 ">
                <img src="../img/ss.jpg" alt="" class="container img-circle col-md-10"> 
                <div class="col-md-12">
                   <div class="dropdown">
                    <a data-toggle="dropdown" href="#">xxx</a>
                         <ul class="dropdown-menu col-md-12" role="menu" aria-labelledby="dLabel">
                             <li class="col-md-12"><a href="#">注销</a></li>
                        </ul>
                    </div>
                </div>                               
            </div>
            <div class="navDiv col-md-12">
                <nav class="navbar col-md-12 col-xs-12" role="navigation">
                    <ul  class="nav navbar-nav col-md-12">
                         <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                Java
                            <b class="caret"></b>
                            </a>
                            <ul class="dropdown-menu">
                                <li class="col-md-12"><a href="#">Spring</a></li>
                                <li class="col-md-12"><a href="#">JavaCore</a></li>
                                <li class="col-md-12"><a href="#">JSP</a></li>
                                <li class="col-md-12"><a href="#">Spring Boot</a></li>
                                <li class="col-md-12"><a href="#">JVM</a></li>                             
                            </ul>
                        </li>
                         <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                C#
                            <b class="caret"></b>
                            </a>
                            <ul class="dropdown-menu">
                                <li class="col-md-12"><a href="#">Asp.net</a></li>
                                <li class="col-md-12"><a href="#">Asp.net Core</a></li>
                                <li class="col-md-12"><a href="#">WinFrom</a></li>
                                <li class="col-md-12"><a href="#">Asp.net MVC</a></li>
                                <li class="col-md-12"><a href="#">CLR</a></li>                             
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                               web
                            <b class="caret"></b>
                            </a>
                            <ul class="dropdown-menu">
                                <li class="col-md-12"><a href="#">Vue.js</a></li>
                                <li class="col-md-12"><a href="#">JavaScript</a></li>
                                <li class="col-md-12"><a href="#">Jquery</a></li>
                                <li class="col-md-12"><a href="#">Css+h5</a></li>                                
                            </ul>
                        </li>
                        <li class="col-md-12"><a href="#">Git</a></li>
                         <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                设置
                            <b class="caret"></b>
                            </a>
                            <ul class="dropdown-menu col-md-12">
                                <li class="col-md-12"><a href="#">分类</a></li>
                                <li class="col-md-12"><a href="#">角色</a></li>
                                <li class="col-md-12"><a href="#">用户</a></li>
                                <li class="col-md-12"><a href="#">添加其他分类</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div class="btn">>></div>
            </div>
        </div>
        <div class="rightDiv col-md-10">
            <div class="navDiv col-md-12">
                <nav class="navbar col-md-12 col-xs-12" role="navigation">
                    <ul  class="nav navbar-nav col-md-12">
                       <li><a @click="ShowVue()">列表</a></li>
                       <li><a @click="ShowAdd()" >新增</a></li>
                       <li><a @click="ShowEdit()" >修改</a></li>
                    </ul>
                </nav>
            </div>     
            <div class="ShowDiv col-md-12" v-show="list">
                展示列表    
            </div>      
            <div class="AddDiv col-md-12"  v-show="add">
                <div class="form-group col-md-12 form-inline">
                    <label for="title">分类</label>
                    <select name="" id="" class="form-control">
                        <option value="C#">C#</option>
                        <option value="JAVA">JAVA</option>
                        <option value="C#">Web</option>
                        <option value="CLR">CLR</option>
                    </select>
                    <hr>       
               </div>
               <div class="form-group col-md-12 form-inline">
                    <label for="title">标题</label>
                    <input type="text" class="form-control" id="title" placeholder="title">
                    <hr>       
               </div>
               <div class="form-group col-md-12 form-inline">
                    <label for="img">图片</label>
                    <input type="file" class="form-control" id="img" placeholder="img">
                    <hr>       
               </div>
               <div class="form-group col-md-12 form-inline">
                    <label for="content">内容</label>
                   <textarea name="content" id="content" cols="150" rows="10" style="resize: none" ></textarea>
                    <hr>       
               </div>
            </div>      
            <div class="EditDiv col-md-12" v-show="edit" >
                修改
            </div>      
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:true,
            add:false,
            edit:false
        }
    },
    methods:{
        ShowVue(){
            var that=this;
            if(that.list==false){
                that.list=true;
                that.add=false;
                that.edit=false;
            }
           
        },
        ShowAdd(){
            var that=this;
            if(that.add==false){
                that.list=false;
                that.add=true;
                that.edit=false;
            }
        },
        ShowEdit(){
            var that=this;
             if(that.edit==false){
                that.list=false;
                that.add=false;
                that.edit=true;
            }
        }
    }
}
</script>
