# pm2
测试pm2微服务部署
### 1、执行如下命令生成进程文件
```
pm2 ecosystem
```


### 2、修改ecosystem.config.js文件,核心修改deploy项

```
deploy : {
    production : {
      user : 'root',
      host : '192.168.1.125',
      ref  : 'origin/master',
      repo : 'https://github.com/MrLW/pm2.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
```

### 3、部署
```
pm2 deploy production setup
```