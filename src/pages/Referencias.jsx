import Header from "./Header"
import lupa from '../img/menina-lupa.png'
import "../csss/Referencias.css"


function Referencias() {
  

  return (
     <>
    <Header />

    <main className="ref">
            <div className="texto-1">

            <h1>REFERÊNCIAS</h1>
            <p><strong>de Souza, Rafael Nunes, and Andreza Bastos Mourao. "Ambiente Virtual Interativo e Inclusivo de Libras (AVIILIB): aplicando as estratégias do Pensamento Computacional e engajando os estudantes com elementos de Gamificação." Workshop de pensamento computacional e inclusão (WPCI). SBC, 2023.</strong></p>
            </div>

            <div className="texto-2">
              <div className="texto">
                 <p><strong>Mantovani, Rayssa Monteiro, Maria Cecília Marconi Pinheiro Lima, and Janice Gonçalves Temoteo Marques. "Famílias ouvintes e filhos surdos: o papel da Libras na comunicação." Distúrbios da Comunicação 36.1 (2024): e63257-e63257.</strong></p>
                <p><strong>Maciel, Jaqueline Maria Coelho. "Inclusão e Tecnologia: experiência de uma criança surda na educação infantil." EaD & Tecnologias Digitais na Educação 13.18 (2025): 154-161.</strong></p>
                <a a href="https://www.youtube.com/watch?v=M4w1e297pWU&t=307s" target="_blank" rel="noopener noreferrer" className="tube"><strong>https://www.youtube.com/watch?v=M4w1e297pWU&t=307s</strong></a>
              </div>
             

             <img src={lupa} alt="imagem do projeto"/>
            </div>

            <div className="fundo"></div>
    </main>
    </>
  )
}

export default Referencias
