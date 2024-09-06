import { Stock } from './Stock.js';
import { Portfolio } from './Portfolio.js';

const portfolio = new Portfolio();

portfolio.addStock(new Stock("NVDA"));
portfolio.addStock(new Stock("DIS"));

const startDate = new Date("2023-06-01");
const endDate = new Date("2024-06-01");

const result = portfolio.profit(startDate, endDate);

console.log(`Profit: $${result.profit.toFixed(2)}`);
console.log(`Annualized Return: ${(result.annualizedReturn * 100).toFixed(2)}%`);