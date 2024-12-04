import { IoIosNotificationsOutline, IoIosSettings } from "react-icons/io";
import { CiCircleInfo, CiSearch } from "react-icons/ci";
import { useContext, useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "/src/app/components/ui/dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import Logout from "/src/app/components/custom/auth/Logout.jsx";
import { ProfileContext } from "/src/app/utilities/contexts";
import Image from "/src/app/components/custom/misc/Image";
import { seekRoute } from "/src/routes/config";
import Breadcrumbs from "/src/app/components/custom/misc/Breadcrumbs";


export function Header({title}) {
  const notificationsCard = document.querySelector("#notifications-card");
  const searchCard = document.querySelector("#search-card")
  const searchInput = document.querySelector("#search-input")
  const [searchValues, setSearchValues] = useState([])
  const routes = {
    "Agendamientos": "/appointments",
    "Configuración": "/configuración",
    "Nueva sede": "/configuración/nueva-sede",
    "Nuevo profesional": "/configuración/nuevo-profesional",
    "Nuevo servicio": "/configuración/nuevo-servicio",
    "Historial": "/historial",
    "Perfil": "/perfil"
  }

  function toggleNotifications() {
    notificationsCard.classList.toggle("hidden");
  }

  const profile = useContext(ProfileContext);
  const navigate = useNavigate();

  function handleSearchChange(e) {
    const searchQuery = e.target.value
    if (searchQuery == "") {
      searchCard.classList.add("hidden")
    } else {
      searchCard.classList.remove("hidden")
    }

    function filter(value) {
      return value.toLowerCase().includes(searchQuery)
    }

    const filtered = Object.keys(routes).filter(filter)
    setSearchValues(filtered)
  }

  function clearSearch() {
    searchCard.classList.add("hidden")
    searchInput.value = ""
  }

  return (
    <div
      id="header"
      className="p-4 mb-3 rounded-lg flex flex-row justify-between items-center"
    >
      {/* <div>
        <div id="stack">
          <a href="/settings">
            Settings
            <span className="m-2">/</span>
          </a>
          <a href="/settings/nueva-sede">Nueva sede</a>
        </div>
        <h1 id="title" className="text-3xl font-semibold">
          {title}
        </h1>
      </div> */}
      <div>
        <Breadcrumbs className="text-lg" />
        <h1 id="title" className="text-3xl font-semibold">
          {title}
        </h1>
      </div>
      {/*
      <div>
        <div className="flex flex-row items-center bg-white py-3 pl-4 pr-2 shadow-md rounded-full gap-2">

          <div className="flex flex-row items-center bg-slate-100 rounded-full p-2 gap-2 w-56">
            <CiSearch className="size-5"/>
            <input
              id="search-input"
              type="text"
              placeholder="Buscar..."
              className="bg-transparent focus-visible:outline-none w-full"
              onChange={handleSearchChange}
            />
          </div>
          <IoIosNotificationsOutline
            className="size-6 text-gray-400 cursor-pointer"
            onMouseEnter={() => {
              toggleNotifications()
            }}
            onMouseLeave={() => {
              toggleNotifications()
            }}
          />
          <Link to={seekRoute("profile")} >
            <CiCircleInfo className="size-6 text-gray-400"/>
          </Link>
          <Link to={seekRoute("settings")} className="-mr-4 z-10">
            <IoIosSettings className="size-6 text-gray-400"/>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="w-[70px] outline-none">
              <Image
                src={profile.profile_picture}
                nameForDefault="profile"
                className="rounded-full h-10 w-10 m-auto"
                alt="profile"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-10 mt-2">
              <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator/>
              <DropdownMenuItem className="cursor-pointer">
                <span onClick={() => {
                  navigate(seekRoute("profile"))
                }}>
                Perfil
              </span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Logout/>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/*<div className="relative">
          <div id="notifications-card"
               className="z-20 hidden top-1 left-0 right-0 absolute mx-auto w-72 text-center bg-slate-50 shadow-md rounded-md py-2 border">
            No tienes notificaciones
          </div>
        </div>
        <div className="relative">
          <div id="search-card"
               className="hidden top-1 left-5 absolute w-72 text-center bg-slate-50 shadow-md rounded-md border z-10">
            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 py-1">
              {searchValues.map((route) => (
                  <Link to={routes[route]} key={route} className="block py-2 hover:bg-gray-100"
                        onClick={clearSearch}>
                    {route}
                  </Link>
              ))}
              {searchValues.length === 0 ? "No se encontraron páginas" : ""}
            </ul>
          </div>
        </div>
      </div>
      */}
    </div>
  );
}
