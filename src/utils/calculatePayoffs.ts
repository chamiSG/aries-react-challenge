import { OptionData } from "@/types/global";

export const calculatePayoff = (option: OptionData, price: number): number => {
  const premium = (option.bid + option.ask) / 2;
  let payoff = 0;

  if (option.type === 'Call') {
    payoff = Math.max(price - option.strike_price, 0) - premium;
  } else if (option.type === 'Put') {
    payoff = Math.max(option.strike_price - price, 0) - premium;
  }
  return option.long_short === 'long' ? payoff : -payoff;
};

export const calculateSeries = (options: OptionData[], priceRange: number[]): number[] => {
  return priceRange.map(price =>
    options.reduce((acc, option) => acc + calculatePayoff(option, price), 0)
  );
};

export const findExtremesAndBreakevens = (series: number[], priceRange: number[]) => {
  let maxProfit = Number.MIN_SAFE_INTEGER;
  let maxLoss = Number.MAX_SAFE_INTEGER;
  const breakevens: any[] = [];

  series.forEach((profit, index) => {
    if (profit > maxProfit) maxProfit = profit;
    if (profit < maxLoss) maxLoss = profit;
    if (index > 0 && series[index - 1] * profit <= 0) {
      breakevens.push({
        profit,
        underlying: priceRange[index]
      });
    }
  });

  return { maxProfit, maxLoss, breakevens };
};
