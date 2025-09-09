import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { List, X } from '@phosphor-icons/react'
import lg from '../img/logo.png'
import lua from '../img/lua.png'
import "../csss/Header.css"

function Header() {
  const [abrirFechar, setAbrirFechar] = useState(false)
  const [tema, setTema] = useState(() => {
    return localStorage.getItem("tema") || "claro";
  });

  function handleAbrirFecharMenu() {
    setAbrirFechar((prev) => !prev);
  }

  useEffect(() => {
    const body = document.body;
    const header = document.querySelector("header");

    if (tema === "escuro") {
      body.classList.add("escuro");
      body.classList.remove("claro");
      header.classList.add("escuro");
      header.classList.remove("claro");
    } else {
      body.classList.remove("escuro");
      body.classList.add("claro");
      header.classList.remove("escuro");
      header.classList.add("claro");
    }

    localStorage.setItem("tema", tema);
  }, [tema]);

  function trocarTema() {
    setTema((prevTema) => (prevTema === "claro" ? "escuro" : "claro"));
  }

  return (
    <header>
      <div className="menu-mobile">
        <div className="botao-menu">
          <Link to={'/'}>
            <img src={lg} alt="logo" className="logo-mobile" />
          </Link>

          <div className="tema">
            <button onClick={trocarTema}>
              <img src={lua} alt="imagem do projeto" className="bt-tema" />
            </button>
          </div>

          <button className="bt-menu" onClick={handleAbrirFecharMenu}>
            {abrirFechar ? <X size={32} /> : <List size={32} />}
          </button>
        </div>

        <div className={`menu ${abrirFechar ? "" : "close"}`}>
          <nav>
            <Link to={'/'} className="as">Home</Link>
            <Link to={'/Instruções'} className="as">Instruções</Link>
            <Link to={'/Quem-somos'} className="as">Quem somos</Link>
            <Link to={'/Produto'} className="as">Produto</Link>
            <Link to={'/Game'} className="as">Game</Link>
            <Link to={'/Referencias'} className="as">Referencias</Link>
          </nav>
        </div>
      </div>

      <div className="menu-desktop">
        <Link to={'/'}><img src={lg} alt="logo" className="logo-desktop" /></Link>
        <nav>
          <Link to={'/'} className="as">Home</Link>
          <Link to={'/Instruções'} className="as">Instruções</Link>
          <Link to={'/Quem-somos'} className="as">Quem somos</Link>
          <Link to={'/Produto'} className="as">Produto</Link>
          <Link to={'/Game'} className="as">Game</Link>
          <Link to={'/Referencias'} className="as">Referencias</Link>
        </nav> 

        <div className="tema">
          <button onClick={trocarTema}>
            <img src={lua} alt="imagem do projeto" className="bt-tema" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
