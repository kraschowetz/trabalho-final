import React from "react";
import '../../Css/Style.css';
import { BiHomeAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";

function Ciencias(){
    return(
        <div className="container">
            <div className="header">
                <h1>MATEMÁTICA</h1>
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
                    <h2 className="box-title">MELHOR TRABALHO DE MATEMÁTICA</h2>
                </div>

                <div className="box">
                    <h2 className="box-title">ESTATISTICA</h2>
                    <p className="box-content">
                        Foi um trabalho recente, tivemos que recolher dados e fazer uma pesquisa de estatistica sobre
                        um tema livre. O tema escolhido foi: dupla jornada de trabalho feminina.
                        <br/>
                        O que mais me mercou nesse trabalho foi o fato de que ele preveu o tema da redação do ENEM.
                        Na mesma semana que ele foi apresentado seu tema caiu na redação do ENEM.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Ciencias;