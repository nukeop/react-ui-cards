import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import {
  UserCard,
  ProductCard,
  TaggedContentCard,
  FlippingCard,
  FlippingCardFront,
  FlippingCardBack,
  RecipeCard,
  NewsHeaderCard,
  CryptoCard,
  PaymentCard
} from '../src';

import styles from './styles.scss';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
}

const demo = () => {
  return (
    <div>
      <h2>
        Links
      </h2>

      <div className={styles.links}>
        <a href='https://www.npmjs.com/package/react-ui-cards'>npm</a> |
        <a href='https://github.com/nukeop/react-ui-cards'>Github</a>
      </div>
      <h2>
        Tagged content cards
      </h2>
      <div className={styles['card-container']}>
        <TaggedContentCard
          href='https://github.com/nukeop'
          thumbnail='https://i.imgur.com/yCch7GN.jpg'
          title='Cheesecake'
          description='a cake with raspberries'
          tags={[
            'food',
            'cake',
            'fruits'
          ]}
        />
        <TaggedContentCard
          href='https://github.com/nukeop'
          thumbnail='https://i.imgur.com/57I3RAq.jpg'
          title='Cupcakes'
          description='a bite-sized cake'
          tags={[
            'food',
            'cake',
            'icing'
          ]}
        />
        <TaggedContentCard
          href='https://github.com/nukeop'
          thumbnail='https://i.imgur.com/H0f0R6p.jpg'
          title='Burger'
          description='the cornerstone of every nutritious breakfast'
          tags={[
            'food',
            'sandwich',
            'meat'
          ]}
        />
      </div>
      <h2>
        Flipping cards
      </h2>
      <div className={styles['card-container']}>
        <FlippingCard>
          <FlippingCardBack>
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundImage: 'url(https://i.imgur.com/wjbYGNv.jpg)'
              }}>
            </div>
          </FlippingCardBack>
          <FlippingCardFront>
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundImage: 'url(https://i.imgur.com/3sKjY8V.jpg)'
              }}>
            </div>
          </FlippingCardFront>
        </FlippingCard>
        <FlippingCard>
          <FlippingCardBack>
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundImage: 'url(https://i.imgur.com/m0GnZH3.jpg)'
              }}>
            </div>
          </FlippingCardBack>
          <FlippingCardFront>
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundImage: 'url(https://i.imgur.com/E1jz6WQ.jpg)'
              }}>
            </div>
          </FlippingCardFront>
        </FlippingCard>
        <FlippingCard>
          <FlippingCardBack>
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundImage: 'url(https://i.imgur.com/1abAoUz.jpg)'
              }}>
            </div>
          </FlippingCardBack>
          <FlippingCardFront>
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundImage: 'url(https://i.imgur.com/UjbK2Wb.png)'
              }}>
            </div>
          </FlippingCardFront>
        </FlippingCard>
      </div>

      <h2>
        Recipe Cards
      </h2>
      <div className={styles['card-container']}>
        <RecipeCard
          href='https://github.com/nekonee'
          thumbnail='https://i.imgur.com/VkHTicg.jpg'
          title='Fluffy pancakes'
          time='0:30'
          servings='3-5'
          likeCallback={() => alert('You added Fluffy pancakes to favourites')}
        />

        <RecipeCard
          href='https://github.com/nekonee'
          thumbnail='https://i.imgur.com/0308iuN.jpg'
          title='Cupcakes'
          time='1:30'
          servings='4-6'
          likeCallback={() => alert('You added Cupcakes to favourites')}
        />

        <RecipeCard
          href='https://github.com/nekonee'
          thumbnail='https://i.imgur.com/s9oR6BE.jpg'
          title='Macarons'
          time='2:00'
          servings='7-10'
          likeCallback={() => alert('You added Macarons to favourites')}
        />
      </div>

      <h2>
        News headers cards
      </h2>
      <div className={styles['card-container']}>
        <NewsHeaderCard
          href='https://github.com/nekonee'
          thumbnail='https://i.imgur.com/rLFk5nd.jpg'
          title='Polish mountaineers on the top'
          author='Daily Sport'
          date='Feb 2, 2018'
          tags={['nature', 'photo', () => (<i>component</i>)]}
        />
        <NewsHeaderCard
          href='https://github.com/nekonee'
          thumbnail='https://i.imgur.com/1fk52PJ.jpg'
          title='Most poisonous dishes you must avoid'
          author='Daily Health'
          date='Jan 2, 2018'
        />
        <NewsHeaderCard
          href='https://github.com/nekonee'
          thumbnail='https://i.imgur.com/n5Wg2Po.jpg'
          title='Cool looking test tubes'
          author='Daily Science'
          date='Mar 2, 2018'
        />
      </div>

      <h2>
        Cryptocurrency cards
      </h2>
      <div className={styles['card-container']} style={{background: 'linear-gradient(to top, #141e30, #243b55)', padding: '4rem 1rem'}}>
        <CryptoCard
          currencyName='Bitcoin'
          currencyPrice='$8850.32'
          icon={<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2000px-Bitcoin.svg.png'/>}
          currencyShortName='BTC'
          trend='(8.54%) $563.47'
          trendDirection={1}
          chartData={[9200, 5720, 8100, 6734, 7054, 7832, 6421, 7383, 8697, 8850]}
        />

        <CryptoCard
          currencyName='Ethereum'
          currencyPrice='$766.12'
          icon={<img src='https://maxcdn.icons8.com/Share/icon/color/Logos/ethereum1600.png'/>}
          currencyShortName='ETH'
          trend='(7.32%) $14.94'
          trendDirection={1}
          chartData={[760, 500, 800, 670, 820, 620, 796, 766]}
          chartColor='#9b59b6'
        />

        <CryptoCard
          currencyName='Litecoin'
          currencyPrice='$137.92'
          icon={<img src='http://icons.iconarchive.com/icons/blackvariant/button-ui-requests-6/1024/LiteCoin-icon.png'/>}
          currencyShortName='LTC'
          trend='(-5.12%) $6.34'
          trendDirection={-1}
          chartData={[90, 120, 115, 85, 75, 92, 70, 101, 111, 137]}
          chartColor='#ecf0f1'
        />
      </div>

      <h2>Payment cards</h2>
      <div className={styles['card-container']} style={{padding: '3rem 1rem 6rem'}}>
        <PaymentCard
          issuerIcon='https://i.imgur.com/MulWZzk.png'
          backgroundPattern='spiral'
          number='4445 8509 0753 1365'
          date='12/18'
          name='Jean Pierre Polnareff'
          cvv='213'
        />
        <PaymentCard
          background='linear-gradient(135deg, #00b4db, #0083b0)'
          issuerIcon='https://i.imgur.com/31vser1g.png'
          number='5458 8074 7691 1254'
          date='05/20'
          name='Joseph Joestar'
          cvv='714'
        />
        <PaymentCard
          background='linear-gradient( 135deg, #11998e, #38ef7d)'
          backgroundPattern='triangles'
          issuerIcon='https://i.imgur.com/CRdoJbX.png'
          number='3421 7270 0864 956'
          date='02/22'
          name='Jotaro Kujo'
          cvv='880'
        />
      </div>    
    </div>
  );
}

render(demo);

if (module.hot) {
  module.hot.accept( () => {
    render(demo);
  });
}
