// 1.导入需要的 fs 文件系统模块
fs = require('fs')

//2. 使用 fs.readFile() 方法，读取素材目录下的 成绩.txt 文件

fs.readFile('D:/黑马web/02配套资料/前端学生资料（新版）/第四阶段：前后端交互阶段资料新/第四阶段：前后端交互阶段资料新/node.js/day1（第4章1-4小节）/素材/成绩.txt', 'utf8', function(err, dataStr) {
    // 3.判断文件是否读取失败
    if (err) {
        return console.log('读取文件失败' + err.message);
    }
    // console.log('读取文件成功' + dataStr);
    // 4.1先把成绩的数据，按照空格进行分割
    const arrOld = dataStr.split(' ')

    // 4.2循环分割后的数组，对每一项数据，进行字符串的替换操作
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', '：'))
    });
    // console.log(arrNew);
    // 4.3把新数组中的每一项，进行合并，得到一个新数组
    const newStr = arrNew.join('\r\n')
    console.log(newStr);

    // 5.调用fs.writeFile()方法，把处理完毕的成绩，写入到新文件中
    fs.writeFile('D:/黑马web/02配套资料/前端学生资料（新版）/第四阶段：前后端交互阶段资料新/第四阶段：前后端交互阶段资料新/node.js/day1（第4章1-4小节）/素材/成绩-ok.txt', newStr, function(err) {
        if (err) {
            return console.log('写入文件失败' + err.message);
        }
        console.log('成绩写入成功');
    })
})