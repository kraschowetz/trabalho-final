import "../../Css/Style.css";
import {Link} from "react-router-dom";
import { BiHomeAlt2, BiSolidVideos } from "react-icons/bi";
import { TiArrowBackOutline  } from "react-icons/ti";

function MachineLearning(){
    return(
        <div className="container">

            <div className="header">
                <h1>MACHINE LEARNING</h1>
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
                    <h2 className="box-title">O QUE É MACHINE LEARNING?</h2>
                    <p className="box-content">
                        Machine learning é o processo de aprendizado de uma IA. ele pode ser usado com
                        vários tipos de IA e tem vários métodos de machine learning.
                        <br/>
                        Um dos tipos de Machine learning é o aprendizado por reforço, onde a IA tenta cumprir
                        seu objetivo por tentativa e erro, onde algumas ações são punidas e outras recompensadas.
                        no final de cada geração de teste, as IAs com a maior pontuação (que aumenta conforme suas
                        recompensas) é modificada levemente e colocada para teste novamente.
                        <br/>
                        O machine learning permite a criação de IAs cada vez melhores em cumprir sua função de forma
                        automática, ja que o que controla as punições, recompensas e as gerações é um ambiente virtual.
                        <br/>
                        Abaixo anexei um canal do Youtube, foi com ele que conheci o machine learning e acho que os 
                        vídeos dele são uma boa representação de como esse método funciona.
                    </p>
                    <tooltip title="canal">
                            <Link to="https://youtu.be/NZlIYr1slAk?si=vcfq0zUpsi1n0DHv" target="blank">
                                <BiSolidVideos size={50} className="box-logo"/>
                            </Link>
                    </tooltip>
                </div>

            </div>

        </div>            
    );
}

export default MachineLearning; 