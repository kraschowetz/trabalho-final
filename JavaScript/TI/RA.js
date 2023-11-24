import "../../Css/Style.css";
import {Link} from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { TiArrowBackOutline  } from "react-icons/ti";

function RA(){
    return(
        <div className="container">

            <div className="header">
                <h1>REALIDADE AUMENTADA</h1>
                <div className="header-content">
                    <tooltip title="voltar">
                        <Link to="/TI">
                            <TiArrowBackOutline  size={50} className="header-logo"/>
                        </Link>
                    </tooltip>

                    <tooltip title="inicio">
                        <Link to="/">
                            <BiHomeAlt2 size={50} className="header-logo"/>
                        </Link>
                    </tooltip>
                </div>
            </div>

            <div className="page-content">

                <div className="box">
                    <h2 className="box-title">O QUE É REALIDADE AUMENTADA?</h2>
                    <p className="box-content">
                        Realidade aumentada é quando há uma sobreposição de elementos viruais a nossa
                        visão da vida real, um bom exemplo disso é o jogo "Pokemon GO" onde é possível usar
                        a câmera do seu celular para visualizar algum pokemon como se ele estivesse no mundo
                        real.
                        <br/>   
                        A realidade aumentada tem 3 principais características:
                    </p>
                    <ul className="box-content">
                        <li>Combina elementos virtuais com o ambiente real</li>
                        <li>É interativa e tem processamento em tempo real</li>
                        <li>É renderizada em três dimensões.</li>
                    </ul>
                </div>

                <div className="box">
                    <img src='../img/PokemonRA.png' alt='Realidade aumentada em Pokemon GO'
                    width='50%' height='100%'/>
                </div>

            </div>

        </div>            
    );
}

export default RA; 