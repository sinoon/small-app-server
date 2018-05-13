const { AccessKey, SecretKey } = require('../constants/key')
const md5 = require('md5')

module.exports = function () {
    const time = +new Date()
    return {
        signature: md5(SecretKey + time + AccessKey),
        timestamp: time,
        access_key: AccessKey
    }
}
