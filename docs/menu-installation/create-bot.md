---
sidebar_position: 1
---

# Create a Bot with Botfather


# Creating a Telegram Bot Using BotFather

Follow these steps to create your own Telegram bot using the BotFather.

## Step 1: Start a Chat with BotFather

Open a chat with `@BotFather` in Telegram and click the `/start` command.

## Step 2: Create a New Bot

After starting the chat, you will receive a list of commands. Select the command `/newbot` to begin creating your bot. You will receive the following message:

> Alright, a new bot. How are we going to call it? Please choose a name for your bot.

Enter a name for your bot. This can be anything you like. After submitting the name, BotFather will prompt you to choose a username for your bot:

> Good. Now let's choose a username for your bot. It must end in `bot`. Like this, for example: `TetrisBot` or `tetris_bot`.

The username must end with "bot". If the username you want is already taken, you will need to try a different one.

## Step 3: Obtain Your Bot Token

Once your bot is successfully created, you will receive the following message from BotFather. It includes a token, which you will use to communicate with Telegram.

> Done! Congratulations on your new bot. You will find it at `telegram.me/???bot`. You can now add a description, about section, and profile picture for your bot. See `/help` for a list of commands. By the way, when you've finished creating your cool bot, ping our Bot Support if you want a better username for it. Just make sure the bot is fully operational before you do this.

> Use this token to access the HTTP API: `xxx:xxx`

Make sure to write down this token, as it is crucial for interacting with Telegram's API.

## Step 4: Test Your Bot

With the token you received, you can send a test message by accessing the following URL in your web browser:


Replace `BOTTOKEN` with your bot's token, `YOURCHATID` with the chat ID, and `YOURTEXT` with the message you want to send.

## Interaction Methods

There are two general methods for interacting with Telegram bots:

1. **Pull Method**: In this method, you have to call the `/getupdates` endpoint periodically to check if there are new messages sent to your bot.

2. **Push Method**: This method uses a webhook (`/setwebhook` endpoint) that your script listens to. The webhook is triggered every time a user sends a message to your bot.

The information provided by Telegram is in JSON format and includes all the details (such as the sender's info and the message) you need.

## Writing Your Bot

You can write your bot in various programming languages, including PHP, Python, Lua, etc., as long as they can handle webhooks as input and can make web requests.

For further details, you can refer to the [Telegram Bot API documentation](https://core.telegram.org/bots/api).

---

This guide should help you successfully create and configure your Telegram bot using BotFather. Happy bot building!
