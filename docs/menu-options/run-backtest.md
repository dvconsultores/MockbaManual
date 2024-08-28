---
sidebar_position: 1
---

# Run Backtest

![How to run a backtest](img/main-menu.png)

### Backtesting

The strategy is backtested using the model's predictions, an initial investment, and a stop-loss mechanism to manage risk. The backtest simulates trading over historical data to evaluate the strategy's performance.

### Technical Indicators

It calculates various technical indicators (e.g., RSI, MACD, Bollinger Bands, EMA) to capture different aspects of market movements. The indicators are calculated using the `pandas_ta` library to enrich the historical data with additional insights.

### How to start the backtest

- Click on Run Backtest menu option
- Select the symbol (e.g., BTCUSDT). Currently, it is trading against Binance. If the symbol is not listed, a message will be displayed.
- The bot will ask for a timeframe, presenting three option buttons: 1h, 4h, and 1d. If the selected range is invalid, a message will be displayed.
- You need to enter your initial date, end date, capital, gain threshold, and stop-loss threshold using the format: (yyyy-mm-dd), e.g., 2023-05-01|2023-05-02|100|1|5. Use the pipe character (|) as a separator. If the selected range is invalid, a message will be displayed.
The gain threshold is the percentage you want to earn for each trade. The bot already calculates the taker (0.1%) and maker (0.1%) fees over this value. For example, a gain threshold of 0.1 means 0.1%. Lowering the gain threshold and increasing the stop-loss percentage will increase the number of trades. 
The stop-loss percentage, for example, 50, means 50%.

After these steps, the bot will start executing the backtesting process. It will download the historical data and begin using the machine learning model. If the model does not exist, it will start training from scratch, which may take a bit longer. Once finished, it will display a text indicating a comparison between the strategy and a hold token. Additionally, it will generate an Excel file and a chart comparing both strategies.

Result example

```
Initial crypto amount (with initial investment): 0.002362 BTC
Final strategy portfolio value: $237.99
Final market portfolio value: $147.33
Final amount of BTCUSDT: 0.003682
Final percentage gain/loss: 137.99%
Average monthly percentage gain/loss: 17.25%
You have selected a gain threshold of 1.00% and a stop-loss threshold of 8.00%.
Execution time: 0:00:04.435913
```

In the example above, we ran the backtest from 2024-01-01 to 2024-08-01 with a 4-hour timeframe, a $100 investment, a 1% gain threshold, and an 8% stop-loss.


# Backtest Results Columns Explanation

## Explanation of Columns in the Generated Excel

### 1. timestamp
- **Definition**: This column contains the date and time for each data point.
- **Purpose**: It provides the time reference for each row of data, aligning price movements and technical indicators with specific periods.

### 2. low
- **Definition**: The lowest price of the asset within the given time frame.
- **Purpose**: Used to calculate various technical indicators and to understand the range of price movements within the period.

### 3. high
- **Definition**: The highest price of the asset within the given time frame.
- **Purpose**: Similar to the low price, it is used for technical indicators and understanding the price range.

### 4. volume
- **Definition**: The total volume of the asset traded during the time frame.
- **Purpose**: Volume is a key indicator of market activity and is often used in conjunction with price movements to confirm trends.

### 5. close
- **Definition**: The closing price of the asset at the end of the time frame.
- **Purpose**: It is the most commonly used price for calculations and is critical for generating other technical indicators.

### 6. return
- **Definition**: The percentage change in the closing price from one period to the next.
- **Calculation**: (Current Close Price - Previous Close Price) / Previous Close Price
- **Purpose**: Indicates the relative price change, helping to measure the performance of the asset over time.

### 7. rsi
- **Definition**: The Relative Strength Index, a momentum oscillator that measures the speed and change of price movements.
- **Calculation**: Based on average gains and losses over a specified period.
- **Purpose**: Used to identify overbought or oversold conditions.

### 8. macd
- **Definition**: The Moving Average Convergence Divergence, a trend-following momentum indicator.
- **Calculation**: Difference between a short-term EMA and a long-term EMA.
- **Purpose**: Helps to identify changes in the strength, direction, momentum, and duration of a trend.

### 9. macd_signal
- **Definition**: The signal line for the MACD.
- **Calculation**: EMA of the MACD line.
- **Purpose**: Used to generate buy and sell signals.

### 10. macd_diff
- **Definition**: The difference between the MACD line and the signal line.
- **Calculation**: MACD - MACD Signal
- **Purpose**: Helps to identify the strength of a trend.

### 11. bollinger_hband
- **Definition**: The upper Bollinger Band.
- **Calculation**: A specified number of standard deviations above a moving average.
- **Purpose**: Indicates potential overbought conditions when price touches or exceeds this band.

### 12. bollinger_mavg
- **Definition**: The middle Bollinger Band, which is a moving average.
- **Calculation**: Typically a 20-period simple moving average.
- **Purpose**: Used as a baseline to calculate the upper and lower bands.

### 13. bollinger_lband
- **Definition**: The lower Bollinger Band.
- **Calculation**: A specified number of standard deviations below a moving average.
- **Purpose**: Indicates potential oversold conditions when price touches or falls below this band.

### 14. ema
- **Definition**: The Exponential Moving Average, which gives more weight to recent prices.
- **Calculation**: Weighted moving average of the closing prices.
- **Purpose**: Used to identify the trend direction.

### 15. predicted
- **Definition**: The predictions made by the machine learning model.
- **Values**: Typically binary (0 or 1).
- **Purpose**: Indicates buy (1) or sell/hold (0) signals based on the model's predictions.

### 16. strategy_return
- **Definition**: The return of the trading strategy based on the model's predictions.
- **Calculation**: return * predicted.shift(1)
- **Purpose**: Reflects the performance of the strategy for each period, considering the previous period's prediction.

### 17. cumulative_strategy_return
- **Definition**: The cumulative return of the trading strategy over time.
- **Calculation**: (1 + strategy_return).cumprod() - 1
- **Purpose**: Shows the running total of the strategy's performance, indicating overall gains or losses since the start.

### 18. cumulative_market_return
- **Definition**: The cumulative return of the market over time.
- **Calculation**: (1 + return).cumprod() - 1
- **Purpose**: Indicates the overall market performance for comparison with the strategy.

### 19. strategy_portfolio_value
- **Definition**: The value of the portfolio following the trading strategy.
- **Calculation**: Initial Investment * (1 + cumulative_strategy_return)
- **Purpose**: Shows the monetary value of the portfolio over time when following the strategy.

### 20. market_portfolio_value
- **Definition**: The value of the portfolio if it is simply invested in the market without trading.
- **Calculation**: Initial Investment * (1 + cumulative_market_return)
- **Purpose**: Indicates the monetary value of the portfolio over time when passively invested in the market.

### 21. strategy_crypto_amount
- **Definition**: The amount of the base cryptocurrency (e.g., BTC) held in the strategy portfolio.
- **Calculation**: strategy_portfolio_value / close
- **Purpose**: Shows the equivalent amount of cryptocurrency held based on the strategy portfolio's value.

### 22. market_crypto_amount
- **Definition**: The amount of the base cryptocurrency (e.g., BTC) held in the market portfolio.
- **Calculation**: market_portfolio_value / close
- **Purpose**: Indicates the equivalent amount of cryptocurrency held based on the market portfolio's value.



