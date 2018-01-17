import React from 'react';

import Card from '../Card';
import CardContent from './CardContent';
import CardOverlay from './CardOverlay';
import './styles.scss';

class TaggedContentCard extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let {
      href,
      thumbnail,
      title,
      description,
      tags
    } = this.props;
    return (
      <a className='card-link' href={href}>
	<Card
	   className='tagged-content-card'
	   >
          <CardOverlay
	     thumbnail={thumbnail}
	     />
	  <CardContent
	     thumbnail={thumbnail}
	     title={title}
	     description={description}
	     tags={tags}
	     />
	</Card>
      </a>
    );
  }
}

export default TaggedContentCard;
