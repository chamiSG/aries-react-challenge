import { useState } from 'react'
import './App.css'
import { OptionData } from '@/types/global'
import { ApexOptions } from 'apexcharts';
import { MdBarChart } from "react-icons/md";
import mockData from '@/utils/data.json'
import { defaultChartOptions, formatPrice } from '@/utils';
import { calculateSeries, findExtremesAndBreakevens } from '@/utils/calculatePayoffs';
import Header from '@/layouts/header'
import RiskRewardChart from '@/components/charts/RiskRewardChart'
import Widget from '@/components/widget';
import Card from '@/components/card';

const App = () => {

  const [optionsData] = useState<OptionData[]>(mockData)

  const priceRange = Array.from({ length: 26 }, (_, i) => 95 + i * 1); // Price range from 95 to 120
  const payoffs = calculateSeries(optionsData, priceRange);
  const { maxProfit, maxLoss, breakevens } = findExtremesAndBreakevens(payoffs, priceRange);

  const chartOptions: ApexOptions = {
    ...defaultChartOptions,

    chart: {
      id: 'risk-reward-chart',
      type: "line",
    },
    xaxis: {
      title: {
        text: 'Price of Underlying',
        style: {
          colors: "#5d5d5d",
          fontSize: "18px",
          fontWeight: "600",
        },
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
      labels: {
        style: {
          colors: "#5d5d5d",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      type: "text",
      range: undefined,
      categories: priceRange
    },
    yaxis: {
      title: {
        text: 'Profit/Loss',
        style: {
          colors: "#5d5d5d",
          fontSize: "18px",
          fontWeight: "600",
        },
      },
      labels: {
        style: {
          colors: "#5d5d5d",
          fontSize: "12px",
          fontWeight: "500",
        },
        formatter: function (val) {
          return val.toFixed(2);
        }
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
    },
  };

  return (
    <>
      <Header />
      <div className='mx-auto max-w-[100rem] py-7 px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row gap-5'>
          <div className='flex flex-col'>
            <div className="mb-6 grid grid-cols-2 gap-5 xl:grid-cols-2">
              <Widget
                icon={<MdBarChart className="h-7 w-7" />}
                variant="primary"
                title={"Max Profit"}
                subtitle={formatPrice(maxProfit)}
              />
              <Widget
                icon={<MdBarChart className="h-7 w-7" />}
                variant="danger"
                title={"Max Loss"}
                subtitle={formatPrice(maxLoss)}
              />
            </div>
            <Card extra="flex-grow flex-column rounded-[20px]">
              <h2 className="text-xl text-start font-semibold pb-6">Break Even Points</h2>
              <ul role="list" className="divide-y divide-gray-100">
                <li className="flex justify-between gap-x-6 py-5">
                  <p className="text-md leading-4 text-gray-900">Price of Underlying</p>
                  <p className="text-md leading-4 text-gray-900">Profit</p>
                </li>
                {breakevens?.map((breakeven: any, i: number) => (
                  <li key={i} className="flex justify-between gap-x-6 py-5">
                    <p className="text-md font-semibold leading-6 text-gray-900">{formatPrice(breakeven.underlying)}</p>
                    <p className="text-md leading-6 text-gray-900">{formatPrice(breakeven.profit)}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <Card extra="flex-grow flex-column rounded-[20px]">
            <h2 className="text-3xl font-semibold pb-8">Risk & Reward Chart</h2>
            <RiskRewardChart series={payoffs} options={chartOptions} height={520} />
          </Card>
        </div>

      </div>
    </>
  )
}

export default App
