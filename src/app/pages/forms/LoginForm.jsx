import { FormInput, FormPassword } from "/src/app/components/custom/form/FormFields";
import { FullWidthButton } from "/src/app/components/custom/form/FullWidthButton";
import { seekRoute } from "/src/routes/config";
import { Form, Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <Form method="POST" className="mt-10">
      <LoginMainSection />
      <LoginAdditionalSection />
      <FullWidthButton>Iniciar sesión</FullWidthButton>
    </Form>
  );
}

function LoginMainSection() {
  return (
    <div className="flex flex-col gap-5 ">
      <FormInput
        label="Correo electrónico"
        name="email"
        defaultValue="juan@odontologiasalud.com"
      />
      <FormPassword
        label="Contraseña"
        name="password"
        defaultValue="juan"
      />
    </div>
  );
}

function LoginAdditionalSection() {
  return (
    <div className="flex justify-between mt-12 gap-40 text-slate-500">
      <span className="text-black">
        ¿No tienes cuenta?{" "}
        <Link to={seekRoute("signup")} className="underline">
          Regístrate
        </Link>
      </span>
      <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
    </div>
  );
}

