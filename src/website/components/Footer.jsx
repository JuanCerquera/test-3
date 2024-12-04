import logoWithText from "/src/assets/images/logo_vertical.png";
import { seekRoute } from "/src/routes/config.js";
import { Link } from "react-router-dom";

export default function Footer(){
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 pt-4 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
          <div className="col-span-full lg:col-span-4 lg:mb-0 flex flex-col gap-2 pb-3">
            <img src={logoWithText} className="h-6 sm:h-20 w-fit" alt="Denti Logo"/>
            <p className="text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
              La única y más completa herramienta que necesitas para gestionar las citas de tu negocio.
            </p>
            <a
              href="#pricing"
              className="w-fit text-white bg-secondary hover:bg-secondary-700 focus:ring-4 focus:ring-secondary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-secondary-600 dark:hover:bg-secondary-700 focus:outline-none dark:focus:ring-secondary-800"
            >
              Contactar
            </a>
          </div>
          <div className="lg:mx-auto text-left mt-3">
            <h4 className="text-lg text-gray-900 font-medium mb-4">Denti</h4>
            <ul className="text-sm  transition-all duration-500 flex flex-col gap-3">
              <li><a href="/#hero" className="text-gray-600 hover:text-gray-900">Inicio</a></li>
              <li><a href="/#features" className=" text-gray-600 hover:text-gray-900">Características</a></li>
              <li><a href="/#how-it-works" className=" text-gray-600 hover:text-gray-900">Cómo funciona</a></li>
              <li><a href="/#pricing" className=" text-gray-600 hover:text-gray-900">Planes</a></li>
            </ul>
          </div>
          <div className="lg:mx-auto text-left mt-3">
            <h4 className="text-lg text-gray-900 font-medium mb-4">Recursos</h4>
            <ul className="text-sm transition-all duration-500 flex flex-col gap-3">
              <li><a href="/#faq" className="text-gray-600 hover:text-gray-900">Preguntas frecuentes</a></li>
              <li><Link to={seekRoute("privacyPolicy")} className="text-gray-600 hover:text-gray-900">Política de
                privacidad</Link></li>
              <li><a href="/#about-us" className=" text-gray-600 hover:text-gray-900">Sobre nosotros</a></li>
              <li><a href="/#contact" className=" text-gray-600 hover:text-gray-900">Contacto</a></li>
            </ul>
          </div>

        </div>
        <div className="py-4 border-t border-gray-200">
          <div className="flex items-center justify-center">
            <span className="text-sm text-gray-500 ">©Denti 2024, Todos los derechos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}