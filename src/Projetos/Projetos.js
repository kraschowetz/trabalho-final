import '../Style.css';
import { BiHomeAlt2 } from "react-icons/bi";
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Humanas(){
    return(
        <div className='container'>
            <div className='header'>
                <h1>MEUS PROJETOS</h1>
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
                    <h1 className='box-title'>FRAMEWORK DE JOGOS</h1>
                    <p className='box-content'>
                       foi um framework feita em java para game development. ela não é muito avançada nem otimizada mas
                       foi com ela que aprendi a programar em java e como fazer features como camera, colisão e saves.
                    </p>
                    <p className='box-content'>
                       por ser um projeto antigo eu tenho muitas versões dessa framework, a mais recente delas é uma
                       versão mais leve, feita no vscode como um teste, a principal diferença dela das versões antigas
                       é justamente ela ser mais leve - tanto por ter menos features mas como também por ser levemente
                       mais otimizada. 
                    </p>

                    <tooltip title="download da framework">
                        <Link to="https://github.com/kraschowetz/GameFramework" target='blank'>
                            <FaDownload size={50} className='box-logo'/>
                        </Link>
                    </tooltip>

                </div>

                <div className='box'>
                    <h1 className='box-title'>SAMURANÇA</h1>
                    <p className='box-content'>
                       jogo horrível que fiz para uma game jam em 2022.
                    </p>

                    <tooltip title="download do jogo">
                        <Link to="https://kraschowetz.itch.io/samuranca" target='blank'>
                            <FaDownload size={50} className='box-logo'/>
                        </Link>
                    </tooltip>

                </div>
                
                <div className='box'>
                    <h1 className='box-title'>STEAL THE SCROLL</h1>
                    <p className='box-content'>
                       um dos primeiros jogos que eu fiz por completo e publiquei em alguma plataforma. Esse foi
                       um jogo feito para uma game jam em 2020 e está repleto de bugs e falhas na otimização,
                       principalmente por ter sido o 1° jogo mais elaborado que eu fiz na vida, mas ele serviu
                       como pontapé inicial para que eu aprendesse muito sobre como fazer e publicar um jogo.
                    </p>

                    <tooltip title="download do jogo">
                        <Link to="https://gamejolt.com/games/StealTheScroll/573743" target='blank'>
                            <FaDownload size={50} className='box-logo'/>
                        </Link>
                    </tooltip>

                </div>

            </div>
        </div>
    );
}

export default Humanas;