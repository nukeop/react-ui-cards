import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import {
  RecipeCard,
  NewsHeaderCard,
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
    </div>
  );
}

render(demo);

if (module.hot) {
  module.hot.accept( () => {
    render(demo);
  });
}
