import axios from 'axios'
import store from '../store'
import { Message } from 'element-ui'
import { Loading } from 'element-ui'

const base_url = process.env.NODE_ENV === "development" ? '' : ''

const post = async (url, data) => {
    const loading = Loading.service({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    })
    return axios({
        method: 'POST',
        url: base_url + '/api/client' + url,
        headers: {
            'authtoken': store.state.userinfo && store.state.userinfo.authtoken || 'e81fa4bc6b7fe933a557166886f0fc41',
            'Content-Type': 'application/json'
        },
        data: data
    }).then(res => {
        loading.close()
        if (!res.data.success) {
            if (res.data.msg === '非管理员用户，无权限!') {
                localStorage.removeItem("store")
                store.state.userinfo = null
            }
            Message.error(res.data.msg || '请求失败，请联系管理员！')
        } else {
            if (res.data.alert) Message.success('请求成功！')
        }
        return res
    })
}

const get = async (url, params) => {
    const loading = Loading.service({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    })
    return axios({
        method: 'GET',
        url: base_url + '/api/admin' + url,
        headers: {
            'authtoken': store.state.userinfo && store.state.userinfo.authtoken || 'e81fa4bc6b7fe933a557166886f0fc41',
            'Content-Type': 'application/json'
        },
        params: params
    }).then(res => {
        loading.close()
        if (!res.data.success) {
            if (res.data.msg === '非管理员用户，无权限!') {
                localStorage.removeItem("store")
                store.state.userinfo = null
            }
            Message.error(res.data.msg || '请求失败，请联系管理员！')
        } else {
            if (res.data.alert) Message.success('请求成功！')
        }
        return res
    })
}


export default {
    post,
    get
}