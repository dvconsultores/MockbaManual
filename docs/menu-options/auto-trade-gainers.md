---
sidebar_position: 6
---

# Auto Trade Gainers

![How to enable the Auto Trade Gainers](img/main-menu.png)

# Auto Trading Gainers Script Documentation

This script is designed to automate the process of identifying and trading cryptocurrency gainers on Binance. It integrates technical analysis, market sentiment analysis, and Elliott Wave theory to make informed trading decisions. The script is designed to work in a loop, continuously scanning for new opportunities based on the available capital.

## Key Features

- **Fetch and Analyze Gainers**: The script fetches the top gainers from Binance and analyzes them using various technical indicators.
- **Technical Analysis**: The script uses linear regression, ARIMA, XGBoost, and Fibonacci retracement to predict future price movements.
- **Elliott Wave Confirmation**: Elliott Wave theory is used to confirm the trend for both the specific cryptocurrency and BTC (as a market proxy).
- **Automated Trading Decisions**: Based on the analysis, the script decides whether to place trades.
- **Logging**: The script logs all significant actions and decisions for auditing and debugging purposes.


## Script Structure

### 1. **fetch_capital_and_tokens**

Fetches available capital and tokens from the database.

### 2. **fetch_gainers_and_analyze**

Fetches top gainers from Binance and analyzes them using the `gainers_analysis` module.

### 3. **parse_technical_analysis_result**

Parses the technical analysis result string into a dictionary for easier access.

### 4. **analyze_gainer**

Performs a detailed technical analysis on a specific symbol and logs the results.

### 5. **should_invest**

Determines whether the script should invest in the analyzed gainer based on capital constraints and technical analysis results.

### 6. **confirm_with_elliott_waves_with_btc**

Confirms the market trend by analyzing BTC using Elliott Wave theory.

### 7. **confirm_with_with_technicall_analysis_btc**

Performs a technical analysis on BTC to confirm the overall market trend.

### 8. **confirm_with_elliott_waves**

Performs Elliott Wave analysis on the specified symbol to confirm its trend.

### 9. **place_order_and_monitor**

Places a trade order if all conditions are met and monitors the trade.

### 10. **main_loop**

The core loop that continuously checks for trading opportunities and executes trades.

## Usage

- Select the auto trade gainers in the menu option. Two options will appear, Start / Stop Bot and update capital
- Click "Start" to enable this option. If no capital has been added, the bot will prompt you to enter an initial capital amount and the number of splits. Splits are used to divide the capital among multiple tokens. For example, if you add a capital of $200 and split it into two, the bot will invest $100 in one token and $100 in another.
- To stop the current operation, click on "Stop".
- To update your capital and splits, click on "Update Capital".