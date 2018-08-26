module.exports = {
  apps : [{
    name      : 'pm2',
    script    : 'app.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '116.62.222.225',
      ref  : 'origin/master',
      repo : 'https://github.com/MrLW/pm2.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
