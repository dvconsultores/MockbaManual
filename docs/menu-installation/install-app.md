---
sidebar_position: 3
---

# Get VPS

To effectively run your application, you need to obtain a Virtual Private Server (VPS) with at least 8 processors and 24 GB of RAM. This ensures that the server can handle demanding tasks, including multiple concurrent processes or services, without performance degradation.

Additionally, you'll need to configure server services such as:

- Database service (PostgreSQL)
- SSH for secure access
- Firewall for security
- This setup will ensure optimal performance and security for your application.

You can find a list of vps service with a good price

OVHCloud
https://eco.ovhcloud.com/en/

Contaboo
https://contabo.com/en/vps/

Digital Ocean (Better but no cheap)
https://www.digitalocean.com/

NameCheap
https://www.namecheap.com/hosting/vps/



# Install the application

Connect to yoyr new server and create a folder in **/opt/Mockba**

# Uncompress the file

Be sure you have installed pip, if not install it with

```bash
sudo apt install python3-pip
```

# Run the command 

Go to the project root **/opt/Mockba** and run the command 

```bash
pip3 install -r requirements.txt
```

# Edit your .env file

You must add, host, user and password, also your Telegam bot token

```bash
HOST=localhost
DATABASE=mockba
USR=postgres
PASSWD=your-password
PATH_OPERATIONS=/home/andres/vsCodeProjects/Python/Mockba/database/
API_TOKEN = your-telegram-bot-token
PATH_INDICATORS = /home/andres/vsCodeProjects/Python/Mockba/indicators/
PATH_LOGS = /home/andres/vsCodeProjects/Python/Mockba/logs/
```

# Test the code running 

```bash
python3 Telegrambot.py
```

If all is running lets create the service.

You must create two services: one to run the Telegram bot and another to run the trader. The trader service will handle live trading, trader gainers, and send signal messages every 4 hours. Each one of them will run in a diferent Thread.

**Telegram Bot Service**

Go to **/etc/systemd/system** and create a new file with nano, called **mockba.service**

```bash
nano mockba.service
```

Now, copy the content of this file and paste it: [Mockba Service](database/mockba.service)

Save the file with the next command: **ctrl+x**, and start the service

```bash
systemctl start mockba.service
```

Verify if the service is running

```bash
systemctl status mockba.service
```

**Trader Service**

Go to **/etc/systemd/system** and create a new file with nano, called **trader.service**

```bash
nano trader.service
```

Now, copy the content of this file and paste it: [Trader Service](database/trader.service)

Save the file with the next command: **ctrl+x**, and start the service

```bash
systemctl start trader.service
```

Verify if the service is running

```bash
systemctl status trader.service
```

You can now test the Telegram bot. Go to your bot and run the command to verify if it's working:

```bash
/start
```

# Create the user owner

Run the command in Telegram **init** to create the admin user

```bash
/init
```

The bot will prompt you to create an API key and secret on Binance. Ensure the key has trade spot permission only and is restricted to your server's IP address.

- Please enter your Api Key
- Please enter your Api Secret
- Please enter your Name
- Please enter your Last Name

# Create users

Run the command in Telegram **user** to create the admin user

```bash
/user
```

The bot will prompt you to create an API key and secret on Binance. Ensure the key has trade spot permission only and is restricted to your server's IP address.

- Please enter your Api Key
- Please enter your Api Secret
- Please enter your Name
- Please enter your Last Name