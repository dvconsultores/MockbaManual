
# About Mockba Trading BOT

This trading bot is designed to automate the process of trading cryptocurrencies on Binance. It uses a machine learning model to predict market movements and make buy/sell decisions. The bot fetches historical data, calculates technical indicators, trains a model, backtests the strategy, and executes live trades based on the model's predictions. It also manages capital dynamically and incorporates risk management strategies.

Additionally, the bot operates through a Telegram bot created with BotFather, allowing users to interact with and control the trading bot directly via Telegram.

## How the Code Works

### Data Fetching

The code fetches historical data for a specific cryptocurrency pair from a PostgreSQL database. It queries the database to retrieve historical price and volume data for the given pair and timeframe.

### Technical Indicators

It calculates various technical indicators (e.g., RSI, MACD, Bollinger Bands, EMA) to capture different aspects of market movements. The indicators are calculated using the `pandas_ta` library to enrich the historical data with additional insights.

### Machine Learning Model

The bot trains a Random Forest classifier using these indicators to predict market movements (buy/sell signals). The model uses hyperparameter tuning with `RandomizedSearchCV` to find the best parameters for the classifier. The trained model is then saved to disk for future use.

### Backtesting

The strategy is backtested using the model's predictions, an initial investment, and a stop-loss mechanism to manage risk. The backtest simulates trading over historical data to evaluate the strategy's performance.

### Performance Evaluation

The performance of the strategy is evaluated and compared against a simple buy-and-hold strategy. The results include cumulative returns, portfolio value, and crypto amount over time.

### Model Saving

The trained model is saved to disk for future use, allowing for continuous improvement and adaptation over time. The model can be loaded and updated with new data to adapt to changing market conditions.


## Indicators Used

- **RSI (Relative Strength Index)**: Measures the speed and change of price movements to identify overbought or oversold conditions.
  - Default Period: 14 periods.
- **MACD (Moving Average Convergence Divergence)**: A trend-following momentum indicator that shows the relationship between two moving averages of prices.
  - Default Periods: 12-period EMA (fast line), 26-period EMA (slow line), and 9-period EMA (signal line).
- **Bollinger Bands**: Consists of a moving average and two standard deviation lines. It indicates overbought or oversold conditions.
  - Default Period: 20 periods for the moving average with bands at 2 standard deviations.
- **EMA (Exponential Moving Average)**: Gives more weight to recent prices to identify trend direction.
  - Default Period: 10 periods.

## Adaptation to Market Conditions

### Retraining with Updated Data

The model can be retrained with new data to adapt to changing market conditions. This allows the strategy to stay relevant and effective as market dynamics evolve.

### Technical Indicators

The use of multiple technical indicators helps capture different aspects of market dynamics, making the strategy robust against changes. Indicators like RSI, MACD, Bollinger Bands, and EMA provide a comprehensive view of market trends and momentum.

### Stop-Loss Mechanism

The stop-loss mechanism helps manage risk by capping losses, which is crucial in volatile markets. It ensures that the strategy can mitigate significant losses during adverse market movements.

### Dynamic Model Loading and Saving

The model is saved and loaded dynamically, allowing for continuous improvement and adaptation over time. This feature supports iterative enhancements and ensures that the model remains up-to-date with the latest data.

## Live Trading Function

### API Integration

The bot uses Binance API to execute live trades based on the model's predictions. It retrieves the latest market data and account balances to make informed trading decisions.

### Capital Management

The bot dynamically manages capital by adjusting the investment based on trading outcomes. It updates the capital and crypto amounts after each trade and stores them in the database.

### Risk Management

Implements a stop-loss mechanism and limits the maximum allocation for each trade. This helps to control risk and prevent excessive exposure to any single asset.

### Advanced Order Types

- **Market Orders**: Immediately executed at the current market price.
- **Post-Only Orders**: Ensures that orders are added to the order book and not matched with existing orders immediately.
- **Dynamic Order Sizing**: Adjusts the order size based on the total quantity and market conditions.
- **TWAP (Time-Weighted Average Price) Orders**: Spreads out large orders over a specific time period to minimize market impact.
- **Slippage Control**: Monitors the difference between the expected price and execution price to avoid high slippage.

