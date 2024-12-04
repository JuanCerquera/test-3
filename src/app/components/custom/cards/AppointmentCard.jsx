import Card from "/src/app/components/custom/cards/Card.jsx";
import { BsPersonCheckFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { HiIdentification } from "react-icons/hi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { toDatetimeString } from "/src/app/utilities/filters.js";
import { createContext, useContext } from "react";

const AppointmentContext = createContext();
function useAppointment() {
  const appointment = useContext(AppointmentContext);
  return appointment;
}

export function AppointmentCard({ appointment }) {
  return (
    <AppointmentContext.Provider value={appointment}>
      <Card className="w-1/2 mx-auto flex flex-col gap-2 mt-4">
        <UpperTags />
        <AppointmentInfo />
        <CustomerInfo />
        <RemarksSpan />
        <CreationDate />
      </Card>
    </AppointmentContext.Provider>
  );
}

function UpperTags() {
  const appointment = useAppointment();
  return (
    <div className="flex justify-between">
      <div className="bg-primary text-slate-50 px-2 py-1 rounded w-fit text-sm">
        {toDatetimeString(appointment.start, "date")}
      </div>

      <div className="bg-primary text-slate-50 px-2 py-1 rounded w-fit text-sm">
        {toDatetimeString(appointment.start, "time")} -{" "}
        {toDatetimeString(appointment.end, "time")}
      </div>
    </div>
  );
}

function AppointmentInfo() {
  const appointment = useAppointment();
  return (
    <div className="text-center">
      <p className="font-semibold text-2xl">
        {appointment.extendedProps.service_name}
      </p>
      <p>{appointment.extendedProps.location_name}</p>
      <p className="text-sm text-gray-400">
        {appointment.extendedProps.professional_name}
      </p>
    </div>
  );
}

function CustomerInfo() {
  const appointment = useAppointment();
  return (
    <div className="grid grid-cols-2 gap-x-3">
      <div className="flex flex-row gap-1 items-center justify-end">
        {appointment.extendedProps.customer.first_name}{" "}
        {appointment.extendedProps.customer.last_name}
        <BsPersonCheckFill className="inline text-primary" />
      </div>
      <div className="flex flex-row gap-1 items-center">
        <FaPhoneSquareAlt className="inline text-primary" />
        {appointment.extendedProps.customer.phone}
      </div>
      <div className="flex flex-row gap-1 items-center justify-end">
        {appointment.extendedProps.customer.email}
        <MdEmail className="inline text-primary" />
      </div>
      <div className="flex flex-row gap-1 items-center">
        <HiIdentification className="inline text-primary" />
        {appointment.extendedProps.customer.citizen_id}
      </div>
    </div>
  );
}

function RemarksSpan() {
  const appointment = useAppointment();
  return (
    <div className="text-center text-gray-400">
      {appointment.extendedProps.observations ? (
        <div className="col-span-2">
          <p className="font-semibold">Observaciones:</p>
          <p>{appointment.extendedProps.observations}</p>
        </div>
      ) : (
        " Sin observaciones"
      )}
    </div>
  );
}

function CreationDate() {
  const appointment = useAppointment();
  return (
    <p className="text-xs text-gray-400 text-center mt-5">
      Agendado el{" "}
      {toDatetimeString(
        appointment.extendedProps.created_at,
        "full-date",
        true
      )}
    </p>
  );
}
