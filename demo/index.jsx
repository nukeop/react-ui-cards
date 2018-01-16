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
      <h2>
	User cards
      </h2>
      <div className="card-container">
	<UserCard
	   header='https://i.imgur.com/w5tX1Pn.jpg'
	   avatar='https://i.imgur.com/uDYejhJ.jpg'
	   name='Justin Case'
	   positionName='Software Developer'
	   stats={[
	     {
	       name: 'followers',
	       value: 21
	     },
	     {
	       name: 'following',
	       value: 37
	     },
	     {
	       name: 'posts',
	       value: 117
	     }
	   ]}
	   />
	<UserCard
	   href='https://github.com/nukeop'
	   header='https://i.imgur.com/vRAtM3i.jpg'
	   avatar='https://i.imgur.com/XJxqvsU.jpg'
	   name='Frank Hepsfield'
	   positionName='Software Engineering Manager'
	   />
	<UserCard
	   href='https://github.com/nukeop'
	   header='https://i.imgur.com/p5yXGQk.jpg'
	   avatar='https://i.imgur.com/kFkyYkZ.jpg'
	   name='Joseph Cheps'
	   positionName='Firmware Engineer'
	   stats={[
	     {
	       name: 'commits',
	       value: 365
	     },
	     {
	       name: 'stars',
	       value: 110
	     },
	     {
	       name: 'repositories',
	       value: 54
	     }
	   ]}
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
