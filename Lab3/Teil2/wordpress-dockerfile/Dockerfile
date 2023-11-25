# Use the official Debian slim image as the base
FROM debian:buster

ENV WORDPRESS_DB_NAME 'wordpress_db' \
    WORDPRESS_DB_USER 'userdb' \
    WORDPRESS_DB_PASS 'passworddb' \
    WORDPRESS_DB_HOST 'localhost:3306'

# Update and upgrade packages, install required packages
RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y --no-install-recommends \
        wget \
        ca-certificates \
        apache2 \
        php7.3 \
        libapache2-mod-php7.3 \
        php7.3-mysql \
        php7.3-mbstring \
        unzip \
    && rm -rf /var/lib/apt/lists/*

# Download and set up WordPress
WORKDIR /var/www/html
RUN wget -q https://wordpress.org/latest.zip \
    && unzip -q latest.zip \
    && chown -R www-data:www-data /var/www/html/wordpress \
    && chmod -R 755 /var/www/html/wordpress \
    && mkdir -p /var/www/html/wordpress/wp-content/uploads \
    && chown -R www-data:www-data /var/www/html/wordpress/wp-content/uploads \
    && rm latest.zip

RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Expose Apache port
EXPOSE 80/tcp

# Define a volume for the WordPress installation
VOLUME ["/var/www/html"]

# Start Apache in the foreground
CMD ["apachectl", "-D", "FOREGROUND"]
