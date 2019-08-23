import React from 'react';
import cx from 'classnames';

import GalleryToggle from './GalleryToggle';
import styles from './styles.scss';

class ProductCardGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 0
    };
  }

  rotateRight() {
    let n = this.props.photos.length;
    this.setState({
      activeItem: (((this.state.activeItem+1)%n)+n)%n
    });
  }

  rotateLeft() {
    let n = this.props.photos.length;
    this.setState({
      activeItem: (((this.state.activeItem-1)%n)+n)%n
    });
  }

  render() {
    let {
      photos
    } = this.props;
    return (
      <div
	      className={styles['product-card-gallery']}
	 >
	{
	  photos.map((photo, i) => {
	    return (
	      <div
		      className={cx(
            styles['gallery-item'],
            {[`${styles['active']}`]: this.state.activeItem===i}
          )}
		 style={{
		   backgroundImage: `url(${photo})`
		 }}
		 />
	    );
	  })
	}
     <GalleryToggle
       icon='>'
       action={this.rotateRight.bind(this)}
       right
      />
     <GalleryToggle
       icon='<'
       action={this.rotateLeft.bind(this)}
       left
      />
      </div>
    );
  }
}

export default ProductCardGallery;
