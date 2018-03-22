# ExoSuiteAPI

<p align="center">
<img src="https://www.versioneye.com/user/projects/5ab3aee70fb24f44833013cb/badge.svg?style=flat-square">
<img src="https://img.shields.io/badge/php-%3E%3D%207.2-blue.svg?style=flat-square">
<img src="https://img.shields.io/badge/php--fpm-7.2.3-brightgreen.svg?style=flat-square">
<img src="https://img.shields.io/badge/NGINX-nginx%2F1.10.3-brightgreen.svg?style=flat-square">
<img src="https://img.shields.io/badge/supervisor-3.3.1-brightgreen.svg?style=flat-square">
</p>

<p align="center">
<img src="https://laravel.com/assets/img/components/logo-laravel.svg">
</p>
<p align="center">
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
</p>

# Installation Debian 9

### Prerequisites
```bash
sudo apt-get install apt-transport-https lsb-release ca-certificates
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php.list
sudo apt-get update
```

### PHP
```bash
sudo apt-get install php7.2-fpm php7.2-common php7.2-mysql php7.2-json php7.2-xml php7.2-mbstring
```

### Composer
```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('SHA384', 'composer-setup.php') === '544e09ee996cdf60ece3804abc52599c22b1f40f4323403c44d44fdfdd586475ca9813a858088ffbc1f233e9b180f061') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
sudo mv composer.phar /usr/bin/composer
```

### Nginx
```bash
sudo apt-get install nginx
```

### Supervisor
```bash
sudo apt-get install supervisor
```

### Generate laravel configuration
```bash
cp .env.example .env
composer update
php artisan key:generate
php artisan migrate:fresh
php artisan client_web_app:generate
composer update
```

### Install configurations
```bash
cd ExoSuiteAPI
sudo rm /etc/php/7.2/fpm/pool.d/*
sudo cp ServerConfig/pool.d/* /etc/php/7.2/fpm/pool.d/
sudo rm /etc/nginx/sites-available/* /etc/nginx/sites-enabled/*
sudo cp ServerConfig/sites-available/* /etc/nginx/sites-available/
sudo ln -s  /etc/nginx/sites-available/api.exosuite.fr /etc/nginx/sites-enabled/ 
sudo ln -s  /etc/nginx/sites-available/exosuite.fr /etc/nginx/sites-enabled/
sudo cp ServerConfig/Supervisor/laravel-worker.conf /etc/supervisor/conf.d 
```

### Restart servers
```bash
sudo service php7.2-fpm restart
sudo service nginx restart
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start laravel-worker:*
```

# Security tokens
## Client tokens
### Client Web Token
#### Generate token for web front-end
*web tokens are generated in .env file with the key : CLIENT_WEB_APP=*

```bash
php artisan client_web_app:generate
```

>**result : CLIENT_WEB_APP=bc9082bc-c7ba-48ca-bd09-4d3b8c3eafe4**

#### Generate token for ExoSuite Apps
##### List of available commands from artisan
```bash
php artisan client_app:generate                   
php artisan client_app:get_infos_name             
php artisan client_app:get_infos_uuid
```

###### Example to generate Client App token for ExoRun
```
php artisan client_app:generate ExoRun
<span style="color:green">Client created on app ExoRun and with UUID 8bdb4408-5ebd-4f5c-864f-96a71fc88f61 successfully.</span>
```




### Access token


