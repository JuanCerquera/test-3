import {
  FormInput,
  FormPassword, Select,
  TextArea,
} from "/src/app/components/custom/form/FormFields";
import { FullWidthButton } from "/src/app/components/custom/form/FullWidthButton";
import { seekRoute } from "/src/routes/config";
import { forwardRef, useEffect, useState } from "react";
import { Form, Link, useSearchParams } from "react-router-dom";
import { executeAxios } from "/src/app/utilities/submitters.js";
import ValidatedForm from "/src/app/components/custom/form/ValidatedForm.jsx";


export const SignupForm = forwardRef(({planId,
setPlanId,plans}, ref) => {

  return (
    <ValidatedForm method="POST" className="mt-5">
      <div className="grid grid-cols-2 gap-12">
        <ColumnDivision title="Información personal">
          <PersonalFields />
        </ColumnDivision>
        <ColumnDivision title="Información de la empresa">
          <CompanyFields />
          <Select name="plan_id" label="Plan" options={plans} onChange={()=>setPlanId(event.target.value)} value={planId}/>
        </ColumnDivision>
        <input type="hidden" id="subscription_id" name="subscription_id" />
      </div>
      <button type="submit" hidden ref={ref}>Registrarse</button>
      {/*<LinksSection /> */}
    </ValidatedForm>
  );
})

// export default function SignupForm() {
//   return (
//     <Form method="POST" className="mt-5">
//       <div className="grid grid-cols-2 gap-12">
//         <ColumnDivision title="Información personal">
//           <PersonalFields />
//         </ColumnDivision>
//         <ColumnDivision title="Información de la empresa">
//           <CompanyFields />
//         </ColumnDivision>
//       </div>
//       {/* <FullWidthButton>Registrarse</FullWidthButton> */}
//       <LinksSection />
//     </Form>
//   );
// }

function ColumnDivision({ title, children }) {
  return (
    <div>
      <p className="font-medium text-center">{title}</p>
      <hr className="h-px mt-1 mb-3 bg-gray-200 border-0" />
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

function PersonalFields() {
  return (
    <>
      <FormInput
        label="Correo electrónico"
        name="email"
        defaultValue="company@company.com"
      />
      <FormInput label="Nombre" name="first_name" defaultValue="Juan Esteban" />
      <FormInput label="Apellido" name="last_name" defaultValue="Cerquera" />
      <FormInput
        label="Documento (Cédula o NIT)"
        name="citizen_id"
        defaultValue="123456789"
      />
      <FormPassword
        label="Contraseña"
        name="password"
        defaultValue="company"
      />
      <FormPassword
        label="Confirmar contraseña"
        name="password2"
        defaultValue="company"
      />
    </>
  );
}

function CompanyFields() {
  return (
    <>
      <FormInput
        label="Nombre de la empresa"
        name="name"
        defaultValue="Urología Nueva Granada"
      />
      <TextArea
        label="Descripción"
        name="description"
        className="h-[7.5rem] resize-none"
        defaultValue="Clínica especializada en urología."
      />
      <FormInput
        label="Dirección"
        name="address"
        defaultValue="Carrera 7 # 127-21"
      />
      <FormInput label="Teléfono" name="phone" defaultValue="123456789" />
    </>
  );
}

function LinksSection() {
  return (
    <p className="text-center mt-3 text-slate-500">
      ¿Ya tienes una cuenta?{" "}
      <Link to={seekRoute("login")} className="underline">
        Inicia sesión
      </Link>
    </p>
  );
}

