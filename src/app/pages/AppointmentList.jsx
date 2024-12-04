import useSetTitle from "/src/app/hooks/useSetTitle";
import { AppointmentCard } from "/src/app/components/custom/cards/AppointmentCard.jsx";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Calendar from "/src/app/components/custom/misc/Calendar";
import { getContentElement } from "/src/app/utilities/elements";
import axiosInstance from "/src/app/utilities/axios.js";
import { defer, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useGooglePromise from "/src/app/hooks/useGooglePromise";
import GoogleAccountSection from "/src/app/components/custom/misc/GoogleAccountSection";

export async function loader({ request }) {
  const [, searchParams] = request.url.split("?");
  
  if (searchParams) {
    const promise = axiosInstance({
      method: "get",
      url: `/google_auth_callback/?${searchParams}`,
    });

    return defer({ promise });
  }

  return {};
}

export default function AppointmentList() {
  useSetTitle("Agenda");
  useGooglePromise();
  const companyId = localStorage.getItem("user_id");
  const appointmentRef = useRef(null);
  function onCalendarClick(event) {
    appointmentRef.current.update(event.event);
  }

  return (
    <>
      <Calendar onClick={onCalendarClick} />
      <AppointmentPreview ref={appointmentRef} />
      <GoogleAccountSection />
    </>
  );
}

const AppointmentPreview = forwardRef((props, ref) => {
  const [appointment, setAppointment] = useState(ref.current);

  useImperativeHandle(ref, () => ({
    update: (newAppointment) => {
      setAppointment(newAppointment);
    },
  }));

  useEffect(() => {
    if (appointment) {
      getContentElement().scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [appointment]);

  return appointment ? <AppointmentCard appointment={appointment} /> : <></>;
});
