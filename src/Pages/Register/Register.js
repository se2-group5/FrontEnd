import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="register">
      <div className="register__container">
        <div className="register__info__container">
          <h1 className="tittle">Registrarse</h1>
          <form className="inputs__container">
            <input
              className="input"
              type="text"
              placeholder="Nombre de Usuario"
            ></input>
            <input className="input" type="text" placeholder="E-mail"></input>
            <input
              className="input"
              type="texpasswordt"
              placeholder="Repita su Contraseña"
            ></input>
            <input
              className="input"
              type="password"
              placeholder="Password"
            ></input>
            <button type="submit" className="btn">
              Registrarse
            </button>
            <p>
              ¿Ya tienes un usuario? <span className="span">Ingresar</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
