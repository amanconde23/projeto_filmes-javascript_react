import React, { Component } from 'react';

import styles from '../../styles/components/Footer.module.css';

class Footer extends Component{
  render(){
    return(
      <footer>
        <div className={styles.footer}>
          <p>Desenvolvido por Amanda Martinez</p>
        </div>
      </footer>
    );
  }
}

export default Footer;