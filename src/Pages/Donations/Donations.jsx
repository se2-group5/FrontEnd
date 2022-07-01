import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./Donations.css";

function Donations() {
  return (
    <div className="donations">
      <h1 className="donations__tittle">Donaciones</h1>
      <div className="donations__container">
        <h3 className="donations__tittle">Paypal</h3>
        <PayPalScriptProvider
          options={{
            "client-id": process.env.DIG_APP_PAYPAL_CLIENT_ID,
          }}
        >
          <PayPalButtons
            style={{ layout: "horizontal" }}
            className="donate__button"
          />
        </PayPalScriptProvider>
      </div>

      <div className="donations__container">
        <h3 className="donations__tittle">Vaki</h3>
        <div className="content">
          <iframe
            className="donate__button"
            id="vakiIframe"
            title="Donación Proyecto DIG App"
            width="350"
            height="415"
            src="https://vaki.co/iframe/Yx0lz0BjUtA27dczNOX5"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Donations;