### Logging and Error Handling

The bot logs all trading activities and errors for transparency and troubleshooting. This ensures that all actions are documented and any issues can be addressed promptly.

### Continuous Operation

The bot runs in a loop, continuously fetching new data, making predictions, and executing trades. It sleeps for a specified interval between iterations based on the trading timeframe.


## Trader Function

### Multi-Pair Trading

The trader function handles trading for multiple cryptocurrency pairs and timeframes. It retrieves the list of pairs and timeframes from the database and initiates live trading for each.

### Signal-Based Execution

It checks the signal status for each pair and timeframe before starting the bot. If the signal indicates that the bot should be down, it skips trading for that pair and timeframe.

## Capital and Cumulative Returns Management

### Capital Allocation

The bot starts with an initial capital for each trading pair and timeframe. The capital is dynamically adjusted based on trading outcomes.

- When a buy order is executed, the fiat capital is decreased, and the crypto amount is increased.
- When a sell order is executed, the crypto amount is decreased, and the fiat capital is increased.

### Cumulative Returns

The bot calculates cumulative returns to track the performance of the trading strategy over time. Cumulative returns are calculated by compounding the strategy's returns over each trading period. The strategy's portfolio value and the amount of cryptocurrency held are updated after each trade.

### Storing Capital

The bot stores the updated capital and crypto amounts in a PostgreSQL database after each trade. This ensures that the bot can maintain an accurate record of its trading activity and capital allocation. It also supports the bot's ability to resume trading with the correct capital allocation after any interruptions.

## Function Explanations

### place_market_order

This function places a market order, ensuring the order is executed at the current market price. It includes a slippage control mechanism to make sure the price does not deviate too much from the expected price, preventing execution if slippage is too high.

### control_slippage

This function calculates the slippage, which is the difference between the expected price and the execution price. If the slippage exceeds a predefined maximum percentage, the function prevents the order from being placed, helping to avoid excessive losses due to price differences.

### dynamic_order_sizing

This function breaks down a large order into smaller chunks. This strategy helps to minimize market impact by spreading the order across multiple trades, thus avoiding significant price changes caused by executing a large order all at once.

### place_twap_order

This function implements TWAP (Time-Weighted Average Price) orders, which distribute a large order over a specified time period. By placing smaller orders at regular intervals, it aims to achieve a better average price and reduce market impact. This method is particularly useful for large trades, ensuring they do not cause significant fluctuations in the market.

## Understanding “expected_return”

In the code, `expected_return` is calculated as:

```python
expected_return = (latest_close - historical_data['close'].iloc[-2]) / historical_data['close'].iloc[-2]
```

This formula computes the percentage change in the closing price between the two most recent data points:

- `latest_close` is the most recent closing price of the asset.
- `historical_data['close'].iloc[-2]` is the closing price from the previous time period.

### Real-World Interpretation

- If `expected_return > 0`, it means the latest price is higher than the previous price, indicating a potential upward trend.
- If `expected_return < 0`, it means the latest price is lower than the previous price, indicating a potential downward trend.

### Function in Buy and Sell Decisions

In the context of the code:

- **Buy Logic**:
  - `first_trade`: This condition ensures that a buy can be executed if it is the first trade, regardless of the other conditions.
  - `latest_signal == 1`: This suggests that the model predicts a price increase.
  - `expected_return > gain_threshold`: This checks if the latest price has increased beyond a certain threshold compared to the previous price. It implies that the price is trending upwards and the condition is met to buy.

- **Sell Logic**:
  - `latest_signal == 0`: This suggests that the model predicts a price decrease.
  - `expected_return > gain_threshold`: This indicates that the price has increased beyond the gain threshold since the last trade, which might be a good time to sell and lock in profits.
  - `stop_loss_triggered`: This condition allows selling if the portfolio value has dropped below a certain level, even if the price hasn’t increased.

## How gain_threshold Works

### Definition

The `gain_threshold` is a minimum acceptable percentage change in the price of the asset between two consecutive periods that must be met before a trade (buy or sell) is executed.

