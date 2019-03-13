import axios from 'axios';
import qs from 'qs';
import store from '../store/store'

const service = axios.create({
    baseURL: '/',
    timeout: 5000
});

//请求统一处理
service.interceptors.request.use(config => {
    console.log('数据处理中', config);
    config.url = config.url + '?_=' + new Date().valueOf();
    config.method === 'post'
        ? config.data = qs.stringify({...config.data})
        : config.params = {...config.params};
    config.headers['Content-Type'] = 'application/x-www.form-urlencoded';
    // 处理token
    config.headers['authertoken'] = store.state.token ? store.state.token : window.sessionStorage.getItem("ytf-token");

    return config;
}, error => {
    console.log('错误');
    Promise.reject(error);

});

//响应统一处理
service.interceptors.response.use(
    response => {
        // 通讯报文条件判断
        if (response.data){
            return response.data;
        } else {
            // 登录超时这些异常情况，但是通讯是200的异常。
            console.log('错误1', store.state.loginPop);
            // store.state.loginPop = true;
            store.commit('SET_LoginPop', true);
            console.log('错误2', store.state.loginPop);
        }
    },
    error => {
        console.log('错误', error);
        
        let text = JSON.parse(JSON.stringify(error)).response.status === 404
            ? '404'
            : '网络异常，请重试';

        console.log(text);

        return Promise.reject(error);
    }
)

export default service;
