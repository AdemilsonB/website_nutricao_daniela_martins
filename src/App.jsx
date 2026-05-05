import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* HERO */}
      <section style={{ background: "#2ecc71", color: "#fff", padding: "60px 20px", textAlign: "center" }}>
        <h1>Emagreça com saúde sem dietas restritivas</h1>
        <p>Atendimento personalizado com nutricionista</p>
        <a
          href="https://wa.me/SEUNUMERO"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "15px 25px",
            background: "#25D366",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "5px"
          }}
        >
          Falar no WhatsApp
        </a>
      </section>

      {/* PROBLEMA */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2>Cansado de dietas que não funcionam?</h2>
        <p>Chega de efeito sanfona. Você precisa de um plano que funcione pra você.</p>
      </section>

      {/* BENEFÍCIOS */}
      <section style={{ padding: "50px 20px" }}>
        <h2 style={{ textAlign: "center" }}>Como posso te ajudar</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "30px"
        }}>
          <div style={{ background: "#f4f4f4", padding: "20px", borderRadius: "10px" }}>
            Plano alimentar personalizado
          </div>
          <div style={{ background: "#f4f4f4", padding: "20px", borderRadius: "10px" }}>
            Acompanhamento contínuo
          </div>
          <div style={{ background: "#f4f4f4", padding: "20px", borderRadius: "10px" }}>
            Resultados sustentáveis
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2>Sobre mim</h2>
        <p>Sou nutricionista especializada em emagrecimento saudável...</p>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2>Agende sua consulta</h2>
        <a
          href="https://wa.me/SEUNUMERO"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "15px 25px",
            background: "#25D366",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "5px"
          }}
        >
          Agendar agora
        </a>
      </section>

    </div>
  )
}

export default App
