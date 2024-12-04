import { FaCheckCircle, FaCircle } from "react-icons/fa";

export default function FieldsChecklist({ profile }) {
  const fields = getFields(profile);
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-1 m-2 mb-0">
      {fields.map((field) => (
        <FieldListItem key={field[0]} field={field} />
      ))}
    </div>
  );
}

function FieldListItem({ field }) {
  const complete = Boolean(field[1]);
  return (
    <div className="text-primary flex items-center gap-2 text-sm">
      {complete ? <FaCheckCircle /> : <FaCircle className="text-slate-200" />}
      <span className={complete ? "" : "text-black"}>{field[0]}</span>
    </div>
  );
}

export function getFields(profile) {
  const fields = [
    ["Nombre", profile.name],
    ["Descripción", profile.description],
    ["Dirección", profile.address],
    ["Teléfono", profile.phone],
    ["Foto de perfil", profile.profile_picture],
    ["Foto de banner", profile.banner_picture],
    ["Slug", profile.slug],
    ["Enlace para reseñas", profile.reviews_link],
    ["Facebook", profile.social_facebook_url],
    ["Instagram", profile.social_instagram_url],
    ["Sitio web", profile.social_web_url],
  ];

  fields.sort(fieldCompareFn);
  return fields;
}

function fieldCompareFn(a, b) {
  let first = a[1] ? 0 : 1;
  let second = b[1] ? 0 : 1;
  return first - second;
}
