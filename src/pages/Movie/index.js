import React, { Component } from 'react';

import starWarsAscensaoSkywalker from '../../assets/images/movies/star-wars-ascensao-skywalker.jpg';
import starWarsUltimoJedi from '../../assets/images/movies/star-wars-o-ultimo-jedi.jpg';
import animaisFantasticos from '../../assets/images/movies/animais-fantasticos.jpg';
import harryPotterPedraFilosofal from '../../assets/images/movies/harry-potter-a-pedra-filosofal.png';
import soul from '../../assets/images/movies/soul.jpg';

import styles from '../../styles/components/MoviesContainer.module.css';
import Footer from '../../components/Footer';

// import './filme-info.css';

class Movie extends Component{
  constructor(props){
    super(props);
    this.state = {
      movies: [
        {
          id: 1, 
          name: "Star Wars", 
          image: starWarsAscensaoSkywalker, 
          description: "Com o retorno do Imperador Palpatine, a Resistência toma a frente da batalha. Treinando para ser uma completa Jedi, Rey se encontra em conflito com passado e futuro, e teme pelas respostas que pode conseguir com Kylo Ren."
        },
        {
          id: 2, 
          name: "Star Wars", 
          image: starWarsUltimoJedi, 
          description: "A tranquila e solitária vida de Luke Skywalker sofre uma reviravolta quando ele conhece Rey, uma jovem que mostra fortes sinais da Força. O desejo dela de aprender o estilo dos Jedi força Luke a tomar uma decisão que mudará sua vida para sempre. Enquanto isso, Kylo Ren e o General Hux lideram a Primeira Ordem para um ataque total contra Leia e a Resistência pela supremacia da galáxia."
        },
        {
          id: 3, 
          name: "Animais Fantásticos", 
          image: animaisFantasticos, 
          description: "Um excêntrico magizoologista carrega uma maleta cheia de animais mágicos coletados durante suas viagens pelo mundo. As criaturas acabam saindo de sua mala em Nova York, e agora ele precisa usar suas habilidades para capturá-las."
        },
        {
          id: 4, 
          name: "Harry Potter", 
          image: harryPotterPedraFilosofal, 
          description: "Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger."
        },
        {
          id: 5, 
          name: "Soul", 
          image: soul, 
          description: "Joe é um professor de música do ensino médio apaixonado por jazz, cuja vida não foi como ele esperava. Quando ele viaja a uma outra realidade para ajudar outra pessoa a encontrar sua paixão, ele descobre o verdadeiro sentido da vida."
        },
      ]
    }
  }

  render(){
    return(
      <div className="container">
        <h1 className={styles.moviesInfoTitle}>Movies Synopsis</h1>
        <div className={styles.moviesInfoContainer}>
          {this.state.movies.map((item) => {
              return(
                <div
                  key={item.id} 
                  className={styles.movieInfoCard}
                >
                  <h2>{item.name}</h2>
                  <img src={item.image} alt="movie cover" />
                  <p>
                    {item.description}
                  </p>
                </div>
              )
            })
          }
          <Footer />
        </div>
      </div>
    );
  }
}
export default Movie;
