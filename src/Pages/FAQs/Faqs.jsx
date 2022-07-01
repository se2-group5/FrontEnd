import React from "react";
import "./Faqs.css";

function Faqs() {
  return(
  <div className="faqs">Faqs
    <ol>
      <li>
        ¿Debo obligatoriamente registrarme en DIG?  R. El registro no es obligatorio, podrás consultar establecimiento y ver los reportes, no obstante no podrás realizar reportes ni calificarlos si no tienes una cuenta registrada.
      </li>
      <li>
        No puedo registrarme en DIG R. Asegúrate que uses una contraseña de acuerdo a los caracteres especificados (Mínimo una mayúscula y un número, y la longitud no debe exceder los 15 caracteres ni debe tener menos de 8). Probablemente el correo electrónico ya está registrado o contiene un parámetro mal escrito (no tiene @ ni . después del @).
      </li>
      <li>
        Un establecimiento que conozco no aparece en DIG R. Constantemente tratamos de añadir establecimientos y asegurarnos que estos brinden información precisa y cumpla con que sean el tipo de lugar objetivo (Café o zona de coworking), así que pueden aparecer más establecimientos populares a futuro.
      </li>
      <li>
        ¿Puedo realizar reportes anónimos? R. No, la información que suministres con tu reporte quedarán registrados y visibles con tu nombre de usuario, no obstante las calificaciones no representarán algún perjuicio para ti por parte de los establecimientos. También restringimos mensajes anónimos con el fin de garantizar que la información suministrada sea imparcial y objetiva. 
      </li>
      <li>
        ¿Debo iniciar sesión cada vez que ingreso a DIG? R. Si, por seguridad tu información de inicio de sesión se borra una vez abandonas la página o permaneces mucho tiempo en ella sin actividad.
      </li>
      <li>
        ¿Puedo eliminar mi cuenta registrada? R. Si, puedes contactar con un administrador para proceder a eliminar tu cuenta.
      </li>
      <li>
        Soy administrador de un establecimiento y estoy interesado en aparecer en DIG, ¿Cómo registro mi establecimiento? R. Contactando con nuestros administradores de DIG puedes solicitar añadir tu establecimiento a la página, ellos validarán la información suministrada y acorde a los parámetros de evaluación de DIG, se aprobará o no la adición de tu establecimiento.
      </li>
      <li>
        Tengo un error al usar la aplicación R. Prueba refrescando la página, si el error persiste procura acceder por los navegadores recomendados (Google Chrome o Microsoft Edge), vuelve a iniciar sesión o espera unos minutos, si el error persiste por favor contacta a soporte. 
      </li>
      

    </ol>
    

  </div>);
}
export default Faqs;
