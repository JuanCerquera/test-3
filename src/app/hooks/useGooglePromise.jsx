import { seekRoute } from "/src/routes/config";
import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function useGooglePromise() {
  const { promise } = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Promise");
    console.log(promise);
    if (promise) {
      toast.promise(promise, {
        pending: "Enlazando cuenta...",
        success: "Cuenta enlazada exitosamente",
        error: "Error al enlazar cuenta, por favor inténtalo de nuevo más tarde",
      });

      promise.then((response) => {
        navigate(seekRoute("appointmentList"));
      });
    }
  }, [promise, navigate]);
}