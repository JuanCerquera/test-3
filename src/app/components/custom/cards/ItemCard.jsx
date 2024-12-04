import { seekRoute } from "/src/routes/config";
import { PrimaryButton, TertiaryButton } from "/src/app/components/custom/misc/Buttons";
import Image from "/src/app/components/custom/misc/Image";
import { createContext, useContext } from "react";
import { ItemContext } from "/src/app/utilities/contexts";
import { Form } from "react-router-dom";
import DeleteItem from "/src/app/components/custom/misc/DeleteItem";

export default function ItemCard() {
  const { item, modelName } = useContext(ItemContext);
  return (
    <div className="bg-slate-50 rounded-2xl p-4 shadow-md flex flex-col">
      <Image
        src={item.picture}
        alt={item.name}
        nameForDefault={modelName}
        className="rounded-xl w-full object-cover h-60 shadow-inner border border-slate-300"
      />
      <ItemInfo />
      <ButtonsSection />
    </div>
  );
}

function ItemInfo() {
  const { item, detailProperties } = useContext(ItemContext);
  return (
    <div className="mt-2 text-center">
      <h2 className="text-2xl font-bold">{item.name}</h2>
      {item.is_virtual && <p className="italic text-slate-500">Virtual</p>}
      {detailProperties.map((property) => (
        <p key={property}>{property}</p>
      ))}
    </div>
  );
}

function ButtonsSection() {
  const { item, editRoute, messageAfterDeletion, modelName } = useContext(ItemContext);
  const editUrl = seekRoute("settings", editRoute, { id: item.id });
  const pluralModelName = modelName + "s";
  return (
    <div className="flex flex-col justify-end grow">
      <div className="flex flex-row justify-between">
        <PrimaryButton to={editUrl}>Editar</PrimaryButton>
        <DeleteItem instanceId={item.id} modelName={pluralModelName} message={messageAfterDeletion} />
      </div>
    </div>
  );
}
