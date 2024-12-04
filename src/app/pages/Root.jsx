import {
  Outlet,
  redirect,
  useLoaderData,
  useLocation,
  useNavigation,
} from "react-router-dom";
import Navbar from "/src/app/components/custom/layout/Navbar";
import { useEffect, useRef, useState } from "react";
import {
  ProfileContext,
  SettingsContext,
  TitleContext,
} from "/src/app/utilities/contexts";
import { Header } from "/src/app/components/custom/layout/Header.jsx";
import { fetchModel, fetchModelList } from "/src/app/utilities/fetchers";
import { withAuth } from "/src/app/utilities/wrappers";
import { useScrollToTop } from "/src/app/hooks/useScrollToTop";
import { toast, ToastContainer } from "react-toastify";
import { seekRoute } from "/src/routes/config.js";
import LoadingScreen from "/src/app/components/custom/layout/LoadingScreen.jsx";

async function loader() {
  const companyId = localStorage.getItem("user_id");
  const profiles = await fetchModel("company-profiles", companyId);
  if (!profiles) {
    return redirect(seekRoute("login"));
  }
  const profile = profiles[0];

  const locations = await fetchModelList("locations", companyId);
  const professionals = await fetchModelList("professionals", companyId);
  const services = await fetchModelList("services", companyId);

  return { profile, locations, professionals, services };
}

export const protectedLoader = withAuth(loader);

export default function Root() {
  const [title, setTitle] = useState();
  const { profile, ...settings } = useLoaderData();
  const navigation = useNavigation();
  useScrollToTop();

  return (
    <main className="flex h-screen max-md:flex-col-reverse overflow-y-hidden">
      <Navbar />
      <div
        id="content"
        className="relative py-4 px-6 overflow-auto bg-slate-100 w-full h-full flex flex-col"
      >
        {navigation.state === "loading" && <LoadingScreen />}
        <ToastContainer position="top-center" />
        <ProfileContext.Provider value={profile}>
          <Header title={title} />
          <TitleContext.Provider value={setTitle}>
            <SettingsContext.Provider value={settings}>
              <Outlet />
            </SettingsContext.Provider>
          </TitleContext.Provider>
        </ProfileContext.Provider>
      </div>
    </main>
  );
}
