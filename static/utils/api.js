var Fly = require("flyio/dist/npm/wx")
var fly = new Fly();
fly.config.baseURL="https://app.psyannabel.cn/"

fly.interceptors.response.use(
    (response) => {
        //只将请求结果的data字段返回
        return response.data
    },
    (err) => {
        //发生网络错误后会走到这里
        return Promise.resolve("ERROR")
    }
)

// 获取思考问题
export const getThinking = (style, params) => {
	return fly.get(`thinking/${style}/`, params)
}

// 获取思考目录列表
export const getDic = (params) => {
	return fly.get(`thinking/dic/`, params)
}
