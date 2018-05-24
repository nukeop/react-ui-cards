import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import TitleLine from './TitleLine';
import IconLine from './IconLine';
import CryptoChart from './CryptoChart';

import './styles.scss';

class CryptoCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      currencyName,
      currencyPrice,
      icon,
      currencyShortName,
      trend,
      trendDirection,
      chartColor,
      chartData
    } = this.props;

    return (
      <Card className='crypto-card'>
        <TitleLine
          currencyName={currencyName}
          currencyPrice={currencyPrice}
        />
        <IconLine
          icon={icon}
          currencyShortName={currencyShortName}
          trend={trend}
          trendDirection={trendDirection}
        />

        <CryptoChart
          chartColor={chartColor}
          chartData={chartData}
        />
      </Card>
    );
  }
}

CryptoCard.propTypes = {
  currencyName: PropTypes.string.isRequired,
  currencyPrice: PropTypes.string,
  icon: PropTypes.node,
  currencyShortName: PropTypes.string,
  trend: PropTypes.string,
  trendDirection: PropTypes.oneOf([-1, 0, 1]),
  chartColor: PropTypes.string,
  chartData: PropTypes.array
};

export default CryptoCard;

//Designed by Triyandi Saputra
//https://dribbble.com/shots/4071699-Crypt-App-Dark-Version
