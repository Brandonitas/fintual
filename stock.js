export class Stock {
    constructor(symbol) {
      this.symbol = symbol;
    }
  
    price(date) {
      return Math.random() * 400 + 100;
    }
  }