import React from "react";
import { useNavigate } from "react-router-dom";
import "./estilos2.css";

export default function SeguimientoClienteVersiones() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Encabezado */}
      <header>
        <img
          src="/imagenes/Logopronavid.png"
          alt="Logo PRONAVID"
          className="logo"
        />
      </header>

      {/* Sección principal */}
      <section className="contenedor">
        <div className="fondo-difuminado"></div>

        <div className="tabla">
          {/* Encabezado de la tabla */}
          <div className="encabezado-tabla">
            <span>ID</span>
            <span>Cliente</span>
            <span>Fecha</span>
            <span>Nombre cliente</span>
            <span>Estado actual</span>
          </div>

          {/* Versiones del seguimiento */}
          <div className="fila-datos">
            <span>1</span>
            <span>Distrifruver</span>
            <span>03/12/24</span>
            <span>Carlos Salamanca</span>
            <span className="estado1">Pendiente</span>
          </div>

          <div className="fila-datos">
            <span>1</span>
            <span>Distrifruver</span>
            <span>26/12/24</span>
            <span>Carlos Salamanca</span>
            <span className="estado">En proceso</span>
          </div>

          <div className="fila-datos">
            <span>1</span>
            <span>Distrifruver</span>
            <span>03/02/25</span>
            <span>Carlos Salamanca</span>
            <span className="estado">En proceso</span>
          </div>

          {/* Botón VOLVER */}
          <div className="botones">
            <button
              className="btn-volver"
              onClick={() => navigate("/SegumientoclienteGuardado")}
            >
              VOLVER
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
