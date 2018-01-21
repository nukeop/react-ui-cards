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
  RecipeCard
} from '../src';

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
  console.log(RecipeCard);
  return (
    <div>
      <h2>
	User cards
      </h2>
      <div className='card-container'>
	<UserCard
	   cardClass='float'
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
	   cardClass='float'
	   href='https://github.com/nukeop'
	   header='https://i.imgur.com/vRAtM3i.jpg'
	   avatar='https://i.imgur.com/XJxqvsU.jpg'
	   name='Frank Hepsfield'
	   positionName='Software Engineering Manager'
	   />
	<UserCard
	   cardClass='float'
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
      <h2>
	Product cards
      </h2>
      <div className='card-container'>
	<ProductCard
	   photos={[
	     'https://i.imgur.com/jRVDeI8.jpg',
	     'https://i.imgur.com/raPe27t.jpg',
	     'https://i.imgur.com/IpEsYSH.jpg'
	   ]}
	   price='$99'
	   productName='Headphones'
	   description='Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet.'
	   rating={3}
	   url='https://github.com/nukeop'
	   />
	<ProductCard
	   photos={[
	     'https://i.imgur.com/t7DTziH.jpg',
	     'https://i.imgur.com/kA5lx6t.jpg',
	     'https://i.imgur.com/cUsl6Gs.jpg'
	   ]}
	   price='$1.50'
	   productName='Cupcake'
	   description='Nullam velit leo, pulvinar non metus feugiat, pharetra ornare enim. Vivamus ac quam a purus venenatis fringilla.'
	   rating={5}
	   url='https://github.com/nukeop'
	   />
      </div>
      <h2>
	Tagged content cards
      </h2>
      <div className='card-container'>
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
      <div className='card-container'>
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
      <div className='card-container'>
	<RecipeCard
	   href='https://github.com/nekonee'
	   thumbnail='https://i.imgur.com/VkHTicg.jpg'
	   title='Fluffy pancakes'
	   time='0:30'
	   servings='3-5'
	   />
      
	<RecipeCard
	   href='https://github.com/nekonee'
	   thumbnail='https://i.imgur.com/0308iuN.jpg'
	   title='Cupcakes'
	   time='1:30'
	   servings='4-6'
	   />
	
	<RecipeCard
	   href='https://github.com/nekonee'
	   thumbnail='https://i.imgur.com/s9oR6BE.jpg'
	   title='Macarons'
	   time='2:00'
	   servings='7-10'
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
