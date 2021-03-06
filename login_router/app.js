/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-20 19:32:16
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-21 08:21:33
 */
const express = require('express')

const app = express()
app.listen(3000, () => {
    console.log('3000--->服务器启动');
})

app.use(require('./router'))
app.use(express.static('www'))
app.use((req, res) => {
    res.status(404).redirect('/404.html')
})

