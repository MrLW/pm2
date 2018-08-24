module.exports = {
  apps : [{
    name      : 'API',
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
      user : 'node',
      host : '192.168.1.125',
      ref  : 'origin/master',
      repo : 'https://github.com/MrLW/pm2.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
