import hero from "/src/assets/images/hero.png";
import feature1 from "/src/assets/images/feature-1.png";
import feature2 from "/src/assets/images/feature-2.png";
import { Link } from "react-router-dom";
import { seekRoute } from "/src/routes/config";
import { AiFillSchedule } from "react-icons/ai";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import {
  MdNotificationsActive,
  MdOutlineSettingsSuggest,
} from "react-icons/md";
import Template from "./Template";

export default function Home() {
  return (
    <Template>
      <div>
        <section className="bg-white dark:bg-gray-900" id="hero">
          <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-24 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-3xl xl:text-6xl dark:text-white text-primary-800">
                Maximiza las citas
                <br />
                de tu negocio
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Dales a tus clientes una opción fácil, rápida y automática para
                agendar sus citas en tu negocio. Deja de perder tiempo y
                esfuerzo tratando de encontrar un espacio en tu agenda y la de
                tus clientes.
              </p>
              <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <Link
                  to={seekRoute("signup")}
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-white border border-transparent bg-secondary rounded-lg sm:w-auto hover:bg-white hover:text-secondary hover:border-secondary focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 gap-1"
                >
                  <svg
                    className="h-7 w-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM10.6219 8.41459C10.5562 8.37078 10.479 8.34741 10.4 8.34741C10.1791 8.34741 10 8.52649 10 8.74741V15.2526C10 15.3316 10.0234 15.4088 10.0672 15.4745C10.1897 15.6583 10.4381 15.708 10.6219 15.5854L15.5008 12.3328C15.5447 12.3035 15.5824 12.2658 15.6117 12.2219C15.7343 12.0381 15.6846 11.7897 15.5008 11.6672L10.6219 8.41459Z"></path>
                  </svg>
                  Iniciar ahora
                </Link>
                <a
                  href="https://www.figma.com/community/file/1125744163617429490"
                  className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-secondary bg-white border border-secondary rounded-lg sm:w-auto focus:outline-none hover:bg-secondary hover:text-white hover:border-transparent hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-7 w-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  Ver demo
                </a>
              </div>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src={hero} alt="hero image" />
            </div>
          </div>
        </section>
        <section className="bg-gray-50 dark:bg-gray-800" id="features">
          <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
            <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
              <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-primary-950 dark:text-white">
                  Todo lo que necesitas para gestionar tus citas de manera
                  eficiente
                </h2>
                <p className="mb-8 font-light lg:text-xl text-justify">
                  Denti te permite configurar los servicios, sedes y
                  profesionales de tu empresa, para que tus clientes puedan
                  agendar sus citas de manera autónoma y en el horario que más
                  les conviene, sin perder tiempo en llamadas. Tan solo les
                  envías el enlace de tu agenda personalizada, con el branding
                  de tu empresa, y listo. ¡Así de fácil!
                </p>
                <ul
                  role="list"
                  className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
                >
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                      Gestiona todos tus servicios, sedes y profesionales
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                      Tú propio enlace profesional y personalizado
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                      Notificaciones y recordatorios para ti y tu cliente
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                      Todas tus citas en un solo lugar
                    </span>
                  </li>
                </ul>
                <p className="mb-8 font-light lg:text-xl text-justify">
                  Haz que tus clientes agenden sus citas de manera automática,
                  más rápido y sin complicaciones, dejando de perder clientes y
                  tiempo valioso.
                </p>
              </div>
              <img
                className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                src={feature1}
                alt="dashboard feature image"
              />
            </div>
          </div>
        </section>
        <section className="py-10 bg-white sm:py-16 lg:py-24" id="how-it-works">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold leading-tight text-primary-950 sm:text-4xl lg:text-5xl">
                ¿Cómo funciona?
              </h2>
              <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
                Denti es una plataforma intuitiva diseñada para simplificar
                la gestión de citas de tu negocio en tan solo 3 pasos.
              </p>
            </div>

            <div className="relative mt-12 lg:mt-20">
              <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28 text-secondary">
                <svg
                  width="875"
                  height="48"
                  viewBox="0 0 875 48"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full"
                  fill="none"
                >
                  <path
                    d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                    stroke="#D4D4D8"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="1 12"
                  />
                </svg>
              </div>

              <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-secondary rounded-full shadow">
                    <span className="text-xl font-semibold text-gray-700">
                      {" "}
                      1{" "}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-tight text-primary-950 md:mt-10">
                    Crea tu cuenta
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    Regístrate y completa la información de tu empresa, crea tu
                    perfil e incluye todos los datos necesarios.
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-secondary rounded-full shadow">
                    <span className="text-xl font-semibold text-gray-700">
                      {" "}
                      2{" "}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-tight text-primary-950 md:mt-10">
                    Configura tus servicios
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    Configura los profesionales, sedes y servicios de tu
                    empresa, con total flexibilidad en horarios, personal que
                    ofrece el servicio y el lugar en dónde ofrece.
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-secondary rounded-full shadow">
                    <span className="text-xl font-semibold text-gray-700">
                      {" "}
                      3{" "}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-tight text-primary-950 md:mt-10">
                    Comparte tu enlace
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    Envíale tu enlace personalizado a tus clientes y mira cómo
                    agendan de manera automática sus citas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-gray-900">
          <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
            <div className="col-span-2 mb-8">
              <p className="text-lg font-medium text-primary dark:text-primary-500">
                Denti para empresas
              </p>
              <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-primary-950 md:text-3xl dark:text-white">
                La mejor solución para gestionar tus citas
              </h2>
              <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                Descubre por qué Denti es la solución perfecta para la
                gestión de citas en tu empresa. Únete a nuestra comunidad de
                clientes satisfechos y mejora la eficiencia de tu negocio.
              </p>
              <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center text-base font-medium text-secondary hover:text-secondary-700 dark:text-primary-500 dark:hover:text-primary-700"
                  >
                    Agendar una llamada
                    <svg
                      className="w-5 h-5 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
              <div>
                <AiFillSchedule className="size-10 mb-2 text-secondary md:w-12 md:h-12" />
                <h3 className="mb-2 text-2xl font-bold dark:text-white text-primary-900">
                  Agendamientos automáticos
                </h3>
                <p className="font-light text-gray-500 dark:text-gray-400">
                  a través de tu enlace personalizado
                </p>
              </div>
              <div>
                <FaMagnifyingGlassChart className="size-10 mb-2 text-secondary md:w-12 md:h-12" />
                <h3 className="mb-2 text-2xl font-bold dark:text-white text-primary-900">
                  Estadísticas avanzadas
                </h3>
                <p className="font-light text-gray-500 dark:text-gray-400">
                  Sobre tus servicios, profesionales y sedes
                </p>
              </div>
              <div>
                <MdOutlineSettingsSuggest className="size-10 mb-2 text-secondary md:w-12 md:h-12" />
                <h3 className="mb-2 text-2xl font-bold dark:text-white text-primary-900">
                  Rápida configuración
                </h3>
                <p className="font-light text-gray-500 dark:text-gray-400">
                  Ten todo tu negocio listo en menos de 30 minutos
                </p>
              </div>
              <div>
                <MdNotificationsActive className="size-10 mb-2 text-secondary md:w-12 md:h-12" />
                <h3 className="mb-2 text-2xl font-bold dark:text-white text-primary-900">
                  Recordatorios automáticos
                </h3>
                <p className="font-light text-gray-500 dark:text-gray-400">
                  Notificaciones por email para ti y tus clientes antes de cada
                  cita
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-50 dark:bg-gray-800">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
            <figure className="max-w-screen-lg mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
                  "Denti podría fácilmente ser la herramienta más completa
                  para el agendamiento y gestión de citas de cualquier empresa,
                  pudiendo reemplazar a muchos otras en un sola plataforma"
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    Juan Cerquera
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                    CEO de Denti
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="bg-white dark:bg-gray-900" id="pricing">
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
            <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-primary-950 dark:text-white">
                Designed for business teams like yours
              </h2>
              <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                Here at Landwind we focus on markets where technology,
                innovation, and capital can unlock long-term value and drive
                economic growth.
              </p>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
              <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-2xl font-semibold">Emprendedor</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  La mejor opción para empezar con tu clínica.
                </p>
                <div className="flex items-baseline justify-center my-8">
                  <span className="mr-2 text-5xl font-extrabold">Gratis</span>
                  {/* <span className="text-gray-500 dark:text-gray-400">
                    /month
                  </span> */}
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Soporte básico</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Hasta{" "}
                      <span className="font-semibold">3 profesionales</span>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Hasta <span className="font-semibold">3 servicios</span>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Una <span className="font-semibold">única sede</span>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Hasta <span className="font-semibold">50 citas</span> al
                      mes
                    </span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="text-white bg-secondary hover:bg-secondary-700 focus:ring-4 focus:ring-secondary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-secondary-900"
                >
                  Empezar ahora
                </a>
              </div>
              <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-2xl font-semibold">Empresario</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  Relevante para clínicas con un alto flujo de clientes.
                </p>
                <div className="flex items-baseline justify-center my-8">
                  <span className="mr-2 text-5xl font-extrabold">$149.900</span>
                  <span className="text-gray-500 dark:text-gray-400">/mes</span>
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Soporte avanzado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Profesionales{" "}
                      <span className="font-semibold">ilimitados</span>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Servicios{" "}
                      <span className="font-semibold">ilimitados</span>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Sedes <span className="font-semibold">ilimitadas</span>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Hasta <span className="font-semibold">300 citas</span> al
                      mes
                    </span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="text-white bg-secondary hover:bg-secondary-700 focus:ring-4 focus:ring-secondary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-secondary-900"
                >
                  Empezar ahora
                </a>
              </div>
              <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-2xl font-semibold">Gerente</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  La opción definitiva para clínicas con máximo alcance.
                </p>
                <div className="flex items-baseline justify-center my-8">
                  <span className="mr-2 text-5xl font-extrabold">$199.900</span>
                  <span className="text-gray-500 dark:text-gray-400">/mes</span>
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Soporte preferencial</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Profesionales{" "}
                      <span className="font-semibold">ilimitados</span>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Servicios{" "}
                      <span className="font-semibold">ilimitados</span>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Sedes <span className="font-semibold">ilimitadas</span>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Citas <span className="font-semibold">ilimitadas</span>
                    </span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="text-white bg-secondary hover:bg-secondary-700 focus:ring-4 focus:ring-secondary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-secondary-900"
                >
                  Empezar ahora
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-50 dark:bg-gray-800" id="faq">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-primary-950 dark:text-white">
              Preguntas frecuentes
            </h2>
            <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
              <div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                    <svg
                      className="flex-shrink-0 mr-2 w-5 h-5 text-secondary dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    ¿Cómo funciona Denti?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-justify">
                    Denti es una plataforma que le permite a las empresas
                    registrar sus servicios, sedes y profesionales para que sus
                    clientes puedan agendar citas fácilmente y de manera
                    autónoma mediante un enlace personalizado.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                    <svg
                      className="flex-shrink-0 mr-2 w-5 h-5 text-secondary dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    ¿Qué beneficios ofrece Denti a mi negocio?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-justify">
                    Denti optimiza la gestión de citas al reducir el tiempo
                    invertido en coordinación telefónica entre tú y tus
                    clientes. Les facilita el agendamiento de citas al poder
                    hacerlo de manera autónoma, mejorando su experiencia y
                    aumentando la eficiencia operativa de tu negocio.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                    <svg
                      className="flex-shrink-0 mr-2 w-5 h-5 text-secondary dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    ¿Cómo puedo integrar Denti con mi calendario actual?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-justify">
                    En Denti puedes integrar tu cuenta de Google para
                    sincronizar los eventos de manera automática con Google
                    Calendar y poder integrar de manera sencilla las citas de tu
                    negocio al resto de tu día. Además, tus clientes reciben una
                    invitación a este evento y automáticamente se agrega a su
                    calendario.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                    <svg
                      className="flex-shrink-0 mr-2 w-5 h-5 text-secondary dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    ¿Está segura mi información en Denti?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-justify">
                    Sí, la seguridad de la información es una prioridad para
                    nosotros. Utilizamos medidas de seguridad para proteger los
                    datos de tus clientes y garantizar su privacidad y la de tu
                    empresa en todo momento.
                  </p>
                </div>
              </div>
              <div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                    <svg
                      className="flex-shrink-0 mr-2 w-5 h-5 text-secondary dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    ¿Mejora Denti el ausentismo de mis clientes?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-justify">
                    Sí, Denti envía de manera automática la información de la
                    cita al correo electrónico de tus clientes al agendar una
                    cita, junto con recordatorios automáticos para evitar que la
                    olviden.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                    <svg
                      className="flex-shrink-0 mr-2 w-5 h-5 text-secondary dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    ¿Cuáles son las opciones de soporte disponibles?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-justify">
                    Tenemos soporte mediante correo electrónico, whatsapp y
                    reuniones virtuales para ayudarte con cualquier duda o
                    problema que puedas tener. Además, durante la primer fase de
                    integración de la aplicación, te ayudamos en todo el proceso
                    de configuración de tu cuenta y de tus servicios.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                    <svg
                      className="flex-shrink-0 mr-2 w-5 h-5 text-secondary dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    ¿Puedo cancelar mi suscripción en cualquier momento?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-justify">
                    Sí, puedes cancelar tu suscripción a Denti en cualquier
                    momento sin penalización. Tu cuenta permanecerá activa hasta
                    el final del período de facturación actual.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                    <svg
                      className="flex-shrink-0 mr-2 w-5 h-5 text-secondary dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    ¿Qué pasa si no me convence Denti?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-justify">
                    Si no estás completamente satisfecho con Denti y sientes
                    que tu negocio estaba mejor sin nosotros, te devolvemos el
                    100% de tu dinero. Sin preguntas. Nos interesa ayudarte a
                    mejorar tu negocio, no a perjudicarlo, así que si Denti
                    no es lo que esperabas, te regresamos tu dinero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
      </div>
    </Template>
  );
}
