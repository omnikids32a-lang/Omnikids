import Header from "./Header"
import "../csss/Game.css"
import lg from '../img/game.mp4'

function Game() {
  

  return (
    <>
      <Header/>

      <body className="game">
        <main>
          <div className="Echo-of-Silence">
          <h1>Echo of Silence</h1>

          <p>Em Echo of Silence, você assume o papel de uma criança que se perde da mãe dentro de um grande supermercado. Usando um relógio interativo inteligente, será preciso decifrar pistas visuais, superar obstáculos e coletar itens para reencontrá-la antes que o mercado feche. Escolha entre cinco personagens jogáveis — cada um com habilidades únicas — e viva uma aventura divertida que estimula a percepção, a autonomia e a resolução de desafios em um ambiente cheio de descobertas.</p>
          </div>

          <div className="video">
            <video src={lg} autoPlay muted loop playsInline className="videoo"/>
          </div>
        </main>
      </body>
    </>
  )
}

export default Game
