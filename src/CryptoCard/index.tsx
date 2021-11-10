import React from 'react';
import cx from 'classnames';

import Card from '../Card';
import TitleLine, { TitleLineProps } from './TitleLine';
import IconLine, { IconLineProps } from './IconLine';
import CryptoChart, { CryptoChartProps } from './CryptoChart';

import styles from './styles.module.scss';

export type CryptoCardProps = {
  className?: string;
  currencyName: TitleLineProps['currencyName'];
  currencyPrice: TitleLineProps['currencyPrice'];
  icon: IconLineProps['icon'];
  currencyShortName: IconLineProps['currencyShortName'];
  trend: IconLineProps['trend'];
  trendDirection: IconLineProps['trendDirection'];
  chartColor?: CryptoChartProps['chartColor'];
  chartData: CryptoChartProps['chartData'];
};

const CryptoCard: React.FC<CryptoCardProps> = ({
  className,
  currencyName,
  currencyPrice,
  icon,
  currencyShortName,
  trend,
  trendDirection,
  chartColor,
  chartData,
  ...rest
}) => (
  <Card className={cx(
    styles['crypto-card'],
    className
  )}
    {...rest}
  >
    <TitleLine
      currencyName={currencyName}
      currencyPrice={currencyPrice} />
    <IconLine
      icon={icon}
      currencyShortName={currencyShortName}
      trend={trend}
      trendDirection={trendDirection} />

    <CryptoChart
      chartColor={chartColor}
      chartData={chartData} />
  </Card>
)

export default CryptoCard;

//Designed by Triyandi Saputra
//https://dribbble.com/shots/4071699-Crypt-App-Dark-Version
