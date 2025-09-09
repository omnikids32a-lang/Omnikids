import { useState } from "react";
import Header from "./Header"
import "../csss/Produto.css"
import kd from '../img/kid.png'
import ESP32 from '../img/ESP32.png'
import DisplayTouch from '../img/Display-Touch.png'
import ModuloRTCDS3231 from '../img/Módulo-RTC-DS3231.png'
import ModuloGPS from '../img/Módulo-GPS.png'
import Pulseira from '../img/Pulseira.png'
import LEDVerde from '../img/LED-Verde.png'
import Buzzer5V from '../img/Buzzer-5V.png'
import Resistor200Ω from '../img/Resistor-200Ω.png'
import InterruptorDeslizante from '../img/Interruptor-Deslizante.png'
import PlacadeEnsaio from '../img/Placa-de-Ensaio.png'
import CabosJumper from '../img/Cabos-Jumper.png'
import setad from '../img/seta-direita.png'
import setaes from '../img/seta-esquerda.png'




function Produto() {

  const componentes = [
    { img: ESP32, nome: "ESP32" },
    { img: DisplayTouch, nome: "Display Touch" },
    { img: ModuloRTCDS3231, nome: "Módulo RTC DS3231" },
    { img: ModuloGPS, nome: "Módulo GPS" },
    { img: Pulseira, nome: "Pulseira" },
    { img: LEDVerde, nome: "LED Verde" },
    { img: Buzzer5V, nome: "Buzzer 5V" },
    { img: Resistor200Ω, nome: "Resistor 200Ω" },
    { img: InterruptorDeslizante, nome: "Interruptor Deslizante" },
    { img: PlacadeEnsaio, nome: "Placa de Ensaio" },
    { img: CabosJumper, nome: "Cabos Jumper" },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % componentes.length);
  const prev = () => setIndex((prev) => (prev - 1 + componentes.length) % componentes.length);

  

  return (
    <>
      <Header />

      <main className="produto-mobile">
              
              <section className="prod">
      
                <div className="prod-1">
                  <div className="prod-1a">
      
                  <h1>PARTES DO NOSSO RELÓGIO</h1>
                  <p>Visualize um relógio com componentes projetados especificamente para crianças.</p>
                  
      
                  </div>
                  
                  </div>
              </section>
              <section className="componetes">
                
      
                    <div className="pecas">

                      <div className="pecas2">
                      <button onClick={prev}><img src={setaes} alt="magem de uma seta virada para a esquerda"/></button>

                      <div className="componente">
                        <img src={componentes[index].img} alt={componentes[index].nome} />
                          <h3>{componentes[index].nome}</h3>
                      </div>

                      

                      <button onClick={next}> <img src={setad} alt="imagem de uma seta virada para a direita"/></button>
                      </div>

                       <div className="dots">{componentes.map((_, i) => (
        <span
          key={i}
          className={`dot ${i === index ? "active" : ""}`}
          onClick={() => setIndex(i)} // permite clicar no pontinho
        ></span>
      ))}
    </div>
                       <h2><strong>TOTAL:R$ 385,00</strong></h2>
                     </div>
                  </section>
      
                  <div className="fundo"></div>
                  </main>

      <main className="produto-desktop">
              
              <section className="prod">
      
                <div className="prod-1">
                  <div className="prod-1a">
      
                  <h1>PARTES DO NOSSO RELÓGIO</h1>
                  <p>Visualize um relógio com componentes projetados especificamente para crianças.</p>
                  
      
                  </div>

                  <div className="kid">
                   <img src={kd} alt="imagem de uma criança" />
                  </div>
                  
                  </div>
              </section>
              <section className="componetes">
                
      
                    <div className="pecas">

                      <div className="pecas2">  
                      <div className="componente">
                        <img src={ESP32} alt="imagem da peça ESP32"/>

                        <h3>ESP32</h3>
                      </div>

                     
                      <div className="componente">
                        <img src={DisplayTouch} alt="imagem da peça Display Touch"/>

                        <h3>Display Touch</h3>
                      </div>

                    <div className="componente">
                        <img src={ModuloRTCDS3231} alt="imagem da peça Módulo RTC DS3231"/>

                        <h3>Módulo RTC DS3231</h3>
                      </div>

                      <div className="componente">
                        <img src={ModuloGPS} alt="imagem da peça Módulo GPS"/>

                        <h3>Módulo GPS</h3>
                      </div>

                      <div className="componente">
                        <img src={Pulseira} alt="imagem da peça Pulseira"/>

                        <h3>Pulseira</h3>
                      </div>

                      <div className="componente">
                        <img src={LEDVerde} alt="imagem da peça LED Verde"/>

                        <h3>LED Verde</h3>
                      </div>
                  </div>
                  <div className="pecas2"> 
                      <div className="componente">
                        <img src={Buzzer5V} alt="imagem da peça Buzzer 5V"/>

                        <h3>Buzzer 5V</h3>
                      </div>

                      <div className="componente">
                        <img src={Resistor200Ω} alt="imagem da peça Resistor 200Ω"/>

                        <h3>Resistor 200Ω</h3>
                      </div>

                      <div className="componente">
                        <img src={InterruptorDeslizante} alt="imagem da peça Interruptor Deslizante"/>

                        <h3>Interruptor Deslizante</h3>
                      </div>

                      <div className="componente">
                        <img src={PlacadeEnsaio} alt="imagem da peça Placa de Ensaio"/>

                        <h3>Placa de Ensaio</h3>
                      </div>

                      <div className="componente">
                        <img src={CabosJumper} alt="imagem da peça Cabos Jumper"/>

                        <h3>Cabos Jumper</h3>
                      </div>

                      <h2><strong>TOTAL:R$ 385,00</strong></h2>
                      
                      </div>
                     </div>
                  </section>
      
                  <div className="fundo"></div>
                  </main>
    </>
  )
}

export default Produto
