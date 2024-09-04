"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1979],{1318:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=o(4848),r=o(8453);const i={sidebar_position:1},s="Create a Bot with Botfather",a={id:"menu-installation/create-bot",title:"Create a Bot with Botfather",description:"Follow these steps to create your own Telegram bot using the BotFather.",source:"@site/docs/menu-installation/create-bot.md",sourceDirName:"menu-installation",slug:"/menu-installation/create-bot",permalink:"/docs/menu-installation/create-bot",draft:!1,unlisted:!1,editUrl:"https://github.com/dvconsultores/MockbaManual/tree/main/docs/menu-installation/create-bot.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Menu - Instalattion",permalink:"/docs/category/menu---instalattion"},next:{title:"Install postgres database",permalink:"/docs/menu-installation/install-postgres"}},l={},c=[{value:"Step 1: Start a Chat with BotFather",id:"step-1-start-a-chat-with-botfather",level:2},{value:"Step 2: Create a New Bot",id:"step-2-create-a-new-bot",level:2},{value:"Step 3: Obtain Your Bot Token",id:"step-3-obtain-your-bot-token",level:2},{value:"Step 4: Test Your Bot",id:"step-4-test-your-bot",level:2},{value:"Interaction Methods",id:"interaction-methods",level:2},{value:"Writing Your Bot",id:"writing-your-bot",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"create-a-bot-with-botfather",children:"Create a Bot with Botfather"})}),"\n",(0,n.jsx)(t.h1,{id:"creating-a-telegram-bot-using-botfather",children:"Creating a Telegram Bot Using BotFather"}),"\n",(0,n.jsx)(t.p,{children:"Follow these steps to create your own Telegram bot using the BotFather."}),"\n",(0,n.jsx)(t.h2,{id:"step-1-start-a-chat-with-botfather",children:"Step 1: Start a Chat with BotFather"}),"\n",(0,n.jsxs)(t.p,{children:["Open a chat with ",(0,n.jsx)(t.code,{children:"@BotFather"})," in Telegram and click the ",(0,n.jsx)(t.code,{children:"/start"})," command."]}),"\n",(0,n.jsx)(t.h2,{id:"step-2-create-a-new-bot",children:"Step 2: Create a New Bot"}),"\n",(0,n.jsxs)(t.p,{children:["After starting the chat, you will receive a list of commands. Select the command ",(0,n.jsx)(t.code,{children:"/newbot"})," to begin creating your bot. You will receive the following message:"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Alright, a new bot. How are we going to call it? Please choose a name for your bot."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Enter a name for your bot. This can be anything you like. After submitting the name, BotFather will prompt you to choose a username for your bot:"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Good. Now let's choose a username for your bot. It must end in ",(0,n.jsx)(t.code,{children:"bot"}),". Like this, for example: ",(0,n.jsx)(t.code,{children:"TetrisBot"})," or ",(0,n.jsx)(t.code,{children:"tetris_bot"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:'The username must end with "bot". If the username you want is already taken, you will need to try a different one.'}),"\n",(0,n.jsx)(t.h2,{id:"step-3-obtain-your-bot-token",children:"Step 3: Obtain Your Bot Token"}),"\n",(0,n.jsx)(t.p,{children:"Once your bot is successfully created, you will receive the following message from BotFather. It includes a token, which you will use to communicate with Telegram."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Done! Congratulations on your new bot. You will find it at ",(0,n.jsx)(t.code,{children:"telegram.me/???bot"}),". You can now add a description, about section, and profile picture for your bot. See ",(0,n.jsx)(t.code,{children:"/help"})," for a list of commands. By the way, when you've finished creating your cool bot, ping our Bot Support if you want a better username for it. Just make sure the bot is fully operational before you do this."]}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Use this token to access the HTTP API: ",(0,n.jsx)(t.code,{children:"xxx:xxx"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Make sure to write down this token, as it is crucial for interacting with Telegram's API."}),"\n",(0,n.jsx)(t.h2,{id:"step-4-test-your-bot",children:"Step 4: Test Your Bot"}),"\n",(0,n.jsx)(t.p,{children:"With the token you received, you can send a test message by accessing the following URL in your web browser:"}),"\n",(0,n.jsxs)(t.p,{children:["Replace ",(0,n.jsx)(t.code,{children:"BOTTOKEN"})," with your bot's token, ",(0,n.jsx)(t.code,{children:"YOURCHATID"})," with the chat ID, and ",(0,n.jsx)(t.code,{children:"YOURTEXT"})," with the message you want to send."]}),"\n",(0,n.jsx)(t.h2,{id:"interaction-methods",children:"Interaction Methods"}),"\n",(0,n.jsx)(t.p,{children:"There are two general methods for interacting with Telegram bots:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Pull Method"}),": In this method, you have to call the ",(0,n.jsx)(t.code,{children:"/getupdates"})," endpoint periodically to check if there are new messages sent to your bot."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Push Method"}),": This method uses a webhook (",(0,n.jsx)(t.code,{children:"/setwebhook"})," endpoint) that your script listens to. The webhook is triggered every time a user sends a message to your bot."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The information provided by Telegram is in JSON format and includes all the details (such as the sender's info and the message) you need."}),"\n",(0,n.jsx)(t.h2,{id:"writing-your-bot",children:"Writing Your Bot"}),"\n",(0,n.jsx)(t.p,{children:"You can write your bot in various programming languages, including PHP, Python, Lua, etc., as long as they can handle webhooks as input and can make web requests."}),"\n",(0,n.jsxs)(t.p,{children:["For further details, you can refer to the ",(0,n.jsx)(t.a,{href:"https://core.telegram.org/bots/api",children:"Telegram Bot API documentation"}),"."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"This guide should help you successfully create and configure your Telegram bot using BotFather. Happy bot building!"})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>a});var n=o(6540);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);