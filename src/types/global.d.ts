import { ApexOptions } from 'apexcharts';

// Props Types
interface RiskRewardChartProps {
  series: number[];
  options: ApexOptions;
  height?: number
}

// Data Types
interface OptionData {
  strike_price: number;
  type: string;
  bid: number;
  ask: number;
  long_short: string;
  expiration_date: string;
}