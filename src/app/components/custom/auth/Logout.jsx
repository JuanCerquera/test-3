import { redirect, Form, useFormAction } from "react-router-dom";
import axiosInstance from "/src/app/utilities/axios";
import { seekRoute } from "/src/routes/config";
import { TbLogout2 } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";

export async function action() {
  try {
    const response = await axiosInstance({
      method: "post",
      url: "/logout/",
      data: {refresh_token: localStorage.getItem("refresh_token")},
    });

    console.log(response);

    localStorage.clear();
    return redirect(seekRoute("login"));
  } catch (error) {
    throw error;
  }
}

export default function Logout() {
  async function handleClick() {
    try {
      const response = await axiosInstance({
        method: "post",
        url: "/logout/",
        data: {refresh_token: localStorage.getItem("refresh_token")},
      });

      console.log(response);

      localStorage.clear();
      window.location.href = seekRoute("login");
    } catch (error) {
      throw error;
    }
  }

  return (
    <button onClick={handleClick} className="text-red-500 w-auto flex gap-4 mx-8 my-5 font-semibold">
      <LuLogOut className="size-6 scale-x-[-1]"/>
      Cerrar sesión
    </button>
  );
}
