import axiosInstance from "/src/app/utilities/axios.js";
import { redirect } from "react-router-dom";
import bgImage from "/src/assets/login/login-background.jpg";
import LoginForm from "./forms/LoginForm.jsx";
import { seekRoute } from "/src/routes/config.js";
import { ToastContainer } from "react-toastify";

export async function action({request}) {
  const formData = await request.formData();

  try {
    const response = await axiosInstance({
      method: "post",
      url: "/token/",
      data: formData,
    });

    const data = response.data;
    localStorage.clear();
    localStorage.setItem("access_token", data.access);
    localStorage.setItem("refresh_token", data.refresh);
    localStorage.setItem("user_id", data.id);

    return redirect(seekRoute("root"));
  } catch (error) {
    console.log("Error");
    throw error;
  }
}

export default function Login() {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-2xl">
      <p className="font-semibold text-center text-lg">
        Iniciar sesión con tu cuenta
      </p>
      <LoginForm/>
    </div>
  );
}
