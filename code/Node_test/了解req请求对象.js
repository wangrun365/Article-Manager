const http = require('http')
const server = http.createServer()

// req 是请求对象，包含了与客户端相关的数据和属性
server.on('request', (req, res) => {
    // req.url 是客户端请求的 URL 地址
    const url = req.url

    // req.method 是客户端请求的 method 类型
    const method = req.method
    const str = `您请求的URL地址是 ${url}，请求的 method 类型为 ${method}`
    console.log(str)

    // 调用 res.setHeader() 方法，设置 Content-Type 响应头，解决中文乱码的问题
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    // 调用 res.end() 方法，向客户端响应一些内容
    res.end(str)
})
server.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})