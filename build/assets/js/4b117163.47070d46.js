"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[906],{442:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var s=i(4848),t=i(8453);const a={sidebar_position:5},r="Gainers analysis",c={id:"menu-options/gainers-analysis",title:"Gainers analysis",description:"How Gainers Analysis Works and How to Operate",source:"@site/docs/menu-options/gainers-analysis.md",sourceDirName:"menu-options",slug:"/menu-options/gainers-analysis",permalink:"/docs/menu-options/gainers-analysis",draft:!1,unlisted:!1,editUrl:"https://github.com/dvconsultores/MockbaManual/tree/main/docs/menu-options/gainers-analysis.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Start / Stop Signals",permalink:"/docs/menu-options/start-stop-signals"},next:{title:"Auto Trade Gainers",permalink:"/docs/menu-options/auto-trade-gainers"}},l={},o=[{value:"Key Libraries and Imports",id:"key-libraries-and-imports",level:2},{value:"Script Functionality",id:"script-functionality",level:2},{value:"1. <strong>Fetching Binance Symbols</strong>",id:"1-fetching-binance-symbols",level:3},{value:"2. <strong>Fetching Active Trading Pairs</strong>",id:"2-fetching-active-trading-pairs",level:3},{value:"3. <strong>Fetching Historical Data</strong>",id:"3-fetching-historical-data",level:3},{value:"4. <strong>Calculating Percentage Change</strong>",id:"4-calculating-percentage-change",level:3},{value:"5. <strong>Analyzing Data</strong>",id:"5-analyzing-data",level:3},{value:"6. <strong>Processing Symbols</strong>",id:"6-processing-symbols",level:3},{value:"7. <strong>Concurrent Processing</strong>",id:"7-concurrent-processing",level:3},{value:"8. <strong>Calculating Percentage Increase</strong>",id:"8-calculating-percentage-increase",level:3},{value:"9. <strong>Main Function</strong>",id:"9-main-function",level:3},{value:"10. <strong>Session Management</strong>",id:"10-session-management",level:3},{value:"How to run Gainers analysis",id:"how-to-run-gainers-analysis",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"gainers-analysis",children:"Gainers analysis"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"How Gainers Analysis Works and How to Operate",src:i(3872).A+"",width:"208",height:"425"})}),"\n",(0,s.jsx)(n.h1,{id:"early-stage-gainers-detection-script-overview",children:"Early-Stage Gainers Detection Script Overview"}),"\n",(0,s.jsx)(n.p,{children:"This script is designed to identify early-stage gainers in the cryptocurrency market by analyzing Binance trading pairs. It fetches historical market data, computes technical indicators, and identifies potential gainers based on specific conditions such as moving averages and RSI (Relative Strength Index). The script also supports concurrent processing to handle multiple trading pairs efficiently."}),"\n",(0,s.jsx)(n.h2,{id:"key-libraries-and-imports",children:"Key Libraries and Imports"}),"\n",(0,s.jsx)(n.p,{children:"The script utilizes several important Python libraries:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"os"}),": For accessing system-level information, such as CPU core count."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"requests"}),": To make HTTP requests for fetching market data from the Binance API."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"pandas"}),": For handling and analyzing time-series data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ta (Technical Analysis)"}),": To calculate technical indicators like Simple Moving Average (SMA) and RSI."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"concurrent.futures"}),": To enable parallel processing for faster analysis of multiple trading pairs."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"script-functionality",children:"Script Functionality"}),"\n",(0,s.jsxs)(n.h3,{id:"1-fetching-binance-symbols",children:["1. ",(0,s.jsx)(n.strong,{children:"Fetching Binance Symbols"})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"get_binance_symbols"})," function retrieves all the trading pairs available on Binance that end with 'USDT' (indicating they are paired with Tether, a stablecoin)."]}),"\n",(0,s.jsxs)(n.h3,{id:"2-fetching-active-trading-pairs",children:["2. ",(0,s.jsx)(n.strong,{children:"Fetching Active Trading Pairs"})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"get_active_trading_pairs"})," function fetches a list of trading pairs that are currently active on Binance. This ensures the script only processes trading pairs that are currently being traded."]}),"\n",(0,s.jsxs)(n.h3,{id:"3-fetching-historical-data",children:["3. ",(0,s.jsx)(n.strong,{children:"Fetching Historical Data"})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"get_historical_data"})," function retrieves historical market data (OHLCV - Open, High, Low, Close, Volume) for a given cryptocurrency symbol over a specified time interval. The data is then formatted into a pandas DataFrame for further analysis."]}),"\n",(0,s.jsxs)(n.h3,{id:"4-calculating-percentage-change",children:["4. ",(0,s.jsx)(n.strong,{children:"Calculating Percentage Change"})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"get_percentage_change"})," function calculates the percentage change in the price of a cryptocurrency over a specified interval. This helps in identifying how much a symbol's price has moved in the given period."]}),"\n",(0,s.jsxs)(n.h3,{id:"5-analyzing-data",children:["5. ",(0,s.jsx)(n.strong,{children:"Analyzing Data"})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"analyze_data"})," function calculates two key technical indicators:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"SMA (Simple Moving Average)"}),": A 20-period moving average that helps in identifying trends."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"RSI (Relative Strength Index)"}),": A momentum oscillator that measures the speed and change of price movements. The function also identifies early-stage gainers based on whether the closing price is above the SMA and the RSI is greater than 50."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"6-processing-symbols",children:["6. ",(0,s.jsx)(n.strong,{children:"Processing Symbols"})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"process_symbol"})," function processes each symbol individually. It fetches historical data, analyzes it using the ",(0,s.jsx)(n.code,{children:"analyze_data"})," function, and identifies whether the symbol is a potential early-stage gainer. If the symbol meets the criteria, the function returns its symbol, latest price, initial price, and percentage change."]}),"\n",(0,s.jsxs)(n.h3,{id:"7-concurrent-processing",children:["7. ",(0,s.jsx)(n.strong,{children:"Concurrent Processing"})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"get_early_stage_gainers_concurrently"})," function uses the ",(0,s.jsx)(n.code,{children:"concurrent.futures"})," module to process multiple symbols in parallel. This significantly speeds up the analysis, especially when dealing with a large number of trading pairs."]}),"\n",(0,s.jsxs)(n.h3,{id:"8-calculating-percentage-increase",children:["8. ",(0,s.jsx)(n.strong,{children:"Calculating Percentage Increase"})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"calculate_percentage_increase"})," function calculates the percentage increase in the price of identified gainers. It also filters the results based on a specified change threshold."]}),"\n",(0,s.jsxs)(n.h3,{id:"9-main-function",children:["9. ",(0,s.jsx)(n.strong,{children:"Main Function"})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"fetch_and_analyze_gainers"})," function is the main entry point for fetching and analyzing gainers based on a given interval. It identifies early-stage gainers, calculates their percentage increase, and stores the results in the ",(0,s.jsx)(n.code,{children:"session_gainers"})," dictionary for future reference."]}),"\n",(0,s.jsxs)(n.h3,{id:"10-session-management",children:["10. ",(0,s.jsx)(n.strong,{children:"Session Management"})]}),"\n",(0,s.jsx)(n.p,{children:"The script includes functions for managing the session data:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"get_stored_gainers"})}),": Retrieves the stored gainers list for a specific token."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"clear_stored_gainers"})}),": Clears the stored gainers list for a specific token."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"how-to-run-gainers-analysis",children:"How to run Gainers analysis"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Click on Run Backtest menu option"}),"\n",(0,s.jsx)(n.li,{children:"Select the interval: 1h, 4h, or 1d."}),"\n",(0,s.jsx)(n.li,{children:"Select the threshold from the list: 0, 0.3, 0.5, 1, 2, 3. This represents the gain for the last 24 hours."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3872:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/main-menu-c5e71a603c344bb3027573df0edb85ba.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var s=i(6540);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);