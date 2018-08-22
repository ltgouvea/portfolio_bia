import React from 'react'
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

    window.open('mailto:lucas.fim@gmail.com?subject=Contato Portfolio&body='+formData.message);
  }

  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

	    <article id="portfolio" className={`${this.props.article === 'portfolio' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
				<h2 className="major">Portfolio</h2>
				<span className="image main"> <img src={img_20170731120537}/> </span>
				<span className="image main"> <img src={as_brumas_vinheta_cg2}/>  </span>
				<span className="image main"> <img src={as_brumas_vinheta_cg}/>  </span>
				<span className="image main"> <img src={bia_na_facu2_12_05_14}/>  </span>
				<span className="image main"> <img src={bia_na_facu3_12_05_14}/>  </span>
				<span className="image main"> <img src={capa3}/>  </span>
				<span className="image main"> <img src={chocolate}/>  </span>
				<span className="image main"> <img src={cítrica}/>  </span>
				<span className="image main"> <img src={clique_aki}/>  </span>
				<span className="image main"> <img src={diluna2}/>  </span>
				<span className="image main"> <img src={doc2}/>  </span>
				<span className="image main"> <img src={doc}/>  </span>
				<span className="image main"> <img src={em_produção_chique_demais}/>  </span>
				<span className="image main"> <img src={fotinha_minha_trampano}/>  </span>
				<span className="image main"> <img src={fundoclaro}/>  </span>
				<span className="image main"> <img src={imagem_final}/>  </span>
				<span className="image main"> <img src={img_4120_tentei}/>  </span>
				<span className="image main"> <img src={oficina}/>  </span>
				<span className="image main"> <img src={robes}/>  </span>
				<span className="image main"> <img src={rotoscopia_amanara}/>  </span>
				<span className="image main"> <img src={triagem}/>  </span>
	    {close}
	    </article>

        <article id="sobre" className={`${this.props.article === 'sobre' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Sobre</h2>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="contato" className={`${this.props.article === 'contato' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contato</h2>
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
          <ul className="icons">
            <li><a href="https://behance.net/biadm" className="icon fa-behance"><span className="label">Behance</span></a></li>
            <li><a href="https://facebook.com/beatriz.montanhaur" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://instagram.com/bia_dm" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://youtube.com/user/1biadm" className="icon fa-youtube"><span className="label">Youtube</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
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
