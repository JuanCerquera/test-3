import axiosInstance from "/src/app/utilities/axios";
import { fetchModel, fetchModelWithFilters } from "/src/app/utilities/fetchers";
import { redirect, useActionData, useLoaderData, useLocation } from "react-router-dom";
import Banner from "/src/app/components/custom/schedule/Banner";
import { ColorsContext, ProfileContext } from "/src/app/utilities/contexts";
import CompanyDetails from "/src/app/components/custom/schedule/CompanyDetails";
import ScheduleForm from "/src/app/components/custom/schedule/ScheduleForm";
import { toast, ToastContainer } from "react-toastify";
import { executeAxios } from "../utilities/submitters";
import { useEffect, useState } from "react";
import { computeActionResponse } from "/src/app/utilities/helpers.js";

export async function loader({params}) {
  const slug = params.slug;
  const profile = (
    await fetchModelWithFilters("company-profiles", {slug: slug})
  )[0];
  const companyId = profile.company;
  const services = await fetchModel("services", companyId);
  return {services, profile};
}

export async function action({params, request}) {
  const formData = await request.formData();

  const response = await executeAxios({
    method: "post",
    url: "/new_appointment/",
    data: formData,
  });

  //toast.success("Cita agendada con éxito.");
  //window.scrollTo(0, 0);
  //const form = document.querySelector("#schedule-form");
  //form.reset();
  return computeActionResponse(response, "¡Cita agendada exitosamente!", "schedule", params);
}

export default function Schedule() {
  const {services, profile} = useLoaderData();
  const color1 = profile.color_1;
  const color2 = profile.color_2;
  const actionResponse = useActionData();

  return (
    <ColorsContext.Provider value={{color1, color2}}>
      <ToastContainer position="top-center"/>
      <div
        id="bg-div"
        className="w-full flex flex-col items-center gap-0"
        style={{backgroundColor: color1}}
      >
        <ProfileContext.Provider value={profile}>
          <Banner/>
          <div className="flex flex-col lg:flex-row w-11/12 max-w-[1500px] -mt-10 gap-6 lg:gap-10">
            <CompanyDetails/>
            <ScheduleForm services={services}/>
          </div>
        </ProfileContext.Provider>
      </div>
    </ColorsContext.Provider>
  );
}
