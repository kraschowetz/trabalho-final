import "../../Css/Style.css";
import {Link} from "react-router-dom";
import { BiHomeAlt2, BiSolidVideos } from "react-icons/bi";
import { TiArrowBackOutline  } from "react-icons/ti";

function IA(){
    return(
        <div className="container">

            <div className="header">
                <h1>INTELIGÊNCIA ARTIFICIAL</h1>
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
                    <h2 className="box-title">O QUE É INTELIGÊNCIA ARTIFICIAL?</h2>
                    <p className="box-content">
                        Inteligência artificial é, a grosso modo, um código de computador que exerce automáticamente
                        uma função. Diferente de estruturas de if e else as IAs conseguem lidar com situações que não
                        foram previstas e são fáceis de transportar e modificar.
                        <br/>
                        As IAs são como uma rede de neurônios, que recebem uma entrada de dados, analizam e calculam
                        os dados com base em seu treinamento e depois retornam as ações que devem executar.
                        <br/>
                        Abaixo anexei um vídeo que compara as IAs com estruturas if-else com mais profundidade.
                    </p>
                    <tooltip title="vídeo">
                        <Link to="https://youtu.be/F0Iby7KCXls?si=cDMbgEwrCBaNGbU1" target="blank">
                            <BiSolidVideos size={50} className="box-logo"/>
                        </Link>
                    </tooltip>
                </div>

            </div>

        </div>            
    );
}

export default IA; 