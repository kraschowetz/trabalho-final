import React from "react";
import '../../Css/Style.css';
import { Link } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import {FaTools, FaRobot, FaVrCardboard  } from "react-icons/fa";
import { FaCodeBranch, FaMeta, FaDownload  } from "react-icons/fa6";

function TI(){

    return(
        <div className="container">
            <div className="header">
                <h1>T.I</h1>
                <div className="header-content">

                    <tooltip title="inicio">
                        <Link to="/">
                            <BiHomeAlt2 size={50} className='header-logo'/>
                        </Link>
                    </tooltip>

                    <tooltip title="automação">
                        <Link to="Automacao">
                            <FaTools size={50} className="header-logo"/>
                        </Link>
                    </tooltip>  

                    <tooltip title="realidade aumentada">
                        <Link to="RA">
                            <FaVrCardboard size={50} className="header-logo"/>
                        </Link>
                    </tooltip>
        
                    <tooltip title="metaverso">
                        <Link to="MetaVerso">
                            <FaMeta size={50} className="header-logo"/>
                        </Link>
                    </tooltip>
                
                    <tooltip title="inteligência artificial">
                        <Link to="ia">
                            <FaRobot size={50} className="header-logo"/>
                        </Link>
                    </tooltip>

                    <tooltip title="machine learning">
                        <Link to="MachineLearning">
                            <FaCodeBranch size={50} className="header-logo"/>
                        </Link>
                    </tooltip>


                </div>
            </div>

            <div className="page-content">

                <div className="box">
                    <h2 className="box-title">MELHOR TRABALHOS DE T.I</h2>
                </div>

                <div className="box">
                    <h2 className="box-title">CIFRA DE CÉZAR</h2>
                    <p className="box-content">
                        foi um trablho legal de fazer. Com ele aprendi a usar char arryas e 'reaprendi' a usar java.
                    </p>
                </div>

                <div className="box">
                    <img src='img/cifra.png' alt='cifra' width='100%'/>
                    <tooltip title="git do projeto">
                        <Link to="https://github.com/kraschowetz/CifradeCaesar" target='blank'>
                            <FaDownload size={50} className='box-logo'/>
                        </Link>
                    </tooltip>
                </div>
            </div>
        </div>
    );
}

export default TI;