module.exports = {
  apps: [{
    name: 'FastExcel-Doc', // 应用名称
    script: 'npm',    // 运行脚本
    args: 'run deploy',    // 传递给脚本的参数
    env: {
      NODE_ENV: 'production', // 环境变量
      PORT: 3111,             // 你希望 Next.js 运行在哪个端口上
    },
  }],
};
