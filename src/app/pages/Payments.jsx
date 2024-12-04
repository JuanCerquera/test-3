import { CardPayment, initMercadoPago, StatusScreen } from '@mercadopago/sdk-react';
import axiosInstance from "/src/app/utilities/axios.js";



export function Payments() {
  initMercadoPago('APP_USR-cb4f45c9-8cc7-4370-888d-ed8336defa61');
  function onSubmit(cardFormData) {
    axiosInstance({
      method: "post",
      url: "process_payment/",
      data: cardFormData,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <CardPayment
        initialization={{amount: 100000}}
        onSubmit={onSubmit}
      />
      {/* <StatusScreen initialization={{ paymentId: '5c04abaa13df4d9eb21ef2d2affe175c' }} /> */}
    </div>
  );
}