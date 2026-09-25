FROM php:8.3-cli

WORKDIR /var/www/html

COPY . .

RUN apt-get update && apt-get install -y libpq-dev \
    && docker-php-ext-install pdo_pgsql

EXPOSE 8087

CMD ["php", "-S", "0.0.0.0:8087", "router.php"]

