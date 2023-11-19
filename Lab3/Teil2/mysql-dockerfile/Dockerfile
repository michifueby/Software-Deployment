# Use the official Debian slim image as the base
FROM debian:buster-slim

# Set environment variables
ENV MYSQL_ROOT_PASSWORD='password' \
    MYSQL_DATABASE='wordpress' \
    MYSQL_USER='user' \
    MYSQL_PASSWORD='password' \
    DEBIAN_FRONTEND=noninteractive \
    container=docker

# Update and upgrade packages
RUN apt-get update && \
    apt-get upgrade -y

# Install required packages
RUN apt-get install -y --no-install-recommends \
    wget \
    lsb-release && \
    rm -rf /var/lib/apt/lists/*

# Configure MySQL repository and install server
RUN wget http://repo.mysql.com/mysql-apt-config_0.8.9-1_all.deb && \
    dpkg -i mysql-apt-config_0.8.9-1_all.deb && \
    apt-get update && \
    echo "mysql-server mysql-server/root_password password $MYSQL_ROOT_PASSWORD" | debconf-set-selections && \
    echo "mysql-server mysql-server/root_password_again password $MYSQL_ROOT_PASSWORD" | debconf-set-selections && \
    apt-get install -y --no-install-recommends mysql-server && \
    sed -i "s/.*bind-address.*/bind-address = 0.0.0.0/" /etc/mysql/my.cnf && \
    rm mysql-apt-config_0.8.9-1_all.deb && \
    rm -rf /var/lib/apt/lists/*

# Expose MySQL port
EXPOSE 3306/tcp

# Define a volume for MySQL data
VOLUME ["/var/lib/mysql/"]

# Start MySQL
CMD service mysql start && \
    mysql --user=root --password=$MYSQL_ROOT_PASSWORD -e "CREATE USER '${MYSQL_USER}'@'%' IDENTIFIED BY '${MYSQL_PASSWORD}';" || true && \
    mysql --user=root --password=$MYSQL_ROOT_PASSWORD -e "CREATE DATABASE IF NOT EXISTS ${MYSQL_DATABASE};" && \
    mysql --user=root --password=$MYSQL_ROOT_PASSWORD -e "GRANT all privileges ON ${MYSQL_DATABASE}.* TO '${MYSQL_USER}'@'%';" && \
    mysql --user=root --password=$MYSQL_ROOT_PASSWORD -e "FLUSH PRIVILEGES;" && \
    mysqld
