//post参数放data中，get参数放params
import service from './request'
import {ApiList} from './apilist'

const api ={ 
    getTokenInfoParam: data => {
        return service({
            url: ApiList.token,
            method: 'post',
            data
        })
    },
    getUserInfoParam: data => {
        return service({
            url: ApiList.info,
            method: 'post',
            data
        })
    },
    logoutParam: data => {
        return service({
            url: ApiList.logout,
            method: 'post',
            data
        })
    }
}
export default api

