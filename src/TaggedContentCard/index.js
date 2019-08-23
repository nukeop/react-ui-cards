import React from 'react';
import cx from 'classnames';

import Card from '../Card';
import CardContent from './CardContent';
import CardOverlay from './CardOverlay';
import styles from './styles.scss';

class TaggedContentCard extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let {
      className,
      href,
      thumbnail,
      title,
      description,
      tags,
      ...other
    } = this.props;
    return (
      <a className={styles['card-link']} href={href}>
	      <Card
	        className={cx(
            styles['tagged-content-card'],
            className
          )}
          {...other}
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
