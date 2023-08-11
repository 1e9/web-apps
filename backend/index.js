// 导入crypto模块
const crypto = require('node:crypto')

// 验证Telegram API请求的签名
function verifyTelegramApiSignature(token, params, hash) {
  // 将请求参数按照键名进行排序
  const sortedParams = Object.keys(params).sort().reduce((obj, key) => {
    obj[key] = params[key]
    return obj
  }, {})

  // 将请求参数和机器人令牌拼接成一个字符串
  const paramString = Object.keys(sortedParams).map((key) => {
    return `${key}=${sortedParams[key]}`
  }).join('\n')

  const hmac = crypto.createHmac('sha256', token)
  hmac.update(paramString)

  // 计算签名哈希值并与请求中的哈希值进行比较
  const signature = hmac.digest('hex')
  return signature === hash
}

// 使用示例
const token = '6592809699:AAEuYMsL3UXNAPmOgLJnAk8_S4T4YUUJhVs'
const params = {
  method: 'getMe',
  offset: 0,
  limit: 10,
}
const hash = 'YOUR_HASH_VALUE'
const isValid = verifyTelegramApiSignature(token, params, hash)
console.log(isValid)
