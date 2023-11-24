import "../../Css/Style.css";
import {Link} from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { TiArrowBackOutline  } from "react-icons/ti";

function MetaVerso(){
    return(
        <div className="container">

            <div className="header">
                <h1>METAVERSO</h1>
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
                    <h2 className="box-title">O QUE É METAVERSO?</h2>
                    <p className="box-content">
                        Metaverso é um tipo de mundo virtual que tenta simular ou replicar a realidade com
                        elementos virtuais. O metaverso é um espaço compartilhado, descentralizado e  virtual 
                        que usa da soma de técnologias como realidade virtual, realidade aumentada e internet.
                    </p>
                </div>

                <div className="box">
                    <img src='../img/Meta.png' alt='Mark Zuckerberg no metaverso' width='100%'/>
                </div>

            </div>

        </div>            
    );
}

export default MetaVerso; 