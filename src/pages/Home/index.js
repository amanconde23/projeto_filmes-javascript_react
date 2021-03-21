import React, { Component } from 'react';

import Slider from '../../components/Slider';
import MoviesContainer from '../../components/MoviesContainer';
import SeriesContainer from '../../components/SeriesContainer';
import Footer from '../../components/Footer';

import styles from '../../styles/pages/Home.module.css';
import '../../styles/global.css'

class Home extends Component{
  render(){
    return(
      <div>
        <div className={styles.container}>
          <Slider />
          <MoviesContainer />
          <SeriesContainer />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;