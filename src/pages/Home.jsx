import Header from "./Header"
import "../csss/Home.css"
import rl from '../img/relogio-home.png'
import sd from '../img/saude.png'
import cm from '../img/comunicacao.png'
import sg from '../img/seguranca.png'
import bx from '../img/baixe.png'
import { useNavigate } from "react-router-dom";

 

function Home() {

   const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Instruções");
  }
    
  return (
    <>
    
    <Header />


    <main>
        
        <section className="tudo">

          <div className="parte-1">
            <div className="parte-1a">

            <h1>RELÓGIO PARA CRIANÇAS</h1>
            <p>Pensado para crianças, ele transforma necessidades simples em sinais claros como autonomia, carinho e inclusão</p>

            <div className="parte-1b">
              <button onClick={handleClick} className="bt-home">CONFIRA</button>
            </div>
            

            </div>

             <img src={rl} alt="imagem do projeto" className="rl"/>

            
            </div>
        </section>
        <section className="explicacao">
          
               <h2>POR QUE RELÓGIOS PARA CRIANÇAS</h2>

              <div className="explic">
                <div>
                  <img src={cm} alt="imagem do projeto"/>
                  <h3 className="titulos">COMUNICAÇÃO</h3>
                  <p>O relógio facilita a linguagem de sinais e o envio de mensagens de texto.</p>
                </div>

                <div>
                  <img src={sg} alt="imagem do projeto" />
                  <h3 className="titulos">SEGURANÇA</h3>
                  <p>Garante o bem-estar do seu filho com recursos avançados de segurança</p>
                </div>

                <div>
                  <img src={sd} alt="imagem do projeto"/>
                  <h3 className="titulos">SAÚDE</h3>
                  <p>Monitora os níveis de atividade, métricas de saúde e muito mais.</p>
                </div>
                
              </div>

              <div className="baixar">

              <div className="al">
                <button><img src={bx} alt="imagem do projeto"/></button>
              </div>
              

                <p>BAIXE O APP</p>
               </div>
            </section>

            <div className="fundo"></div>
    </main>
    </>
  )
  }
  
  export default Home