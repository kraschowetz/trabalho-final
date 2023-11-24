import '../../Css/Style.css';
import { BiHomeAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";

function Humanas(){
    return(
        <div className='container'>
            <div className='header'>
                <h1>CIÊNCIAS HUMANAS</h1>
                <div className='header-content'>
                    <tooltip title="inicio">
                        <Link to="/">
                            <BiHomeAlt2 size={50} className='header-logo'/>
                        </Link>
                    </tooltip>
                </div>
            </div>

            <div className='page-content'>
                
                <div className='box'>
                    <h2 className="box-title">MELHOR TRABALHO DE HUMANAS</h2>
                </div> 

                <div className='box'>
                    <h1 className='box-title'>UBERIZAÇÃO</h1>
                    <p className='box-content'>
                        esse foi um vídeo feito no ano passado. acho q é o meu melhor trabalho de 
                        humans pois foi o único que fez 3 pessoas acharem que estava desmaiando durante
                        sua gravação.
                    </p>
                </div>

                <div className='box'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/SuRT7QFJKeA?si=Vjh4yZld9bmp9Z4F" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
                    web-share" allowfullscreen></iframe>
                </div>   
            </div>
        </div>
    );
}

export default Humanas;