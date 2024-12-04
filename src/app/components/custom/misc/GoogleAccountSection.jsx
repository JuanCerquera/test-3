import useProfile from "/src/app/hooks/useProfile";
import { TertiaryButton } from "./Buttons";
import axiosInstance from "/src/app/utilities/axios";
import { toast } from "react-toastify";
import { seekRoute } from "/src/routes/config.js";
import { useNavigate } from "react-router-dom";

export default function GoogleAccountSection() {
  const profile = useProfile();

  return profile.has_google_account_linked ? (
    <AlreadyLinked profile={profile} />
  ) : (
    <NotYetLinked profile={profile} />
  );
}

function NotYetLinked() {
  return (
    <div>
      <a
        href={`${import.meta.env.VITE_BACKEND_SITE_URL}/api/google_auth_login/`}
        className="px-4 py-2 mt-3 border flex gap-2 border-slate-200 rounded-lg text-slate-700 bg-white w-fit mx-auto"
      >
        <img
          className="w-6 h-6"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          loading="lazy"
          alt="google logo"
        />
        <span>Iniciar sesión con Google</span>
      </a>
      <p className="text-sm text-gray-600 text-center mt-1">
        Para una mejor experiencia, puedes enlazar tu cuenta de google y
        añadiremos tus citas allí cada vez que un cliente haga una nueva
        reserva.
      </p>
    </div>
  );
}

function AlreadyLinked({ profile }) {
  const context = profile.google_account_context;
  const navigate = useNavigate();

  function revoke() {
    axiosInstance({
      url: "/google_auth_revoke/",
      method: "post",
    }).then((response) => {
      if (response.status === 200) {
        toast.success("Cuenta de Google desvinculada correctamente");
        navigate(seekRoute("appointmentList"));
      }
    });
  }
  return (
    <div className="">
      <div className="px-4 py-2 mt-3 border flex gap-2 border-slate-200 rounded-lg text-slate-700 bg-white w-fit mx-auto">
        <img
          className="w-12 h-12 rounded-full"
          src={context.picture}
          loading="lazy"
          alt="google logo"
        />
        <div className="flex flex-col text-left">
          <span className="font-semibold">{context.name}</span>
          <span className="text-sm">{context.email}</span>
        </div>
      </div>
      <p className="text-sm text-gray-600 text-center mt-1">
        Ya tienes vinculada tu cuenta de Google, todos las citas se añaden
        automáticamente a tu calendario.
      </p>
      {/* <form action="" method="post">
        <button type="submit" class="button-tertiary mt-1">
          Desvincular cuenta de Google
        </button>
      </form> */}
      <div className="flex justify-center">
        <TertiaryButton onButtonClick={revoke}>
          Desvincular cuenta de Google
        </TertiaryButton>
      </div>
    </div>
  );
}
