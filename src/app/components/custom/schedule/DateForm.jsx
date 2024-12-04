import { useFetchTimes } from "/src/app/hooks/scheduleHooks";
import { useState } from "react";
import EmptyItemsContainer from "./EmptyItemsContainer";
import { Select } from "/src/app/components/custom/form/FormFields.jsx";
import FieldError from "/src/app/components/custom/form/FieldError.jsx";


export default function DateForm({ professionalId, serviceId }) {
  const [date, setDate] = useState();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split("T")[0];
  function updateDate(event) {
    const newDate = event.target.value;
    setDate(newDate);
  }

  return (
    <div className="schedule-section-card">
      <h2 className="subtitle">Selecciona la fecha y la hora de tu cita</h2>
      <label>
        <input type="date" name="date" id="date" onChange={updateDate} min={tomorrowStr}/>
      </label>
      {date && professionalId && (
        <TimeField professionalId={professionalId} serviceId={serviceId} dateStr={date} />
      )}
      <FieldError name="non_field_errors" />
    </div>
  );
}

function TimeField({ professionalId, serviceId, dateStr }) {
  const times = useFetchTimes(professionalId, serviceId, dateStr);

  return times.length == 0 ? (
    <EmptyItemsContainer>No hay horarios para la fecha seleccionada. Por favor cámbiala</EmptyItemsContainer>
  ) : (
      <Select name="time" options={times}/>
  );
}