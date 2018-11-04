import axios from 'axios';
const Url={
    apiPath: 'http://localhost:64493/api'
};
//Ajax配置
axios.ajax=axios.create({
    basePath:Url.apiPath
});
//get无参数获取数据
// axios.get(axios.ajax+Url).then(function(reponse){
//     return reponse;
// }).catch(function(error){
//     console.log(error)
// })
    
