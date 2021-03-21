import React, { Component } from 'react';

import starWarsAscensaoSkywalker from '../../assets/images/movies/star-wars-ascensao-skywalker.jpg';
import strangerThings from '../../assets/images/series/stranger-things.jpg';
import animaisFantasticos from '../../assets/images/movies/animais-fantasticos.jpg';
import soul from '../../assets/images/movies/soul.jpg';

import '../../styles/components/Slider.css';

class Slider extends Component{
  constructor(props){
    super(props);
    this.setState = []
    this.slider = this.slider.bind(this);
  }

  componentDidMount(){
    this.slider();
  }

  slider(){
    var slideIndex = 0;
    showSlides();

    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 4000); //
    }
  }
     
  render(){
    return(
      <div>
        <div className="slideshow-container">
            <div className="mySlides fade">
              <img 
                className="img-slider"
                src={strangerThings}
                alt="movie cover" 
              />
              <p className="text">Stranger Things</p>
            </div>
            <div className="mySlides fade">
              <img 
                className="img-slider" 
                src={starWarsAscensaoSkywalker} 
                alt="movie cover" 
              />
              <p className="text">Star Wars: Ascensão de Skywalker</p>
            </div>
            <div className="mySlides fade">
              <img 
                className="img-slider" 
                src={animaisFantasticos} 
                alt="movie cover" 
              />
              <p className="text">Animais Fantásticos e Onde Habitam</p>
            </div>
            <div className="mySlides fade">
              <img 
                className="img-slider" 
                src={soul} 
                alt="movie cover" 
              />
              <p className="text">Soul</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Slider;

