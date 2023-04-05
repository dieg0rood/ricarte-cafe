import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="row limite-site">
                    <div className="col-4">
                        <h3 className="footer-title">Contato</h3>
                        <div className="footer-text">(31) 9 9999-9999</div>
                        <div className="footer-text">contato@ricartecoffe.com</div>
                    </div>
                    <div className="col-4">
                        <h3 className="footer-title">Onde Estamos</h3>
                        <div className="footer-text">Rua Qualquer, 111 - Bairro
                            <br />Juazeiro do Norte/CE - CEP 30030-303</div>
                    </div>
                    <div className="col-4">
                        <h3 className="footer-title">Redes Sociais</h3>
                        <div className="footer-social">
                            <div className="icone-social">
                                <FontAwesomeIcon icon={faFacebook} />
                            </div>
                            <div className="icone-social">
                                <FontAwesomeIcon icon={faInstagram} />
                            </div>

                            <div className="icone-social">
                                <FontAwesomeIcon icon={faYoutube} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="assinatura">
                Desenvolvido por Diego Rodrigues - 2022 - Todos os Direitos Reservados
            </div>
        </footer>
    );
}