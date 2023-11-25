# Use the official Debian slim image as the base
FROM debian:buster

# Set environment variables
ENV MYSQL_ROOT_PASSWORD='root' \
    MYSQL_DATABASE='wordpress_db' \
    MYSQL_USER='userdb' \
    MYSQL_PASSWORD='passworddb' \
    DEBIAN_FRONTEND=noninteractive \
    container=docker

# Install MariaDB Server
RUN apt-get update && \
    apt-get -y install mariadb-server && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Create necessary directories and configure MariaDB
RUN mkdir -p /var/run/mysqld /var/lib/mysql && \
    echo "mariadb-server mysql-server/root_password password rootpassword" | debconf-set-selections && \
    echo "mariadb-server mysql-server/root_password_again password rootpassword" | debconf-set-selections && \
    sed -i 's/bind-address.*/bind-address = 0.0.0.0/' /etc/mysql/my.cnf && \
    chown -R mysql:mysql /var/lib/mysql /var/run/mysqld && \
    chmod 1777 /var/run/mysqld /var/lib/mysql

# Expose MySQL port
EXPOSE 3306/tcp

# Initialize MySQL database and user
RUN service mysql start \
    && mysqladmin -u root password $MYSQL_ROOT_PASSWORD \
    && mysql --user=root --password=$MYSQL_ROOT_PASSWORD -e "CREATE DATABASE IF NOT EXISTS ${MYSQL_DATABASE};" \
    && mysql --user=root --password=$MYSQL_ROOT_PASSWORD -e "GRANT ALL PRIVILEGES ON ${MYSQL_DATABASE}.* TO '${MYSQL_USER}'@'%' IDENTIFIED BY '${MYSQL_PASSWORD}';" \
    && mysql --user=root --password=$MYSQL_ROOT_PASSWORD -e "FLUSH PRIVILEGES;"

# Define a volume for MySQL data
VOLUME ["/var/lib/mysql/"]

# Start MySQL
CMD ["mysqld"]