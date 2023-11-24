import React from "react";
import '../../Css/Style.css';
import { BiHomeAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";

function Ciencias(){
    return(
        <div className="container">
            <div className="header">
                <h1>CIÊNCIAS DA NATUREZA</h1>
                <div className="header-content">

                    <tooltip title="inicio">
                        <Link to="/">
                            <BiHomeAlt2 size={50} className='header-logo'/>
                        </Link>
                    </tooltip>

                </div>
            </div>

            <div className="page-content">

                <div className="box">
                    <h2 className="box-title">MELHOR TRABALHO DE CIÊNCIAS</h2>
                </div>

                <div className="box">
                    <h2 className="box-title">JOGO DA EVOLUÇÃO</h2>
                    <p className="box-content">
                        Foi um trabalho mais elaborado: para representar a teoria da vida à base de silicio
                        fiz um jogo que mostra o processo de criação da vida à base de silicio em um outro planeta.
                    </p>
                </div>

                <div className="box">
                    <iframe title='silicon-rush'id='webgl_iframe' frameborder="0" allow="autoplay; fullscreen; vr" allowfullscreen="" allowvr=""
                    mozallowfullscreen="true" src="https://play.unity.com/webgl/5a56cb8b-09da-463c-aa45-063cba5b8174?screenshot=false&embedType=embed"  width="100%"
                    height="640" onmousewheel="" webkitallowfullscreen="true"></iframe>
                </div>        
            </div>
        </div>
    );
}

export default Ciencias;