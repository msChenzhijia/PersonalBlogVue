import axios from 'axios';
const Url={
    apiPath: 'http://localhost:64493/api'
};
//Ajax配置
axios.ajax=axios.create({
    basePath:Url.apiPath
});
// axios.get(function(url){
//     axios.ajax+url;
// })
    
export default axios;
