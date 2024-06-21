import ReactApexChart from 'react-apexcharts';
import { RiskRewardChartProps } from '@/types/global';

const RiskRewardChart = ({ series, options, height = 600 }: RiskRewardChartProps) => {
	return (
		<div className="chart-container">
			<ReactApexChart options={options} series={[{ name: 'Profit', data: series }]} type="line" height={height} />
		</div>
	);
};

export default RiskRewardChart
