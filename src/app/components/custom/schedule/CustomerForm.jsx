import { FormEmail, FormInput, FormPhone } from "/src/app/components/custom/form/FormFields";

export default function CustomerForm() {
  return (
    <div className="schedule-section-card">
      <h2 className="subtitle">Cuéntanos de ti</h2>
      <p className="text-xs text-gray-500 -mt-2 mb-4 max-w-sm text-center m-auto">
        ¡Con tu correo podremos enviarte la información de tu cita y te
        recordaremos un día antes para que puedas estar tranquilo!
      </p>
      <div className="grid lg:grid-cols-2 gap-3">
        <FormInput label="Nombre" name="name" placeholder="Nombre" />
        <FormInput label="Apellido" name="last_name" placeholder="Apellido" />
        <FormInput label="CC o NIT" name="citizen_id" placeholder="Documento" />
        <FormEmail label="Correo" name="email" placeholder="Correo" />
        <FormPhone label="Teléfono" name="phone" placeholder="Teléfono" />
      </div>
    </div>
  );
}
