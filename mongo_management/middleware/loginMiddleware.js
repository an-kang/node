/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-25 21:30:10
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-25 21:30:20
 */
// 自定义中间件，专门用于检查后台页面，用户是否已经登录
module.exports = (req, res, next) => {
    if (!req.session['username']) { // 当前用户没有登录
        res.redirect('/admin/login')
    } else {
        next();
    }
}