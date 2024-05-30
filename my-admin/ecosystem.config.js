// ecosystem.config.js
// 运行生产环境
module.exports = {
    apps: [
      {
        name: 'Leaf_star',
        script: './server/index.mjs',
        env:{
            NODE_ENV:'production',
            PORT:'8080'//端口 访问：http://localhost:9089/
         }
      }
    ]
  }
