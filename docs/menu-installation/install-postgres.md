---
sidebar_position: 2
---

# Install postgres database


# How to Install PostgreSQL on Debian 12: A Step-by-Step Tutorial

This guide provides a step-by-step process for installing PostgreSQL on a Debian 12 system, including system preparation, installation commands, user and database creation, and basic service management. PostgreSQL is a reliable and feature-rich open-source relational database management system suitable for various data storage needs.

## Key Steps

1. **Update the System**: Ensure your Debian 12 system is up-to-date with `sudo apt update && sudo apt upgrade`.

2. **Install PostgreSQL**: Install the PostgreSQL server and contrib packages with `sudo apt install postgresql postgresql-contrib`.

3. **Enable PostgreSQL**: Ensure PostgreSQL starts at boot with `sudo systemctl enable postgresql`.

4. **Create User and Database**:
    - Create a new user: `sudo -u postgres createuser postgres`
    - Create a new database: `sudo -u postgres createdb -O postgres mockba`

5. **Basic Table Creation**:
    
    To view the script in your browser, click the link below:

    [Open Basic Table Creation Script](database/script.sql)

6. **Manage PostgreSQL Service**:
    - Start the service: `sudo systemctl start postgresql`
    - Stop the service: `sudo systemctl stop postgresql`
    - Restart the service: `sudo systemctl restart postgresql`
    - Check status: `sudo systemctl status postgresql`

## Conclusion

You now have PostgreSQL installed on your Debian 12 server and are equipped to manage databases and perform basic administrative tasks. Explore PostgreSQL's extensive features for scalable and reliable data management.

For more detailed instructions, visit the [original guide](https://www.sqliz.com/posts/install-postgresql-on-debian-12/).
