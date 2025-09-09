import Header from "./Header"
import i1 from '../img/relogio.png'
import i2 from '../img/sos.png'
import i3 from '../img/localizacao.png'
import i4 from '../img/relogio-home.png'
import "../csss/Instrucoes.css"

function Instrucoes() {
  

  return (
    <>
      <Header />

      <main className="Instrucoes">
        <h1>INSTRUÇÕES</h1>
        <h2 className="h2-i">Como usar o relógio para crianças com facilidade:</h2>

        <div className="instucao">
          <div className="instucao-a">
            <img src={i1} alt="imagem do projeto"/>

            <p>1 - Use o botão de SOS para casos de emergência.</p>
          </div>

          <div className="instucao-a">
            <img src={i2} alt="imagem do projeto"/>

            <p>2 - Pressione o botão por 5 segundos.</p>
          </div>

          <div className="instucao-a">
            <img src={i3} alt="imagem do projeto"/>

            <p>3 - Localização e alarme são enviados para o celular dos pais.</p>
          </div>

          <div className="instucao-v">
          <div className="instucao-v2">
            <img src={i4} alt="imagem do projeto"/>

            
          </div>
          <p>4 - Vídeo tutorial</p>
          </div>
        </div>

        <div className="fundo"></div>
      </main>
    </>
  )
}

export default Instrucoes
