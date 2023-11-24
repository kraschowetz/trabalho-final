import "../../Css/Style.css";
import {Link} from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { TiArrowBackOutline  } from "react-icons/ti";

function Automacao(){
    return(
        <div className="container">

            <div className="header">
                <h1>AUTOMAÇÃO</h1>
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
                    <h2 className="box-title">O QUE É AUTOMAÇÃO?</h2>
                    <p className="box-content">
                        Automação em T.I é a criação de algum software que substitua a intervenção manual.
                        <br/>
                        Am exemplo disso é um bot feito em python que vota em uma pesquisa automaticamente.
                        <br/>
                        um processo de automação pode usar de inteligência artificial para melhorar seu desempenho,
                        por exemplo, para executar uma tarefa mais rápido ou poder atuar em cenários imprevistos.
                    </p>
                    {/*<tooltip title="vídeo">
                        <Link to="https://youtu.be/F0Iby7KCXls?si=cDMbgEwrCBaNGbU1" target="blank">
                            <BiSolidVideos size={50} className="box-logo"/>
                        </Link>
                    </tooltip>*/}
                </div>

            </div>

        </div>            
    );
}

export default Automacao; 