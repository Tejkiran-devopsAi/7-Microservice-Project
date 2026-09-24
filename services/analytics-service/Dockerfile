FROM php:8.3-cli

WORKDIR /var/www/html

COPY . .

RUN docker-php-ext-install pdo_pgsql

EXPOSE 8087

CMD ["php", "-S", "0.0.0.0:8087", "router.php"]

