import React, { useEffect } from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useForm } from "react-hook-form";
import axios from "axios";
import md5 from "md5";
import Cookies from "universal-cookie";

const baseURL = "http://localhost:3001/users";
const cookies = new Cookies();

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (evento) => {
    await axios
      .get(baseURL, {
        params: {
          email: evento.email,
          password: md5(evento.password),
        },
      })
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          const userLogued = response[0];
          cookies.set("id", userLogued.id, { path: "/" });
          cookies.set("name", userLogued.name, { path: "/" });
          window.location.href = "/establishments";
        } else {
          alert("El usuario o la contraseña son incorrectos");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (cookies.get("name")) {
      window.location.href = "/establishments";
    }
  });

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__info__container">
          <h1 className="tittle">log in with</h1>
          <div className="social__login">
            <div className="social__login__element">
              <FcGoogle className="social__image" />
              <span>Google</span>
            </div>
            <div className="social__login__element">
              <BsFacebook className="social__image" />
              <span>Facebook</span>
            </div>
          </div>
          <p>or</p>
          <form className="inputs__container" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input"
              type="text"
              placeholder="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Ingrese un correo válido",
                },
              })}
            ></input>
            {errors.email && (
              <span className="span">{errors.email.message}</span>
            )}
            <input
              className="input"
              type="password"
              placeholder="Password"
              {...register("password", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
                pattern: {
                  value:
                    /^(?=.[a-z])(?=.[A-Z])(?=.*\d)[A-Za-z\d]{8,15}[^’\s]$/i,
                  message: "Ingrese una constraseña valida",
                },
              })}
            ></input>
            {errors.password && (
              <span className="span">{errors.password.message}</span>
            )}
            <p>
              ¿Olvidaste tu contraseña? <span className="span">Recuperar</span>
            </p>
            <button type="submit" className="btn">
              Login
            </button>
            <p>
              ¿No te has registrado? <span className="span">Registrarse</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
