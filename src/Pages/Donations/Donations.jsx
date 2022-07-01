import React from "react";
import "./Donations.css";

function Donations() {
  return (
    <div className="donations">
      <h1 className="donations__tittle">Donaciones</h1>
      <div className="donations__container">
        <h3 className="donations__tittle">Vaki</h3>
        <iframe
          id="vakiIframe"
          title="Donación Proyecto DIG App"
          width="350"
          height="415"
          src="https://vaki.co/iframe/Yx0lz0BjUtA27dczNOX5"
        ></iframe>
      </div>
      <div className="donations__containter">
        <h3 className="donations__titte">Paypal</h3>
        <form
          action="https://www.paypal.com/donate"
          method="post"
          target="_top"
        >
          <input type="hidden" name="hosted_button_id" value="3F6NLJKLA5NGA" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypal.com/en_CO/i/scr/pixel.gif"
            width="10"
            height="10"
          />
        </form>
      </div>
    </div>
  );
}

export default Donations;
