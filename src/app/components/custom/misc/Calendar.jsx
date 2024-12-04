import { fetchAppointments } from "/src/app/utilities/fetchers";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useMediaQuery } from "react-responsive";

const SM_WIDTH = 640;

export default function Calendar({ onClick }) {
  const isMobile = useMediaQuery({
    query: `(max-width: ${SM_WIDTH}px)`,
  });

  let leftContent = "";
  let centerContent = "";
  const rightContent = "dayGridMonth,timeGridWeek,timeGridDay";
  if (isMobile) {
    centerContent = "prev,today,next";
    leftContent = "title";
  } else {
    centerContent = "title";
    leftContent = "prev,today,next";
  }
  const headerToolBar = {
    left: leftContent,
    center: centerContent,
    right: rightContent,
  };

  return (
    <div className="min-h-full bg-slate-50 rounded-2xl p-5 shadow-md">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="timeGridWeek"
        locale="es"
        nowIndicator={true}
        events={(info, successCallback) =>
          fetchAppointments(info, successCallback)
        }
        headerToolbar={headerToolBar}
        buttonText={{
          today: "Hoy",
          day: "Día",
          week: "Semana",
          month: "Mes",
        }}
        allDaySlot={false}
        height="100%"
        slotLabelFormat={{
          hour: "numeric",
          // minute: "2-digit"
          omitZeroMinute: false,
          meridiem: "short",
          hour12: false,
        }}
        dayHeaderFormat={{
          weekday: "short",
          day: "numeric",
        }}
        eventClick={onClick}
      />
    </div>
  );
}
