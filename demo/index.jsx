import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';

import UserCard from '../src/UserCard';

import './styles.scss';

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
      <div className="user-card-container">
	<UserCard
	  header='https://i.imgur.com/w5tX1Pn.jpg'
	  avatar='https://i.imgur.com/uDYejhJ.jpg'
	  name='Johnny Blade'
	  positionName='Community Manager'
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
