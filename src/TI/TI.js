import React from "react";
import '../Style.css';
import { Link } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import {FaTools, FaRobot, FaVrCardboard  } from "react-icons/fa";
import { FaCodeBranch, FaMeta  } from "react-icons/fa6";

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
                        <FaTools size={50} className="header-logo"/>
                    </tooltip>  

                    <tooltip title="realidade aumentada">
                        <FaVrCardboard size={50} className="header-logo"/>
                    </tooltip>
        
                    <tooltip title="metaverso">
                        <FaMeta size={50} className="header-logo"/>
                    </tooltip>
                
                    <tooltip title="inteligência artificial">
                        <FaRobot size={50} className="header-logo"/>
                    </tooltip>

                    <tooltip title="machine learning">
                        <FaCodeBranch size={50} className="header-logo"/>
                    </tooltip>


                </div>
            </div>

            <div className="page-content">

                <div className="box">
                    <h2 className="box-title">MELHORES TRABALHOS DE T.I</h2>
                </div>

                <div className="box">
                    <h2 className="box-title">CIFRA DE CÉZAR</h2>
                    <p className="box-content">
                        foi um trablho legal de fazer. Com ele aprendi a usar char arryas e 'reaprendi' a usar java.
                    </p>
                </div>

                <div className="image-box">
                    <img src='img/Cifra.png' alt='imgg' width='100%' height='100%'></img>
                </div>
                <br/>
                <br/>
                
            </div>
        </div>
    );
}

export default TI;