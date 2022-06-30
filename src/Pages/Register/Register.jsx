import React from "react";
import axios from "axios";
import "./Register.css";
import { useForm } from "react-hook-form";
import md5 from "md5";
import Cookies from "universal-cookie";

const baseURL = "https://backenddig.herokuapp.com/api/users/";
const cookies = new Cookies();

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log();

  const onSubmit = (event) => {
    if (event.password1 === event.password2) {
      axios({
        method: "post",
        url: baseURL,
        data: {
          password: md5(event.password1),
          is_superuser: false,
          username: event.username,
          email: event.email,
          city: 1,
        },
      })
        .then((response) => {
          return response.data;
        })
        .then((response) => {
          cookies.set("id", response.id, { path: "/" });
          cookies.set("name", response.username, { path: "/" });
          window.location.href = "/establishments";
        })
        .catch((error) => {
          if (error.response.data) {
            return error.response.data;
          }
        })
        .then((error) => {
          if (error.email) {
            console.log(error);
            alert("Este email ya esta siendo usado.");
          } else if (error.username) {
            console.log(error);
            alert("Este nombre de Usuario ya esta siendo usado.");
          }
        });
    } else {
      alert("Las contraseñas no coinciden");
    }
  };

  return (
    <div className="register">
      <div className="register__container">
        <div className="register__info__container">
          <h1 className="tittle">Registrarse</h1>
          <form className="inputs__container" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input"
              type="text"
              placeholder="Nombre de Usuario"
              {...register("username", {
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
                minLength: {
                  value: 4,
                  message: "Minimo 4 caracteres",
                },
                maxLength: {
                  value: 20,
                  message: "Maximo 20 caracteres",
                },
              })}
            ></input>
            {errors.username && (
              <span className="span">{errors.username.message}</span>
            )}
            <input
              className="input"
              type="text"
              placeholder="E-mail"
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
              placeholder="Contraseña"
              {...register("password1", {
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
            {errors.password1 && (
              <span className="span">{errors.password1.message}</span>
            )}
            <input
              className="input"
              type="password"
              placeholder="Repita su Contraseña"
              {...register("password2", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
                pattern: {
                  value:
                    /^(?=.[a-z])(?=.[A-Z])(?=.*\d)[A-Za-z\d]{8,15}[^’\s]$/i,
                  message: "Ingrese una constraseña valida  ",
                },
              })}
            ></input>
            {errors.password2 && (
              <span className="span">{errors.password2.message}</span>
            )}
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
