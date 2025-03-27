import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import img from "../src/assets/img.jpeg";
import multa2 from "../src/assets/multa2.jpg"
import multa3 from "../src/assets/multa3.jpg"
import "./App.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function App() {
  const dateBase = new Date(2025, 2, 25, 23, 59);
  const dateBase2 = new Date(2025, 2, 27, 23, 59);
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [timeElapsed2, setTimeElapsed2] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
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
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = now - dateBase2; // Invertimos la resta para que el tiempo crezca

      // Solo actualizar si la fecha base ya pasó
      if (diff > 0) {
        setTimeElapsed2({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const download = () => {
    const link = document.createElement("a");
    link.href = multa2;
    link.download = "comprobante.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const download2 = () => {
    const link = document.createElement("a");
    link.href = multa3;
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
      <div>
        <h2>Multa 2</h2>
        <p>
          Fecha de la deuda:{" "}
          {dateBase.toLocaleDateString("es-MX", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <p>
          Tiempo de atraso:{" "}
          {timeElapsed.days > 0 && `${timeElapsed.days} días, `}
          {timeElapsed.hours} horas, {timeElapsed.minutes} minutos y{" "}
          {timeElapsed.seconds} segundos
        </p>
        <p>Intereses acumulados: {timeElapsed.days}</p>
        <div className="card">
          <button onClick={download}>Descargar comprobante</button>
        </div>
      </div>
      <div>
        <h2>Multa 3</h2>
        <p>
          Fecha de la deuda:{" "}
          {dateBase2.toLocaleDateString("es-MX", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <p>
          Tiempo de atraso:{" "}
          {timeElapsed2.days > 0 && `${timeElapsed2.days} días, `}
          {timeElapsed2.hours} horas, {timeElapsed2.minutes} minutos y{" "}
          {timeElapsed2.seconds} segundos
        </p>
        <p>Intereses acumulados: {timeElapsed2.days}</p>
        <div className="card">
          <button onClick={download2}>Descargar comprobante</button>
        </div>
      </div>
        <p>Favor de pagar su deuda lo antes posible al siguiente enlace:</p>
        <button className="wp">
          <a href="https://wa.me/+525519061300" target="_blank">
            Pagar
            <WhatsAppIcon fontSize="large" />
          </a>
        </button>
      <p>
        Si usted ya completó su pago favor de avisar al administrador y enviar
        su comprobate
      </p>
    </>
  );
}

export default App;
