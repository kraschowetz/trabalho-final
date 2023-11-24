import "../../Css/Style.css";
import {Link} from "react-router-dom";
import { BiHomeAlt2, BiBookAlt  } from "react-icons/bi"; 

function Linguagens(){

    return(
        <div className="container">
            <div className="header">
                <h1>LINGUAGENS</h1>
                <div className="header-content">
                    <tooltip title="inicio">
                        <Link to="/">
                            <BiHomeAlt2 size={50} className="header-logo"/>
                        </Link>
                    </tooltip>
                </div>
            </div>

            <div className="page-content">

                <div className="box">
                    <h2 className="box-title">MELHOR TRABALHO DE LINGUAGENS</h2>
                </div>

                <div className="box">
                    <h2 className="box-title">LIVRO</h2>

                    <p className="box-content">
                        Esse trabalho foi um livro com minicontos sobre um tema em comum, o do meu grupo foi o tema 
                        "Violência". Foi um trabalho rápido mas divertido de fazer, principalmente fazer o visual do
                        livro.
                    </p>
                </div>

                <div className="box">
                    <img src="img/Violencia.png" alt="violência" width="100%"/>

                    <tooltip title="livro">
                        <Link to="https://www.canva.com/design/DAF0YPDFlHs/OcTpWKtqdR8nx25fIY0Zsg/view?utm_content=DAF0YPDFlHs&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="blank">
                            <BiBookAlt size={50} className="box-logo"/>
                        </Link>
                    </tooltip>
                </div>

            </div>
        </div>
    );
}

export default Linguagens;