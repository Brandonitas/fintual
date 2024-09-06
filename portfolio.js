export class Portfolio {
  constructor() {
    this.stocks = [];
  }

  addStock(stock) {
    this.stocks.push(stock);
  }

  profit(startDate, endDate) {
    let startValue = 0;
    let endValue = 0;

    for (let stock of this.stocks) {
      startValue += stock.price(startDate);
      endValue += stock.price(endDate);
    }

    const profit = endValue - startValue;
    
    // Calculate annualized return
    const days = (endDate - startDate) / (1000 * 60 * 60 * 24);
    const years = days / 365;
    const annualizedReturn = Math.pow((endValue / startValue), (1 / years)) - 1;

    return {
      profit: profit,
      annualizedReturn: annualizedReturn
    };
  }
}