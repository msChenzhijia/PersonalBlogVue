<template>
   <div class="container">
        <div class="form row">
            <div class="form-horizontal col-md-offset-3" id="login_form">
                <h3 class="form-title">LOGIN</h3>
                <div class="col-md-9">
                    <div class="form-group">
                        <i class="fa fa-user fa-lg"></i>
                        <input class="form-control required" type="text" placeholder="Username" id="username" name="username" autofocus="autofocus" maxlength="20"/>
                    </div>
                    <div class="form-group">
                            <i class="fa fa-lock fa-lg"></i>
                            <input class="form-control required" type="password" placeholder="Password" id="password" name="password" maxlength="8"/>
                    </div>
                    <div class="form-group">
                        <label class="checkbox">
                            <input type="checkbox" name="remember" value="1"/>记住我
                        </label>
                    </div>
                    <div class="form-group col-md-offset-9">
                        <button type="submit" class="btn btn-success pull-right" name="submit" @click="GetLogin()">登录</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
//import $ from '../Getaxios.js';
import axios from 'axios';
export default {
    data(){
        return {
            list:[],
            usLogin:true
        }
        
    },
   methods:{
       GetLogin(){
           var that=this;
            this.list=axios.get('http://localhost:64493/api/Login/Token?id=1&sub=Admin').then(function(reponse){             
                that.$store.commit('increment',reponse.data);
               // console.log(that.$store.state.count);
            }).catch(function(error){
                console.log(error);
            })            
       },
       GetStore(){
           console.log(this.$store.state.count);
       },
       handleIncrement(){
           this.$store.commit('increment',"陈志佳");
       },
       handleIncrement1(){          
            console.log(this.$store.state.count);
       }
   },
   mounted(){
       
   }
   
}
</script>

