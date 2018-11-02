import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Link from 'gatsby-link'

import img_20170731120537 from '../images/portfolio/20170731_120537.jpg'
import as_brumas_vinheta_cg2 from '../images/portfolio/as_brumas_vinheta_cg2.png'
import as_brumas_vinheta_cg from '../images/portfolio/as_brumas_vinheta_cg.png'
import bia_na_facu2_12_05_14 from '../images/portfolio/bia_na_facu2_12_05_14.jpg'
import bia_na_facu3_12_05_14 from '../images/portfolio/bia_na_facu3_12_05_14.jpg'
import capa3 from '../images/portfolio/capa3.jpg'
import chocolate from '../images/portfolio/chocolate.png'
import cítrica from '../images/portfolio/cítrica.png'
import clique_aki from '../images/portfolio/clique_aki.png'
import diluna2 from '../images/portfolio/diluna2.png'
import doc2 from '../images/portfolio/doc2.jpg'
import doc from '../images/portfolio/doc.jpg'
import em_produção_chique_demais from '../images/portfolio/em_produção_chique_demais.jpg'
import fotinha_minha_trampano from '../images/portfolio/fotinha_minha_trampano.jpg'
import fundoclaro from '../images/portfolio/fundoclaro.png'
import imagem_final from '../images/portfolio/imagem_final.png'
import img_4120_tentei from '../images/portfolio/img_4120_tentei.png'
import oficina from '../images/portfolio/oficina.jpg'
import robes from '../images/portfolio/robes.png'
import rotoscopia_amanara from '../images/portfolio/rotoscopia_amanara.png'
import triagem from '../images/portfolio/triagem.jpg'

class Main extends React.Component {

  handleSubmit(event) {
    let rawData = event.target.elements;
    let formData = {
      'name': rawData.name.value,
      'email': rawData.email.value,
      'message': rawData.message.value,
    };

    window.open('mailto:beatrizmontanhaur@gmail.com?subject=Contato Portfolio&body='+formData.message);
  }

  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

