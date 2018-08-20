import React from 'react';


import styles from './styles.scss';

class Info extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let{
      infoFirst,
      infoSecond
    } = this.props;
    return(
      <div className='info-root'>
        
        <div className='first'>
          {infoFirst}
        </div>
        <div className='second'>
          {infoSecond}
        </div>
        
      </div>
    );
  }
};
export default Info;
