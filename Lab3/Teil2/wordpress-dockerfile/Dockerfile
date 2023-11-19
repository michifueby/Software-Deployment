# Use the official Debian slim image as the base
FROM debian:buster-slim

# Set environment variables
ENV WORDPRESS_DB_NAME='wordpress' \
    WORDPRESS_DB_USER='user' \
    WORDPRESS_DB_PASS='password' \
    WORDPRESS_DB_HOST='localhost:3306' \
    DEBIAN_FRONTEND=noninteractive

# Update and upgrade packages
RUN apt-get update && \
    apt-get upgrade -y

# Install required packages
RUN apt-get install -y --no-install-recommends \
    wget \
    apache2 \
    php5 \
    libapache2-mod-php5 \
    php5-mcrypt \
    php5-mysql \
    unzip && \
    rm -rf /var/lib/apt/lists/*

# Download and set up WordPress
WORKDIR /var/www/html
RUN wget https://wordpress.org/latest.zip && \
    unzip -q latest.zip && \
    chown -R www-data:www-data /var/www/html/wordpress && \
    chmod -R 755 /var/www/html/wordpress && \
    mkdir -p /var/www/html/wordpress/wp-content/uploads && \
    chown -R www-data:www-data /var/www/html/wordpress/wp-content/uploads && \
    rm latest.zip

# Expose Apache port
EXPOSE 80/tcp

# Define a volume for the WordPress installation
VOLUME ["/var/www/html"]

# Start Apache in the foreground
CMD ["apachectl", "-D", "FOREGROUND"]
