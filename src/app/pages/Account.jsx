import { Outlet } from "react-router-dom";
import bgImage from "/src/assets/login/login-background.jpg";
import { ToastContainer } from "react-toastify";

export default function Account() {
  return (
    <div
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
      className="bg-cover bg-center h-screen w-screen flex justify-center items-center bg-blend-darken bg-black bg-opacity-30"
    >
      <ToastContainer position="top-center"/>
      <Outlet/>
    </div>
  );
}