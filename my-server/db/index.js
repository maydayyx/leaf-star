/**
 * 
 * @param success 数据库连接成功的回调
 * @param error 数据库连接失败的回调
 */

const {DBHOST,DBNAME,DBPORT} = require('./config')

module.exports = function (success, error) {
 
    if(typeof error !== 'function') {
        error = () => {
            console.log('连接失败');
        }
    }
 
    const mongoose = require('mongoose')
 
    // 2. 连接mongodb                           database: 数据库的名字
    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);
 
    // 设置回调
    mongoose.connection.once('open', () => {
        console.log('数据库连接成功');
        success()
    })
 
    mongoose.connection.on('error', () => {
        console.log('数据库连接失败');
        error()
    })
 
    mongoose.connection.on('close', () => {
        console.log('数据库关闭连接');
    })
}