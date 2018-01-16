import React from 'react';
import classnames from 'classnames';

import GalleryToggle from './GalleryToggle';
import './styles.scss';

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
	 className='product-card-gallery'
	 >
	{
	  photos.map((photo, i) => {
	    return (
	      <div
		 className={classnames('gallery-item', {'active': this.state.activeItem===i})}
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
