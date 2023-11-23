import './Style.css';
import { Link } from 'react-router-dom';
import { FaLastfm, FaJoint } from "react-icons/fa";
import { HiOutlineCode, HiOutlineBookOpen, HiOutlineChartPie, HiOutlineBeaker, HiOutlineLibrary } from "react-icons/hi";
import { FaGamepad } from "react-icons/fa6";

//import {useState} from 'react';


function App() {
  return (
    <div className='container'>
      <div className='header'>
        <h1>HTML</h1>
        <div className='header-content'>

          <tooltip title="Ciências humanas">
            <Link to="Humanas">
              <HiOutlineLibrary size={50} className='header-logo'/>
            </Link>
          </tooltip>
          
          <tooltip title="Ciências da natureza">
            <Link to="Ciencias">
              <HiOutlineBeaker size={50} className='header-logo'/>
            </Link>
          </tooltip>

          <tooltip title="Matemática">
            <Link to="Mat">
              <HiOutlineChartPie size={50} className='header-logo'/>
            </Link>
          </tooltip>

          <tooltip title="Linguagens">
            <HiOutlineBookOpen size={50} className='header-logo'/>
          </tooltip>

          <tooltip title="T.I">
            <Link to='TI'>
              <HiOutlineCode size={50} className='header-logo'/>
            </Link>
          </tooltip>

          <tooltip title="Meus Projetos">
            <Link to='Projetos'>
              <FaGamepad size={50} className='header-logo'/>
            </Link>
          </tooltip>
        </div>
      </div>

      <div className='page-content'>

        <div className='box'>
          <h2 className='box-title'>SOBRE MIM</h2>
          <p className='box-content'>sou Kraschowetz, tenho 17 anos, sou estudante do ensino médio técnico em T.I,
          graduado em nerdolagem, fanboy de JPEGMAFIA, comedor de reboco de parede, amante de pratos plasticos e
          jogador profissional de gamao</p>

          <FaJoint size={100} color='#ecf0fd' />
        </div>
      
        <div className='box'>
          <h2 className='box-title'>HARD SKILLS</h2>
          <ul className='box-content'>
            <li>programação em C#</li>
            <li>programação em JAVA</li>
            <li>programação em JAVASCRIPT, CSS e HTML</li>
            <li>afinidade com desenho</li>
            <li>sei um mínimo de produção músical</li>
          </ul>
        </div>

        <div className='box'>
          <h2 className='box-title'>SOFT SKILLS</h2>
          <ul className='box-content'>
            <li>consigo trabalhar bem com prazos</li>
            <li>sei não morrer</li>
          </ul>
        </div>

        <div className='box'>
          <h2 className='box-title'>REDES SOCIAVEIS</h2>
          <tooltip title='last.fm'>
              <Link to='https://www.last.fm/user/kraschowetz' target='blank'>
                <FaLastfm size={50} className='box-logo'/>
              </Link>
            </tooltip>
        </div>

      </div>
    </div>
  );
}

export default App;
