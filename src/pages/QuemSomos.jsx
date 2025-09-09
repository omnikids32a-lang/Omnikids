import "../csss/QuemSomos.css";
import linkedinIcon from "../img/linkedin.png"; 
import githubIcon from "../img/github.png";     
import samanthaImg from "../img/samantha.png";
import luizaImg from "../img/luiza.png";
import murilloImg from '../img/murillo.png';
import rheuelImg from "../img/rheuel.png";
import kessyaImg from "../img/kessya.png";
import kdl from "../img/kid-left.png";
import kdr from "../img/kid-right.png";
import Header from "./Header";


function QuemSomos() {
  return (
    <>
    <Header/>
    
    <main className="quem-somos">
      <h1>QUEM SOMOS</h1>
      <p>Somos uma empresa dedicada a ajudar crianças.</p>


      <div className="pt1">
      <div className="qm-s">
        <img src={samanthaImg} alt="imagem do projeto"/>

        <h2>Samantha Santos</h2>

         <a a href="https://www.linkedin.com/in/samantha-ara%C3%BAjo-14ab10221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="imagem do projeto"/></a>
        <a a href="https://github.com/samkkkjj" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="imagem do projeto"/></a>
      </div>

       <div className="qm-s">
        <img src={luizaImg} alt="imagem do projeto"/>

        <h2>Luiza Guimarães</h2>

         <a a href="https://www.linkedin.com/in/luiza-guimar%C3%A3es-523810299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="imagem do projeto"/></a>
        <a a href="https://github.com/luiza945" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="imagem do projeto"/></a>
      </div>

       <div className="qm-s">
        <img src={rheuelImg} alt="imagem do projeto"/>

        <h2>Rheuel Banqueri</h2>

         <a a href="https://www.linkedin.com/in/rheuelbanqueri?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="imagem do projeto"/></a>
        <a a href="https://github.com/Rheuel" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="imagem do projeto"/></a>
      </div>
      </div>



       <div className="pt2">
      <div className="qm-s">
        <img src={murilloImg} alt="imagem do projeto"/>

        <h2>Murillo Oliveira</h2>

         <a a href="https://www.linkedin.com/in/murillo-oliveira-abb3ba338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="imagem do projeto"/></a>
        <a a href="http://GitHub.com/Murillo-Oliveira" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="imagem do projeto"/></a>
      </div>

       <div className="qm-s">
        <img src={kessyaImg} alt="imagem do projeto"/>

        <h2>Kessya Querino</h2>

         <a a href="https://www.linkedin.com/in/kessya-monique-de-oliveira-querino-5412b3336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="imagem do projeto"/></a>
      </div>
      </div>
     
      <div className="kids">
        <div className="kid-left">
              <img src={kdl} alt="imagem do projeto"/>
        </div>
        <div className="kid-right">
          <img src={kdr} alt="imagem do projeto"/>
        </div>
      </div>



      <div className="fundo"></div>
    </main>
    </>
  );
}

export default QuemSomos
