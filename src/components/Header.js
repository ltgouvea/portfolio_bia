import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-eye"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Beatriz Montanhaur</h1>
                <p>Animação e Produção Audiovisual</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="../downloads/curriculum.txt" download>Currículo</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('portfolio')}}>Portfolio</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('sobre')}}>Sobre</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contato')}}>Contato</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
