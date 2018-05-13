import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import _ from 'lodash';

import config from './config';
import styles from './styles.scss';

class CryptoChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      chartColor,
      chartData
    } = this.props;

    let datasets = [
      Object.assign({},
        config.datasets
      )
    ];
    _.head(datasets).data = chartData;

    let data = {
      datasets,
      labels: Object.keys(chartData)
    };

    const dataFun = canvas => {
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createLinearGradient(50, 0, 50, canvas.height*1.1);
      gradient.addColorStop(0, 'rgba(236, 240, 241, 0.1)');
      gradient.addColorStop(1, 'rgba(236, 240, 241, 0)');

      let firstDataset = _.head(data.datasets);
      firstDataset.borderColor = chartColor || firstDataset.borderColor;
      firstDataset.backgroundColor = gradient;

      return data;
    };

    return (
      <div className="crypto-chart">
        <Line
          data={dataFun}
          options={config.options}
          height={128}
        />
      </div>
    );
  }
}

CryptoChart.propTypes = {
  chartColor: PropTypes.string,
  chartData: PropTypes.array
};

export default CryptoChart;
