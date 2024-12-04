import { toCurrency, toDuration } from "/src/app/utilities/filters";
import FieldError from "/src/app/components/custom/form/FieldError.jsx";

export default function ServiceGroup({services, setServiceId}) {
  return (
    <div className="flex flex-col">
      <label className="schedule-label">Selecciona un servicio: </label>
      <div className="flex flex-row flex-wrap gap-3 content-stretch">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onClick={() => setServiceId(service.id)}
          />
        ))}
      </div>
      <FieldError name="service"/>
    </div>
  );
}

function ServiceCard({service, onClick}) {
  return (
    <label className="radio-card flex-col w-fit" onClick={onClick}>
      <div className="flex flex-row justify-between items-center mb-2">
        <span className="block font-semibold text-blue-700 text-lg uppercase">
          {service.name}
        </span>
        <input
          type="radio"
          name="service"
          value={service.id}
          className="h-fit w-fit"
        />
      </div>
      <span className="block max-w-96">{service.description}</span>
      <div className="flex flex-row justify-between">
        <span className="block font-light text-gray-600">
          {toDuration(service.duration)}
        </span>
        <span className="block font-semibold text-white bg-indigo-500 rounded-md px-3 py-1">
          {toCurrency(service.price)}
        </span>
      </div>
    </label>
  );
}
