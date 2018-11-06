import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

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

class Cmodal extends React.Component {
  render() {
    return (
      <div className={this.props.show === false ? 'hidden' : ''}>
        <div className="modal-carousel-container">
          <div className='modal-carousel'>
            <Carousel>
                <div className="image-carousel">
                  <img src={img_20170731120537}/>
                </div>
                <div className="image-carousel">
                  <img src={as_brumas_vinheta_cg2}/>
                </div>
                <div className="image-carousel">
                  <img src={as_brumas_vinheta_cg}/>
                </div>
                <div className="image-carousel">
                  <img src={bia_na_facu2_12_05_14}/>
                </div>
                <div className="image-carousel">
                  <img src={bia_na_facu3_12_05_14}/>
                </div>
                <div className="image-carousel">
                  <img src={capa3}/>
                </div>
                <div className="image-carousel">
                  <img src={chocolate}/>
                </div>
                <div className="image-carousel">
                  <img src={cítrica}/>
                </div>
                <div className="image-carousel">
                  <img src={clique_aki}/>
                </div>
                <div className="image-carousel">
                  <img src={diluna2}/>
                </div>
                <div className="image-carousel">
                  <img src={doc2}/>
                </div>
                <div className="image-carousel">
                  <img src={doc}/>
                </div>
                <div className="image-carousel">
                  <img src={em_produção_chique_demais}/>
                </div>
                <div className="image-carousel">
                  <img src={fundoclaro}/>
                </div>
                <div className="image-carousel">
                  <img src={imagem_final}/>
                </div>
                <div className="image-carousel">
                  <img src={img_4120_tentei}/>
                </div>
                <div className="image-carousel">
                  <img src={oficina}/>
                </div>
                <div className="image-carousel">
                  <img src={robes}/>
                </div>
                <div className="image-carousel">
                  <img src={rotoscopia_amanara}/>
                </div>
                <div className="image-carousel">
                  <img src={triagem}/>
                </div>
                <div className="image-carousel">
                  <img src={triagem}/>
                </div>
            </Carousel>
          </div>
        </div>
      </div>
    )
  }
}

Cmodal.propTypes = {
  route: React.PropTypes.object,
}

export default Cmodal
