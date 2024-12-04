import axiosInstance from "/src/app/utilities/axios.js";
import bgImage from "/src/assets/login/login-background.jpg";
import { SignupForm } from "./forms/SignupForm.jsx";
import { Link, redirect, useLoaderData, useSearchParams } from "react-router-dom";
import { seekRoute } from "/src/routes/config.js";
import { useEffect, useRef, useState } from "react";
import { CardPayment, initMercadoPago } from "@mercadopago/sdk-react";
import { executeAxios } from "/src/app/utilities/submitters.js";
import { PrimaryButton } from "/src/app/components/custom/misc/Buttons.jsx";
import { computeActionResponse } from "/src/app/utilities/helpers.js";
import { ToastContainer } from "react-toastify";

export async function loader({request}) {
  const [, searchParams] = request.url.split("?");
  const initialPlanId = new URLSearchParams(searchParams).get("plan_id");
  const planInfoResponse = await executeAxios({
    method: "get",
    url: `plans_info/`,
  });
  const plans = planInfoResponse.data;
  return {initialPlanId, plans};
}

export async function action({request}) {
  const formData = await request.formData();
  const response = await executeAxios({
    method: "post",
    url: "/register_company/",
    data: formData,
  });
  return computeActionResponse(response, "¡Registro exitoso!", "login");
}

export default function SignUp() {
  initMercadoPago("APP_USR-cb4f45c9-8cc7-4370-888d-ed8336defa61");
  const {initialPlanId, plans} = useLoaderData();
  console.log(plans);
  const submitRef = useRef(null);
  const [planId, setPlanId] = useState(null);
  const [planInfo, setPlanInfo] = useState(null);

  useEffect(() => {
    const plan = plans.find((plan) => plan.id == planId);
    setPlanInfo(plan);
  }, [planId]);

  useEffect(() => {
    if (plans.length > 0) {
      if (initialPlanId) {
        setPlanId(initialPlanId);
      } else {
        setPlanId(plans[0].id);
      }
    }
  }, [plans]);

  function onSubmit(cardFormData) {
    cardFormData["plan_id"] = planInfo.id;
    axiosInstance({
      method: "post",
      url: "process_payment/",
      data: cardFormData,
    })
      .then((response) => {
        console.log(response);
        const id = response.data.response.id;
        if (response.status === 201) {
          console.log("Clicking...");
          document.querySelector("#subscription_id").value = id;
          submitRef.current.click();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const customization = {
    visual: {
      texts: {
        formSubmit: "Registrarse",
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-3xl shadow-2xl w-[70%] mx-auto my-7">
      <p className="font-semibold text-center text-lg">
        Registra una nueva cuenta
      </p>
      <div>
        <SignupForm ref={submitRef} planId={planId} setPlanId={setPlanId} plans={plans}/>
        {planInfo && planInfo.price != 0 ? (
          <CardPayment
            locale="es-CO"
            initialization={{amount: planInfo.price}}
            onSubmit={onSubmit}
            customization={customization}
          />
        ) : (
          <div className="w-full flex justify-center items-center">
            <PrimaryButton onClick={() => {
              submitRef.current.click()
            }}>
              Registrarse
            </PrimaryButton>
          </div>
        )}
        <p className="text-center mt-3 text-slate-500">
          ¿Ya tienes una cuenta?{" "}
          <Link to={seekRoute("login")} className="underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
