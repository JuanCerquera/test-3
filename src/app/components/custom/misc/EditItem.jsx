import useSetTitle from "/src/app/hooks/useSetTitle";
import { ItemContext } from "/src/app/utilities/contexts";
import { deleteInstance, editInstance, executeAxios, processServiceForm } from "/src/app/utilities/submitters";

const messageItems = {
  locations: "Sede",
  professionals: "Profesional",
  services: "Servicio",
};

export async function itemAction({ request, params, modelName }) {
  return await edit({ request, modelName, id: params.id });
}

async function edit({ request, modelName, id }) {
  let response;
  if (modelName == "services") {
    response = await editService({ request, id });
  } else {
    response = await editInstance({
      request,
      modelName,
      instanceId: id,
    });
  }

  return response;
}

async function destroy({ modelName, id }) {
  const response = await deleteInstance({
    modelName,
    instanceId: id,
  });


  const message = generateMessage("delete", modelName); 
  return { ...response, message };
}

async function editService({ request, id }) {
  const formData = await processServiceForm(request);

  const response = await executeAxios({
    method: "put",
    url: `/services/${id}/`,
    data: formData,
  });

  return response;
}

function generateMessage(action, modelName) {
  const item = messageItems[modelName];
  let baseAdjective = action == "edit" ? "editad" : "eliminad";
  if (modelName == "locations") {
    baseAdjective += "a";
  } else {
    baseAdjective += "o";
  }

  return `${item} ${baseAdjective} exitosamente`;
}


export default function EditItem({ itemName, item, Form }) {
  useSetTitle(`Editar ${itemName}`);
  return (
    <ItemContext.Provider value={item}>
      <Form method="POST" />
    </ItemContext.Provider>
  );
}