### Setting the Threshold

In your example, `gain_threshold = 0.001` which corresponds to 0.1% (since 0.001 as a decimal is equivalent to 0.1%).

### Application in the Strategy

- **Buying**: The strategy will consider buying an asset if the expected return (`expected_return`) exceeds this threshold, meaning the asset's price has increased by more than 0.1% from the previous price.
- **Selling**: Similarly, the strategy will consider selling if the expected return exceeds the threshold, indicating a potential for locking in profits.

### Example Scenarios with `gain_threshold = 0.001`

- **Scenario 1**: Expected Return Exceeds Threshold
  - Suppose the price of an asset was $100 and it increased to $100.10.
  - The expected return would be: `(100.10 - 100) / 100 = 0.001` or `0.1%`.
  - Since the expected return meets the gain threshold (0.1%), the condition for executing a trade based on this threshold would be satisfied.

- **Scenario 2**: Expected Return Below Threshold
  - If the price moved from $100 to $100.05:
  - The expected return would be: `(100.05 - 100) / 100 = 0.0005` or `0.05%`.
  - Here the expected return is below the gain threshold (only 0.05% vs. 0.1%), so the strategy would not execute a trade based solely on this condition.

## Explanation of latest_signal

### Values of `latest_signal`

- `latest_signal = 1`: This means that the model predicts the price of the asset is likely to increase in the next period (e.g., the next hour).
- `latest_signal = 0`: This means that the model predicts the price of the asset is likely to decrease in the next period.

### How It Works in The Strategy

The model makes predictions based on the historical data and the features you've provided, such as RSI, MACD, Bollinger Bands, and others.

- **When `latest_signal = 1`**:
  - The strategy interprets this as a potential buying opportunity because the model predicts that the price will rise.
  - The strategy checks if the expected return exceeds the gain threshold to decide whether to execute a buy order.

- **When `latest_signal = 0`**:
  - The strategy interprets this as a potential selling opportunity because the model predicts that the price will fall.
  - The strategy may execute a sell order if the expected return is favorable (indicating the price has increased sufficiently) or if a stop-loss condition is triggered.

## How stop_loss_triggered Works

### Definition in the Code

```python
stop_loss_triggered = (current_portfolio_value < capital_accumulated * (1 - stop_loss_threshold))
```

- `current_portfolio_value`: This is the current value of your portfolio, which includes both the cash you have and the current value of any crypto assets you hold.
- `capital_accumulated`: This is the maximum value that the portfolio has reached at any point in time (acting as a reference for calculating losses).
- `stop_loss_threshold`: This is a predefined percentage (e.g., 0.05 for 5%) that defines how much loss you are willing to tolerate before triggering a stop-loss sell.

### Logic Behind `stop_loss_triggered`

The condition checks if the `current_portfolio_value` has dropped below a certain percentage (`stop_loss_threshold`) of the highest value (`capital_accumulated`) it has reached so far.

- If the portfolio value drops by more than this percentage, the `stop_loss_triggered` condition becomes True.

### Example

- **Initial Scenario**:
  - Suppose `capital_accumulated` is $10,000 (the highest your portfolio value has reached).
  - You have set a `stop_loss_threshold` of 0.05 (5%).

- **Calculating the Stop-Loss Trigger**:
  - The stop-loss level would be calculated as:
  - `stop-loss level = 10,000 * (1 - 0.05) = 10,000 * 0.95 = 9,500`
  - If your `current_portfolio_value` falls below $9,500, the `stop_loss_triggered` variable will be set to True.

- **What Happens When `stop_loss_triggered` is True**:
  - When `stop_loss_triggered` is True, the strategy is instructed to sell the asset to prevent further losses, locking in the loss at this predefined threshold rather than risking a larger loss.

## Conclusion

The trading bot documentation provided offers a comprehensive guide to understanding the functionalities, strategies, and mechanisms employed by the bot to manage trades, risk, and performance. By adhering to the guidelines and explanations, users can effectively utilize the bot for cryptocurrency trading with an emphasis on risk management and strategic decision-making.

