import CustomNavLink from "./CustomNavLink";
import { IoMdHome, IoMdSettings } from "react-icons/io";
import { FaBook, FaHistory, FaUser } from "react-icons/fa";
import { seekRoute } from "/src/routes/config";
import logoWithText from "/src/assets/images/logo_horizontal.png";
import { NavLink } from "react-router-dom";
import Logout from "/src/app/components/custom/auth/Logout.jsx";

export default function Navbar() {
  return (
    <div className="bg-white flex flex-col justify-start w-full md:w-80 z-10">
      <header className="max-md:hidden p-5 flex justify-center items-center border-b-2 border-slate-200">
        <NavLink to={seekRoute("root")} className="flex flex-row">
          <img src={logoWithText} alt="Denti" className="w-full" />
        </NavLink>
      </header>
      <nav className="m-8 md:mr-0">
        <ul className="flex md:flex-col gap-2 justify-between md:justify-start">
          <CustomNavLink to={seekRoute("root")} Icon={IoMdHome}>
            Panel principal
          </CustomNavLink>
          <CustomNavLink to={seekRoute("appointmentList")} Icon={FaBook}>
            Agenda
          </CustomNavLink>
          <CustomNavLink to={seekRoute("settings")} Icon={IoMdSettings}>
            Configuración
          </CustomNavLink>
          <CustomNavLink to={seekRoute("history")} Icon={FaHistory}>
            Historial
          </CustomNavLink>
          <CustomNavLink to={seekRoute("profile")} Icon={FaUser}>
            Perfil
          </CustomNavLink>
        </ul>
      </nav>
      <div className="max-md:hidden flex-grow"></div>
      <div className="max-md:hidden flex flex-col justify-end border-t-2 border-slate-200">
        <Logout />
      </div>
    </div>
  );
}