      <article id="portfolio" className={`${this.props.article === 'portfolio' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">Portfolio</h2>
        <div className="albums-container">
          <div className="image-card">
              <span className="image main album-container"> <a href="#"><img src={img_20170731120537}/></a> </span>
          </div>
          <div className="image-card">
              <span className="image main album-container"> <a href="#"><img src={as_brumas_vinheta_cg2}/></a>  </span>
          </div>
          <div className="image-card">
              <span className="image main album-container"> <a href="#"><img src={as_brumas_vinheta_cg}/></a>  </span>
          </div>
          <div className="image-card">
              <span className="image main album-container"> <a href="#"><img src={bia_na_facu2_12_05_14}/></a>  </span>
          </div>
          <div className="image-card">
              <span className="image main album-container"> <a href="#"><img src={bia_na_facu3_12_05_14}/></a>  </span>
          </div>
          <div className="image-card">
              <span className="image main album-container"> <a href="#"><img src={capa3}/></a>  </span>
          </div>
          <div className="image-card">
              <span className="image main album-container"> <a href="#"><img src={chocolate}/></a>  </span>
          </div>
          <div className="image-card">
              <span className="image main album-container"> <a href="#"><img src={cítrica}/></a>  </span>
          </div>
          <div className="image-card">
              <span className="image main album-container"> <a href="#"><img src={clique_aki}/></a>  </span>
          </div>
          <div className="image-card">
              <span className="image main album-container"> <a href="#"><img src={diluna2}/></a>  </span>
          </div>
          <div className="image-card">
              <span className="image main album-container"> <a href="#"><img src={doc2}/></a>  </span>
          </div>
          <div className="image-card">
              <span className="image main album-container"> <a href="#"><img src={doc}/></a>  </span>
          </div>
          <div className="image-card">
              <span className="image main album-container"> <a href="#"><img src={em_produção_chique_demais}/></a>  </span>
          </div>
          <div className="image-card">
              <span className="image main album-container"> <a href="#"><img src={fundoclaro}/></a>  </span>
          </div>
          <div className="image-card">
              <span className="image main album-container"> <a href="#"><img src={imagem_final}/></a>  </span>
          </div>
          <div className="image-card">
              <span className="image main album-container"> <a href="#"><img src={img_4120_tentei}/></a>  </span>
          </div>
          <div className="image-card">
              <span className="image main album-container"> <a href="#"><img src={oficina}/></a>  </span>
          </div>
          <div className="image-card">
              <span className="image main album-container"> <a href="#"><img src={robes}/></a>  </span>
          </div>
          <div className="image-card">
              <span className="image main album-container"> <a href="#"><img src={rotoscopia_amanara}/></a>  </span>
          </div>
          <div className="image-card">
              <span className="image main album-container"> <a href="#"><img src={triagem}/></a>  </span>
          </div>
          <div className="image-card">
              <span className="image main album-container"> <a href="#"><img src={triagem}/></a>  </span>
          </div>
        </div>
      {close}
      </article>

        <article id="videos" className={`${this.props.article === 'videos' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Videos</h2>
          <div className="videos-container">
            <p className="video-description">Lyric Video da música Goodbye - Lysergic Thoughts (2017).  Stop motion em massinha, criação, storyboard, animação e composição final</p>
            <iframe width="1000" height="720" src="https://www.youtube.com/embed/fQMHfgPFcsw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <p className="video-description">Realização do evento “CineRecreio” oficinas de animação para o CEVAC (Centro de Valorização da Criança) da cidade de Bauru (2017)</p>
            <iframe width="1000" height="720" src="https://www.youtube.com/embed/5YxSUv8Xscs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <p className="video-description">Amanara (2016). Roteiro e Captação de Som</p>
            <iframe width="1000" height="720" src="https://www.youtube.com/embed/417ZGRfgaZk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <p className="video-description">Amanara (2016). Rotoscopia feita no photoshop</p>
            <iframe width="1000" height="720" src="https://www.youtube.com/embed/nnTOXRDJ15g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <p className="video-description">Cítrica (2017). Captação de áudio e câmera adicional</p>
            <iframe src="https://player.vimeo.com/video/208545785" width="1000" height="720" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            <p className="video-description">Documentário A Terra é Nossa! (2015). Operação de câmera</p>
            <iframe width="1000" height="720" src="https://www.youtube.com/embed/es1gzJIcjkk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <p className="video-description">Chocolate (2014). Roteiro e Direção</p>
            <iframe width="1000" height="720" src="https://www.youtube.com/embed/wenIV4Ht_zk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
          {close}
        </article>

        <article id="sobre" className={`${this.props.article === 'sobre' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Sobre</h2>
            <div className="about-container">
                <span> <img className="image small" src={fotinha_minha_trampano}/>  </span>
                <p className="bio text-right">Formada em <strong>Comunicação Social - Radialismo </strong>pela UNESP de Bauru. Participei do projeto de extensão Panorama Unesp como editora de áudio e durante a graduação tive contato com diversas áreas da produção audiovisual como: criação de roteiro, direção, captação de áudio, produção e edição de curtas-metragens e programas de tv, período em que também explorei técnicas de animação mais tradicionais como Stop Motion e Rotoscopia. Experiência em produção de videoclipes e atualmente trabalho como freelancer com animação 2D.</p>
            </div>
          {close}
        </article>

        <article id="contato" className={`${this.props.article === 'contato' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contato</h2>
          <ul className="icons">
            <li><a href="https://behance.net/biadm" className="icon fa-behance"><span className="label">Behance</span></a></li>
            <li><a href="https://facebook.com/beatriz.montanhaur" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://instagram.com/bia_dm" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://youtube.com/user/1biadm" className="icon fa-youtube"><span className="label">Youtube</span></a></li>
            <li><a href="https://www.linkedin.com/in/beatriz-montanhaur-bb2397112/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
          </ul>
          <form onSubmit={this.handleSubmit}>
            <div className="field half first">
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Mensagem</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Enviar" className="special" /></li>
              <li><input type="reset" value="Limpar" /></li>
            </ul>
          </form>
          {close}
        </article>
      </div>
    )
    // <Carousel>
    //     <div className="image-card">
    //       <img src={img_20170731120537}/>
    //     </div>
    //     <div className="image-card">
    //       <img src={as_brumas_vinheta_cg2}/>
    //     </div>
    //     <div className="image-card">
    //       <img src={as_brumas_vinheta_cg}/>
    //     </div>
    //     <div className="image-card">
    //       <img src={bia_na_facu2_12_05_14}/>
    //     </div>
    //     <div className="image-card">
    //       <img src={bia_na_facu3_12_05_14}/>
    //     </div>
    //     <div className="image-card">
    //       <img src={capa3}/>
    //     </div>
    //     <div className="image-card">
    //       <img src={chocolate}/>
    //     </div>
    //     <div className="image-card">
    //       <img src={cítrica}/>
    //     </div>
    //     <div className="image-card">
    //       <img src={clique_aki}/>
    //     </div>
    //     <div className="image-card">
    //       <img src={diluna2}/>
    //     </div>
    //     <div className="image-card">
    //       <img src={doc2}/>
    //     </div>
    //     <div className="image-card">
    //       <img src={doc}/>
    //     </div>
    //     <div className="image-card">
    //       <img src={em_produção_chique_demais}/>
    //     </div>
    //     <div className="image-card">
    //       <img src={fundoclaro}/>
    //     </div>
    //     <div className="image-card">
    //       <img src={imagem_final}/>
    //     </div>
    //     <div className="image-card">
    //       <img src={img_4120_tentei}/>
    //     </div>
    //     <div className="image-card">
    //       <img src={oficina}/>
    //     </div>
    //     <div className="image-card">
    //       <img src={robes}/>
    //     </div>
    //     <div className="image-card">
    //       <img src={rotoscopia_amanara}/>
    //     </div>
    //     <div className="image-card">
    //       <img src={triagem}/>
    //     </div>
    //     <div className="image-card">
    //       <img src={triagem}/>
    //     </div>
    // </Carousel>
    // ReactDOM.render(<Carousel />, document.querySelector('carousel'));
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main
