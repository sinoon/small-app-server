const getSignature = require('./getSignature')
const rq = require('request-promise')

module.exports = async function getNews () {
    return rq({
        uri: 'https://api.xinwen.cn/news/selection',
        qs: {
            size: 15,
            ...getSignature()
        },
        json: true
    })
}
