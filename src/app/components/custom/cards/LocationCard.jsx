import { toPhoneNumber } from "/src/app/utilities/filters";
import ItemCard from "./ItemCard";
import { deleteInstance } from "/src/app/utilities/submitters.js";
import { useNavigate } from "react-router-dom";
import { seekRoute } from "/src/routes/config.js";
import { ItemContext } from "/src/app/utilities/contexts";

export default function LocationCard({ location }) {
  const navigate = useNavigate();
  async function deleteLocation(locationId) {
    await deleteInstance({
      modelName: "locations",
      instanceId: locationId,
    });
    navigate(seekRoute("settings"), {
      state: { success: true, message: "Sede eliminada exitosamente" },
    });
  }

  const contextValue = {
    item: location,
    modelName: "location",
    detailProperties: [location.address, toPhoneNumber(location.phone)],
    editRoute: "editLocation",
    messageAfterDeletion: "Sede eliminada exitosamente",
  };

  return (
    <ItemContext.Provider value={contextValue}>
      <ItemCard />
    </ItemContext.Provider>
  );
}
