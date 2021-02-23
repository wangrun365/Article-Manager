// 1.1导入fs模块
const fs = require('fs')

// 1.2导入path模块
const path = require('path')

// 1.3定义正则表达式，分别匹配<script></script>和<style></style>标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

//2.1调用fs.readFile()方法读取文件
fs.readFile(path.join(__dirname, '/index.html'), 'utf8', function(err, dataStr) {
        // 2.2读取HTML文件
        if (err) return console.log('读取HTML文件失败' + err.message);
        // 2.3 读取文件成功后，调用对应的三个方法，分别拆解出css，js，html文件
        resolveCss(dataStr)
        resolveJS(dataStr)
        resolveHTML(dataStr)

    })
    // 3.1 处理css样式
function resolveCss(htmlStr) {
    //3.2使用正则提前需要的内容
    const r1 = regStyle.exec(htmlStr)

    // 3.3将提取出来的样式字符串，进行字符串的replace替换操作
    const newCss = r1[0].replace('<style>', '').replace('</style>', '')

    // 3.4 调用fs.writeFile()方法，将提取的样式，写入到clock目录中的index.css的文件里面
    fs.writeFile(path.join(__dirname, '/clock/index.css'), newCss, function(err) {
        if (err) return console.log('写入信息失败' + err.message);
        console.log('写入样式文件成功');
    })
}

// 4.1 定义处理 js 脚本的方法
function resolveJS(htmlStr) {
    // 4.2 通过正则，提取对应的 <script></script> 标签内容
    const r2 = regScript.exec(htmlStr)

    // 4.3 将提取出来的内容，做进一步的处理
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')

    // 4.4 将处理的结果，写入到 clock 目录中的 index.js 文件里面
    fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function(err) {
        if (err) return console.log('写入 JavaScript 脚本失败！' + err.message)
        console.log('写入 JS 脚本成功！')
    })
}

// 5.1 定义处理 HTML 结构的方法
function resolveHTML(htmlStr) {
    // 5.2 将字符串调用 replace 方法，把内嵌的 style 和 script 标签，替换为外联的 link 和 script 标签
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')

    // 5.3 写入 index.html 这个文件
    fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function(err) {
        if (err) return console.log('写入 HTML 文件失败！' + err.message)
        console.log('写入 HTML 页面成功！')
    })
}