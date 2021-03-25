import React, { Component } from 'react';

import strangerThings from '../../assets/images/series/stranger-things.jpg';
import theGoodPlace from '../../assets/images/series/the-good-place.jpg';
import friends from '../../assets/images/series/friends.jpg';
import lucifer from '../../assets/images/series/lucifer.jpg';
import mandalorian from '../../assets/images/series/the-mandalorian.jpg';

import styles from '../../styles/components/SeriesContainer.module.css'
import Footer from '../../components/Footer';

class SerieContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      series: [
        {
          id: 1, 
          name: "Stranger Things", 
          image: strangerThings, 
          description: "Will, um garoto de 12 anos, desaparece em Montauk, Long Island. Enquanto a polícia, família e amigos procuram respostas, eles mergulham em um extraordinário mistério, envolvendo um experimento secreto do governo, forças sobrenaturais e uma garotinha."
        },
        {
          id: 2, 
          name: "The Good Place", 
          image: theGoodPlace, 
          description: "Eleanor Shellstrop (Kristen Bell) está morta. Acontece que, após sua partida, ela foi enviada ao Good Place - ou Lugar Bom -, um lugar de eterna felicidade destinado às pessoas que fizeram o bem durante suas vidas."
        },
        {
          id: 3, 
          name: "Friends", 
          image: friends, 
          description: "Ross, Rachel, Mônica, Chandler, Joey e Phoebe formam um grupo de seis amigos que lutam para se sobressair e progredir na competitiva vida de Manhattan. Seu humor inteligente e apoio mútuo incondicional fazem com sua amizade seja cada vez mais forte, superando assim todos os obstáculos que a vida lhes apresenta."
        },
        {
          id: 4, 
          name: "Lúcifer", 
          image: lucifer, 
          description: "A série se desenvolve ao redor de Lucifer Morningstar, que está entediado e infeliz como o Senhor do Inferno. Ele renuncia seu trono e abandona seu reinado para tirar férias em Los Angeles, onde dá início a uma casa noturna com a ajuda de sua aliada demoníaca, Mazikeen Smith."
        },
        {
          id: 5, 
          name: "The Mandalorian", 
          image: mandalorian, 
          description: "Em The Mandalorian, Din Djarin (Pedro Pascal) é um guerreiro solitário que trabalha como caçador de recompensa. Ele embarca numa jornada pelos territórios esquecidos da galáxia, logo após a queda do Império e antes da criação da temida Primeira Ordem."
        },
      ]
    }
  }

  render(){
    return(
      <div>
        <h1 className={styles.seriesInfoTitle}>Series Synopsis</h1>
        <div className={styles.seriesInfoContainer}>
          {this.state.series.map((item) => {
              return(
                <div
                  key={item.id} 
                  className={styles.serieInfoCard}
                >
                  <h2>{item.name}</h2>
                  <img src={item.image} alt="serie cover" />
                  <p>
                    {item.description}
                  </p>
                </div>
              )
            })
          }
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default SerieContainer;

