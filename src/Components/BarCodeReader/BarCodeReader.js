import React from "react";
import { useState } from "react";
import Quagga from "quagga";
import ProductCard from "../ProductResults/ProductCard";

export default function BarCodeReader() {
  const [code, setCode] = useState("-");
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);

  function getProductInformation(code) {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}`)
      .then((data) => data.json())
      .then((response) => {
        if (response.status === 0) {
          setError(response.status_verbose);
        } else {
          setProduct(response.product);
          setError(null);
          Quagga.stop();
        }
      });
  }
  function initCamera() {
    Quagga.init(
      {
        frequency: 1,
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: "#cameraContainer", // Or '#yourElement' (optional)
        },
        decoder: {
          readers: [
            "code_128_reader",
            "ean_reader",
            "ean_8_reader",
            "code_39_reader",
            "code_39_vin_reader",
            "codabar_reader",
            "upc_reader",
            "upc_e_reader",
            "i2of5_reader",
            "2of5_reader",
            "code_93_reader",
          ],
        },
      },
      function (err) {
        if (err) {
          console.error("ERROR!!!!!! " + err);
          return;
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
      }
    );

    Quagga.onDetected((data) => {
      const code = data?.codeResult?.code;
      if (code) {
        setCode(code);
        getProductInformation(code);
      }
    });
  }

  return (
    <div>
      <h3>Code: {code}</h3>
      <button onClick={initCamera}>Init Camera</button>
      {product && <div>{product?.product_name + " " + product?.brands}</div>}
      {!product && error && <div>{error}</div>}

      {product && <ProductCard product={product} />}

      <div id="cameraContainer"></div>
    </div>
  );
}
