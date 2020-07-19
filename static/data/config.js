/**
 * 小程序配置文件
 */

// 此处主机域名修改成发布版host
var host = 'app.photo.psyannabel.cn'; 
//此处为测试版
var dev_host = 'https://mp.thinkmoon.cn';

var config = {

  service: {
    host,
    //基础地址
    baseUrl: `${host}/`,
    //问题列表
    questionsUrl: `https://${host}/`,

    scaleUrl: `https://app.psyannabel.cn/psy`,
  },

};

module.exports = config;