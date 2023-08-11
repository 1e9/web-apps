export async function getUserAvatar(userId: number) {
  // 发送请求获取用户头像照片信息
  const response = await fetch(`https://api.telegram.org/bot${import.meta.env.VITE_TG_BOT_TOKEN}/getUserProfilePhotos?user_id=${userId}&limit=1`)
  const result = await response.json()

  // 获取头像照片的文件ID
  const fileId = result.result.photos[0][0].file_id

  // 获取头像照片的文件路径
  const response2 = await fetch(`https://api.telegram.org/bot${import.meta.env.VITE_TG_BOT_TOKEN}/getFile?file_id=${fileId}`)
  const result2 = await response2.json()
  const filePath = `https://api.telegram.org/file/bot${import.meta.env.VITE_TG_BOT_TOKEN}/${result2.result.file_path}`

  // 返回头像照片的文件路径
  return filePath
}
