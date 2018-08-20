import React from 'react'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">Desenvolvido por <a href="https://github.com/ltgouvea/">Lucas Gouvêa</a></p>
        <p className="copyright">&copy; Template: <a href="https://html5up.net">HTML5 UP</a>. Construído com: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: React.PropTypes.bool
}

export default Footer
