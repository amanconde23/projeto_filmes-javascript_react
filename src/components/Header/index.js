import React, { Component } from 'react';

import styles from '../../styles/components/Header.module.css';

class Header extends Component{
  render(){
    return(
      <header>
        <div className={styles.header}>
          <h1>React Movies</h1>
        </div>
      </header>
    );
  }
}

export default Header;