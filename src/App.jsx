import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import img from "../src/assets/img.jpeg";
import "./App.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function App() {

  const dateBase = new Date(2025, 2, 24, 17, 30);  const [timeElapsed, setTimeElapsed] = useState({ 
    days: 0, 
    hours: 0, 
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = now - dateBase; // Invertimos la resta para que el tiempo crezca
      
      // Solo actualizar si la fecha base ya pasó
      if (diff > 0) {
        setTimeElapsed({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const download = () => {
    const link = document.createElement("a");
    link.href = img;
    link.download = "comprobante.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div>
        <h1>DanielBank México S.A.</h1>
      </div>
      <p>Fecha de la deuda: {dateBase.toLocaleDateString('es-MX', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })}</p>
      <p>
        Tiempo de atraso: {timeElapsed.days > 0 && `${timeElapsed.days} días, `}{timeElapsed.hours} horas, {timeElapsed.minutes} minutos y {timeElapsed.seconds} segundos
      </p>
      <div className="card">
        <button onClick={download}>
          Descargar comprobante
        </button>
        <p>
          Favor de pagar su deuda lo antes posible al siguiente enlace:
        </p>
        <button onClick={download}>
          <a href="https://wa.me/+525519061300" target="_blank">
            Pagar
            <WhatsAppIcon fontSize="large"/>
          </a>
        </button>
      </div>
      <p>Si usted ya completó su pago favor de avisar al administrador y enviar su comprobate</p>
    </>
  );
}

export default App;
