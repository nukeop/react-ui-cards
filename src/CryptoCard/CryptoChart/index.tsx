import React from 'react';
import { Line } from 'react-chartjs-2';

import config from './config';
import styles from './styles.module.scss';

export type CryptoChartProps = {
  chartColor?: string;
  chartData: number[];
}

const CryptoChart: React.FC<CryptoChartProps> = ({
  chartColor,
  chartData
}) => {
  let datasets = [{
    ...config.datasets,
    data: chartData
  }];

  let data = {
    datasets,
    labels: Object.keys(chartData)
  };

  const dataFun = (canvas: HTMLCanvasElement) => {
    const ctx = canvas?.getContext('2d');
    const gradient = ctx?.createLinearGradient(50, 0, 50, canvas.height * 1.1);
    gradient?.addColorStop(0, 'rgba(236, 240, 241, 0.1)');
    gradient?.addColorStop(1, 'rgba(236, 240, 241, 0)');

    let firstDataset = data.datasets[0];
    firstDataset.borderColor = chartColor ?? firstDataset.borderColor;
    // @ts-ignore
    firstDataset.backgroundColor = gradient;

    return data;
  };

  return (
    <div className={styles['crypto-chart']}>
      <Line
        data={dataFun}
        options={config.options}
        height={128}
      />
    </div>
  );
}

export default CryptoChart;
