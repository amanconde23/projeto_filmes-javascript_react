import React, { Component } from 'react';

import styles from '../../styles/components/Footer.module.css';

class Footer extends Component{
  render(){
    return(
      <div className={styles.footer}>
        <p>Developed by Amanda Martinez</p>
      </div>
    );
  }
}

export default Footer;