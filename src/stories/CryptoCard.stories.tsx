/* eslint-disable jsx-a11y/alt-text */
import CryptoCard from "../CryptoCard";

export default {
    title: "Cards/Crypto card",
    component: CryptoCard,
    parameters: {
        backgrounds: { default: 'dark' }
    }
}

export const Example1 = () => <CryptoCard
    currencyName='Bitcoin'
    currencyPrice='$8850.32'
    icon={<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2000px-Bitcoin.svg.png' />}
    currencyShortName='BTC'
    trend='(8.54%) $563.47'
    trendDirection={1}
    chartData={[9200, 5720, 8100, 6734, 7054, 7832, 6421, 7383, 8697, 8850]}
/>;

export const Example2 = () => <CryptoCard
    currencyName='Ethereum'
    currencyPrice='$766.12'
    icon={<img src='https://maxcdn.icons8.com/Share/icon/color/Logos/ethereum1600.png' />}
    currencyShortName='ETH'
    trend='(7.32%) $14.94'
    trendDirection={1}
    chartData={[760, 500, 800, 670, 820, 620, 796, 766]}
    chartColor='#9b59b6'
/>;

export const Example3 = () => <CryptoCard
    currencyName='Litecoin'
    currencyPrice='$137.92'
    icon={<img src='http://icons.iconarchive.com/icons/blackvariant/button-ui-requests-6/1024/LiteCoin-icon.png' />}
    currencyShortName='LTC'
    trend='(-5.12%) $6.34'
    trendDirection={-1}
    chartData={[90, 120, 115, 85, 75, 92, 70, 101, 111, 137]}
    chartColor='#ecf0f1'
/>;