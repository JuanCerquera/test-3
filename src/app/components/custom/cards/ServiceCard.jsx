import axiosInstance from "/src/app/utilities/axios";
import { to12hFormat, toCurrency, toDuration } from "/src/app/utilities/filters";
import { Form, useNavigate } from "react-router-dom";
import { PrimaryButton, TertiaryButton } from "/src/app/components/custom/misc/Buttons";
import { createContext, useContext } from "react";
import { seekRoute } from "/src/routes/config.js";
import { deleteInstance } from "/src/app/utilities/submitters.js";
import DeleteItem from "/src/app/components/custom/misc/DeleteItem";

const ServiceContext = createContext();

function useService() {
  const service = useContext(ServiceContext);
  return service;
}

export default function ServiceCard({ service }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-4 shadow-md flex flex-col">
      <ServiceContext.Provider value={service}>
        <PriceTag />
        <ServiceInfo />
        <Timeframes />
        <ActionsSection />
      </ServiceContext.Provider>
    </div>
  );
}

function PriceTag() {
  const service = useService();
  return (
    <div className="bg-primary rounded-md max-w-[50%] text-center text-white px-3 py-1">
      {toCurrency(service.price)}
    </div>
  );
}

function ServiceInfo() {
  const service = useService();
  return (
    <div className="mt-2 text-center [&>*]:m-1">
      <h2 className="text-2xl font-bold">{service.name}</h2>
      <h3 className="text-sm text-slate-500">{toDuration(service.duration)}</h3>
      <p>{service.description}</p>
    </div>
  );
}

function Timeframes() {
  return (
    <>
      <h3 className="text-center my-2 font-semibold">Horarios:</h3>
      <hr />
      <TimeframesGrid />
    </>
  );
}

function TimeframesGrid() {
  let days = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  //Remove days without timeframes
  const service = useService();
  const daysWithTimeframes = service.timeframes.map(
    (timeframe) => timeframe.weekday
  );
  return (
    <div className="grid grid-cols-2 gap-3">
      {days.map((day, index) => {
        if (daysWithTimeframes.includes(index)) {
          return <DayFrame key={index} index={index} day={day} />;
        }
      })}
    </div>
  );
}

function DayFrame({ day, index }) {
  const service = useService();
  const timeframes = service.timeframes.filter(
    (timeframe) => timeframe.weekday === index
  );
  return (
    <div className="text-center">
      <h4 className="italic font-medium">{day}</h4>
      <ul>
        {timeframes.map((timeframe, index) => (
          <li key={index}>
            {to12hFormat(timeframe.start_time)} -{" "}
            {to12hFormat(timeframe.end_time)}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ActionsSection() {
  const service = useService();
  const navigate = useNavigate();

  async function deleteService(serviceId) {
    await deleteInstance({
      modelName: "services",
      instanceId: serviceId,
    });
    navigate(seekRoute("settings"), {
      state: { success: true, message: "Servicio eliminado exitosamente" },
    });
  }
  const editUrl = seekRoute("settings", "editService", { id: service.id });

  return (
    <div className="flex justify-end flex-grow flex-col mt-4">
      <div className="flex flex-row justify-between">
        <PrimaryButton
          to={editUrl}
        >
          Editar
        </PrimaryButton>
        {/* <TertiaryButton onButtonClick={() => deleteService(service.id)}>
          Eliminar
        </TertiaryButton> */}
        <DeleteItem instanceId={service.id} modelName="services" message="Servicio eliminado exitosamente" />
      </div>
    </div>
  );
}
